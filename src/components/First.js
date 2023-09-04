import React from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons'


function First(props) {
    return (
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
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 0.10,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    mainView: {
        backgroundColor: '#075E54',
        width: '100%',
        height: 75,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
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
        marginRight: -20,
    },
    icon: {
        marginHorizontal: 10
    },
    whatsappText: {
        color: '#E0E0E0',
        fontSize: 25,
        marginLeft: -7
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


export default First;