import { useState } from "react";
import { Text, StyleSheet, View, Keyboard } from "react-native";
import Searchbar from "../Searchbar";
import Recommendation from "../Recommendation";

export default function Postcode() {
  const [contin, setContin] = useState([]);
  const [searchbar, setSearchBar] = useState("");

  const matchPostcode = async () => {
    try {
      const res = await fetch(
        `https://api.postcodes.io/postcodes/${searchbar}`
      );
      const data = await res.json();
      const resData = await data;
      setContin(resData.result);
      Keyboard.dismiss();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text style={styles.paragraph}>Constituency: </Text>
      <Text style={styles.paragraph}>
        {contin ? contin?.parliamentary_constituency : "Constituency not found"}
      </Text>
      <Searchbar setSearchBar={setSearchBar} matchPostcode={matchPostcode} />
      <Recommendation votingArea={contin?.parliamentary_constituency} />
    </View>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
