import {useState} from "react"
import {TextInput, Pressable, StyleSheet, Text, View } from "react-native"

export default function Searchbar({setSearchBar, matchPostcode}) {
const [inputValue, setInputValue] = useState("")

// const onSearch = () => {
  // setSearchBar(inputValue)
// }

const handleInputChange = (text) => {
  setInputValue(text);
  setSearchBar(text);
}
  return (
<View>
<TextInput 
value={inputValue}
onChangeText={handleInputChange}
style={styles.searchbar}
/>
<Pressable 
title="Search"
onPress={matchPostcode}
style={styles.button}
>
<Text style={styles.text}>Search</Text>
</Pressable>
</View>
  )
}

const styles = StyleSheet.create({
  searchbar: {
    backgroundColor: "white",
    color: "black",
    width: "100%",
    paddingVertical: 5,
    fontSize: 20,
  },
  button: {
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});