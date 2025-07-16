import React from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View, Image, ScrollView, Pressable } from 'react-native';
import { styles } from '../styles/global';
import { useFonts } from 'expo-font';
import { Ionicons, FontAwesome, Feather } from '@expo/vector-icons';
import { localStyles } from '../styles/local';
import steakImg from '../assets/images/steak.jpg';
import butterChicken from '../assets/images/butterChicken.jpg';
import pastaImage from '../assets/images/pasta.jpg';
import chickenBiryani from '../assets/images/chickenBiryani.jpg';
import jamesImg from '../assets/images/james.jpg';
import lauraImg from '../assets/images/laura.jpg';
import { useRouter } from 'expo-router';




export default function Home() {

  const router = useRouter();
  function Recipe1() {
    router.push("/biryaniscreen");
  }
  function Filter() {
    router.push("/filter");
  }
  function Home() {
    router.push("/home");
  }
  function Saved() {
    router.push("/savedrecipes");
  }
  function Profile() {
    router.push("/profile");
  }
  const greekSalad = require('../assets/images/salad.jpg');
  const Crunchy = require('../assets/images/coleslaw.jpg');


  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('../assets/Fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('../assets/Fonts/Roboto-Regular.ttf')
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={localStyles.safeArea}>
      <ScrollView style={{ padding: 20 }}>
        <View style={localStyles.headerRow}>
          <View>
            <Text style={[styles.headerText, { fontSize: 20 }]}>Hello Jhon</Text>
            <Text style={[styles.subHeaderText, { fontSize: 14 }]}>what are you cooking today?</Text>
          </View>
          <Image source={require('../assets/images/avatar.jpg')} style={localStyles.avatar} />
        </View>

        {/* {Search Box} */}
        <View style={localStyles.searchContainer}>
          <View style={localStyles.searchBox}>
            <Ionicons name="search" size={20} style={localStyles.searchIcon} />
            <TextInput placeholder='Search recipe' style={localStyles.inputBox} placeholderTextColor={'#333'}></TextInput></View>
          <TouchableOpacity style={localStyles.filterButton} onPress={(Filter)}>
            <Ionicons name="options-outline" size={20} />
          </TouchableOpacity></View>

        {/* {categories} */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 20 }}>
          <View style={localStyles.categoryContainer}>
            {['All', 'Pakistani', 'Indian', 'Chinese', 'Asian', 'American', 'French', 'Turkish'].map((cat, index) => (
              <TouchableOpacity
                key={cat}
                style={[localStyles.categoryButton, cat === 'All' && localStyles.categoryActive]}>
                <Text style={{ color: cat === 'All' ? '#E0115F' : '#333', fontWeight: '600' }}>{cat}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>


        {/* {Popular recipies} */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 20 }}>
          {[

            {
              title: 'Chicken Biryani',
              time: '40 Mins',
              rating: '4.9',
              image: chickenBiryani,
              description: 'Aromatic rice with juicy spiced chicken.'

            },

            {
              title: 'Crunchy Nut Coleslaw',
              time: '10 Mins',
              rating: '3.5',
              image: Crunchy,
              description: 'Crisp,Creamy,and nutty crunch!.'
            },
            {
              title: 'Butter Chicken',
              time: '25 Mins',
              rating: '4.7',
              image: butterChicken,
              description: 'Silky curry with tender chicken bites.'

            },
            {
              title: 'Classic Greek Salad',
              time: '15 Mins',
              rating: '4.5',
              image: greekSalad,
              description: 'A fresh mix of veggies & feta.'

            },

          ].map((item, idx) => (
            <TouchableOpacity key={idx} onPress={Recipe1}>
              <View style={localStyles.card}>
                <View style={localStyles.wrapper}>
                  <Image source={item.image} style={localStyles.cardImage} /></View>
                <View style={localStyles.ratingBadge}>
                  <Ionicons name='star' size={12} color="#FFD700" />
                  <Text style={localStyles.starText}>{item.rating}</Text>



                </View>
                <Text style={localStyles.cardTitle}>{item.title}</Text>
                <Text style={localStyles.cardDescription}>{item.description}</Text>
                <Text style={localStyles.cardsubTitle}>Time</Text>
                <Text style={localStyles.cardTime}>{item.time}</Text>
                <Ionicons name='bookmark-outline' size={18} style={localStyles.bookmarkIcon} />
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* {new recipies}     */}

        <Text style={[localStyles.new, { marginTop: 20, fontWeight: 'bold' }]}>New Recipes</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 10 }}>
          <View style={localStyles.newRecipeCard}>
            <View style={localStyles.newRecipeInfo}>
              <Text style={localStyles.recipeName}>Steak with Tomato</Text>
              <View style={localStyles.row}>
                <FontAwesome name='star' size={14} style={{ marginLeft: 10, color: "#FFD700" }} />
                <FontAwesome name='star' size={14} style={{ marginLeft: 10, color: "#FFD700" }} />
                <FontAwesome name='star' size={14} style={{ marginLeft: 10, color: "#FFD700" }} />
                <FontAwesome name='star' size={14} style={{ marginLeft: 10, color: "#FFD700" }} />
                <FontAwesome name='star' size={14} style={{ marginLeft: 10 }} />

              </View>
              <View style={[localStyles.row, { marginTop: 5 }]}>
                <Image source={jamesImg} style={localStyles.avatar} />
                <Text style={localStyles.chefText}>By James Milner.</Text>

                {/* <Text style={localStyles.timeText}>4.5</Text> */}
                <Ionicons name='time-outline' size={14} style={{ marginLeft: 10 }} />
                <Text style={localStyles.timeText}>20 mins</Text>
              </View>
            </View>
            <Image source={steakImg} style={localStyles.newRecipePhoto} />
          </View>

          <View style={localStyles.newRecipeCard}>
            <View style={localStyles.newRecipeInfo}>
              <Text style={localStyles.recipeName}>Grilled Chicken Wrap</Text>
              <View style={localStyles.row}>
                <FontAwesome name='star' size={14} style={{ marginLeft: 10, color: "#FFD700" }} />
                <FontAwesome name='star' size={14} style={{ marginLeft: 10, color: "#FFD700" }} />
                <FontAwesome name='star' size={14} style={{ marginLeft: 10, color: "#FFD700" }} />
                <FontAwesome name='star' size={14} style={{ marginLeft: 10 }} />
                <FontAwesome name='star' size={14} style={{ marginLeft: 10 }} />


              </View>
              <View style={[localStyles.row, { marginTop: 5 }]}>
                <Image source={require('../assets/images/sarah.jpg')} style={localStyles.avatar} />
                <Text style={localStyles.chefText}>By Sarah Khan.</Text>

                {/* <Text style={localStyles.timeText}>4.5</Text> */}
                <Ionicons name='time-outline' size={14} style={{ marginLeft: 10 }} />
                <Text style={localStyles.timeText}>18 mins</Text>
              </View>
            </View>
            <Image source={require('../assets/images/wrap.jpg')} style={localStyles.newRecipePhoto} />
          </View>


          <View style={localStyles.newRecipeCard}>
            <View style={localStyles.newRecipeInfo}>
              <Text style={localStyles.recipeName}>Pasta Delight</Text>
              <View style={localStyles.row}>
                <FontAwesome name='star' size={14} style={{ marginLeft: 10, color: "#FFD700" }} />
                <FontAwesome name='star' size={14} style={{ marginLeft: 10, color: "#FFD700" }} />
                <FontAwesome name='star' size={14} style={{ marginLeft: 10, color: "#FFD700" }} />
                <FontAwesome name='star' size={14} style={{ marginLeft: 10 }} />
                <FontAwesome name='star' size={14} style={{ marginLeft: 10 }} />


              </View>
              <View style={[localStyles.row, { marginTop: 5 }]}>
                <Image source={lauraImg} style={localStyles.avatar} />
                <Text style={localStyles.chefText}>By laura.</Text>

                {/* <Text style={localStyles.timeText}>3.5</Text> */}
                <Ionicons name='time-outline' size={14} style={{ marginLeft: 10 }} />
                <Text style={localStyles.timeText}>25 mins</Text>
              </View>
            </View>
            <Image source={pastaImage} style={localStyles.newRecipePhoto} />
          </View>
        </ScrollView>





      </ScrollView>

      <View style={localStyles.iconContainer}>
        <TouchableOpacity onPress={(Home)}><Ionicons name='home-outline' size={24} /></TouchableOpacity>

        <TouchableOpacity onPress={(Saved)} ><Ionicons name='bookmark-outline' size={24} /></TouchableOpacity>

        <View style={localStyles.addButton}>
          <TouchableOpacity><FontAwesome name='plus' style={localStyles.plusText} /></TouchableOpacity>
        </View>
        <TouchableOpacity ><Ionicons name='notifications-outline' size={24} /></TouchableOpacity>
        <TouchableOpacity onPress={(Profile)}><Ionicons name='person-outline' size={24} /></TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}