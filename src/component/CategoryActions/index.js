import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import DebounceTouchableOpacity from '../ButtonHelper/debounceTouchableOpacity';

const CategoryActions = props => {
  const {category, onStartAll, onPauseAll, onResetAll} = props;

  return (
    <View style={styles.container}>
      <DebounceTouchableOpacity
        style={styles.actionButton}
        onPress={() => onStartAll(category)}>
        <Text>Start All</Text>
      </DebounceTouchableOpacity>
      <DebounceTouchableOpacity
        style={styles.actionButton}
        onPress={() => onPauseAll(category)}>
        <Text>Pause All</Text>
      </DebounceTouchableOpacity>
      <DebounceTouchableOpacity
        style={styles.actionButton}
        onPress={() => onResetAll(category)}>
        <Text>Reset All</Text>
      </DebounceTouchableOpacity>
    </View>
  );
};

export default CategoryActions;
