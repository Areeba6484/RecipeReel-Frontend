import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { Ionicons, Entypo, FontAwesome } from '@expo/vector-icons'; // removed unused icons
import { styles } from '../styles/global';
import { Video } from 'expo-av';
import { useRouter } from 'expo-router';

const BiryaniProcedure = () => {
  const steps = [
    '1. Wash and soak rice for 20-30 minutes.',
    '2. Heat oil in a pan and fry sliced onions until golden.',
    '3. Add whole tomatoes, crushed chillies, ginger garlic paste and cook until tomatoes are softened.',
    '4. Add salt, turmeric, chilli powder and biryani masala. Cook until oil separates.',
    '5. Add yogurt and cook for 3 minutes',
    '6. Add dried plums, potatoes and chicken. Cook for 3-4 minutes on high heat. Add 1/2 litres of water and cook until almost thickened but still slightly thin consistency',
    '7. Put big pot of water on high heat, when it starts boiling add star anise, cinnamon sticks, bay leaves',
    '8. Once water is fully boiled add soaked rice and cook until 70%, drain and layer on top of gravy.',
    '9. Layer chicken and rice in a pot. Top with saffron milk, kewra, lemon juice.',
    '10. Cover tightly and cook on low heat (dum) for 15-20 minutes.',
    '11. Gently mix and serve hot.',
  ];

  const [clicked, setClicked] = useState(false);
  const router = useRouter();

  function Recipe1() {
    setClicked(true);
    router.push("/biryaniscreen");
  }

  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('../assets/Fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('../assets/Fonts/Roboto-Regular.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1, backgroundColor: '#fff' }} contentContainerStyle={{ paddingBottom: 20 }}>

        {/* Header video with icons */}
        <View style={styles.videoWidgetContainer}>
          <Video 
            source={require('../assets/videos/biryani.mp4')}
            rate={1.0}
            volume={1.0}
            isMuted={true}
            resizeMode='cover'
            isLooping
            useNativeControls
            shouldPlay
            style={{
              width: '100%',
              height: '100%',
            }}
          />

          <TouchableOpacity style={styles.menuButton}>
            <Entypo name="dots-three-horizontal" size={14} />
          </TouchableOpacity>

          <View style={styles.ratingBadge}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name="star" size={12} color={'#F4A124'} style={{ paddingRight: 3 }} />
              <Text style={styles.ratingText}>4.9</Text>
            </View>
          </View>

          {/* Time badge */}
          <View style={styles.timeBadge}>
            <Ionicons name="time" size={14} style={{ paddingRight: 3 }} />
            <Text style={styles.ratingText}>40 mins</Text>
          </View>

          <View style={styles.bookMark}>
            <TouchableOpacity>
              <FontAwesome name="bookmark-o" size={18} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Details section */}
        <View style={styles.detailBox}>
          <Text style={styles.title}>Aromatic rice with juicy spiced chicken.</Text>
          <Text style={styles.reviews}>(13K Reviews)</Text>

          {/* Chef section */}
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

          {/* Serve and items */}
          <View style={styles.serveRow}>
            <Ionicons name="people-outline" size={18} color={'#888'} />
            <Text style={styles.serveText}>serve</Text>
            <Text style={styles.itemCount}>10 items</Text>
          </View>

          {/* Cooking steps */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Cooking Steps</Text>
            {steps.map((step, index) => (
              <Text key={index} style={styles.stepText}>{step}</Text>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BiryaniProcedure;
