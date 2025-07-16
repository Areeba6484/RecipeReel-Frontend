import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const RecipeCard = ({
    image, title, chef, time, rating
}) => {
    return (
        <View style={styles.imageWrapper}>

            <ImageBackground source={image} style={styles.card} imageStyle={styles.image}>
                <View style={styles.overlay}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.chef}> By {chef}</Text>

                    <View style={styles.footer}>
                        <View style={styles.row}>
                            <Ionicons name="time-outline" size={16} color="#fff" />
                            <Text style={styles.time}>{time}</Text></View>
                        <View style={styles.row}>
                            <Ionicons name="star" size={16} color='#F4A124' style={{ marginLeft: 10 }} />
                            <Text style={styles.time}>{rating}</Text></View>
                        <TouchableOpacity><Ionicons name="bookmark-outline" size={18} color={'#fff'} style={{ marginLeft: 4 }} /></TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        height: 160,
        borderRadius: 15,
        overflow: 'hidden',
        marginBottom: 15,

    },
    imageWrapper: {
        shadowColor: '#fff',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        justifyContent: 'center',
        shadowOpacity: 0.58,
        shadowRadius: 12.00,

        // elevation: 5,
       
    },
    image: {
        resizeMode: 'stretch'
    },
    overlay: {

        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        padding: 12,
        justifyContent: 'flex-end'
    },
    title: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    chef: {
        color: '#eee',
        fontSize: 13,
        marginTop: 4,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    time: {
        color: '#fff',
        fontSize: 13,
        // marginLeft:4    
    },
});
export default RecipeCard