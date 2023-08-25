import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform, StatusBar, FlatList, TextInput, Alert, Button, ActivityIndicator, SectionList, Pressable, RefreshControl, SafeAreaView } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native';

import ChatsScreen from './src/screens/ChatsScreen';
import StatusScreen from './src/screens/StatusScreen';
import CallsScreen from './src/screens/CallsScreen';
import UsersScreen from './src/screens/Users';

const App = () => {
  const [underLineText, setUnderLineText] = useState('CHATS');
  const [loading, setLoading] = useState(true);

  const handleTabPress = (tab) => {
    setUnderLineText(tab);
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size={'large'} color={'#E0E0E0'} />
      </SafeAreaView>
    )
  }

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <View style={styles.mainView}>
          <View style={styles.whatsappView}>
            <Text style={styles.whatsappText}>WhatsApp</Text>
          </View>
          <View style={styles.iconsView}>
            <TouchableOpacity activeOpacity={-1}>
              <Feather style={styles.icon} color='#E0E0E0' name='camera' size={25} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={-1}>
              <Feather style={styles.icon} color='#E0E0E0' name='search' size={25} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={-1}>
              <Feather style={styles.icon} color='#E0E0E0' name='more-vertical' size={25} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.secondView}>
          <TouchableOpacity onPressIn={()=>handleTabPress('USERS')} style={[underLineText==='USERS' && styles.underLineText]}>
            <MaterialIcons name='people' size={20} color='#E0E0E0' />
          </TouchableOpacity>
          <TouchableOpacity onPressIn={()=>handleTabPress('CHATS')} style={[underLineText==='CHATS' && styles.underLineText]}>
            <Text style={styles.pagesText}>CHATS</Text>
          </TouchableOpacity>
          <TouchableOpacity onPressIn={()=>handleTabPress('STATUS')} style={[underLineText==='STATUS' && styles.underLineText]}>
            <Text style={styles.pagesText}>STATUS</Text>
          </TouchableOpacity>
          <TouchableOpacity onPressIn={()=>handleTabPress('CALLS')} style={[underLineText==='CALLS' && styles.underLineText]}>
            <Text style={styles.pagesText}>CALLS</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.thirdView}>
          {underLineText === 'USERS' && <UsersScreen />}
        {underLineText === 'CHATS' && <ChatsScreen />}
        {underLineText === 'STATUS' && <StatusScreen />}
        {underLineText === 'CALLS' && <CallsScreen />}
      </View>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  thirdView: {
    flex: 1,
    // backgroundColor: 'black',
    // marginTop: 10
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
