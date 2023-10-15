import {StyleSheet} from 'react-native';
import {windowDimensions} from '../../common/windowDimensions';
import {Scale} from '../../helpers/index';
import AppColors from '../../../theme/color';

const chatStyle = StyleSheet.create({
  container: {
    ...windowDimensions,
    flex: 1,
    backgroundColor: AppColors.offWhite,
  },
  headerText: {
    color: AppColors.black,
    fontWeight: 'bold',
    marginTop: 20,
    fontSize: 20,
    marginHorizontal: 20,
  },
  rowView: {
    width: '85%',
    top: 25,
    flexDirection: 'row',
    marginHorizontal: 22,
    height: 70,
  },
  propertyView: {
    width: windowDimensions.width * 0.9,
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginTop: 60,
    flexDirection: 'row',
  },
  flexView: {
    marginTop: 7,
    flexDirection: 'row',
    width: 140,
  },
  iconStyle: {
    marginLeft: 5,
    bottom: 1,
  },
  text: {
    fontSize: 12,
    fontWeight: '700',
    color: AppColors.darkblueShade,
  },
  propertyText: {
    fontSize: 14,
    fontWeight: '800',
    color: AppColors.darkblueShade,
  },
  rate: {
    fontSize: Scale(15),
    marginTop: Scale(25),
    marginHorizontal: Scale(22),
    color: AppColors.black,
    fontWeight: '500',
  },
  bodderLine: {
    height: 1.5,
    bottom: 10,
    marginHorizontal: Scale(18),
    backgroundColor: AppColors.lowGrey,
  },
  dividerLine: {
    height: 8,
    top: 35,
    marginHorizontal: Scale(0),
    backgroundColor: AppColors.baseGray,
  },
  chartLine: {
    height: 1.5,
    marginTop: Scale(20),
    marginHorizontal: 0,
    backgroundColor: AppColors.lowGrey,
  },
  mainColmn: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    rowGap: 10,
    marginVertical: 5,
    width: windowDimensions.width * 0.4,
  },
  rowWrapper: {
    flexDirection: 'row',
    width: windowDimensions.width * 0.2,
    marginHorizontal: 25,
  },
  colnmView: {
    flexDirection: 'column',
    marginLeft: 15,
    width: windowDimensions.width * 0.2,
  },
  imageStyle: {
    marginLeft: 80,
    bottom: 60,
    height: Scale(120),
    width: Scale(120),
  },
  graphView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  pieChartStyle: {
    height: 140,
    bottom: 150,
    marginLeft: 190,
  },
});

export default chatStyle;
