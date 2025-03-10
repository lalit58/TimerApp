import {StyleSheet} from 'react-native';
import {PixelPerfect} from '../../utils/pixelSetup';
import {Colors} from '../../utils/theme/colors';
import {weight} from '../../utils/theme/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: PixelPerfect.heightPixel(16),
  },
  historyItem: {
    padding: PixelPerfect.heightPixel(16),
    borderBottomWidth: 1,
    borderBottomColor: Colors._CCCCCC,
  },
  timerName: {
    fontSize: PixelPerfect.fontPixel(16),
    fontWeight: weight.Bold,
  },
});

export default styles;
