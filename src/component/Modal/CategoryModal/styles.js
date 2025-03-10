import {StyleSheet} from 'react-native';
import {PixelPerfect} from '../../../utils/pixelSetup';
import {weight} from '../../../utils/theme/fonts';
import {Colors} from '../../../utils/theme/colors';

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: PixelPerfect.heightPixel(16),
  },
  modalTitle: {
    fontSize: PixelPerfect.fontPixel(18),
    fontWeight: weight.Bold,
    marginBottom: PixelPerfect.heightPixel(16),
  },
  categoryItem: {
    padding: PixelPerfect.heightPixel(16),
    borderBottomWidth: 1,
    borderBottomColor: Colors._CCCCCC,
  },
  closeButton: {
    marginTop: PixelPerfect.heightPixel(16),
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    color: Colors.BLUE,
  },
});
export default styles;
