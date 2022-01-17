import { View, StyleSheet, Text } from "react-native";
const Orders = ({ name, price }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nam}>{name}</Text>
      <Text style={styles.pr}>${price}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#999",
  },
  nam: {
    fontSize: 16,
    fontWeight: "600",
  },
  pr: {
    opacity: 0.7,
    fontSize: 16,
  },
});
export default Orders;
