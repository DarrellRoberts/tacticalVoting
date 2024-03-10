import { StatusBar } from "expo-status-bar";
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import About from "./components/about/About";
import Election from "./components/2024Election/Election";
import HomeStack from "./components/home/HomeStack";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="2024 General Election" component={Election} />
    </Tab.Navigator>
    </NavigationContainer>
  )
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
  tabStyle: {
    display: "none"
  }
});
