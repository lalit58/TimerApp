import {StyleSheet} from 'react-native';
import {PixelPerfect} from '../../../utils/pixelSetup';
import {Colors} from '../../../utils/theme/colors';
import {weight} from '../../../utils/theme/fonts';

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
    padding: PixelPerfect.heightPixel(16),
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: PixelPerfect.fontPixel(18),
    fontWeight: weight.Bold,
    marginBottom: PixelPerfect.heightPixel(8),
  },
  closeButton: {
    marginTop: PixelPerfect.heightPixel(16),
    padding: PixelPerfect.heightPixel(8),
    backgroundColor: Colors._e0e0e0,
    borderRadius: 4,
  },
  closeButtonText: {
    color: Colors.BLUE,
  },
});
export default styles;
