import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import { styles } from '../styles/global';
import { useFonts } from 'expo-font';
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';
import { localStyles } from '../styles/local';
import RecipeCard from '../components/RecipeCard.js';
import ProfileTabs from '../components/ProfileTabs.js';
import { useRouter } from 'expo-router';
import { useState } from 'react';

const Profile = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('recipe');

  const tabs = [
    { key: 'recipe', label: 'Recipe' },
    { key: 'videos', label: 'Videos' },
    { key: 'reviews', label: 'Reviews' },
  ];

  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('../assets/Fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('../assets/Fonts/Roboto-Regular.ttf')
  });
  if (!fontsLoaded) return null;

  const navigateTab = (key) => {
    setActiveTab(key);
    if (key === 'reviews') router.push('/review');
  };

  return (
    <SafeAreaView style={localStyles.safeArea}>
      <ScrollView style={{ padding: 20 }} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={localStyles.headerRow}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity>
              <Entypo name="dots-three-horizontal" size={24} style={{ marginRight: 100 }} />
            </TouchableOpacity>
            <Text style={[styles.headerText, { fontSize: 20 }]}>Profile</Text>
          </View>
        </View>

        {/* Profile Info */}
        <View style={styles.profileContainer}>
          <Image
            source={require('../assets/images/avatar.jpg')}
            style={{ width: 90, height: 90, borderRadius: 45, marginBottom: 10 }}
          />
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={styles.title}>Jhon Doe</Text>
            <Text>Chef</Text>
            <Text style={{ color: '#444', marginTop: 4 }}>
              Private Chef{'\n'}Passionate about food and life.
            </Text>
          </View>
        </View>

        {/* Stats */}
        <View style={styles.statBox}>
          <Text>
            Recipe{"\n"}
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>4</Text>
          </Text>
          <Text>
            Followers{"\n"}
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>2.5M</Text>
          </Text>
          <Text>
            Following{"\n"}
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>259</Text>
          </Text>
        </View>

        {/* Tabs */}
        <ProfileTabs tabs={tabs} activeTab={activeTab} onTabPress={navigateTab} />

        {/* Recipe Cards */}
        {activeTab === 'recipe' && (
          <View style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <RecipeCard
                image={require('../assets/images/ribs.jpg')}
                title="Traditional Spare Ribs"
                chef="Chef John"
                time="25 mins"
                rating="4.0"
              />
              <RecipeCard
                image={require('../assets/images/chops.jpg')}
                title="Lamb Chops with mint"
                chef="Chef Laura"
                time="30 mins"
                rating="4.5"
              />
              <RecipeCard
                image={require('../assets/images/chickenBiryani.jpg')}
                title="Chicken Biryani"
                chef="Chef James Milner"
                time="40 mins"
                rating="4.9"
              />
            </ScrollView>
          </View>
        )}
      </ScrollView>

      {/* Bottom Nav */}
      <View
        style={{
          position: 'absolute',
          right: 0,
          left: 0,
          bottom: 0,
          height: 80,
          backgroundColor: '#fff',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity onPress={() => router.push('/home')}>
          <Ionicons name="home-outline" size={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/savedrecipes')}>
          <Ionicons name="bookmark-outline" size={24} />
        </TouchableOpacity>
        <View style={localStyles.addButton}>
          <TouchableOpacity>
            <FontAwesome name="plus" style={localStyles.plusText} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/profile')}>
          <Ionicons name="person-outline" size={24} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
