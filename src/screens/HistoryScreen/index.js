import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import styles from './styles';
import {getLacStorageItem} from '../../utils/storage';

const HistoryScreen = () => {
  const [completedTimers, setCompletedTimers] = useState([]);

  useEffect(() => {
    const loadCompletedTimers = async () => {
      try {
        const storedTimers = await getLacStorageItem('completedTimers');
        if (storedTimers) {
          setCompletedTimers(storedTimers);
        }
      } catch (error) {
        console.error('Failed to load completed timers:', error);
      }
    };

    loadCompletedTimers();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={completedTimers}
        renderItem={({item}) => (
          <View style={styles.historyItem}>
            <Text style={styles.timerName}>{item.name}</Text>
            <Text>Completed at: {item.completionTime}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default HistoryScreen;
