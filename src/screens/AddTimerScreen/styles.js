import {StyleSheet} from 'react-native';
import {wp} from '../../utils/regex';
import {Colors} from '../../utils/theme/colors';
import {PixelPerfect} from '../../utils/pixelSetup';
import {weight} from '../../utils/theme/fonts';

const styles = StyleSheet.create({
  container: {
    padding: PixelPerfect.heightPixel(16),
  },
  categoryButton: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
  },
  inputStyle: {
    fontSize: PixelPerfect.fontPixel(16),
    color: Colors.BLACK,
    height: PixelPerfect.heightPixel(60),
    borderWidth: 1,
    borderColor: Colors._CCCCCC,
    borderRadius: PixelPerfect.heightPixel(10),
  },
  inputView: {
    gap: PixelPerfect.heightPixel(15),
  },
  title: {
    fontSize: PixelPerfect.fontPixel(16),
    color: Colors.BLACK,
    fontWeight: weight.Medium,
  },
  inputDuration: {
    marginTop: PixelPerfect.heightPixel(15),
  },
  halfwayAlertContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
});

export default styles;
