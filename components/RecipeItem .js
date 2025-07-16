import React from 'react';
import { View, Text, Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native';


const RecipeItem = ({ imageSource, title, chef }) => {
    return (
        // <View style={style.recipeCard}>
        <View style={style.item}>
            <View style={style.imageWrapper}>
                <Image source={imageSource} style={style.image} /></View>
            <View style={style.textBox}>
                <Text style={style.title}>{title}</Text>
                <Text style={style.chef}>{chef}</Text>
            </View>

        </View>
        // </View>
    );
};

const style = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        padding: 10,
       marginBottom: 10,
         },
         imageWrapper: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        
        shadowOpacity: 0.58,
        shadowRadius: 12.00,
        // android:{

        // elevation: 5,},
        borderRadius:20
       

    },

   
    image: {
         borderRadius:20,
        height: 110,
        width: 110,
        

        resizeMode: 'stretch',
        
    },
    textBox: {
        marginLeft: 10,
        flex: 1

    },
    title: {
        fontWeight: 'bold',
        color: '#333',
        fontSize: 14,
    },
    chef: {
        fontSize: 12,
        marginTop: 2,
    },
})
export default RecipeItem;