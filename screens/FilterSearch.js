import React from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { styles } from '../styles/global';
import { localStyles } from '../styles/local';
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { FilterOption, CategoryTag } from '../components/FilterComponents';
import AppButton from '../components/AppButton';

const FilterSearch = () => {
  const router = useRouter();

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
          <FilterOption label="All" />
          <FilterOption label="Newest" active />
          <FilterOption label="Oldest" />
          <FilterOption label="Popularity" />
        </View>

        {/* Rate Section */}
        <Text style={localStyles.filterSectionTitle}>Rate</Text>
        <View style={localStyles.filterRow}>
          {[5, 4, 3, 2, 1].map((num) => (
            <View
              key={num}
              style={[localStyles.filterTag, num === 4 && localStyles.filterTagActive]}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={[localStyles.filterTagText, num === 4 && localStyles.filterTagTextActive]}>
                  {num}
                </Text>
                <FontAwesome
                  name="star"
                  size={14}
                  color="#F4A124"
                  style={{ marginLeft: 5 }}
                />
              </View>
            </View>
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
        <AppButton title="Filter" onPress={() => router.push('/search')} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default FilterSearch;
