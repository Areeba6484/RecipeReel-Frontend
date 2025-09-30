import React, { useState } from 'react';
import {ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';
import { Ionicons, Entypo, FontAwesome } from '@expo/vector-icons';
import { styles } from '../styles/global';
import { SafeAreaView } from 'react-native-safe-area-context';

// Modular components
import VideoHeaderCard from '../components/VideoHeaderCard.js';
import StepsList from '../components/StepsList.js';

const BiryaniProcedure = () => {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);

  function Recipe1() {
    setClicked(true);
    router.push("/biryaniscreen");
  }

  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('../assets/Fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('../assets/Fonts/Roboto-Regular.ttf')
  });
  if (!fontsLoaded) return null;

  const steps = [
    '1. Wash and soak rice for 20-30 minutes.',
    '2. Heat oil in a pan and fry sliced onions until golden.',
    '3. Add whole tomatoes, crushed chillies, ginger garlic paste and cook until tomatoes are softened.',
    '4. Add salt, turmeric, chilli powder and biryani masala. Cook until oil separates.',
    '5. Add yogurt and cook for 3 minutes.',
    '6. Add dried plums, potatoes and chicken. Cook for 3-4 minutes on high heat. Add 1/2 litres of water and cook until almost thickened but still slightly thin consistency.',
    '7. Put big pot of water on high heat, when it starts boiling add star anise, cinnamon sticks, bay leaves.',
    '8. Once water is fully boiled add soaked rice and cook until 70%, drain and layer on top of gravy.',
    '9. Layer chicken and rice in a pot. Top with saffron milk, kewra, lemon juice.',
    '10. Cover tightly and cook on low heat (dum) for 15-20 minutes.',
    '11. Gently mix and serve hot.',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1, backgroundColor: '#fff' }} contentContainerStyle={{ paddingBottom: 20 }}>

        {/* Header video + icons */}
        <VideoHeaderCard
          video={require('../assets/videos/biryani.mp4')}
          rating="4.9"
          time="40 mins"
          bookmark
        />

        {/* Details section */}
        <View style={styles.detailBox}>
          <Text style={styles.title}>Aromatic rice with juicy spiced chicken.</Text>
          <Text style={styles.reviews}>(13K Reviews)</Text>

          {/* Chef info */}
          <View style={styles.chefBox}>
            <Image source={require('../assets/images/sarah.jpg')} style={styles.avatar} />
            <View>
              <Text style={styles.chefName}>Sarah Khan</Text>
              <View style={styles.chefLocation}>
                <Entypo name="location-pin" size={18} />
                <Text style={styles.locationText}>Karachi, Pakistan</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followText}>Follow</Text>
            </TouchableOpacity>
          </View>

          {/* Tabs */}
          <View style={styles.tabBox}>
            <TouchableOpacity style={styles.inactiveTab} onPress={Recipe1}>
              <Text style={styles.inactiveTabText}>Ingredients</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.activeTab}>
              <Text style={styles.activeTabText}>Procedure</Text>
            </TouchableOpacity>
          </View>

          {/* Serve / items */}
          <View style={styles.serveRow}>
            <Ionicons name="people-outline" size={18} color={'#888'} />
            <Text style={styles.serveText}>serve</Text>
            <Text style={styles.itemCount}>10 items</Text>
          </View>

          {/* Steps */}
          <StepsList steps={steps} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BiryaniProcedure;
