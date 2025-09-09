import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../styles/global';

const AppButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.signInButton} onPress={onPress}>
      <Text style={styles.signInText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
