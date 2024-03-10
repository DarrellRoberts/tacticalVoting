import { createStackNavigator } from '@react-navigation/stack';
import Homepage from './Homepage';
import FetchLocation from "../trackLocation/FetchLocation";
import Postcode from "../enterPostcode/Postcode";

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
    <Stack.Navigator>
        <Stack.Screen name="Home Stack" component={Homepage} options={{headerShown: false}} />
        <Stack.Screen name="Track Location" component={FetchLocation} />
        <Stack.Screen name="Enter Postcode" component={Postcode} />
    </Stack.Navigator>
    )
}