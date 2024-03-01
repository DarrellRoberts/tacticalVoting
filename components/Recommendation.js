import {useState, useEffect} from "react"
import {Text, StyleSheet, View} from "react-native"

export default function Recommendation({votingArea}) {
const [area, setArea] = useState([])

const getData = async () => {
try {
  const res = await fetch("https://tvoting-backend.onrender.com/region")
  const data = await res.json()
  setArea(data);
} catch (error) {
  console.error(error)
  }
}

useEffect(() => { getData()}, [])
const findArea = area?.find(cont => cont.constituency === votingArea)

  return (
    <>
    <Text style={styles.text}>
    You should vote for: </Text>
    <Text style={styles.text}> {findArea ? findArea?.recommendation : "???"}</Text>
    </>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    color: "white",
    textAlign: "center"
  }
})