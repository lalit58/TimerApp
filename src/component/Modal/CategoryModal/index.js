import React from 'react';
import {Modal, View, Text} from 'react-native';
import styles from './styles';
import DebounceTouchableOpacity from '../../ButtonHelper/debounceTouchableOpacity';

const CategoryModal = React.forwardRef((props, ref) => {
  const {onSelectCategory} = props;
  const [visible, setVisible] = React.useState(false);

  React.useImperativeHandle(ref, () => ({
    open: () => setVisible(true),
    close: () => setVisible(false),
  }));

  const categories = ['Workout', 'Study', 'Break'];

  return (
    <Modal transparent visible={visible} animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Select Category</Text>
          {categories.map(category => (
            <DebounceTouchableOpacity
              key={category}
              style={styles.categoryItem}
              onPress={() => {
                onSelectCategory(category);
                setVisible(false);
              }}>
              <Text>{category}</Text>
            </DebounceTouchableOpacity>
          ))}
          <DebounceTouchableOpacity
            style={styles.closeButton}
            onPress={() => setVisible(false)}>
            <Text style={styles.closeButtonText}>Close</Text>
          </DebounceTouchableOpacity>
        </View>
      </View>
    </Modal>
  );
});

export default CategoryModal;
