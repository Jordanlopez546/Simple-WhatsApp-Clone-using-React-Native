import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform, StatusBar, FlatList, TextInput, Alert, Button, ActivityIndicator, SectionList, Pressable, RefreshControl, SafeAreaView } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();


import ChatsScreen from './src/screens/ChatsScreen';
import StatusScreen from './src/screens/StatusScreen';
import CallsScreen from './src/screens/CallsScreen';
import UsersScreen from './src/screens/Users';
import First from './src/components/First';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size={'100'} style={{ transform: [{ scale: 2 }] }} color={'#E0E0E0'} />
      </SafeAreaView>
    )
  }

  return (
    <NavigationContainer>
      <First/>
      <Tab.Navigator 
        initialRouteName="Chats"
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: '#C0C0C0', 
          style: {
            backgroundColor: '#075E54', 
          },
          labelStyle: {
            fontSize: 16, 
          },
          indicatorStyle: {
            borderBottomColor: '#fff', 
            borderBottomWidth: 3, 
          },
        }}>
        <Tab.Screen name="Users" component={UsersScreen} options={{
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) => <MaterialIcons name='people' size={25} color={focused ? '#fff' : '#A0A0A0'} />,
          }}  />
        <Tab.Screen name="Chats" component={ChatsScreen} />
        <Tab.Screen name="Status" component={StatusScreen} />
        <Tab.Screen name="Calls" component={CallsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  thirdView: {
    flex: 1,
  },
  secondView: {
    height: 35,
    backgroundColor: '#075E54',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  mainView: {
    backgroundColor: '#075E54',
    width: '100%',
    height: 75,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    flex: 0.12,
    
  },
  pagesText: {
    color: '#E0E0E0',
    marginHorizontal: 20,
    fontSize: 16
  },
  iconsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 4,
  },
  icon: {
    marginHorizontal: 10
  },
  whatsappText: {
    color: '#E0E0E0',
    fontSize: 25
  },
  underLineText: {
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#075E54',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default App;
