import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const ReviewItem = ({ avatar, name, date, comment, likes, dislikes }) => {
    return (
        <View style={styles.container}>
            <View style={styles.userRow}>
                <Image source={avatar} style={styles.avatar} />
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.date}>{date}</Text>
                </View>
            </View>

            <Text style={styles.comment}>{comment}</Text>

            <View style={styles.reactionContainer}>
                <View style={styles.reaction}>
                    <TouchableOpacity>
                        <FontAwesome name="thumbs-up" size={16} color={'#F4A124'} />
                    </TouchableOpacity>
                    <Text style={styles.reactionText}>{likes}</Text>
                </View>

                <View style={styles.reaction}>
                    <TouchableOpacity>
                        <FontAwesome name="thumbs-down" size={16} color={'#F4A124'} />
                    </TouchableOpacity>
                    <Text style={styles.reactionText}>{dislikes}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    userRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 12,
    },
    name: {
        fontWeight: "bold",
        fontSize: 14,
        color: "#111",
        paddingLeft: 5,
    },
    date: {
        fontSize: 12,
        color: '#888',
        paddingLeft: 5,
    },
    comment: {
        fontSize: 14,
        color: '#333',
        paddingHorizontal: 16,
        marginBottom: 6,
    },
    reactionContainer: {
        flexDirection: 'row',
        paddingHorizontal: 16,
    },
    reaction: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 20,
        marginRight: 10, // ✅ replaced gap (not supported in RN yet)
    },
    reactionText: {
        marginLeft: 5,
        fontSize: 13,
        color: '#333',
    },
});

export default ReviewItem;
