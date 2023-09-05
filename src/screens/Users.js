import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function UsersScreen() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.communityContainer}>
                <Text style={{fontSize: 18}}>Start your community</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 40, 
        width: '100%'
    },
    communityContainer: {
        width: 330, 
        height: 50, 
        backgroundColor: '#589E3D', 
        borderRadius: 20, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
})