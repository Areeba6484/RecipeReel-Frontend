// components/RecipeCardHome.js
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { localStyles } from '../styles/local';

const RecipeCardHome = ({ item, onPress }) => {
  const [bookmarked, setBookmarked] = useState(false);

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
    // you can also call an API or parent function here
    console.log(bookmarked ? "Removed bookmark" : "Added bookmark", item.title);
  };

  return (
    <View style={localStyles.card}>
      {/* Image is clickable */}
      <TouchableOpacity onPress={onPress} style={localStyles.wrapper}>
        <Image source={item.image} style={localStyles.cardImage} />
      </TouchableOpacity>

      {/* Rating */}
      <View style={localStyles.ratingBadge}>
        <Ionicons name="star" size={12} color="#FFD700" />
        <Text style={localStyles.starText}>{item.rating}</Text>
      </View>

      {/* Title & Description */}
      <Text style={localStyles.cardTitle}>{item.title}</Text>
      <Text style={localStyles.cardDescription}>{item.description}</Text>

      {/* Time */}
      <Text style={localStyles.cardsubTitle}>Time</Text>
      <Text style={localStyles.cardTime}>{item.time}</Text>

      {/* Bookmark Icon - toggle */}
      <TouchableOpacity onPress={handleBookmark} style={localStyles.bookmarkButton}>
        <Ionicons
          name={bookmarked ? "bookmark" : "bookmark-outline"} 
          size={18}
          style={localStyles.bookmarkIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default RecipeCardHome;
