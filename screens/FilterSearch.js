import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/global';
import { localStyles } from '../styles/local';
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { FilterOption, CategoryTag } from '../components/FilterComponents.js';
import AppButton from '../components/AppButton.js';
import { SafeAreaView } from 'react-native-safe-area-context';

const FilterSearch = () => {
  const router = useRouter();

  // ✅ State for filters
  const [selectedTime, setSelectedTime] = useState("All");
  const [selectedRate, setSelectedRate] = useState(5);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('../assets/Fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('../assets/Fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={localStyles.safeArea}>
      <ScrollView style={{ padding: 20, flex: 1 }}>
        {/* Header */}
        <View style={localStyles.headerRow}>
          <Text style={[styles.headerText, { fontSize: 20 }]}>Filter Search</Text>
        </View>

        {/* Time Section */}
        <Text style={localStyles.filterSectionTitle}>Time</Text>
        <View style={localStyles.filterRow}>
          {["All", "Newest", "Oldest", "Popularity"].map((time) => (
            <FilterOption
              key={time}
              label={time}
              active={selectedTime === time}
              onPress={() => setSelectedTime(time)}
            />
          ))}
        </View>

        {/* Rate Section */}
        <Text style={localStyles.filterSectionTitle}>Rate</Text>
        <View style={localStyles.filterRow}>
          {[5, 4, 3, 2, 1].map((num) => (
            <TouchableOpacity
              key={num}
              style={[
                localStyles.filterTag,
                selectedRate === num && localStyles.filterTagActive,
              ]}
              onPress={() => setSelectedRate(num)}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text
                  style={[
                    localStyles.filterTagText,
                    selectedRate === num && localStyles.filterTagTextActive,
                  ]}
                >
                  {num}
                </Text>
                <FontAwesome
                  name="star"
                  size={14}
                  color="#F4A124"
                  style={{ marginLeft: 5 }}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Category Section */}
        <Text style={localStyles.filterSectionTitle}>Category</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 30 }}>
          {[
            "All", "Cereal", "Vegetables", "Dinner",
            "Chinese", "Local Dish", "Fruit",
            "BreakFast", "Spanish", "Lunch"
          ].map((cat) => (
            <CategoryTag
              key={cat}
              label={cat}
              active={selectedCategory === cat}
              onPress={() => setSelectedCategory(cat)}
            />
          ))}
        </View>

        {/* Filter Button */}
        <AppButton title="Filter" onPress={() => router.push('/search')} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default FilterSearch;
