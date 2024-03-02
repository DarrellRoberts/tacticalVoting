import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FetchLocation from "./components/trackLocation/FetchLocation";
import Postcode from "./components/enterPostcode/Postcode";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Searchbar from "./components/Searchbar";
import Recommendation from "./components/Recommendation";
import About from "./components/about/About";
import Election from "./components/2024Election/Election";
import Homepage from "./components/home/Homepage";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <View style={styles.background}>
  <FetchLocation />
  <Text style={styles.title}> Tactical Voting </Text>
  <View>
    <View style={styles.searchCon}>
      <Text style={styles.searchText}>Enter your postcode in the searchbar below to find the best party to vote for.</Text>
    </View>
    <Postcode />
    <StatusBar style="auto" />
  </View>
</View> */}
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Homepage} />
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Settings" component={Searchbar} />
        <Tab.Screen name="2024 General Election" component={Election} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#228b22",
    flex: 1,
    alignItems: "center",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 50,
    marginTop: 100,
  },
  searchCon: {
    backgroundColor: "#FFFFFF",
    padding: 50,
    borderRadius: 20,
  },
  searchText: {
    fontSize: 20,
    textAlign: "center",
  },
});
