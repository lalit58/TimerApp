import React from 'react';
import {Modal, View, Text} from 'react-native';
import styles from './styles';
import DebounceTouchableOpacity from '../../ButtonHelper/debounceTouchableOpacity';

const CompletionModal = props => {
  const {visible, timerName, onClose} = props;

  return (
    <Modal transparent visible={visible} animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Congratulations!</Text>
          <Text>Timer "{timerName}" has completed.</Text>
          <DebounceTouchableOpacity
            style={styles.closeButton}
            onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </DebounceTouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CompletionModal;
