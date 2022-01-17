import { View, Image, Text, ScrollView, FlatList } from "react-native";

const categorieslist = [
  { id: 1, title: "Pick-up", image: require("../../assets/shopping-bag.png") },
  {
    id: 2,
    title: "Desserts",
    image: require("../../assets/desserts.png"),
  },
  {
    id: 3,
    title: "Bakery Items",
    image: require("../../assets/bread.png"),
  },
  {
    id: 4,
    title: "Fast Food",
    image: require("../../assets/fast-food.png"),
  },
  {
    id: 5,
    title: "Soft Drinks",
    image: require("../../assets/soft-drink.png"),
  },
];

const Categories = (props) => {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "white",
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categorieslist.map((c) => (
          <View
            key={c.id}
            style={{ alignItems: "center", marginRight: 17, marginLeft: 3 }}
          >
            <Image
              source={c.image}
              style={{ width: 60, height: 40, resizeMode: "contain" }}
            />
            <Text style={{ fontSize: 15, fontWeight: "700" }}>{c.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
