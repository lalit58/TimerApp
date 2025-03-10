import {wp} from '../regex';
import {Colors} from './colors';

export const globalStyles = {
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  authHeadingTitle: {
    fontSize: wp(24),
    fontWeight: '500',
    paddingTop: 10,
    paddingBottom: 20,
  },
  flex_row_align_center: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flex_row_align_start: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  flex_row_align_center_justy_space: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  flex_row_align_start_justy_space: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  flex_row_justy_space: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  /************************************
   * MARGIN CSS
   *************************************/

  mb_5: {
    marginBottom: 5,
  },
  ml_5: {
    marginLeft: 5,
  },
  mr_5: {
    marginRight: 5,
  },
  mb_10: {
    marginBottom: 10,
  },
  ml_10: {
    marginLeft: 10,
  },
  mr_10: {
    marginRight: 10,
  },
  mr_15: {
    marginRight: 15,
  },
  mb_15: {
    marginBottom: 15,
  },
  mb_20: {
    marginBottom: 20,
  },
  mb_25: {
    marginBottom: 25,
  },
  mb_30: {
    marginBottom: 30,
  },
  mt_30: {
    marginTop: 30,
  },
  mb_40: {
    marginBottom: 40,
  },
};
