import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from "../home/Homepage"
import About from "../about/About";
import Election from "../2024Election/Election";

const Tab = createBottomTabNavigator();

export default function TabScreens() {
    return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Homepage} />
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="2024 General Election" component={Election} />
    </Tab.Navigator>
    )
}