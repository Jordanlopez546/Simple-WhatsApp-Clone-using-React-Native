import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from "react-native";
import { Feather, MaterialIcons, FontAwesome } from '@expo/vector-icons';

export default function CallsScreen({item}) {

    const DATA = [
        {
            the_image: require('../images/second.jpg'),
            phoneNumber: "+220 7103716",
            callText: "29 May, 7:07 pm",
            time: "09:23",
            countOfMessages: 1,
        },
        {
            the_image: require('../images/mum.jpg'),
            phoneNumber: "Mum❤️❤️❤️❤️❤️(2)",
            callText: "2 September, 3:39 pm",
            time: "05:30",
            countOfMessages: 1,
        },
        {
            the_image: require('../images/gtech.jpg'),
            phoneNumber: "Goodness StevJay",
            callText: "14 August, 1:33 pm",
            time: "10:00",
            countOfMessages: 1,
        },
        {
            the_image: require('../images/first.jpg'),
            phoneNumber: "Jordan Lopez",
            callText: "10 June, 3:54 pm",
            time: "12:23",
            countOfMessages: 2,
        },
        {
            the_image: require('../images/second.jpg'),
            phoneNumber: "+220 7103716",
            callText: "29 May, 7:07 pm",
            time: "09:23",
            countOfMessages: 1,
        },
        {
            the_image: require('../images/aji.jpg'),
            phoneNumber: "Aji Queen❤️(2)",
            callText: "19 May, 8:25 pm",
            time: "05:30",
            countOfMessages: 1,
        },
        {
            the_image: require('../images/third.jpg'),
            phoneNumber: "The Programmer",
            callText: "19 May, 6:09 pm",
            time: "10:00",
            countOfMessages: 1,
        },
        {
            the_image: require('../images/money1.jpg'),
            phoneNumber: "Money",
            callText: "16 May, 5:21 pm",
            time: "10:00",
            countOfMessages: 1,
        },
        
    ]


    const Call = ({item, index}) => {
        return (

            <View style={[styles.wrapperContainer, {height: index === 0 ? 110 : ''}]}>
                <View style={[styles.imageMsgTextWrapper, {marginTop: index === 0 ? -35 : 0}]}>
                    {
                    index === 0 ? 
                    <TouchableOpacity activeOpacity={-0.5} style={[styles.callLink]}>
                        <MaterialIcons name="attach-file" size={25} color={'#E0E0E0'} />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity activeOpacity={-0.5}>
                        <Image style={[styles.image, styles.imageSize]} source={item.the_image} />
                    </TouchableOpacity>
                    }

                    {
                    index === 0 ?
                    <View style={[styles.msgWrapper, {maxWidth: '90%'}]}>
                        <TouchableOpacity activeOpacity={-0.5}>
                            <Text style={styles.text1}>Create call link</Text>
                            <Text style={[styles.text2, {marginLeft: 0}]}>Share a link for your WhatsApp call</Text>
                        </TouchableOpacity>
                        <View style={styles.recentContainer}>
                            <Text style={styles.recent}>Recent</Text>
                        </View>
                    </View>
                    :
                    <TouchableOpacity activeOpacity={-0.5} style={styles.msgWrapper}>
                        <Text style={styles.text1}>{item.phoneNumber}</Text>
                        <Text style={styles.text2}> <Feather name="arrow-up-right" size={20} color='#66BB6A' /> {item.callText}</Text>
                    </TouchableOpacity>
                    }
                </View>
                {
                index !== 0 ? 
                <TouchableOpacity activeOpacity={-0.5} style={styles.enteredMsgWrapper}>
                    <MaterialIcons name="call" size={25} color='#559C59' />
                </TouchableOpacity>
                : 
                ''
                }
            </View>

        )
    }

    return (
        <View style={{flex: 1}}>
            <FlatList 
            data={DATA}
            keyExtractor={(item, index) => item+index}
            renderItem={({item, index}) => <Call item={item} index={index} />}
            />
            <View style={styles.cameraPencilContainer}>
                <TouchableOpacity activeOpacity={-0.5} style={styles.pencilContainer}>
                    <FontAwesome name="pencil" size={25} color={'transparent'} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={-0.5} style={styles.cameraContainer}>
                    <FontAwesome name="phone" size={25} color={'#000'} />
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    imageMsgTextWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    recent: {
        marginLeft: -9, 
        color: 'black', 
        fontSize: 18, 
    },
    recentContainer: {
        position: 'absolute', 
        left: -50, 
        top: 65,
    },
    wrapperContainer: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center',
        height:75, 
    },
    msgWrapper: {
        marginHorizontal: 15,
        maxWidth: '80%', 
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
        fontSize: 16, 
        marginLeft: -5
    }, 
    callLink: {
        width: 45, 
        height:45,
        borderRadius:22, 
        backgroundColor: '#559C59', 
        justifyContent: 'center', 
        alignItems: 'center'
    }, 
    imageSize: {
        width: 45, 
        height:45,
        borderRadius:22, 
        resizeMode:'contain'
    },
    cameraPencilContainer: {
        width: 100, 
        height:120, 
        position: 'absolute', 
        right: -5, 
        bottom: 10, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    pencilContainer: {
        width: 35, 
        height: 35, 
        backgroundColor: 'transparent',  
        justifyContent: 'center', 
        alignItems: 'center', 
        marginBottom: 15, 
        borderRadius: 10
    },
    cameraContainer: {
        width: 50, 
        height:50, 
        backgroundColor: '#559C59', 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 10
    },
})