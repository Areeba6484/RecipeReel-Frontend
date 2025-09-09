import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { styles } from '../styles/global';

const ChefCard = ({ title, reviews, chefImg, chefName, location }) => {
  return (
    <View style={styles.detailBox}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.reviews}>{reviews}</Text>

      <View style={styles.chefBox}>
        <Image source={chefImg} style={styles.avatar} />
        <View>
          <Text style={styles.chefName}>{chefName}</Text>
          <View style={styles.chefLocation}>
            <Entypo name="location-pin" size={18} />
            <Text style={styles.locationText}>{location}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followText}>Follow</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChefCard;
