import { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { COLOR } from "../../contants/color"
import { horizontalScale, moderateScale, verticalScale } from "../../theme/Metric"
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ICON } from "../../contants/icons";
import { PlatController } from "../../controllers/platsController/platController";
import { panierStore } from "../../store";

export const Plats   = ({navigation,route})=>{
    const [produit,panier_produit,quantite_produit,addProduit,removeProduit] = panierStore((store)=>[store.produit,store.panier_produit,store.quantite_produit,store.addProduit,store.removeProduit])
    const [data,setData] = useState([]);
    const [dataTemp,setDataTemp] = useState([]);
    const [search,setSearch] = useState("")
    useEffect(()=>{
        PlatController.getPlats()
            .then((res)=>{
                    console.log(res.data);
                    setData(res.data);
                    setDataTemp(res.data);
            })
            .catch((err)=>{
                console.log(err.response);
            })
    },[navigation])
    useEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[navigation]);
   useEffect(()=>{
        let new_plats = dataTemp.filter((plat)=>{return plat.nom.toLowerCase().includes(search.toLowerCase()) || plat.prixUnitaire.toString().includes(search.toLowerCase())});
        setData(new_plats);
   },[search])
    return (
        <View style={Styles.container}>
                        <View style={[Styles.searchBar,{width:horizontalScale(340)}]}>
                            <Ionicons
                                style={{ flex:1,alignSelf:'center',textAlign:'center' }}
                                name={ICON.search}
                                size={horizontalScale(20)}
                                color={COLOR.color1}
                            />
                            <TextInput
                                style={{ flex:5 }}
                                placeholder="Recherche plat"
                                keyboardType='ascii-capable'
                                cursorColor={COLOR.color1}
                                onChangeText={(new_search)=>setSearch(new_search)}
                                />
                            <Ionicons
                                style={{ flex:1,textAlign:'center',alignSelf:'center', }}
                                name={ICON.filter}
                                size={horizontalScale(20)}
                                color={COLOR.color1}
                            />
                        </View>
            <FlatList
                data={data}
                renderItem={({item})=>(
                    <View style={ [Styles.card,{opacity:item.isDisponible?1:0.5}]}>
                        <Image source={require("../../../assets/images/menu_1.jpg")} style={Styles.card_image}/>
                        <View style={Styles.card_description}>
                            <Text style={Styles.card_description_price}> FCFA {item.prixUnitaire}</Text>
                            <Text style={Styles.card_description_name}>{item.nom}</Text>
                            <Text style={Styles.card_description_details}>{item.description}</Text>
                        </View>
                        <View style={Styles.card_counter}>
                            {
                                panier_produit.includes(item.id)==true
                                ?
                                (
                                    <TouchableOpacity onPress={()=>{
                                        let qte = quantite_produit;
                                        qte.splice(panier_produit.indexOf(item.id),1)
                                            let new_store = {
                                                produit : produit.filter((prod)=>{return (prod.id!=item.id)}),
                                                panier_produit : panier_produit.filter(id=>{return (id!=item.id)}),
                                                quantite_produit : qte
                                            }
                                            removeProduit(new_store)
                                    }}>
                                        <Ionicons name={ICON.valid} size={moderateScale(20)}/>
                                    </TouchableOpacity>
                                )
                                :
                                (
                                    <TouchableOpacity onPress={()=>{addProduit(item,item.id)}}>
                                        <Ionicons name={ICON.add} size={moderateScale(20)}/>
                                    </TouchableOpacity>
                                )
                            }
                            
                            
                            {/* <TouchableOpacity>
                            <Ionicons name={ICON.add} size={moderateScale(20)}/>
                            </TouchableOpacity>
                            <Text style={Styles.count_number}>0</Text>
                            <TouchableOpacity>
                            <Ionicons name={ICON.remove} size={moderateScale(20)}/>
                            </TouchableOpacity>         */}
                        </View>
                    </View>
                )}
            />
            
        </View>
    )
}
const Styles = StyleSheet.create({
    container:{
        paddingHorizontal:horizontalScale(5),
        paddingTop:verticalScale(5),
        backgroundColor:COLOR.color2,
        height:verticalScale(1200)
        
    },
    card:{
        alignItems:'center',
        backgroundColor:COLOR.light,
        height:verticalScale(100),
        padding:horizontalScale(10),
        borderRadius:horizontalScale(10),
        flexDirection:'row',
        position:'relative',
        marginBottom:verticalScale(10)
    },
    card_image:{
        flex:2,
        width:horizontalScale(60),
        height:verticalScale(60),
        borderRadius:moderateScale(100)
    },
    card_description:{
        flex:8,
        flexDirection:'column',
        overflow:'scroll',
        marginLeft:horizontalScale(10)
    },
    card_description_price:{
        color:COLOR.color1,
      fontWeight:'900',
      fontSize:moderateScale(14),
      marginBottom:verticalScale(2)  
    },
    card_description_name:{
        color:COLOR.color1,
        fontWeight:'400',
        fontSize:moderateScale(13),
        marginBottom:verticalScale(2)  
    },
    card_description_details:{
        color:COLOR.color2,
        fontWeight:'350',
        fontSize:moderateScale(12),
        marginBottom:verticalScale(2)  
    },
    card_counter:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center'
    },
    containerSearchBar:{
        backgroundColor:COLOR.light,
        shadowColor: COLOR.color1,
        shadowOffset: {
          width: 0,
          height:1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 5,
        
    },
    searchBar:{
        borderWidth:1,
        margin:horizontalScale(10),
        padding:horizontalScale(5),
        flexDirection:'row',
        alignItems:'center',
        borderRadius:horizontalScale(5),
        backgroundColor:COLOR.color2,
        borderColor:COLOR.color2
    },
    count_number:{
        fontWeight:'bold'
    }

})