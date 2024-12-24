import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import { Colors } from './../../constants/Colors';
export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{ 
        tabBarActiveTintColor: Colors.PRIMARY}}>
        <Tabs.Screen name="home"  options={{ 
        title: 'Home',
        headerShown: false,
        tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />}}/>
        <Tabs.Screen name="inbox"  options={{ 
        title: 'Inbox',
        headerShown: false,
        tabBarIcon: ({ color }) => <AntDesign name="wechat" size={24} color={color} />}}/>
        <Tabs.Screen name="favorite"  options={{ 
        title: 'favorite',
        headerShown: false,
        tabBarIcon: ({ color }) => <AntDesign name="heart" size={24} color={color} />}}/>
        <Tabs.Screen name="profile"  options={{ 
        title: 'Profile',
        headerShown: false,
        tabBarIcon: ({ color }) => <AntDesign name="user" size={24} color={color} />}}/>
    </Tabs>
  )
}