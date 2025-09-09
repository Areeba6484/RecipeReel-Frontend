import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { Ionicons, Entypo, FontAwesome } from '@expo/vector-icons'; // removed unused imports
import { styles } from '../styles/global';
import { useRouter } from 'expo-router';
import { useState } from 'react';

const BiryaniScreen = () => {
  const [clicked, setClicked] = useState(false);
  const router = useRouter();

  function Procedure() {
    setClicked(true);
    router.push("/procedure");
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

        {/* Header image with icons */}
        <View style={{ position: 'relative' }}>
          <Image source={require('../assets/images/chickenBiryani.jpg')} style={styles.image} />

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
            <TouchableOpacity style={styles.activeTab}>
              <Text style={styles.activeTabText}>Ingredients</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.inactiveTab} onPress={Procedure}>
              <Text style={styles.inactiveTabText}>Procedure</Text>
            </TouchableOpacity>
          </View>

          {/* Serve and items */}
          <View style={styles.serveRow}>
            <Ionicons name="people-outline" size={18} color={'#888'} />
            <Text style={styles.serveText}>serve</Text>
            <Text style={styles.itemCount}>10 items</Text>
          </View>

          {/* Ingredient list */}
          {[
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
          ].map((item, index) => (
            <View key={index} style={styles.ingredientItem}>
              <Text style={styles.ingredientText}>{item.name}</Text>
              <Text style={styles.ingredientQty}>{item.qty}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BiryaniScreen;
