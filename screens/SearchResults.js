import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, ScrollView } from 'react-native';
import { styles } from '../styles/global';
import { useFonts } from 'expo-font';
import { localStyles } from '../styles/local';
import SearchBar from '../components/SearchBar';
import RecipeItem from '../components/RecipeItem ';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const SearchResults = () => {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('../assets/Fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('../assets/Fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={localStyles.safeArea}>
      <ScrollView style={{ padding: 20 }}>
        {/* Header */}
        <View style={localStyles.headerRow}>
          <Text style={[styles.headerText, { fontSize: 20 }]}>Search Recipes</Text>
        </View>

        {/* Search Box */}
        <SearchBar
          placeholder="Search recipe"
          onFilterPress={() => console.log("Search pressed")}
        />

        {/* Search Results */}
        <View style={localStyles.resultsRow}>
          <Text style={localStyles.recentText}>Search Results</Text>
          <Text >15 results</Text>
        </View>

        {/* Recipe Items */}
        <RecipeItem
          imageSource={require('../assets/images/chops.jpg')}
          title="Lamb chops with mint"
          chef="By Chef Laura . 30 mins"
        />
        <RecipeItem
          imageSource={require('../assets/images/chickenBiryani.jpg')}
          title="Chicken Biryani"
          chef="By James Milner . 40 mins"
        />
        <RecipeItem
          imageSource={require('../assets/images/rice.jpg')}
          title="Spice roasted chicken with flavored rice"
          chef="By Mark Kelvin . 20 mins"
        />
        <RecipeItem
          imageSource={require('../assets/images/egg-rice.jpg')}
          title="Egg fried rice with pork"
          chef="By Chef Laura . 15 mins"
        />
        <RecipeItem
          imageSource={require('../assets/images/chickenBiryani.jpg')}
          title="Chicken Biryani"
          chef="By James Milner . 40 mins"
        />
        <RecipeItem
          imageSource={require('../assets/images/rice.jpg')}
          title="Spice roasted chicken with flavored rice"
          chef="By Mark Kelvin . 20 mins"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchResults;
