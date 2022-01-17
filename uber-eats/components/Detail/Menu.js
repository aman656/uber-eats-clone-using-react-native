import { View, Text, Image, ScrollView } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Divider } from "react-native-elements";
import { addItem } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Menu = ({ menulist, name }) => {
  const cart = useSelector((state) => state.cartReducer.items);
  const dispatch = useDispatch();

  const sendtoCart = (item, isChecked) =>
    dispatch(addItem({ item: { ...item, checked: isChecked }, name: name }));

  const isRight = (cart, item) =>
    Boolean(cart.find((c) => c.name === item.name));

  return (
    <ScrollView>
      {menulist.map((m, index) => (
        <View key={index}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 10,
            }}
          >
            <BouncyCheckbox
              iconStyle={{ borderRadius: 0, borderColor: "lightgray" }}
              fillColor="green"
              isChecked={isRight(cart, m)}
              onPress={(isChecked) => sendtoCart(m, isChecked)}
            />
            <TextInfo name={m.name} desc={m.desc} price={m.price} />
            <ImageInfo image={m.image} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export const TextInfo = ({ name, price, desc }) => {
  return (
    <View style={{ width: 200, justifyContent: "space-evenly" }}>
      <Text style={{ fontSize: 19, fontWeight: "700" }}>{name}</Text>
      <Text style={{ fontStyle: "italic", fontSize: 16 }}>{desc}</Text>
      <Text>${price}</Text>
    </View>
  );
};
export const ImageInfo = () => {
  return (
    <View>
      <Image
        style={{ width: 100, height: 100, borderRadius: 8 }}
        source={{
          uri: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        }}
      />
    </View>
  );
};

export default Menu;
