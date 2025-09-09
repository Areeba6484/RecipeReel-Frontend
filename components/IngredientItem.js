import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/global';

const IngredientItem = ({ name, qty }) => {
  return (
    <View style={styles.ingredientItem}>
      <Text style={styles.ingredientText}>{name}</Text>
      <Text style={styles.ingredientQty}>{qty}</Text>
    </View>
  );
};

export default IngredientItem;
