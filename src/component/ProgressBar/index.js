import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors} from '../../utils/theme/colors';
import {PixelPerfect} from '../../utils/pixelSetup';

const ProgressBar = ({progress}) => (
  <View style={styles.container}>
    <View style={[styles.progress, {width: `${progress}%`}]} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: PixelPerfect.heightPixel(8),
    backgroundColor: Colors._e0e0e0,
    borderRadius: PixelPerfect.heightPixel(4),
    overflow: 'hidden',
    marginVertical: PixelPerfect.heightPixel(8),
  },
  progress: {
    height: '100%',
    backgroundColor: Colors.BLUE,
  },
});

export default ProgressBar;
