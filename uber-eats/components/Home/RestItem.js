import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const RestItem = ({ navigation, restItems }) => {
  return (
    <>
      {restItems.map((r, index) => (
        <View key={index}>
          <TouchableOpacity
            activeOpacity={1}
            style={{ marginBottom: 25 }}
            key={index}
            onPress={() =>
              navigation.navigate("detail", {
                name: r.name,
                image: r.image_url,
                price: r.price,
                reviews: r.review_count,
                rating: r.rating,
                categories: r.categories,
              })
            }
          >
            <View
              style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
            >
              <>
                <Image
                  style={{ width: "100%", height: 180 }}
                  source={{
                    uri: r.image_url,
                  }}
                />
                <TouchableOpacity
                  style={{ position: "absolute", top: 20, right: 20 }}
                >
                  <MaterialCommunityIcons
                    name="heart-outline"
                    size={25}
                    color="#fff"
                  />
                </TouchableOpacity>
              </>
              <Info name={r.name} rating={r.rating} />
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </>
  );
};
const Info = ({ name, rating }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <View>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>{name}</Text>
        <Text style={{ fontSize: 15, color: "gray" }}>20-25 . min </Text>
      </View>
      <View
        style={{
          backgroundColor: "#eee",
          height: 30,
          width: 30,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 15,
        }}
      >
        <Text>{rating}</Text>
      </View>
    </View>
  );
};
export default RestItem;
