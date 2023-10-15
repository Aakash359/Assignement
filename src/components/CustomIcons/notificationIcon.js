import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import AppColors from '../../../theme/color';
import roundIconStyle from './style';
import {Scale} from '../../helpers/index';

const NotificationIcon = () => {
  return (
    <View
      style={[
        roundIconStyle.container,
        {
          marginRight: Scale(10),
          width: Scale(40),
          height: Scale(40),
          borderRadius: 40 / 2,
        },
      ]}>
      <Icons
        style={[roundIconStyle.iconStyle, {bottom: 4}]}
        color={AppColors.mediumGray}
        size={20}
        name="notifications-sharp"
      />
    </View>
  );
};

export default NotificationIcon;
