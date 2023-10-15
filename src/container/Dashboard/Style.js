import {StyleSheet} from 'react-native';
import {windowDimensions} from '../../common/windowDimensions';
import AppColors from '../../../theme/color';
import {Scale} from '../../helpers/index';

const dashBordStyle = StyleSheet.create({
  container: {
    ...windowDimensions,
    flex: 1,
    backgroundColor: AppColors.baseGray,
  },
  wrapper: {
    flex: 1,
    borderTopLeftRadius: Scale(30),
    borderTopRightRadius: Scale(30),
    backgroundColor: AppColors.offWhite,
    shadowOpacity: 2,
  },
  rowView: {
    flexDirection: 'row',
    height: Scale(30),
    width: windowDimensions.width * 0.9,
    marginTop: Scale(20),
    marginLeft: Scale(20),
  },
  incomeView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: Scale(30),
    width: windowDimensions.width * 0.9,
    marginTop: 20,
    marginHorizontal: Scale(20),
    marginVertical: Scale(20),
  },
  clumWrapper: {
    flexDirection: 'column',
    height: 30,
    width: 200,
    marginHorizontal: 2,
  },
  midCoulmWrapper: {
    flexDirection: 'column',
    height: Scale(130),
    marginTop: Scale(20),
    marginHorizontal: Scale(22),
    width: windowDimensions.width * 0.9,
  },
  account: {
    fontSize: Scale(19),
    color: AppColors.black,
    fontWeight: '500',
  },
  date: {
    fontSize: 12,
    fontWeight: '500',
    color: AppColors.darkGrey,
  },
  month: {
    fontSize: 14,
    marginTop: Scale(5),
    marginLeft: Scale(30),
    color: AppColors.darkGrey,
    fontWeight: '500',
  },
  bodderLine: {
    height: 1.5,
    marginTop: Scale(30),
    marginHorizontal: Scale(18),
    backgroundColor: AppColors.lowGrey,
  },
  chartLine: {
    height: 1.5,
    marginTop: Scale(20),
    marginHorizontal: 0,
    backgroundColor: AppColors.lowGrey,
  },
  iconStyle: {
    marginLeft: 5,
    bottom: 1,
  },
  dollarView: {
    marginTop: Scale(5),
    flexDirection: 'row',
    marginLeft: -8,
  },
});

export default dashBordStyle;
