import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Video } from 'expo-av';
import { Ionicons, Entypo, FontAwesome } from '@expo/vector-icons';
import { styles } from '../styles/global';

const VideoHeaderCard = ({ video, rating, time, bookmark }) => {
  return (
    <View style={styles.videoWidgetContainer}>
      <Video
        source={video}
        rate={1.0}
        volume={1.0}
        isMuted
        resizeMode="cover"
        isLooping
        useNativeControls
        shouldPlay
        style={{ width: '100%', height: '100%' }}
      />

      {/* Menu */}
      <TouchableOpacity style={styles.menuButton}>
        <Entypo name="dots-three-horizontal" size={14} color="#000" />
      </TouchableOpacity>

      {/* Rating */}
      <View style={styles.ratingBadge}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="star" size={12} color="#F4A124" style={{ paddingRight: 3 }} />
          <Text style={styles.ratingText}>{rating}</Text>
        </View>
      </View>

      {/* Time */}
      <View style={styles.timeBadge}>
        <Ionicons name="time" size={14} style={{ paddingRight: 3 }} />
        <Text style={styles.ratingText}>{time}</Text>
      </View>

      {/* Bookmark */}
      {bookmark && (
        <View style={styles.bookMark}>
          <TouchableOpacity>
            <FontAwesome name="bookmark-o" size={18} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default VideoHeaderCard;
