import React from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import { styles } from '../styles/global';
import { useFonts } from 'expo-font';
import { Ionicons, FontAwesome, Feather } from '@expo/vector-icons';
import { localStyles } from '../styles/local';
import RecipeItem from '../components/RecipeItem ';

export default function SearchResults() {

  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('../assets/Fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('../assets/Fonts/Roboto-Regular.ttf')
  });
  if (!fontsLoaded) {
    return null
  }

  return (
    <SafeAreaView style={localStyles.safeArea}>
      <ScrollView style={{ padding: 20 }}>
        <View style={localStyles.headerRow}>
          <View>
            <Text style={[styles.headerText, { fontSize: 20 }]}>Search Recipes</Text>

          </View></View>


        {/* {Search Box} */}
        <View style={localStyles.searchContainer}>
          <View style={localStyles.searchBox}>
            <Ionicons name="search" size={20} style={localStyles.searchIcon} />
            <TextInput placeholder='Search recipe' style={localStyles.inputBox} placeholderTextColor={'#333'}></TextInput></View>

        </View>

        {/* {recent search} */}
        <Text style={localStyles.recentText}>Search Results</Text><Text style={{ textAlign: 'right', marginBottom: 10 }}>15 results</Text>


        {/* {items} */}


        <RecipeItem
          imageSource={require('../assets/images/chops.jpg')}
          title="Lamb chops with mint"
          chef="By Chef Laura . 30 mins" />


        <RecipeItem
          imageSource={require('../assets/images/chickenBiryani.jpg')}
          title="Chicken Biryani"
          chef="By James Milner . 40 mins" />

        <RecipeItem
          imageSource={require('../assets/images/rice.jpg')}
          title="Spice roasted chicken with flavored rice"
          chef="By Mark Kelvin . 20 mins" />

        <RecipeItem
          imageSource={require('../assets/images/egg-rice.jpg')}
          title="Egg fried rice with pork"
          chef="By Chef Laura . 15 mins" />

        <RecipeItem
          imageSource={require('../assets/images/chickenBiryani.jpg')}
          title="Chicken Biryani"
          chef="By James Milner . 40 mins" />

        <RecipeItem
          imageSource={require('../assets/images/rice.jpg')}
          title="Spice roasted chicken with flavored rice"
          chef="By Mark Kelvin . 20 mins" />


















      </ScrollView>



    </SafeAreaView>
  );
};