import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { View } from "react-native"
import { Menus } from "../menus/Menu";
import { Plats } from "../plats/Plat";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Commandes, Panier } from "../paniers/Panier";
import { ICON } from "../../contants/icons";
import { COLOR } from "../../contants/color";
import { NewPlat } from "../new_plat/NewPlat";
import { NewMenu } from "../new_menu/NewMenu";

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
                else if (route.name === 'panier')
                {
                    iconName = focused ? ICON.commande_sharp : ICON.commande_outline
                }
                else if (route.name === 'nouveau plat')
                {
                    iconName = focused ? ICON.add_plat_sharp : ICON.add_plat_outline
                }
                else if (route.name === 'nouveau menu')
                {
                    iconName = focused ? ICON.menu_sharp : ICON.menu_outline;
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
        <Tab.Screen name="nouveau plat" component={NewPlat}/>
        <Tab.Screen name="nouveau menu" component={NewMenu}/>
        <Tab.Screen name="panier" component={Panier}/>
    </Tab.Navigator>
)

}
