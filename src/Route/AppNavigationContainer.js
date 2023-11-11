import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Index from '../Screens/index';
import Vieww from '../Screens/View';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName='index'>
            <Stack.Screen options={{headerShown:false}} name='index' component={Index}></Stack.Screen>
            <Stack.Screen options={{headerShown:false}} name='view' component={Vieww}></Stack.Screen>
        </Stack.Navigator>
    )
}

const AppTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home'
             component={HomeStack}
             options={{
                 headerShown:false,
                 tabBarIcon:({color,size}) => (
                <Icon name="home" color={color} size={size}></Icon>
             )}}
             >

            </Tab.Screen>
        </Tab.Navigator>
    )
}

const AppNavigationContainer = () => {
    return <AppTabs/>
}

export default AppNavigationContainer;