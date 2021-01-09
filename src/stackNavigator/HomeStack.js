import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react'
import * as screens from '../screens'
import {Images} from '../../assets/Images'
import {Image} from 'react-native'
const Tab = createMaterialTopTabNavigator();

export function HomeStack() {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let resouce;
            let sizeIcon = {
                    width: 24,
                    height: 24
            };
            if (route.name === 'home') {
                sizeIcon = {
                    width: 27,
                    height: 26
            };
                resouce = Images.home
            } else if (route.name === 'setting') {
                sizeIcon = {
                    width: 20,
                    height: 14
            };
                resouce = Images.setting
            }else if(route.name === "filter"){
                sizeIcon = {
                    width: 18,
                    height: 23
            };
                resouce = Images.filter;
            }
            else if(route.name === "map"){
                resouce = Images.map;
            }else if(route.name === "notify"){
                sizeIcon = {
                    width: 18,
                    height: 20
            };
                resouce = Images.notify
            }

            // You can return any component that you like here!
            return <Image source={resouce} style={{width: sizeIcon.width, height: sizeIcon.height, resizeMode: 'contain', tintColor: focused  ? 'blue' : 'black'}}/>;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'blue',
          showIcon: true ,
          showLabel: false,
        }}
      >
      <Tab.Screen
       name="home"
       component={screens.HomeScreen} 
       />
      <Tab.Screen name="map" component={screens.MapScreen} />
      <Tab.Screen name="filter" component={screens.FilterScreen} />
      <Tab.Screen name="notify" component={screens.NotifyScreen} />
      <Tab.Screen name="setting" component={screens.SettingScreen} />
      
    </Tab.Navigator>
  );
}