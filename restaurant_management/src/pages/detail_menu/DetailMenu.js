import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLOR } from "../../contants/color";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../theme/Metric";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ICON } from "../../contants/icons";
import { useState } from "react";
import { panierStore } from "../../store";

export const DetailMenu = ({ navigation, route }) => {
  const [plats, setPlats] = useState(route.params.plats);
  const [produit, addProduit, panier_produit, quantite_produit, removeProduit] =
    panierStore((store) => [
      store.produit,
      store.addProduit,
      store.panier_produit,
      store.quantite_produit,
      store.removeProduit,
    ]);

  return (
    <View style={Styles.container}>
      <View style={Styles.menu}>
        <Image
          style={Styles.image_menu}
          source={require("../../../assets/images/menu_1.jpg")}
        />
        <View style={Styles.about}>
          <Text style={Styles.menuTitle}>A propos</Text>
          <Text style={Styles.menuDetail}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Text>
        </View>
        <View style={Styles.menu_title_section}>
          <Text style={Styles.menuTitle}>Liste plats</Text>
          <Text style={Styles.menuDetail}>
            <Text style={{ fontWeight: "bold" }}>{plats.length}</Text> Plat
            {plats.length > 1 ? "s" : ""}
          </Text>
        </View>
      </View>
      <View style={{ flexDirection:'column',padding:horizontalScale(10) }}>
        <ScrollView>
        <FlatList
        data={plats}
        renderItem={({ item }) => (
          <View style={[Styles.card, { opacity: item.isDisponible ? 1 : 0.5 }]}>
            <Image
              source={require("../../../assets/images/menu_1.jpg")}
              style={Styles.card_image}
            />
            <View style={Styles.card_description}>
              <Text style={Styles.card_description_price}>
                {" "}
                FCFA {item.prixUnitaire}
              </Text>
              <Text style={Styles.card_description_name}>{item.nom}</Text>
              <Text style={Styles.card_description_details}>
                {item.description}
              </Text>
            </View>
            <View style={Styles.card_counter}>
              {panier_produit.includes(item.id) == true ? (
                <TouchableOpacity
                  onPress={() => {
                    let qte = quantite_produit;
                    qte.splice(panier_produit.indexOf(item.id), 1);
                    let new_store = {
                      produit: produit.filter((prod) => {
                        return prod.id != item.id;
                      }),
                      panier_produit: panier_produit.filter((id) => {
                        return id != item.id;
                      }),
                      quantite_produit: qte,
                    };
                    removeProduit(new_store);
                  }}
                >
                  <Ionicons name={ICON.valid} size={moderateScale(20)} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    addProduit(item, item.id);
                  }}
                >
                  <Ionicons name={ICON.add} size={moderateScale(20)} />
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}
      />
        </ScrollView>
     
      </View>
    
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  menu: {
    flexDirection: "column",
  },
  image_menu: {
    borderBottomLeftRadius: moderateScale(50),
    borderBottomRightRadius: moderateScale(50),
    height: verticalScale(300),
  },
  about: {
    margin: horizontalScale(10),
    flexDirection: "column",
    justifyContent: "space-between",
  },
  menuTitle: {
    fontWeight: "700",
    color: COLOR.color1,
    fontSize: moderateScale(22),
  },
  menuDetail: {
    color: COLOR.color1,
    fontSize: moderateScale(15),
    fontWeight: "300",
  },
  menu_title_section: {
    margin: horizontalScale(10),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
  },
  card: {
    alignItems: "center",
    backgroundColor: COLOR.light,
    height: verticalScale(100),
    padding: horizontalScale(10),
    borderRadius: horizontalScale(10),
    flexDirection: "row",
    position: "relative",
    marginBottom: verticalScale(10),
  },
  card_image: {
    flex: 2,
    width: horizontalScale(60),
    height: verticalScale(60),
    borderRadius: moderateScale(100),
  },
  card_description: {
    flex: 8,
    flexDirection: "column",
    overflow: "scroll",
    marginLeft: horizontalScale(10),
  },
  card_description_price: {
    color: COLOR.color1,
    fontWeight: "900",
    fontSize: moderateScale(16),
    marginBottom: verticalScale(2),
  },
  card_description_name: {
    color: COLOR.color1,
    fontWeight: "400",
    fontSize: moderateScale(16),
    marginBottom: verticalScale(2),
  },
  card_description_details: {
    color: COLOR.color2,
    fontWeight: "350",
    fontSize: moderateScale(13),
    marginBottom: verticalScale(2),
  },
  card_counter: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
