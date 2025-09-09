import React from 'react';
import { View, Text, Image, StyleSheet, Platform } from 'react-native';

const RecipeItem = ({ imageSource, title, chef }) => {
  return (
    <View style={styles.item}>
      {/* Shadow container */}
      <View style={styles.shadowWrapper}>
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
    marginBottom: 12,
  },
  shadowWrapper: {
    borderRadius: 20,
    marginRight: 12,
    // iOS shadow
    shadowColor: '#E0115F', // magenta/pink shadow
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    // Android shadow
    elevation: 8,
    backgroundColor: Platform.OS === 'android' ? 'rgba(224,17,95,0.2)' : '#fff',
  },
  image: {
    borderRadius: 20,
    width: 110,
    height: 110,
    resizeMode: 'cover',
  },
  textBox: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333',
  },
  chef: {
    fontSize: 12,
    marginTop: 2,
    color: '#555',
  },
});

export default RecipeItem;
