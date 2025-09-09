// components/ProfileTabs.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/global';

const ProfileTabs = ({ tabs, activeTab, onTabPress }) => {
  return (
    <View style={styles.tabBox}>
      {tabs.map((tab, index) => {
        const isActive = activeTab === tab.key;
        return (
          <TouchableOpacity
            key={index}
            style={isActive ? styles.activeTab : styles.inactiveTab}
            onPress={() => onTabPress(tab.key)}
          >
            <Text style={isActive ? styles.activeTabText : styles.inactiveTabText}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ProfileTabs;
