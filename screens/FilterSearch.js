import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/global';
import { useFonts } from 'expo-font';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { localStyles } from '../styles/local';
import { useRouter } from 'expo-router';

// ✅ Fixed typo: "lable" → "label"
const FilterOption = ({ label, active }) => (
  <TouchableOpacity style={[localStyles.filterTag, active && localStyles.filterTagActive]}>
    <Text style={[localStyles.filterTagText, active && localStyles.filterTagTextActive]}>
      {label}
    </Text>
  </TouchableOpacity>
);

const CategoryTag = ({ label, icon, active }) => (
  <TouchableOpacity style={[localStyles.filterTag, active && localStyles.filterTagActive]}>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={[localStyles.filterTagText, active && localStyles.filterTagTextActive]}>
        {label}
      </Text>
      {/* ✅ Only render icon if passed, avoids "undefined icon" error */}
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={16}
          color={'#F4A124'}
          style={{ marginLeft: 5 }}
        />
      )}
    </View>
  </TouchableOpacity>
);

const FilterSearch = () => {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('../assets/Fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('../assets/Fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null; // ✅ Prevents rendering before fonts are ready
  }

  return (
    <SafeAreaView style={localStyles.safeArea}>
      <ScrollView style={{ padding: 20, flex: 1 }}>
        {/* ✅ Header */}
        <View style={localStyles.headerRow}>
          <Text style={[styles.headerText, { fontSize: 20 }]}>Filter Search</Text>
        </View>

        {/* Time Section */}
        <Text style={localStyles.filterSectionTitle}>Time</Text>
        <View style={localStyles.filterRow}>
          <FilterOption label="All" />
          <FilterOption label="Newest" active />
          <FilterOption label="Oldest" />
          <FilterOption label="Popularity" />
        </View>

        {/* Rate Section */}
        <Text style={localStyles.filterSectionTitle}>Rate</Text>
        <View style={localStyles.filterRow}>
          {[5, 4, 3, 2, 1].map((num) => (
            <TouchableOpacity
              key={num}
              style={[localStyles.filterTag, num === 4 && localStyles.filterTagActive]}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text
                  style={[localStyles.filterTagText, num === 4 && localStyles.filterTagTextActive]}
                >
                  {num}
                </Text>
                <FontAwesome name="star" size={14} color="#F4A124" style={{ marginLeft: 5 }} />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Category Section */}
        <Text style={localStyles.filterSectionTitle}>Category</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 30 }}>
          <CategoryTag label="All" />
          <CategoryTag label="Cereal" />
          <CategoryTag label="Vegetables" />
          <CategoryTag label="Dinner" />
          <CategoryTag label="Chinese" />
          <CategoryTag label="Local Dish" active />
          <CategoryTag label="Fruit" />
          <CategoryTag label="BreakFast" />
          <CategoryTag label="Spanish" />
          <CategoryTag label="Lunch" />
        </View>

        {/* Filter Button */}
        <TouchableOpacity style={styles.signInButton} onPress={() => router.push('/search')}>
          <Text style={styles.signInText}>Filter</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FilterSearch;
