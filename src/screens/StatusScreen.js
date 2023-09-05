import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import { Feather, FontAwesome} from '@expo/vector-icons';

export default function StatusScreen() {
    
    const DATA = [
        {
            the_image: require('../images/img2.jpg'),
            phoneNumber: "+220 7103716",
            callText: "29 May, 7:07 pm",
            time: "09:23",
            countOfMessages: 1,
        },
        {
            the_image: require('../images/mum.jpg'),
            phoneNumber: "Mum❤️❤️❤️❤️❤️",
            callText: "8 minutes ago",
            time: "05:30",
            countOfMessages: 1,
        },
        {
            the_image: require('../images/gtech.jpg'),
            phoneNumber: "Goodness StevJay",
            callText: "11 minutes ago",
            time: "10:00",
            countOfMessages: 1,
        },
        {
            the_image: require('../images/first.jpg'),
            phoneNumber: "Jordan Lopez",
            callText: "16 minutes ago",
            time: "12:23",
            countOfMessages: 2,
        },
        {
            the_image: require('../images/second.jpg'),
            phoneNumber: "+220 7103716",
            callText: "51 minutes ago",
            time: "09:23",
            countOfMessages: 1,
        },
        {
            the_image: require('../images/aji.jpg'),
            phoneNumber: "Aji Queen❤️",
            callText: "Today, 12:50 pm",
            time: "05:30",
            countOfMessages: 1,
        },
        {
            the_image: require('../images/third.jpg'),
            phoneNumber: "The Programmer",
            callText: "Today, 12:27 pm",
            time: "10:00",
            countOfMessages: 1,
        },
        
    ]

    const Status = ({item, index}) => {
        return (

            <View style={[styles.wrapperContainer, {height: index === 0 ? 110 : ''}]}>
                <View style={[styles.imageMsgTextWrapper, {marginTop: index === 0 ? -35 : 0, marginVertical: index ===3 ? 35 : 0}]}>
                    {
                        (index !== 0 && index <= 3) ? (
                            <TouchableOpacity activeOpacity={-0.5} style={[styles.statusBorder]}>
                                <Image style={[ styles.statusBorderImg]} source={item.the_image} />
                            </TouchableOpacity>
                        ) : (
                            (index === 0) ? (
                                <TouchableOpacity activeOpacity={-0.5} style={[styles.callLink]}>
                                    <Image style={[styles.image, styles.imageSize]} source={item.the_image} />
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity activeOpacity={-0.5}>
                                    <Image style={[styles.image, styles.imageSize]} source={item.the_image} />
                                </TouchableOpacity>
                            )
                        )
                    }

                    {
                        index === 0 ? (
                            <View style={[styles.msgWrapper, { maxWidth: '90%' }]}>
                            <TouchableOpacity activeOpacity={-0.5}>
                                <Text style={styles.text1}>My status</Text>
                                <Text style={[styles.text2, { marginLeft: 0 }]}>Today, 11:23 am</Text>
                            </TouchableOpacity>
                            <View style={styles.recentContainer}>
                                <Text style={styles.recent}>Recent updates</Text>
                            </View>
                            </View>
                        ) : (
                            (index !== 0 && index === 3) ? (
                            <View style={[styles.msgWrapper, { maxWidth: '90%'}]}>
                            <TouchableOpacity activeOpacity={-0.5}>
                                <Text style={styles.text1}>My status</Text>
                                <Text style={[styles.text2, { marginLeft: 0 }]}>Today, 11:23 am</Text>
                            </TouchableOpacity>
                            <View style={styles.recentContainer}>
                                <Text style={styles.recent}>Viewed updates</Text>
                            </View>
                            </View>
                            ) : (
                            <TouchableOpacity activeOpacity={-0.5} style={styles.msgWrapper}>
                                <Text style={styles.text1}>{item.phoneNumber}</Text>
                                <Text style={[styles.text2, { marginLeft: -3 }]}> {item.callText}</Text>
                            </TouchableOpacity>
                            )
                        )
                    }

                </View>
                {
                index === 0 ? 
                <TouchableOpacity activeOpacity={-0.8} style={styles.enteredMsgWrapper}>
                    <Feather name="more-horizontal" size={25} color='#559C59' />
                </TouchableOpacity>
                : 
                ''
                }
            </View>

        )
    }

    return (
        <View style={{flex: 1 }}>
            <FlatList 
            data={DATA}
            keyExtractor={(item, index) => item+index}
            renderItem={({item, index}) => <Status item={item} index={index} />}
            />
            <View style={styles.cameraPencilContainer}>
                <TouchableOpacity activeOpacity={-0.5} style={styles.pencilContainer}>
                    <FontAwesome name="pencil" size={25} color={'#559C20'} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={-0.5} style={styles.cameraContainer}>
                    <Feather name="camera" size={25} color={'#000'} />
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
        fontSize: 17, 
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
        marginTop: -33
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
        justifyContent: 'center', 
        alignItems: 'center',
    }, 
    imageSize: {
        width: 45, 
        height:45,
        borderRadius:22, 
        resizeMode:'contain'
    }, 
    statusBorder: {
        borderWidth: 5, 
        borderColor: '#559C59', 
        width: 45, 
        height:45,
        borderRadius:22,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    statusBorderImg: {
        width: 38, 
        height:38,
        resizeMode:'contain',
        borderRadius:22, 
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
        backgroundColor: '#E0E0E0', 
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