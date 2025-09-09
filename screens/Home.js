import { SafeAreaView, ScrollView, View, Text, Image } from "react-native";
import { useFonts } from "expo-font";
import { localStyles } from "../styles/local";
import { useRouter } from "expo-router";

import SearchBar from "../components/SearchBar";
import CategoryList from "../components/CategoryList";
import RecipeCardHome from "../components/RecipeCardHome";
import NewRecipeCard from "../components/NewRecipeCard";
import BottomNavBar from "../components/BottomNavBar";

import chickenBiryani from "../assets/images/chickenBiryani.jpg";
import butterChicken from "../assets/images/butterChicken.jpg";
import steakImg from "../assets/images/steak.jpg";
import pastaImage from "../assets/images/pasta.jpg";
import jamesImg from "../assets/images/james.jpg";
import lauraImg from "../assets/images/laura.jpg";

const Home = () => {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../assets/Fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("../assets/Fonts/Roboto-Regular.ttf"),
  });
  if (!fontsLoaded) return null;

  const categories = [
    "All", "Pakistani", "Indian", "Chinese", "Asian", "American", "French", "Turkish"
  ];

  const popularRecipes = [
    { title: "Chicken Biryani", time: "40 Mins", rating: 4.9, image: chickenBiryani, description: "Aromatic rice with juicy spiced chicken." },
    { title: "Crunchy Nut Coleslaw", time: "10 Mins", rating: 3.5, image: require("../assets/images/coleslaw.jpg"), description: "Crisp,Creamy,and nutty crunch!." },
    { title: "Butter Chicken", time: "25 Mins", rating: 4.7, image: butterChicken, description: "Silky curry with tender chicken bites." },
    { title: "Classic Greek Salad", time: "15 Mins", rating: 4.5, image: require("../assets/images/salad.jpg"), description: "A fresh mix of veggies & feta." },
  ];

  const newRecipes = [
    { title: "Steak with Tomato", rating: 4, image: steakImg, chefImg: jamesImg, chefName: "James Milner", time: "20 mins" },
    { title: "Grilled Chicken Wrap", rating: 3, image: require("../assets/images/wrap.jpg"), chefImg: require("../assets/images/sarah.jpg"), chefName: "Sarah Khan", time: "18 mins" },
    { title: "Pasta Delight", rating: 3, image: pastaImage, chefImg: lauraImg, chefName: "Laura", time: "25 mins" },
  ];

  const handleRecipePress = () => router.push("/biryaniscreen");
  const handleFilterPress = () => router.push("/filter");

  return (
    <SafeAreaView style={localStyles.safeArea}>
      <ScrollView style={{ padding: 20 }}>
        {/* Header */}
        <View style={localStyles.headerRow}>
          <View>
            <Text style={[localStyles.headerText, { fontSize: 20 }]}>Hello Jhon</Text>
            <Text style={[localStyles.subHeaderText, { fontSize: 14 }]}>what are you cooking today?</Text>
          </View>
          <Image source={require("../assets/images/avatar.jpg")} style={localStyles.avatar} />
        </View>

        {/* Search */}
        <SearchBar placeholder="Search recipe" onFilterPress={handleFilterPress} />

        {/* Categories */}
        <CategoryList
          categories={categories}
          activeCategory="All"
          onPress={(cat) => console.log("Selected category:", cat)}
        />

        {/* Popular Recipes */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 20 }}>
          {popularRecipes.map((item, idx) => (
            <RecipeCardHome key={idx} item={item} onPress={handleRecipePress} />
          ))}
        </ScrollView>

        {/* New Recipes */}
        <Text style={[localStyles.new, { marginTop: 20, fontWeight: "bold" }]}>New Recipes</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 10 }}>
          {newRecipes.map((recipe, idx) => (
            <NewRecipeCard key={idx} recipe={recipe} />
          ))}
        </ScrollView>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavBar
        onHome={() => router.push("/home")}
        onSaved={() => router.push("/savedrecipes")}
        onAdd={() => console.log("Add pressed")}
        onNotifications={() => console.log("Notifications pressed")}
        onProfile={() => router.push("/profile")}
      />
    </SafeAreaView>
  );
};

export default Home;
