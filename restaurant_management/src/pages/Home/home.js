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
import { Commande } from "../Commandes/Commande";
import { userRoleStore } from "../../store";

const Tab = createBottomTabNavigator();
export const Home = ()=>{
    const [user_role] = userRoleStore((store)=>[store.user_role])
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
                else if (route.name === 'historique commande')
                {
                    iconName = focused ? ICON.archive_sharp : ICON.archive_outline;
                }

    
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: COLOR.color1,
              tabBarInactiveTintColor: COLOR.color2,
        } 
        )}
    >
        {
            user_role == "client" ? (
                <>
                <Tab.Screen options={{unmountOnBlur: true}} name="menus" component={Menus}/>
                <Tab.Screen options={{unmountOnBlur: true}} name="plats" component={Plats}/>
                <Tab.Screen options={{unmountOnBlur: true}} name="panier" component={Panier}/>
                <Tab.Screen options={{unmountOnBlur: true}} name="historique commande" component={Commande}/>
                </>
            ) : user_role == "cuisinier" ? 
            (
                <>
                    <Tab.Screen options={{unmountOnBlur: true}} name="plats" component={Plats}/>
                    <Tab.Screen options={{unmountOnBlur: true}} name="nouveau plat" component={NewPlat}/>
                    <Tab.Screen options={{unmountOnBlur: true}} name="nouveau menu" component={NewMenu}/>
                </>
            ) : user_role == "livreur" ?
            (
                <Tab.Screen options={{unmountOnBlur: true}} name="historique commande" component={Commande}/>
            ) :(<Tab.Screen name="default" component={()=>{return (<></>)}}/>)
        }
        
        
        
        
    </Tab.Navigator>
)

}
