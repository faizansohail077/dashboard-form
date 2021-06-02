import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Search } from '../../screens';
import { View } from 'react-native';
import search from '../../assests/search'
import home from '../../assests/home'
import { SvgXml } from 'react-native-svg';

const Tab = createBottomTabNavigator();

function MyTabs() {

    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
                let iconName;
                if (route.name === 'home') {
                    iconName = focused
                        ? home
                        : home;
                } else if (route.name === 'search') {
                    iconName = focused ? search : search;
                }
                return <SvgXml fill="black" height="30" width="30" xml={iconName} />;
            },
        })}

            tabBarOptions={{
                labelStyle: {
                    fontSize: 10,
                    margin: 0,
                    paddingTop: 10,
                },
                activeTintColor: '#000000',
                inactiveTintColor: '#676767',
                style: {
                    backgroundColor: 'whitesmoke',
                    paddingVertical: 10,
                }
            }}>
            <Tab.Screen name="home" component={Home} />
            <Tab.Screen name="search" component={Search} />
        </Tab.Navigator>
    );
}
export default MyTabs