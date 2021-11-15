import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Confirmation } from '../screens/Confirmation';
import { SignIn } from '../screens/SignIn';
import { SignUpFistStep } from '../screens/SignUp/SignUpFistStep';
import { SignUpSecondStep } from '../screens/SignUp/SignUpSecondStep';
import { Splash } from '../screens/Splash';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes(){
    return(
        <Navigator 
            screenOptions={{
                headerShown: false
            }}
            initialRouteName={'Splash'}
        >
            <Screen 
                name="Splash"
                component={Splash}
            />
            <Screen 
                name="SignIn"
                component={SignIn}
            />
            <Screen 
                name="SignUpFistStep"
                component={SignUpFistStep}
            />
            <Screen 
                name="SignUpSecondStep"
                component={SignUpSecondStep}
            />
            <Screen 
                name="Confirmation"
                component={Confirmation}
            />                 
        </Navigator>
    )
}