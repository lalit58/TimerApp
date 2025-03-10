import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/theme/colors';
import {PixelPerfect} from '../../utils/pixelSetup';
import {weight} from '../../utils/theme/fonts';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#f0f0f0',
    padding: 8,
  },
  addButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: Colors.BLUE,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  historyBtn: {
    position: 'absolute',
    right: 16,
    backgroundColor: Colors.BLACK,
    width: 34,
    height: 34,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: Colors.WHITE,
    fontSize: PixelPerfect.fontPixel(24),
  },
  noTimer: {
    fontSize: PixelPerfect.fontPixel(16),
    color: Colors.BLACK,
    fontWeight: weight.Medium,
  },
  noTimerPara: {
    fontSize: PixelPerfect.fontPixel(16),
    color: Colors.BLACK,
    fontWeight: weight.Regular,
  },
});
export default styles;
