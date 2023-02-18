import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native"
import { COLOR } from "../../contants/color";
import { CommandeController } from "../../controllers/commandeController/commandeController";
import { horizontalScale, moderateScale, verticalScale } from "../../theme/Metric";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ICON } from "../../contants/icons";
import { TouchableOpacity } from "react-native";
import { PayementController } from "../../controllers/payementController/payementController";

export const Commande = ({navigation,route})=>{
    let reload;
    useEffect(()=>{

    },[reload])
    useEffect(()=>{
        navigation.setOptions({
        headerShown:false
    })},[])
    const Tab = createMaterialTopTabNavigator();
    return (
        <Tab.Navigator style={{ marginTop:verticalScale(15) }}>
            <Tab.Screen name="En attente" component={CommandesAttente}/>
            <Tab.Screen name="Valide" component={CommandeValidees}/>
        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({

})

export const CommandesAttente = ()=>{
    const [commande , setCommande ] = useState([{}]);
    const payer = (item)=>{
        console.log('tes')
        const data = {
            client_id : 1,
            commande_id : item.id
        }
        console.log(data);
        console.log(item)
        PayementController.payer(data)
        .then((res)=>{
            item.isValide=true
            let n_item = {
                prix_total : 5000,
                isValide : true,
                client : {
                    id : 1
                },
                plat : {
                    id : 1,
                    prixUnitaire : 2500
                }
            }
            item.plat = {
                id : 1,
                prixUnitaire : 5000
            }
            CommandeController.updateCommande(item.id,n_item)
            .then((res)=>{
                console.log(res)
            }
            )
            .catch((err)=>{
                console.log(err.response)
            })
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    useEffect(()=>{
        setCommande([])
        CommandeController.getClientCommande(1)
        .then((res)=>{
            setCommande(res.data.filter(commande=>{return commande.valide == false}));
        })
        .catch((err)=>{
            console.log(err.response);
        })
    },[])
    return(
        <View style={{ padding:horizontalScale(15) }}>
        <FlatList
            data={commande}
            renderItem={({item})=>(
                <View style={{ marginTop : verticalScale(10) ,  flexDirection:'column',padding:horizontalScale(10),backgroundColor:'white',borderRadius:moderateScale(20) }}>
                    <View style={{ flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        
                        <Ionicons
                                style={{alignSelf:'center',textAlign:'center'}}
                                name={ICON.close}
                                size={horizontalScale(20)}
                                color={"red"}
                        />
                        <View style={{ flexDirection:'column',alignItems:'center',justifyContent:'center' }}>
                            <Text style={{ color:COLOR.color1,fontWeight:'700' }}> 2 plats </Text>
                            <Text style={{ color:'gray' }}> 12/09/2023 16:30</Text>
                        </View>
                        <View style={{ justifyContent:'center' }}>
                            <Text style={{ color:COLOR.color1 }}>{item.prix_total} <Text style={{ fontWeight:'900' }}>FCFA</Text></Text>
                        </View>
                        {/* <TouchableOpacity>
                            <Ionicons
                                    style={{alignSelf:'center',textAlign:'center'}}
                                    name={ICON.delete_trash}
                                    size={horizontalScale(20)}
                                    color={'red '}
                            />
                        </TouchableOpacity> */}
                    </View>
                    <TouchableOpacity onPress={()=>{payer(item)}} style={{ marginTop:verticalScale(5), alignItems:'center',padding:moderateScale(10), backgroundColor:COLOR.color1 }}>
                        <Text style={{ color:COLOR.light }}>Payer</Text>
                    </TouchableOpacity>
                </View>
            )}
        />
        </View>
    )
}

export const CommandeValidees = ()=>{
    const [commande , setCommande ] = useState([{}])
    useEffect(()=>{
        setCommande([])
        CommandeController.getClientCommande(1)
        .then((res)=>{
            setCommande(res.data.filter(commande=>{return commande.valide == true}));
        })
        .catch((err)=>{
            console.log(err.response);
        })
    },[])
    return(
        <View style={{ padding:horizontalScale(15) }}>
        <FlatList
            data={commande}
            renderItem={({item})=>(
                <View style={{ flexDirection:'column',padding:horizontalScale(10),backgroundColor:'white',borderRadius:moderateScale(20) }}>
                    <View style={{ flexDirection:'row',justifyContent:'space-between',alignItems:'center' }}>
                        <Ionicons
                                style={{alignSelf:'center',textAlign:'center'}}
                                name={ICON.archive_outline}
                                size={horizontalScale(20)}
                                color={COLOR.color1}
                        />
                        <View style={{ flexDirection:'column',alignItems:'center',justifyContent:'center' }}>
                            <Text style={{ color:COLOR.color1,fontWeight:'700' }}> 2 plats </Text>
                            <Text style={{ color:'gray' }}> 12/09/2023 16:30</Text>
                        </View>
                        <View style={{ justifyContent:'center' }}>
                            <Text style={{ color:COLOR.color1 }}>10000 <Text style={{ fontWeight:'900' }}>FCFA</Text></Text>
                        </View>
                        {/* <TouchableOpacity>
                            <Ionicons
                                    style={{alignSelf:'center',textAlign:'center'}}
                                    name={ICON.delete_trash}
                                    size={horizontalScale(20)}
                                    color={'red '}
                            />
                        </TouchableOpacity> */}
                    </View>
                   
                    
                </View>
                
                
            )}
        />
        </View>
    )
}