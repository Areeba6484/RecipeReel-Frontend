import React from "react";
import { View, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { styles } from "../styles/global";

const SocialIconsRow = () => {
  return (
    <View style={styles.iconContainer}>
      <TouchableOpacity>
        <FontAwesome name="google" size={40} />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome name="facebook-square" size={40} />
      </TouchableOpacity>
    </View>
  );
};

export default SocialIconsRow;
