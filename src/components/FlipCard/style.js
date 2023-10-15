import {StyleSheet} from 'react-native';
import {windowDimensions} from '../../common/windowDimensions';
import {Scale} from '../../helpers/index';
import AppColors from '../../../theme/color';

const flipStyle = StyleSheet.create({
  container: {
    ...windowDimensions,
    flex: 1,
    backgroundColor: AppColors.white,
  },
  cardWrapper: {
    marginTop: Scale(25),
    height: '20%',
    width: '10%',
  },
  itemPhoto: {
    width: Scale(150),
    backgroundColor: AppColors.orange,
    marginHorizontal: Scale(20),
    borderRadius: Scale(16),
  },
  cardView: {
    justifyContent: 'center',
    marginHorizontal: Scale(20),
    width: Scale(120),
  },
  cardValue: {
    marginTop: Scale(40),
    fontSize: Scale(20),
    color: AppColors.black,
    fontWeight: '900',
  },
});

export default flipStyle;
