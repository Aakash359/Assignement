import {StyleSheet} from 'react-native';
import {Scale} from '../../helpers/index';
import AppColors from '../../../theme/color';

const roundIconStyle = StyleSheet.create({
  container: {
    width: Scale(50),
    height: Scale(50),
    marginTop: Scale(10),
    borderWidth: Scale(2),
    borderColor: AppColors.blueShade,
    borderRadius: 50 / 2,
    backgroundColor: 'red',
    backgroundColor: AppColors.white,
  },
  iconStyle: {
    marginTop: Scale(10),
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default roundIconStyle;
