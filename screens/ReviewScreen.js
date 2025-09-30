import { Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { styles } from '../styles/global';
import { localStyles } from '../styles/local';
import ReviewItem from '../components/ReviewItem.js';

const ReviewScreen = () => {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('../assets/Fonts/Roboto-Regular.ttf')
  });
  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={localStyles.safeArea}>
      <ScrollView style={{ padding: 20 }} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={localStyles.headerRow}>
          <Text style={[styles.headerText, { fontSize: 20 }]}>Reviews</Text>
        </View>

        {/* Status Row */}
        <View style={styles.statsRow}>
          <Text style={styles.statsText}>200 Comments</Text>
          <Text style={[styles.statsText, { textAlign: 'right' }]}>155 Saved</Text>
        </View>

        {/* Input Row */}
        <View style={styles.inputRow}>
          <TextInput
            placeholder="Say Something..."
            style={styles.inputBox}
            multiline
          />
          <TouchableOpacity style={styles.sendButton}>
            <Text style={{ color: "#fff" }}>Send</Text>
          </TouchableOpacity>
        </View>

        {/* Comments List */}
        <View style={{ flex: 1 }}>
          <ReviewItem
            avatar={require('../assets/images/P images/chris.jpg')}
            name="Christopher Oshana"
            date="June 12,2020 - 19:35"
            comment="Lorem Ipsum tempor incididunt ut labore et dolore, inise voluptate velit esse cillium."
            likes={7}
            dislikes={1}
          />
          <ReviewItem
            avatar={require('../assets/images/P images/bella.jpg')}
            name="Bella Throne"
            date="July 12,2020 - 19:35"
            comment="Lorem Ipsum tempor incididunt ut labore et dolore, inise voluptate velit esse cillium."
            likes={9}
            dislikes={2}
          />
          <ReviewItem
            avatar={require('../assets/images/P images/kyle.jpg')}
            name="Kyle Austin"
            date="June 12,2020 - 19:35"
            comment="Lorem Ipsum tempor incididunt ut labore et dolore, inise voluptate velit esse cillium."
            likes={6}
            dislikes={1}
          />
          <ReviewItem
            avatar={require('../assets/images/P images/jen.jpg')}
            name="Jeniffern Wilson"
            date="July 12,2020 - 19:35"
            comment="Lorem Ipsum tempor incididunt ut labore et dolore, inise voluptate velit esse cillium."
            likes={9}
            dislikes={2}
          />
          <ReviewItem
            avatar={require('../assets/images/P images/kate.jpg')}
            name="Kate Johnson"
            date="June 12,2020 - 19:35"
            comment="Lorem Ipsum tempor incididunt ut labore et dolore, inise voluptate."
            likes={6}
            dislikes={1}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReviewScreen;
