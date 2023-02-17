import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { View } from "react-native"
import { Menus } from "../menus/Menu";
import { Plats } from "../plats/Plat";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Commandes } from "../commandes/Commande";
import { ICON } from "../../contants/icons";
import { COLOR } from "../../contants/color";

const Tab = createBottomTabNavigator();
export const Home = ()=>{
return (
    <Tab.Navigator
        
        screenOptions={({route})=>({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'menus') {
                  iconName = focused ? ICON.menu_sharp : ICON.menu_outline;
                } else if (route.name === 'plats') {
                  iconName = focused ? ICON.plats_sharp : ICON.plats_outline;
                }
                else if (route.name === 'commandes')
                {
                    iconName = focused ? ICON.commande_sharp : ICON.commande_outline
                }
    
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: COLOR.color1,
              tabBarInactiveTintColor: COLOR.color2,
        } 
        )}
    >
        <Tab.Screen name="menus" component={Menus}/>
        <Tab.Screen name="plats" component={Plats}/>
        <Tab.Screen name="commandes" component={Commandes}/>
    </Tab.Navigator>
)

}
