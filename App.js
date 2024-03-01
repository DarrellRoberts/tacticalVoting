import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FetchLocation from './components/FetchLocation';
import Postcode from "./components/Postcode"

export default function App() {
return (
<View style={styles.background}>
  <FetchLocation />
  <Text style={styles.title}> Tactical Voting </Text>
  <View>
    <View style={styles.searchCon}>
      <Text style={styles.searchText}>Enter your postcode in the searchbar below to find the best party to vote for.</Text>
    </View>
    <Postcode />
    <StatusBar style="auto" />
  </View>
</View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor:'#228b22',
      flex: 1,
      alignItems: 'center',
    },
  title: {
    color: '#FFFFFF',
    fontSize: 50,
    marginTop: 100
  },
  searchCon: {
    backgroundColor: '#FFFFFF',
    padding: 50,
    borderRadius: 20 
  },
  searchText: {
    fontSize: 20,
    textAlign: "center"
  }
});