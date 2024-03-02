import { useState, useEffect } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import Recommendation from "../Recommendation";

import * as Location from "expo-location";

export default function FetchLocation() {
  const [location, setLocation] = useState([]);
  const [errorLonLat, setErrorLonLat] = useState(null);
  const [errorCon, setErrorCon] = useState(null);
  const [con, setCon] = useState(null);

  const fetchLonLat = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorLonLat("Permission to access location was denied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location.coords);
    return;
  };

  let text = "Waiting...";
  if (errorLonLat) {
    text = errorLonLat;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const fetchCon = async () => {
    if (location) {
      try {
        const data = fetch(
          `https://api.postcodes.io/postcodes?lon=${location?.longitude}&lat=${location?.latitude}`
        );
        // const data = await fetch("https://api.postcodes.io/postcodes?lon=0.009871&lat=51.125024")
        const conData = await data.json();
        const conResData = await conData;
        setCon(conResData.result);
      } catch (error) {
        setErrorCon(error);
      }
    } else {
      setCon("Location not found.");
    }
  };

  const handlePress = () => {
    fetchLonLat();
    fetchCon();
  };

  // useEffect(() => {
  //     fetchLonLat()},
  //     [])
  console.log(
    `https://api.postcodes.io/postcodes?lon=${location?.longitude}&lat=${location?.latitude}`
  );
  console.log(location);
  con ? console.log(con[0]?.parliamentary_constituency) : null;
  return (
    <View>
      <Pressable
        title="Track location"
        onPress={handlePress}
        style={styles.button}
      >
        <Text style={styles.text}>Track Location</Text>
      </Pressable>
      <View>
        {con ? (
          <View>
            <Text style={styles.text}>
              {con[0]?.parliamentary_constituency}
            </Text>
            <Recommendation votingArea={con[0]?.parliamentary_constituency} />
          </View>
        ) : (
          <Text style={styles.text}>Waiting... {con}</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
