import React from 'react';
import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import chatStyle from './Style';
import Icons from 'react-native-vector-icons/MaterialIcons';
import FlipCardAnimation from '../../components/FlipCard/flipCard';
import {
  TASK,
  TODAY_TASK,
  RATE,
  PROPERTIES,
  ALL_PROPERTIES,
} from '../../constants/chatConstants';
import AppColors from '../../../theme/color';
import {ImagesPath} from '../../helpers/index';
import StatsticData from '../../components/StatsticData/statsticData';
import {PieChart} from 'react-native-svg-charts';
export const Chat = () => {
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];

  const randomColor = () =>
    ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(
      0,
      7,
    );

  const pieData = data
    .filter(value => value > 0)
    .map((value, index) => ({
      value,
      svg: {
        fill: randomColor(),
        onPress: () => console.log('press', index),
      },
      key: `pie-${index}`,
    }));

  return (
    <SafeAreaView style={chatStyle.container}>
      <ScrollView
        bounces={false}
        keyboardShouldPersistTaps={'handled'}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <Text style={chatStyle.headerText}>{TASK}</Text>
        <FlipCardAnimation />
        <View style={chatStyle.rowView}>
          <Text style={chatStyle.text}>{TODAY_TASK}</Text>
          <Icons
            style={chatStyle.iconStyle}
            color={AppColors.green}
            size={20}
            name="keyboard-arrow-right"
          />
        </View>
        <View style={chatStyle.bodderLine}></View>
        <Text style={chatStyle.rate}>{RATE}</Text>
        <View style={[chatStyle.rowView, {marginBottom: 0, height: 40}]}>
          <Text
            style={[chatStyle.text, {fontSize: 30, color: AppColors.black}]}>
            98%
          </Text>
          <Icons
            style={[chatStyle.iconStyle, {marginTop: 15}]}
            color={AppColors.darkblueShade}
            size={20}
            name="arrow-outward"
          />
          <Text style={[chatStyle.text, {fontSize: 14, marginTop: 15}]}>
            2.73%
          </Text>
          <Image source={ImagesPath.snakeBar} style={chatStyle.imageStyle} />
        </View>
        <View style={chatStyle.dividerLine}></View>
        <View style={chatStyle.propertyView}>
          <Text
            style={[chatStyle.text, {fontSize: 20, color: AppColors.black}]}>
            {PROPERTIES}
          </Text>
          <View style={chatStyle.flexView}>
            <Text style={chatStyle.propertyText}>{ALL_PROPERTIES}</Text>
            <Icons
              style={[chatStyle.iconStyle]}
              color={AppColors.green}
              size={23}
              name="keyboard-arrow-right"
            />
          </View>
        </View>
        <View styel={chatStyle.graphView}>
          <StatsticData />
          <PieChart
            style={chatStyle.pieChartStyle}
            data={pieData}
            strokeWidth={1}
            outerRadius={42}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
