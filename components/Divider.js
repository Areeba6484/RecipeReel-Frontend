import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/global";

const Divider = ({ text }) => {
  return (
    <View style={styles.dividerContainer}>
      <View style={styles.line} />
      <Text style={styles.orText}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
};

export default Divider;
