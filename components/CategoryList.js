import { ScrollView, TouchableOpacity, Text, View } from "react-native";
import { localStyles } from "../styles/local";

const CategoryList = ({ categories, activeCategory, onPress }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 20 }}>
      <View style={localStyles.categoryContainer}>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[localStyles.categoryButton, cat === activeCategory && localStyles.categoryActive]}
            onPress={() => onPress(cat)}
          >
            <Text style={{ color: cat === activeCategory ? '#E0115F' : '#333', fontWeight: '600' }}>
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default CategoryList;
