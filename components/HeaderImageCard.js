import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { styles } from '../styles/global';

const HeaderImageCard = ({ image, rating, time }) => {
  return (
      <View style={{ position: 'relative' }}>
        <Image source={image} style={styles.image} />

        {/* Menu / More Button */}
        <TouchableOpacity style={styles.menuButton}>
          <Entypo name="dots-three-horizontal" size={14} />
        </TouchableOpacity>

        {/* Rating Badge */}
        <View style={styles.ratingBadge}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="star" size={12} color="#F4A124" style={{ paddingRight: 3 }} />
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
        </View>

        {/* Time Badge */}
        <View style={styles.timeBadge}>
          <Ionicons name="time" size={14} style={{ paddingRight: 3 }} />
          <Text style={styles.ratingText}>{time}</Text>
        </View>

        {/* Bookmark */}
        <View style={styles.bookMark}>
          <TouchableOpacity>
            <FontAwesome name="bookmark-o" size={18} />
          </TouchableOpacity>
        </View>
      </View>
    
  );
};

export default HeaderImageCard;
