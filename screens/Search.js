import React from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import { styles } from '../styles/global';
import { useFonts } from 'expo-font';
import { Ionicons, FontAwesome, Feather } from '@expo/vector-icons';
import { localStyles } from '../styles/local';
import RecipeItem from '../components/RecipeItem ';

import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function SearchScreen() {
  const router = useRouter();
  function Results() {
    router.push("/searchresults");
  }

  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('../assets/Fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('../assets/Fonts/Roboto-Regular.ttf')
  });
  if (!fontsLoaded) {
    return null
  }
  {
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
            <TouchableOpacity style={localStyles.filterButton} onPress={(Results)}>
              <Ionicons name="search-sharp" size={20} />
            </TouchableOpacity></View>

          {/* {recent search} */}
          <Text style={localStyles.recentText}>Recent Search</Text>

          {/* {items} */}


          <RecipeItem
            imageSource={require('../assets/images/ribs.jpg')}
            title="Traditional spare ribs"
            chef="By Chef John . 25 mins" />

          <RecipeItem
            imageSource={require('../assets/images/chops.jpg')}
            title="Lamb chops with mint"
            chef="By Chef Laura . 30 mins" />


          <RecipeItem
            imageSource={require('../assets/images/chickenBiryani.jpg')}
            title="Chicken Biryani"
            chef="By James Milner . 40 mins" />
          <RecipeItem
            imageSource={require('../assets/images/coleslaw.jpg')}
            title="Crunchy Nut Coleslaw"
            chef="By Chef John . 10 mins" />


          <RecipeItem
            imageSource={require('../assets/images/rice.jpg')}
            title="Spice roasted chicken with flavored rice"
            chef="By Mark Kelvin . 20 mins" />

          <RecipeItem
            imageSource={require('../assets/images/egg-rice.jpg')}
            title="Egg fried rice with pork"
            chef="By Chef Laura . 15 mins" />


















        </ScrollView>



      </SafeAreaView>


    )
  }
};