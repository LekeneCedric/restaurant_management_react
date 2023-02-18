import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { horizontalScale, moderateScale, verticalScale } from "../../theme/Metric"
import RNPickerSelect from "react-native-picker-select";
import { COLOR } from "../../contants/color";
import { PlatController } from "../../controllers/platsController/platController";

export const NewPlat = ({navigation,route})=>{
    useEffect(()=>{
        navigation.setOptions({
            headerRight: ()=>(
                <TouchableOpacity 
                    onPress={()=>{
                       addPlat()
                    }}
                    style={{ backgroundColor:COLOR.color1,padding:horizontalScale(10),marginRight:horizontalScale(3),borderRadius:moderateScale(100)
                    }}>
                    <Text style={{ color:COLOR.color2 }}>Enregistrer</Text>
                </TouchableOpacity>
            )
        })
    },[navigation])
            var name ;
            var prixUnitaire;
            var isDisponible;
            var description;
            // const [name,setName] = useState("");
            // const [prixUnitaire,setPrixUnitaire] = useState(0);
            // const [isDisponible,setIsDisponible] = useState(false);
            // const [description,setDescription] = useState("");
            const addPlat = ()=>{
                const data = {
                    nom : name,
                    prixUnitaire : prixUnitaire,
                    isDisponible : isDisponible,
                    description : description,
                    cuisinier : {
                        id : 1
                    }
                }
                console.log(data)
                PlatController.createPlats(data)
                .then((res)=>{
                    console.log(res.data)
                    // setName("")
                    // setDescription("")
                    // setPrixUnitaire(0)
                    // setIsDisponible(true)
                    name = "";
                    description = "";
                    prixUnitaire = 0 ; 
                    isDisponible = false;
                })
                .catch((err)=>{
                    console.log(err)
                })
                
            }
            return (
            <View style={ styles.container}>
               <View>
                    <TextInput
                        style={{ borderWidth:0.5,padding:horizontalScale(10),borderColor:COLOR.color2,marginBottom:verticalScale(10) }}
                        value={name}
                        placeholder="entrez le nom"
                        onChangeText={(val)=>{name=val}}
                    />
                    <TextInput
                        style={{ borderWidth:0.5,padding:horizontalScale(10),borderColor:COLOR.color2,marginBottom:verticalScale(10) }}
                        value={prixUnitaire}
                        placeholder="entrez le prixUnitaire"
                        onChangeText={val=>{prixUnitaire = val}}
                    />
                    <RNPickerSelect
                        style={{ borderWidth:0.5,padding:horizontalScale(10),borderColor:COLOR.color2,marginBottom:verticalScale(10) }}
                        onValueChange={(value) => { 
                            isDisponible = value
                        }}
                        items={[
                            { label: "Oui", value: true },
                            { label: "Non", value: false },
                        ]}
                    />
                    <TextInput
                        style={{ borderWidth:0.5,padding:horizontalScale(10),borderColor:COLOR.color2,marginBottom:verticalScale(10) }}
                        value={description}
                        placeholder = "Description"
                        onChangeText={desc => {description = desc}}
                    />
               </View>
            </View>
            )
}
const styles = StyleSheet.create({
    container:{
        padding:horizontalScale(10)
    }
});