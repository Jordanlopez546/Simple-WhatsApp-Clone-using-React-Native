import React, { useState, useEffect } from 'react';
import {StyleSheet, Platform, StatusBar, ActivityIndicator, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
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
    }, 2000);
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size={'100'} style={{ transform: [{ scale: 2 }] }} color={'#E0E0E0'} />
      </SafeAreaView>
    )
  }

  const CustomTabBarIcon = ({ focused, badgeCount }) => (
  <View>
    {/* Your tab bar icon here */}
    <Text>Chats</Text>
    {badgeCount > 0 && (
      <View
        style={{
          position: 'absolute',
          top: -5, // Adjust the position as needed
          right: -5, // Adjust the position as needed
          backgroundColor: 'red',
          borderRadius: 10,
          width: 20,
          height: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white' }}>{badgeCount}</Text>
      </View>
    )}
  </View>
);

  return (
    <NavigationContainer>
      <First/>
      <Tab.Navigator 
        initialRouteName="Chats"
        screenOptions={{
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#C0C0C0', 
          tabBarStyle: {
            backgroundColor: '#075E54', 
          },
          tabBarIndicatorStyle: {
            borderBottomColor: '#fff', 
            borderBottomWidth: 3, 
          },
        }}>
        <Tab.Screen name="Users" component={UsersScreen} options={{
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) => <MaterialIcons name='people' size={25} color={focused ? '#fff' : '#A0A0A0'} />,
          }}  />
        <Tab.Screen name="Chats(7)" component={ChatsScreen} options={{ tabBarLabelStyle: {textTransform: 'capitalize',  fontSize: 17}}}/>
        <Tab.Screen name="Status" component={StatusScreen} options={{ tabBarLabelStyle: {textTransform: 'capitalize', fontSize: 17}}}/>
        <Tab.Screen name="Calls" component={CallsScreen} options={{ tabBarLabelStyle: {textTransform: 'capitalize', fontSize: 17}}}/>
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
