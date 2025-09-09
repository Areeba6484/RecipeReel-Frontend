import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, Text, View } from 'react-native';
import { styles } from '../styles/global';
import { useFonts } from 'expo-font';
import { localStyles } from '../styles/local';
import SearchBar from '../components/SearchBar';
import RecipeItem from '../components/RecipeItem ';
import { useRouter } from 'expo-router';

const Search = () => {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('../assets/Fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('../assets/Fonts/Roboto-Regular.ttf')
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
          onFilterPress={() => router.push("/searchresults")}
        />

        {/* Recent Search */}
        <Text style={localStyles.recentText}>Recent Search</Text>

        {/* Recipe Items */}
        <RecipeItem
          imageSource={require('../assets/images/ribs.jpg')}
          title="Traditional spare ribs"
          chef="By Chef John . 25 mins"
        />
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
          imageSource={require('../assets/images/coleslaw.jpg')}
          title="Crunchy Nut Coleslaw"
          chef="By Chef John . 10 mins"
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
