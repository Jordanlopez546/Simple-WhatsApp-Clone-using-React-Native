import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";

export default function ChatsScreen() {

    const DATA = [
        {
            the_image: require('../images/mum.jpg'),
            phoneNumber: "Mum❤️❤️❤️❤️❤️",
            messageText: "I love you my son❤️",
            time: "05:30",
            countOfMessages: 1,
        },
        {
            the_image: require('../images/gtech.jpg'),
            phoneNumber: "Goodness StevJay",
            messageText: "Guy I'm through with that app's feature.",
            time: "10:00",
            countOfMessages: 1,
        },
        {
            the_image: require('../images/first.jpg'),
            phoneNumber: "Jordan Lopez",
            messageText: "Guy howfa nah",
            time: "12:23",
            countOfMessages: 2,
        },
        {
            the_image: require('../images/second.jpg'),
            phoneNumber: "+220 7103716",
            messageText: "Hy Jordan",
            time: "09:23",
            countOfMessages: 1,
        },
        {
            the_image: require('../images/aji.jpg'),
            phoneNumber: "Aji Queen❤️",
            messageText: "Am gud and you",
            time: "05:30",
            countOfMessages: 1,
        },
        {
            the_image: require('../images/third.jpg'),
            phoneNumber: "The Programmer",
            messageText: "Bring deals, let's work",
            time: "10:00",
            countOfMessages: 1,
        },
        {
            the_image: require('../images/money1.jpg'),
            phoneNumber: "Money",
            messageText: "I'm available, come get me!!",
            time: "10:00",
            countOfMessages: 1,
        },
    ]

    const Chat = ({item}) => {
        return (
            <View style={styles.wrapperContainer}>
                <View style={styles.imageMsgTextWrapper}>
                    <Image style={[styles.image, {width: 45, height:45,borderRadius:22, resizeMode:'contain'}]} source={item.the_image} />
                    <View style={styles.msgWrapper}>
                        <Text style={styles.text1}>{item.phoneNumber}</Text>
                        <Text style={styles.text2}>{item.messageText}</Text>
                    </View>
                </View>
                <View style={styles.enteredMsgWrapper}>
                    <Text style={{marginBottom: 3, color: '#589E3D', fontSize: 15}}>{item.time}</Text>
                    <View style={{width:20, height: 20, backgroundColor: '#66BB6A', alignItems: 'center', justifyContent: 'center', borderRadius:10}}>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>{item.countOfMessages}</Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style={{}}>
            <FlatList 
            data={DATA}
            keyExtractor={(item, index) => item+index}
            renderItem={({item}) => <Chat item={item} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    imageMsgTextWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    wrapperContainer: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center',
        height:75
    },
    msgWrapper: {
        marginHorizontal: 15,
        maxWidth: '70%'
    },
    enteredMsgWrapper:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    text1: {
        fontSize: 19,
        fontWeight: 'bold',
    },
    text2: {
        fontSize: 16
    }
})