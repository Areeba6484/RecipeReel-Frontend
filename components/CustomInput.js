import React from "react";
import { Text, TextInput } from "react-native";
import { styles } from "../styles/global";

const CustomInput = ({ label, placeholder, secureTextEntry }) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </>
  );
};

export default CustomInput;
