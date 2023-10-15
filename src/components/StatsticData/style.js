import {StyleSheet} from 'react-native';
import {Scale} from '../../helpers/index';
import {windowDimensions} from '../../common/windowDimensions';
import AppColors from '../../../theme/color';

const statStyle = StyleSheet.create({
  mainColmn: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    rowGap: Scale(10),
    marginVertical: Scale(5),
    width: windowDimensions.width * 0.4,
  },
  rowWrapper: {
    flexDirection: 'row',
    width: windowDimensions.width * 0.2,
    marginHorizontal: Scale(25),
  },
  colnmView: {
    flexDirection: 'column',
    marginLeft: 15,
    width: windowDimensions.width * 0.3,
  },
  iconStyle: {
    marginLeft: Scale(5),
    bottom: Scale(1),
  },
  text: {
    fontSize: 12,
    fontWeight: '700',
    color: AppColors.black,
  },
});

export default statStyle;
