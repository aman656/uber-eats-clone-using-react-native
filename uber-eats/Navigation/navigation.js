import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from "../screens/Detail";
import Home from "../screens/Home";
import { Provider } from "react-redux";
import store from "../store/store";
import Completed from "../screens/Completed";

const Stack = createNativeStackNavigator();

const NavigationRoot = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="detail" component={Detail} />
          <Stack.Screen name="complete" component={Completed} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default NavigationRoot;
