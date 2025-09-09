import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { localStyles } from "../styles/local";

const CheckBox = ({ checked, onToggle, label }) => {
  return (
    <View style={localStyles.checkboxContainer}>
      <TouchableOpacity onPress={onToggle}>
        <FontAwesome
          name={checked ? "check-square" : "square-o"}
          size={24}
        />
      </TouchableOpacity>
      <Text style={localStyles.checkboxText}>{label}</Text>
    </View>
  );
};

export default CheckBox;
