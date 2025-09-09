import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { localStyles } from '../styles/local';

// ================= FilterOption =================
export const FilterOption = ({ label, active = false, onPress }) => {
  return (
    <TouchableOpacity
      style={[localStyles.filterTag, active && localStyles.filterTagActive]}
      onPress={onPress}
    >
      <Text style={[localStyles.filterTagText, active && localStyles.filterTagTextActive]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

// ================= CategoryTag =================
export const CategoryTag = ({ label, icon = null, active = false, onPress }) => {
  return (
    <TouchableOpacity
      style={[localStyles.filterTag, active && localStyles.filterTagActive]}
      onPress={onPress}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={[localStyles.filterTagText, active && localStyles.filterTagTextActive]}>
          {label}
        </Text>
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={16}
            color="#F4A124"
            style={{ marginLeft: 5 }}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};
