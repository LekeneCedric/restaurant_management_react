import { useState } from "react"
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { COLOR } from "../../contants/color"
import { horizontalScale, moderateScale, verticalScale } from "../../theme/Metric"
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ICON } from "../../contants/icons";
import { panierStore } from "../../store";
import { CommandeController } from "../../controllers/commandeController/commandeController";

export const Panier = ({navigation,route})=>{
    const [produit,panier_produit,quantite_produit,addProduit,incrementProduit,decrementProduit,clearStore] = panierStore((state)=>[state.produit,state.panier_produit,state.quantite_produit,state.addProduit,state.incrementProduit,state.decrementProduit,state.clearStore])
    useState(()=>{
        navigation.setOptions({
           headerShown:false
        })
    },[navigation])
    const createCommande = ()=>{
        for (let i =0 ; i < produit.length ; i++)
        {
            const data = {
                prix_total : produit[i].prixUnitaire * quantite_produit[i],
                client : {
                    id : 1
                },
                plat : {
                    id : panier_produit[i],
                    prixUnitaire : produit[i].prixUnitaire 
                }
            }
            CommandeController.createCommande(data)
            .then((res)=>{
                console.log(res.data)
            })
            .catch((err)=>{
                console.log(err.response)
            })

        }
        clearStore()
        
    }
    return (
        <View style={{ backgroundColor:COLOR.light,height:verticalScale(1200) }}>
            {
                produit.length>0
                ?
                (
                <View style={{ }}>
                    <View style={[Styles.button_validation_container,{marginTop:verticalScale(30)}]}> 
                        <TouchableOpacity style={Styles.validationButton} onPress={()=>{createCommande()}}>
                            <Text style={Styles.ValidationButtonText}>Valider Commande</Text>
                        </TouchableOpacity>
                    </View> 
                    <View style={{ flexDirection:'row',marginTop:verticalScale(10),padding:horizontalScale(10),alignItems:'center',alignSelf:'center' }}>
                        <View style={{ flex:6 }}><Text style={{ fontWeight:'bold' }}>Article</Text></View>
                        <View style={{ flex:2.5 ,borderLeftWidth:0.5,paddingLeft:4}}><Text style={{ fontWeight:'bold' }}>Qte</Text></View>
                        <View style={{ flex:1.5 ,borderLeftWidth:0.5,paddingLeft:4}}><Text style={{ fontWeight:'bold' }}>Total</Text></View>
                    </View>
                    <FlatList
                        data={produit}
                        renderItem={({item})=>(
                            <View style={{ flexDirection:'row',marginTop:verticalScale(10),padding:horizontalScale(10),alignItems:'center',alignSelf:'center' }}>
                                <View style={{ flex:6, flexDirection:'row',justifyContent:'flex-start',alignItems:'center' }}>
                                    <Image style={{ width:horizontalScale(60), height:verticalScale(60),borderRadius:moderateScale(100) }} source={require("../../../assets/images/menu_2.jpg")}/>
                                    <Text style={{ fontWeight:'bold',marginLeft:10,color:COLOR.color1 }}>{item.nom}</Text>
                                </View> 
                                <View style={{ flex:2.5 ,flexDirection:'row',justifyContent:'space-between',padding:10}}>
                                    <View>
                                            <TouchableOpacity onPress={()=>{
                                                let val = quantite_produit[produit.indexOf(item)];
                                                let new_tab = quantite_produit;
                                                new_tab[produit.indexOf(item)] = val+1;
                                                incrementProduit(new_tab)}}>
                                                <Ionicons style={{ fontWeight:'bold' }} name={ICON.add} size={moderateScale(20)} color={COLOR.color1}/>
                                            </TouchableOpacity>
                                    </View>
                                    <View>
                                        <Text style={Styles.count_number}>{quantite_produit[produit.indexOf(item)]}</Text>
                                    </View>
                                    <View>
                                            <TouchableOpacity onPress={()=>{
                                                let new_tab = quantite_produit;
                                                new_tab[produit.indexOf(item)] = new_tab[produit.indexOf(item)] > 0 ?new_tab[produit.indexOf(item)]-1:new_tab[produit.indexOf(item)];
                                                decrementProduit(new_tab)}}>
                                                <Ionicons style={{ fontWeight:'bold' }} name={ICON.remove} size={moderateScale(20)} color={COLOR.color1}/>
                                            </TouchableOpacity> 
                                    </View>
                                </View>
                                <View style={{ flex:1.5 }}>
                                        <Text style={{ fontWeight:'bold',color:COLOR.color1 }}>{item.prixUnitaire * quantite_produit[produit.indexOf(item)] } F</Text>
                                </View>
                            </View>
                        )}
                    />
                    
                </View>
                )
                :
                (
                    <View style={{ flexDirection:'column',alignItems:'center' }}>
                        <Image style={{ 
                            height:verticalScale(400),
                            alignSelf:'center',
                            width:horizontalScale(300)
                        }} source={require("../../../assets/images/cart_empty.png")}/>
                        <Text style={{ color:COLOR.color1,fontWeight:'bold',fontSize:moderateScale(20) }}> Aucun plat ajoute au panier </Text>
                    </View>
                    
                )
            }
            
            
            

        </View>
    )
}
const Styles = StyleSheet.create({
    button_validation_container:{
        alignItems:'center',
        justifyContent:'center'
    },
    validationButton:{
        borderBottomRightRadius:horizontalScale(15),
        borderBottomLeftRadius:horizontalScale(100),
        borderTopLeftRadius:verticalScale(10),
        borderTopRightRadius:verticalScale(100),
        marginTop:verticalScale(10),
        padding:horizontalScale(15),
        backgroundColor:COLOR.color1,
        shadowColor: COLOR.color1,
        shadowOffset: {
          width: 0,
          height:1,
        },
        shadowOpacity: 1,
        shadowRadius: 2.22,
        elevation: 15,
    },
    ValidationButtonText:{
        color:COLOR.light,
        fontWeight:'700'
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
})