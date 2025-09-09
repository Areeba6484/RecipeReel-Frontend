import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const RecipeItem = ({ imageSource, title, chef }) => {
    return (
        <View style={styles.item}>
            <View style={styles.imageWrapper}>
                <Image source={imageSource} style={styles.image} />
            </View>
            <View style={styles.textBox}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.chef}>{chef}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.58,
        shadowRadius: 12.0,
        elevation: 5, // ✅ added for Android shadow
        borderRadius: 20,
    },
    image: {
        borderRadius: 20,
        height: 110,
        width: 110,
        resizeMode: 'stretch',
    },
    textBox: {
        marginLeft: 10,
        flex: 1,
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
});

export default RecipeItem;
