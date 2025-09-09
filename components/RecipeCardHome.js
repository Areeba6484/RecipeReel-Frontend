// components/RecipeCardHome.js
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { localStyles } from '../styles/local';

const RecipeCardHome = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={localStyles.card}>
      <View style={localStyles.wrapper}>
        <Image source={item.image} style={localStyles.cardImage} />
      </View>
      <View style={localStyles.ratingBadge}>
        <Ionicons name='star' size={12} color="#FFD700" />
        <Text style={localStyles.starText}>{item.rating}</Text>
      </View>
      <Text style={localStyles.cardTitle}>{item.title}</Text>
      <Text style={localStyles.cardDescription}>{item.description}</Text>
      <Text style={localStyles.cardsubTitle}>Time</Text>
      <Text style={localStyles.cardTime}>{item.time}</Text>
      <Ionicons name='bookmark-outline' size={18} style={localStyles.bookmarkIcon} />
    </TouchableOpacity>
  );
};

export default RecipeCardHome;
