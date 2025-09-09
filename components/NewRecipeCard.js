import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { localStyles } from "../styles/local";

const NewRecipeCard = ({ recipe }) => {
  return (
    <View style={localStyles.newRecipeCard}>
      <View style={localStyles.newRecipeInfo}>
        <Text style={localStyles.recipeName}>{recipe.title}</Text>
        <View style={localStyles.row}>
          {[...Array(5)].map((_, i) => (
            <FontAwesome
              key={i}
              name="star"
              size={14}
              style={{ marginLeft: 10, color: i < recipe.rating ? "#FFD700" : "#ccc" }}
            />
          ))}
        </View>
        <View style={[localStyles.row, { marginTop: 5 }]}>
          <Image source={recipe.chefImg} style={localStyles.avatar} />
          <Text style={localStyles.chefText}>By {recipe.chefName}.</Text>
          <Ionicons name='time-outline' size={14} style={{ marginLeft: 10 }} />
          <Text style={localStyles.timeText}>{recipe.time}</Text>
        </View>
      </View>
      <Image source={recipe.image} style={localStyles.newRecipePhoto} />
    </View>
  );
};

export default NewRecipeCard;
