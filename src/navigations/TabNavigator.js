import React from 'react';
import {DashBoard} from '../../src/container/Dashboard/dashBoard';
import {Chat} from '../../src/container/Chat/chat';
import {Image} from 'react-native';
import {DASHBOARD, CHAT} from './Routes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AppColors from '../../theme/color';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome6';
import NotificationIcon from '../components/CustomIcons/notificationIcon';
import {ImagesPath, Scale} from '../helpers/index';
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      lazy={true}
      optimizationsEnabled={true}
      screenOptions={{
        headerShown: true,
        tabBarShowLabel: true,
        tabBarStyle: {
          borderTopLeftRadius: 34,
          borderTopRightRadius: 34,
          backgroundColor: AppColors.white,
          position: 'absolute',
          padding: 10,
          height: 64,
        },
        tabBarLabelStyle: {fontWeight: 'bold', fontSize: 10},
        tabBarActiveTintColor: AppColors.green,
        tabBarInactiveTintColor: AppColors.mediumGray,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Icons
              color={focused ? AppColors.green : AppColors.mediumGray}
              size={26}
              name="film-outline"
            />
          ),
          title: 'Dashboard',
          headerRight: () => <NotificationIcon />,
          headerLeft: () => (
            <Icon
              color={AppColors.black}
              style={{marginLeft: 10}}
              size={26}
              name="bars"
            />
          ),
        }}
        name={DASHBOARD}
        component={DashBoard}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Icons
              color={focused ? AppColors.green : AppColors.mediumGray}
              size={26}
              name="chatbubble-ellipses-outline"
            />
          ),
          title: 'Chat',
          headerRight: () => (
            <Image
              source={ImagesPath.profilePic}
              style={{
                marginRight: Scale(10),
                height: Scale(50),
                width: Scale(50),
              }}
            />
          ),
          headerLeft: () => (
            <Icon
              color={AppColors.black}
              style={{marginLeft: 10}}
              size={26}
              name="bars"
            />
          ),
        }}
        name={CHAT}
        component={Chat}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
