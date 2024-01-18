import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View,Dimensions } from 'react-native';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Report from '../screens/Report';

const Tab = createBottomTabNavigator();
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function MyTabs() {
    const [selectedTab, setSelectedTab] = useState('Home');

    const handleTabPress = (tabName) => {
        if (selectedTab !== tabName) {
            
            setSelectedTab(tabName);
        }
    };

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    elevation: 0,
                    backgroundColor: '#FFFFFF',
                    borderRadius: 5,
                    height: 70,
                    width: width - 70,
                    marginBottom: height/50,
                    left: 35,
                    borderRadius: 16,
                    elevation:5,
                   
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <View
                            style={{
                                backgroundColor: selectedTab === 'Home' ? '#978CD0' : '#FFFFFF',
                                width: 35,
                                height: 35,
                                borderRadius: 50,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            onTouchEnd={() => handleTabPress('Home')}
                        >
                            <Image
                                source={require('../assets/icons/home.png')}
                                style={{ width: size, height: size, tintColor: selectedTab === 'Home' ? '#FFFFFF' : '#000000' }}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Report"
                component={Report}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <View
                            style={{
                                backgroundColor: selectedTab === 'Report' ? '#978CD0' : '#FFFFFF',
                                width: 35,
                                height: 35,
                                borderRadius: 50,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            onTouchEnd={() => handleTabPress('Report')}
                        >
                            <Image
                                source={require('../assets/icons/calendar_today.png')}
                                style={{ width: size, height: size, tintColor: selectedTab === 'Report' ? '#FFFFFF' : '#000000' }}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <View
                            style={{
                                backgroundColor: selectedTab === 'Profile' ? '#978CD0' : '#FFFFFF',
                                width: 35,
                                height: 35,
                                borderRadius: 50,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            onTouchEnd={() => handleTabPress('Profile')}
                        >
                            <Image
                                source={require('../assets/icons/account_box.png')}
                                style={{ width: size, height: size, tintColor: selectedTab === 'Profile' ? '#FFFFFF' : '#000000' }}
                            />
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
