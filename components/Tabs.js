import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/global';

const Tabs = ({ activeTab, setActiveTab, onProcedurePress }) => {
  return (
    <View style={styles.tabBox}>
      <TouchableOpacity style={activeTab === 'Ingredients' ? styles.activeTab : styles.inactiveTab}>
        <Text style={activeTab === 'Ingredients' ? styles.activeTabText : styles.inactiveTabText}>Ingredients</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={activeTab === 'Procedure' ? styles.activeTab : styles.inactiveTab}
        onPress={onProcedurePress}
      >
        <Text style={activeTab === 'Procedure' ? styles.activeTabText : styles.inactiveTabText}>Procedure</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Tabs;
