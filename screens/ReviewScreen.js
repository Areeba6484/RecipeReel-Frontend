import React from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import { styles } from '../styles/global';
import { useFonts } from 'expo-font';
import { Ionicons, FontAwesome, Feather } from '@expo/vector-icons';
import { localStyles } from '../styles/local';
import ReviewItem from '../components/ReviewItem';

export default function ReviewScreen() {

  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('../assets/Fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('../assets/Fonts/Roboto-Regular.ttf')
  });
  if (!fontsLoaded) {
    return null
  }
  {
    return (
      <SafeAreaView style={localStyles.safeArea}>
        <ScrollView style={{ padding: 20 }}>
          <View style={localStyles.headerRow}>
            <View>
              <Text style={[styles.headerText, { fontSize: 20 }]}>Reviews</Text>

            </View></View>
          {/* {status row} */}
          <View style={styles.statsRow}>
            <Text style={styles.statsText}>200 Comments</Text><Text style={[styles.statsText, { textAlign: 'right' }]}>155 Saved</Text>

          </View>
          {/* {input Row} */}
          <View style={styles.inputRow}>
            {/* <Text>Leave a comment</Text> */}
            <TextInput placeholder='Say Something....' style={styles.inputBox} multiline={true} />
            <TouchableOpacity style={styles.sendButton}>
              <Text style={{ color: "#fff" }}>Send</Text>

            </TouchableOpacity>
          </View>
          {/* {comments} */}
          <ScrollView style={{ flex: 1 }}>
            <ReviewItem
              avatar={require('../assets/images/P images/chris.jpg')}
              name="Christopher Oshana "
              date="June 12,2020 - 19:35"

              comment="Lorem  Inpsum tempor incididunt ut labore et dolore,inise voluptate velit esse cillium. "
              likes={7}
              dislikes={1} />


            <ReviewItem
              avatar={require('../assets/images/P images/bella.jpg')}
              name="Bella Throne "
              date="July 12,2020 - 19:35"

              comment="Lorem  Inpsum tempor incididunt ut labore et dolore,inise voluptate  velit esse cillium. "
              likes={9}
              dislikes={2} />

            <ReviewItem
              avatar={require('../assets/images/P images/kyle.jpg')}
              name="Kyle Austin "
              date="June 12,2020 - 19:35"

              comment="Lorem  Inpsum tempor incididunt ut labore et dolore,inise voluptate  velit esse cillium. "
              likes={6}
              dislikes={1} />

            <ReviewItem
              avatar={require('../assets/images/P images/jen.jpg')}
              name="Jeniffern Wilson"
              date="July 12,2020 - 19:35"

              comment="Lorem  Inpsum tempor incididunt ut labore et dolore,inise voluptate  velit esse cillium. "
              likes={9}
              dislikes={2} />

            <ReviewItem
              avatar={require('../assets/images/P images/kate.jpg')}
              name="Kate Johnson "
              date="June 12,2020 - 19:35"

              comment="Lorem  Inpsum tempor incididunt ut labore et dolore,inise voluptate. "
              likes={6}
              dislikes={1} />



          </ScrollView>

        </ScrollView>
      </SafeAreaView>
    )
  }
};