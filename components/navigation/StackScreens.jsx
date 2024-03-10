import { createStackNavigator } from '@react-navigation/stack';
import Homepage from "../home/Homepage";
import FetchLocation from "../trackLocation/FetchLocation";
import Postcode from "../enterPostcode/Postcode";

const Stack = createStackNavigator();

export default function StackScreens() {
    return (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="Track Location" component={FetchLocation} />
        <Stack.Screen name="Enter Postcode" component={Postcode} />
    </Stack.Navigator>
    )
}