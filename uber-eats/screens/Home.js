import Header from "../components/Home/Header";
import Fixing from "../components/Home/Fixing";
import { ScrollView, View } from "react-native";
import SearchBar from "../components/Home/SearchBar";
import Categories from "../components/Home/Categories";
import RestItem from "../components/Home/RestItem";
import { useEffect, useState } from "react";
import { Divider } from "react-native-elements";
import Bottom from "../components/Home/Bottom";

const YELP_KEY =
  "HivrbM8lqHPyUi5NEr8prTEQu1h5jfKgxDHfX-WSVxemJbKN3OEqezN7QGyqu2LrCcA0dzQtmKRyZS2ZxEHZfRf1UXU_EYl-1SKOWHRGTIZPOnQ6FkGLjPXKdGfiYXYx";

const Home = ({ navigation }) => {
  const [restItems, setRestItems] = useState([]);
  const [activebtn, setActiveBtn] = useState("Delivery");
  useEffect(() => {
    const getRest = () => {
      const url =
        "https://api.yelp.com/v3/businesses/search?term=restaurants&location=Liverpool";
      const apiOpt = {
        headers: {
          Authorization: `Bearer ${YELP_KEY}`,
        },
      };
      return fetch(url, apiOpt)
        .then((res) => res.json())
        .then(
          (json) => setRestItems(json.businesses)

          //   json.businesses.filter((b) =>
          //     b.transactions.includes(activebtn.toLowerCase())
          //   )
          // )
        );
    };
    getRest();
  }, []);
  return (
    <Fixing>
      <View style={{ backgroundColor: "white", paddingBottom: 10 }}>
        <Header setActiveBtn={setActiveBtn} activebtn={activebtn} />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestItem restItems={restItems} navigation={navigation} />
      </ScrollView>
      <Divider width={1} />
      <Bottom />
    </Fixing>
  );
};
export default Home;
