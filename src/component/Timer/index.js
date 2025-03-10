import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import ProgressBar from '../ProgressBar';
import DebounceTouchableOpacity from '../ButtonHelper/debounceTouchableOpacity';

const Timer = ({item, section, onStart, onPause, onReset}) => {
  const progress = ((item.duration - item.remainingTime) / item.duration) * 100;
  const [halfwayAlertTriggered, setHalfwayAlertTriggered] = useState(false);

  useEffect(() => {
    if (
      item.halfwayAlert &&
      !halfwayAlertTriggered &&
      item.remainingTime <= Math.floor(item.duration / 2)
    ) {
      Alert.alert('Halfway Alert', `You're halfway through "${item.name}"!`);
      setHalfwayAlertTriggered(true);
    }
  }, [item.remainingTime, item.halfwayAlert, halfwayAlertTriggered]);

  useEffect(() => {
    if (item.status === 'Paused' && item.remainingTime === item.duration) {
      setHalfwayAlertTriggered(false);
    }
  }, [item.status, item.remainingTime, item.duration]);

  return (
    <View style={styles.timerItem}>
      <Text style={styles.timerName}>{item.name}</Text>
      <Text>Remaining Time: {item.remainingTime} seconds</Text>
      <Text>Status: {item.status}</Text>
      <ProgressBar progress={progress} />
      <View style={styles.timerControls}>
        <DebounceTouchableOpacity
          style={styles.controlButton}
          onPress={() => onStart(item.id, section.title)}>
          <Text>Start</Text>
        </DebounceTouchableOpacity>
        <DebounceTouchableOpacity
          style={styles.controlButton}
          onPress={() => onPause(item.id, section.title)}>
          <Text>Pause</Text>
        </DebounceTouchableOpacity>
        <DebounceTouchableOpacity
          style={styles.controlButton}
          onPress={() => onReset(item.id, section.title)}>
          <Text>Reset</Text>
        </DebounceTouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timerItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  timerName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  timerControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  controlButton: {
    padding: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
  },
});

export default Timer;
