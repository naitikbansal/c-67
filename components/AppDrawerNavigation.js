import React,{Component} from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from '../components/AppTabNavigator';
import CustomSideBarMenu from '../components/CustomSideBarMenu';
import SettingScreen from '../screens/SettingScreen';
export const AppDrawerNavigator=createDrawerNavigator({
    Home:{
        screen:AppTabNavigator
    },
    Settings :{
        screen:SettingScreen
    },

},
{
    contentComponent:CustomSideBarMenu
},
{
    initialRootName:'Home'
})