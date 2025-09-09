import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/global';

const StepsList = ({ steps }) => {
  return (
    <View style={{ marginVertical: 10 }}>
      <Text style={styles.sectionTitle}>Cooking Steps</Text>
      {steps.map((step, index) => (
        <Text key={index} style={styles.stepText}>
          {step}
        </Text>
      ))}
    </View>
  );
};

export default StepsList;
