import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '@views/login';
import Register from '@views/register';

const Stack = createStackNavigator();

function SignOutStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Login'
                    component={Login}
                    options={
                        { headerShown: false }
                    }
                />
                <Stack.Screen
                    name='Register'
                    component={Register}
                    options={
                        { headerShown: false }
                    }
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default SignOutStack;