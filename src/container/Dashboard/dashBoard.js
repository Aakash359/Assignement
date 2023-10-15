import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {
  ACCOUNTING,
  DATE,
  MONTH,
  INCOME,
  DOLLARS,
  STATICS,
  STATICS2,
  TOTAL_INCOME,
  TOTAL_EXPENCES,
} from '../../constants/dasboardConstants';
import dashBordStyle from './Style';
import {BarChart} from 'react-native-svg-charts';
import RoundIcons from '../../components/CustomIcons/roundIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import AppColors from '../../../theme/color';

const chartData = [10, 20, 30, 40, 85, 60, 30];

export const DashBoard = () => {
  return (
    <SafeAreaView style={dashBordStyle.container}>
      <ScrollView
        bounces={false}
        keyboardShouldPersistTaps={'handled'}
        showsVerticalScrollIndicator={false}
        style={dashBordStyle.wrapper}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={dashBordStyle.rowView}>
          <View style={dashBordStyle.clumWrapper}>
            <Text style={dashBordStyle.account}>{ACCOUNTING}</Text>
            <Text style={dashBordStyle.date}>{DATE}</Text>
          </View>
          <Text style={dashBordStyle.month}>{MONTH}</Text>
          <Icons
            style={[dashBordStyle.iconStyle, {marginTop: 4}]}
            color={AppColors.darkblueShade}
            size={23}
            name="keyboard-arrow-down"
          />
        </View>
        <View style={dashBordStyle.bodderLine}></View>
        <View style={dashBordStyle.midCoulmWrapper}>
          <Text
            style={[dashBordStyle.account, {fontWeight: '600', fontSize: 15}]}>
            {INCOME}
          </Text>
          <Text style={[dashBordStyle.date, {fontWeight: '800', fontSize: 35}]}>
            {DOLLARS}
          </Text>
          <View style={dashBordStyle.dollarView}>
            <Icons
              style={[dashBordStyle.iconStyle, {marginTop: 0}]}
              color={AppColors.darkblueShade}
              size={20}
              name="arrow-outward"
            />
            <Text
              style={[
                dashBordStyle.account,
                {fontWeight: '400', fontSize: 15},
              ]}>
              {STATICS} {STATICS2}
            </Text>
          </View>
        </View>
        <BarChart
          style={{height: 200}}
          data={chartData}
          svg={{fill: '#42D5D5'}}
          spacingInner={0.2}
          spacingOuter={0.5}
          contentInset={{top: 20, bottom: 30}}></BarChart>
        <View style={dashBordStyle.chartLine}></View>
        <View style={dashBordStyle.incomeView}>
          <RoundIcons />
          <View style={[dashBordStyle.clumWrapper, {height: 50}]}>
            <Text
              style={[
                dashBordStyle.account,
                {fontWeight: '800', fontSize: 35},
              ]}>
              {DOLLARS}
            </Text>
            <Text style={dashBordStyle.date}>{TOTAL_INCOME}</Text>
          </View>
        </View>
        <View style={dashBordStyle.incomeView}>
          <RoundIcons />
          <View style={[dashBordStyle.clumWrapper, {height: 50}]}>
            <Text
              style={[
                dashBordStyle.account,
                {fontWeight: '800', fontSize: 35},
              ]}>
              {DOLLARS}
            </Text>
            <Text style={dashBordStyle.date}>{TOTAL_EXPENCES}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
