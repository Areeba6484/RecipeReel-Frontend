import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/global';
import { localStyles } from '../styles/local';
import { useFonts } from 'expo-font';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import RecipeCard from '../components/RecipeCard.js';
import BottomNavBar from '../components/BottomNavBar.js';
import { SafeAreaView } from 'react-native-safe-area-context';

const SavedRecipes = () => {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('../assets/Fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('../assets/Fonts/Roboto-Regular.ttf')
  });

  if (!fontsLoaded) return null;

  // Recipe data
  const recipes = [
    { image: require('../assets/images/ribs.jpg'), title: 'Traditional Spare Ribs', chef: 'Chef John', time: '25 mins', rating: 4.0 },
    { image: require('../assets/images/chops.jpg'), title: 'Lamb Chops with mint', chef: 'Chef Laura', time: '30 mins', rating: 4.5 },
    { image: require('../assets/images/chickenBiryani.jpg'), title: 'Chicken Biryani', chef: 'Chef James Milner', time: '40 mins', rating: 4.9 },
    { image: require('../assets/images/butterChicken.jpg'), title: 'Butter Chicken', chef: 'Chef Ali', time: '30 mins', rating: 4.9 },
  ];

  return (
    <SafeAreaView style={localStyles.safeArea}>
      <ScrollView style={{ padding: 20 }}>
        <View style={localStyles.headerRow}>
          <Text style={[styles.headerText, { fontSize: 20 }]}>Saved Recipes</Text>
        </View>

        <View style={{ flex: 1 }}>
          {recipes.map((recipe, index) => (
            <RecipeCard
              key={index}
              image={recipe.image}
              title={recipe.title}
              chef={recipe.chef}
              time={recipe.time}
              rating={recipe.rating}
            />
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation using modular component */}
      <BottomNavBar
        onHome={() => router.push('/home')}
        onSaved={() => router.push('/savedrecipes')}
        onAdd={() => { }}
        onNotifications={() => { }}
        onProfile={() => router.push('/profile')}
      />
    </SafeAreaView>
  );
};

export default SavedRecipes;
