import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';
import { styles } from '../styles/global';
import { SafeAreaView } from 'react-native-safe-area-context';

// Modular Components
import HeaderImageCard from '../components/HeaderImageCard';
import ChefCard from '../components/ChefCard';
import Tabs from '../components/Tabs';
import IngredientItem from '../components/IngredientItem';

const BiryaniScreen = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Ingredients');

  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('../assets/Fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('../assets/Fonts/Roboto-Regular.ttf')
  });

  if (!fontsLoaded) return null;

  // Ingredient list
  const ingredients = [
    { name: 'Chicken (with bone)', qty: '1kg' },
    { name: 'Basmati Rice', qty: '800g' },
    { name: 'Potatoes', qty: '4 medium' },
    { name: 'Onions (sliced)', qty: '3 large' },
    { name: 'Tomatoes (chopped)', qty: '2 medium' },
    { name: 'Yogurt', qty: '1 cup' },
    { name: 'Ginger Garlic Paste', qty: '2 tbsp' },
    { name: 'Green Chilies', qty: '4-6 sliced' },
    { name: 'Coriander & Mint (chopped)', qty: 'Handful each' },
    { name: 'Lemon Juice', qty: '2 tbsp' },
    { name: 'Whole Spices', qty: '1 tbsp' },
    { name: 'Star anise, bay leaves', qty: '3-4' },
    { name: 'Cinnamon sticks', qty: '1' },
    { name: 'Biryani Masala', qty: '2 tbsp' },
    { name: 'Red Chili Powder', qty: '1 tbsp' },
    { name: 'Turmeric Powder', qty: '1/2 tbsp' },
    { name: 'Garam Masala', qty: '1/2 tbsp' },
    { name: 'Cooking Oil / Ghee', qty: '1/2 cup' },
    { name: 'Salt', qty: 'To taste' },
    { name: 'Saffron in milk', qty: 'optional' },
    { name: 'Kewra / Rose Water', qty: 'few drops' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1, backgroundColor: '#fff' }} contentContainerStyle={{ paddingBottom: 20 }}>
        
        {/* Header Image + Rating + Time + Bookmark */}
        <HeaderImageCard
          image={require('../assets/images/chickenBiryani.jpg')}
          rating="4.9"
          time="40 mins"
        />

        {/* Details + Chef */}
        <ChefCard 
          title="Aromatic rice with juicy spiced chicken."
          reviews="(13K Reviews)"
          chefImg={require('../assets/images/sarah.jpg')}
          chefName="Sarah Khan"
          location="Karachi, Pakistan"
        />

        {/* Tabs */}
        <Tabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onProcedurePress={() => router.push('/procedure')}
        />

        {/* Serve / Items */}
        <ScrollView style={{ paddingHorizontal: 20, marginTop: 10 }}>
          {activeTab === 'Ingredients' && ingredients.map((item, index) => (
            <IngredientItem key={index} name={item.name} qty={item.qty} />
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BiryaniScreen;
