import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome6';
import AppColors from '../../../theme/color';
import roundIconStyle from './style';

const RoundIcons = () => {
  return (
    <View style={roundIconStyle.container}>
      <Icons
        style={roundIconStyle.iconStyle}
        color={AppColors.green}
        size={20}
        name="sack-dollar"
      />
    </View>
  );
};

export default RoundIcons;
