import { View, Text, Image } from "react-native";

const About = ({ route }) => {
  return (
    <View>
      <AboutImage image={route.params.image} />
      <Text
        style={{
          fontSize: 25,
          fontWeight: "700",
          marginTop: 10,
          marginHorizontal: 15,
        }}
      >
        {route.params.name}
      </Text>
      <Text
        style={{
          marginTop: 10,
          marginHorizontal: 15,
          fontWeight: "400",
          fontSize: 15.5,
        }}
      >
        {route.params.categories[0].title}
        {/* {"  "} {route.params.categories[1].title}
        {"  "}
        {route.params.categories[2].title} */}
        {"  "}
        {`. $$ .`}
        {"  "}
        {`${route.params.rating}  *`}
        {"  "}
        {`(${route.params.reviews}+)`}
        {/* Thai . Comfort Food . $$ . 4* (2918+){" "} */}
      </Text>
    </View>
  );
};

const AboutImage = ({ image }) => (
  <Image
    style={{ width: "100%", height: 200 }}
    source={{
      uri: image,
    }}
  />
);

export default About;
