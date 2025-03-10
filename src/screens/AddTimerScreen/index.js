import React, {useState, useRef} from 'react';
import {View, TextInput, Text, Switch} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CategoryModal from '../../component/Modal/CategoryModal';
import DebounceTouchableOpacity from '../../component/ButtonHelper/debounceTouchableOpacity';
import styles from './styles';
import AppButton from '../../component/ButtonHelper/AppButton';
import {Colors} from '../../utils/theme/colors';
import {getLacStorageItem, setLocalStoreItem} from '../../utils/storage';

const AddTimerScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');
  const [category, setCategory] = useState('Workout');
  const [halfwayAlert, setHalfwayAlert] = useState(false);

  const categoryModalRef = useRef(null);

  const saveTimer = async () => {
    if (!name || !duration) {
      alert('Please fill in all fields');
      return;
    }

    const newTimer = {
      id: Date.now().toString(),
      name,
      duration: parseInt(duration, 10),
      remainingTime: parseInt(duration, 10),
      category,
      status: 'Paused',
      halfwayAlert,
    };

    try {
      const existingTimers = await getLacStorageItem('timers');
      const timers = existingTimers ? JSON.parse(existingTimers) : {};

      if (!timers[category]) {
        timers[category] = [];
      }
      timers[category].push(newTimer);
      await setLocalStoreItem('timers', JSON.stringify(timers));
      navigation.goBack();
    } catch (error) {
      console.error('Failed to save timer:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <Text style={styles.title}>Timer Name:</Text>
        <TextInput
          placeholder="Timer Name"
          placeholderTextColor={Colors.GREY}
          style={styles.inputStyle}
          value={name}
          onChangeText={setName}
        />
      </View>
      <View style={[styles.inputView, styles.inputDuration]}>
        <Text style={styles.title}>Timer Duration(In Sec):</Text>
        <TextInput
          placeholder="Duration (seconds)"
          placeholderTextColor={Colors.GREY}
          style={styles.inputStyle}
          value={duration}
          onChangeText={setDuration}
          keyboardType="numeric"
        />
      </View>
      <View style={[styles.inputView, styles.inputDuration]}>
        <Text style={styles.title}>Category:</Text>
        <DebounceTouchableOpacity
          style={styles.categoryButton}
          onPress={() => categoryModalRef.current?.open()}>
          <Text>Category: {category}</Text>
        </DebounceTouchableOpacity>
      </View>
      <View style={styles.halfwayAlertContainer}>
        <Text>Set Halfway Alert (50% of Duration)</Text>
        <Switch value={halfwayAlert} onValueChange={setHalfwayAlert} />
      </View>
      <AppButton
        buttonText={'Save Timer'}
        handleSubmit={saveTimer}
        enabled={name && duration}
      />
      <CategoryModal
        ref={categoryModalRef}
        onSelectCategory={selectedCategory => setCategory(selectedCategory)}
      />
    </View>
  );
};

export default AddTimerScreen;
