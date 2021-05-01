import * as React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Listings from '@views/listings';
import Dashboard from '@views/dashboard';
import Orders from '@views/orders';
import Products from '@views/products';
import strings from '@shared/translations';
import { APP_COLORS } from '@shared/styles';

const Tab = createBottomTabNavigator();

const DEFAULT_SIZE = 24;
const FOCUSED_SIZE = 32;

export default function SignInStack() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    inactiveTintColor: APP_COLORS.textGreen,
                    activeTintColor: APP_COLORS.darkGreen
                }}
            >
                <Tab.Screen
                    name={strings.common.nav.dashboard}
                    component={Dashboard}
                    options={{
                        tabBarIcon: ({ focused, color }) => (
                            <MaterialCommunityIcons
                                name='view-dashboard-outline'
                                size={focused ? FOCUSED_SIZE : DEFAULT_SIZE}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name={strings.common.nav.listings}
                    component={Listings}
                    options={{
                        tabBarIcon: ({ focused, color }) =>
                            <MaterialIcons
                                name='list-alt'
                                size={focused ? FOCUSED_SIZE : DEFAULT_SIZE}
                                color={color}
                            />
                    }}
                />
                <Tab.Screen
                    name={strings.common.nav.orders}
                    component={Orders}
                    options={{
                        tabBarIcon: ({ focused, color }) =>
                            <AntDesign
                                name='shoppingcart'
                                size={focused ? FOCUSED_SIZE : DEFAULT_SIZE}
                                color={color}
                            />
                    }}
                />
                <Tab.Screen
                    name={strings.common.nav.products}
                    component={Products}
                    options={{
                        tabBarIcon: ({ focused, color }) =>
                            <MaterialCommunityIcons
                                name='newspaper-variant-multiple'
                                size={focused ? FOCUSED_SIZE : DEFAULT_SIZE}
                                color={color}
                            />
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}