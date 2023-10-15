//import liraries
import React from 'react';
import {View, Text} from 'react-native';
import statStyle from './style';
import AppColors from '../../../theme/color';
import Icon from 'react-native-vector-icons/Octicons';
import {OCCUPY, VACANT, MAINTENANCE} from '../../constants/chatConstants';
const StatsticData = () => {
  return (
    <View style={statStyle.mainColmn}>
      <View style={statStyle.rowWrapper}>
        <Icon
          style={[statStyle.iconStyle, {marginTop: 2}]}
          color={AppColors.blue}
          size={23}
          name="square-fill"
        />
        <View style={statStyle.colnmView}>
          <Text style={[statStyle.text, {fontSize: 20}]}>298</Text>
          <Text style={[statStyle.text, {fontWeight: '600'}]}>{OCCUPY}</Text>
        </View>
      </View>
      <View style={statStyle.rowWrapper}>
        <Icon
          style={[statStyle.iconStyle, {marginTop: 2}]}
          color={AppColors.darkblueShade}
          size={23}
          name="square-fill"
        />
        <View style={statStyle.colnmView}>
          <Text style={[statStyle.text, {fontSize: 20}]}>249</Text>
          <Text style={[statStyle.text, {fontWeight: '600'}]}>{VACANT}</Text>
        </View>
      </View>
      <View style={statStyle.rowWrapper}>
        <Icon
          style={[statStyle.iconStyle, {marginTop: 2}]}
          color={AppColors.orange}
          size={23}
          name="square-fill"
        />
        <View style={statStyle.colnmView}>
          <Text style={[statStyle.text, {fontSize: 20}]}>85</Text>
          <Text style={[statStyle.text, {fontWeight: '600'}]}>
            {MAINTENANCE}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default StatsticData;
