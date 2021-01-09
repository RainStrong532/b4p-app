import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as screens from '../screens'

const Stack = createStackNavigator();

export function StackAuth(){
    return(
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }} 
        >
            <Stack.Screen  name="launch" component={screens.SplashScreen}/>
            <Stack.Screen name="login" component={screens.LoginScreen}/>
            <Stack.Screen name="register" component={screens.RegisterScreen}/>
            <Stack.Screen name="verify" component={screens.VerifyAccountScreen}/>
        </Stack.Navigator>
    )
}