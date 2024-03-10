import { Text, View, StyleSheet, Pressable } from "react-native"

export default function Homepage({navigation}) {
    return (
        <>
        <View style={styles.background}>
          <Text style={styles.title}> Tactical Voting </Text>
          <Text style={styles.text}>To find which party to vote for, either track your location or search for your postcode below</Text>
          <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Track Location")}
          >
            <Text style={styles.text}>Track Location</Text>
          </Pressable>
          <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Enter Postcode")}
          >
            <Text style={styles.text}>Enter Postcode</Text>
          </Pressable>
        </View>
        </>
    )
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
        textAlign: 'center'
      },
  });