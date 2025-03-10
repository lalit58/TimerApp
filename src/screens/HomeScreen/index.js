import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, SectionList} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import CategoryActions from '../../component/CategoryActions';
import CompletionModal from '../../component/Modal/CompletionModal';
import Timer from '../../component/Timer';
import {SCREEN_HEIGHT} from '../../utils/constants';
import styles from './styles';
import DebounceTouchableOpacity from '../../component/ButtonHelper/debounceTouchableOpacity';
import FocusAwareStatusBar from '../../component/FocusAwareStatusBar';
import {Colors} from '../../utils/theme/colors';
import {getLacStorageItem, setLocalStoreItem} from '../../utils/storage';

const HomeScreen = ({navigation}) => {
  const [timers, setTimers] = useState({});
  const [completionModalVisible, setCompletionModalVisible] = useState(false);
  const [completedTimerName, setCompletedTimerName] = useState('');

  useFocusEffect(
    useCallback(() => {
      const loadTimers = async () => {
        try {
          const storedTimers = await getLacStorageItem('timers');
          if (storedTimers) {
            const parsedTimers = JSON.parse(storedTimers);

            const activeTimers = {};
            Object.keys(parsedTimers).forEach(category => {
              const activeCategoryTimers = parsedTimers[category].filter(
                timer => timer.status !== 'Completed',
              );

              if (activeCategoryTimers.length > 0) {
                activeTimers[category] = activeCategoryTimers;
              }
            });

            setTimers(activeTimers);
          }
        } catch (error) {
          console.error('Failed to load timers:', error);
        }
      };

      loadTimers();
    }, []),
  );

  // Save timers to AsyncStorage whenever they change
  useEffect(() => {
    const saveTimers = async () => {
      try {
        await setLocalStoreItem('timers', JSON.stringify(timers));
      } catch (error) {
        console.error('Failed to save timers:', error);
      }
    };

    saveTimers();
  }, [timers]);

  // Function to start a timer
  const startTimer = useCallback((id, category) => {
    setTimers(prevTimers => ({
      ...prevTimers,
      [category]: prevTimers[category].map(timer =>
        timer.id === id ? {...timer, status: 'Running'} : timer,
      ),
    }));
  }, []);

  // Function to pause a timer
  const pauseTimer = useCallback((id, category) => {
    setTimers(prevTimers => ({
      ...prevTimers,
      [category]: prevTimers[category].map(timer =>
        timer.id === id ? {...timer, status: 'Paused'} : timer,
      ),
    }));
  }, []);

  // Function to reset a timer
  const resetTimer = useCallback((id, category) => {
    setTimers(prevTimers => ({
      ...prevTimers,
      [category]: prevTimers[category].map(timer =>
        timer.id === id
          ? {...timer, remainingTime: timer.duration, status: 'Paused'}
          : timer,
      ),
    }));
  }, []);

  // Function to start all timers in a category
  const startAllTimers = useCallback(category => {
    setTimers(prevTimers => ({
      ...prevTimers,
      [category]: prevTimers[category].map(timer => ({
        ...timer,
        status: 'Running',
      })),
    }));
  }, []);

  // Function to pause all timers in a category
  const pauseAllTimers = useCallback(category => {
    setTimers(prevTimers => ({
      ...prevTimers,
      [category]: prevTimers[category].map(timer => ({
        ...timer,
        status: 'Paused',
      })),
    }));
  }, []);

  // Function to reset all timers in a category
  const resetAllTimers = useCallback(category => {
    setTimers(prevTimers => ({
      ...prevTimers,
      [category]: prevTimers[category].map(timer => ({
        ...timer,
        remainingTime: timer.duration,
        status: 'Paused',
      })),
    }));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers(prevTimers => {
        const updatedTimers = {...prevTimers};
        Object.keys(updatedTimers)?.forEach(category => {
          updatedTimers[category] = updatedTimers[category]?.map(timer => {
            if (timer.status === 'Running' && timer.remainingTime > 0) {
              return {...timer, remainingTime: timer.remainingTime - 1};
            } else if (
              timer.remainingTime === 0 &&
              timer.status !== 'Completed'
            ) {
              // Show completion modal
              setCompletedTimerName(timer.name);
              setCompletionModalVisible(true);

              // Store completed timer in AsyncStorage
              const completedTimer = {
                ...timer,
                completionTime: new Date().toLocaleString(),
              };

              // Save completed timer
              getLacStorageItem('completedTimers').then(storedTimers => {
                const completedTimers = storedTimers
                  ? JSON.parse(storedTimers)
                  : [];
                completedTimers.push(completedTimer);
                setLocalStoreItem(
                  'completedTimers',
                  JSON.stringify(completedTimers),
                );
              });

              return {...timer, status: 'Completed'};
            }
            return timer;
          });

          // Remove completed timers from the category
          updatedTimers[category] = updatedTimers[category].filter(
            timer => timer.status !== 'Completed',
          );

          // Remove the category if it has no active timers
          if (updatedTimers[category].length === 0) {
            delete updatedTimers[category];
          }
        });
        return updatedTimers;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const renderTimer = ({item, section}) => (
    <Timer
      item={item}
      section={section}
      onStart={startTimer}
      onPause={pauseTimer}
      onReset={resetTimer}
    />
  );

  const sections = Object.keys(timers).map(category => ({
    title: category,
    data: timers[category],
  }));

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Home',
      headerRight: () => (
        <DebounceTouchableOpacity
          style={styles.historyBtn}
          onPress={() => navigation.navigate('History')}>
          <Text style={styles.addButtonText}>H</Text>
        </DebounceTouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        backgroundColor={Colors.WHITE}
        barStyle="dark-content"
      />
      <SectionList
        sections={sections}
        renderItem={renderTimer}
        renderSectionHeader={({section}) => (
          <View>
            <Text style={styles.sectionHeader}>{section.title}</Text>
            <CategoryActions
              category={section.title}
              onStartAll={startAllTimers}
              onPauseAll={pauseAllTimers}
              onResetAll={resetAllTimers}
            />
          </View>
        )}
        keyExtractor={item => item.id}
        ListEmptyComponent={
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: SCREEN_HEIGHT / 1.3,
            }}>
            <Text style={styles.noTimer}>Timer not Available</Text>
            <Text style={styles.noTimerPara}>
              Please click "+" to set timer!
            </Text>
          </View>
        }
      />
      <DebounceTouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddTimer')}>
        <Text style={styles.addButtonText}>+</Text>
      </DebounceTouchableOpacity>
      <CompletionModal
        visible={completionModalVisible}
        timerName={completedTimerName}
        onClose={() => setCompletionModalVisible(false)}
      />
    </View>
  );
};

export default HomeScreen;
