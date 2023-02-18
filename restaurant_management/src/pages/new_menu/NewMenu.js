import { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { COLOR } from "../../contants/color";
import { PlatController } from "../../controllers/platsController/platController";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../theme/Metric";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ICON } from "../../contants/icons";
import { MenusController } from "../../controllers/menusController/menusController";
import { userRoleStore } from "../../store";

export const NewMenu = ({ navigation, route }) => {
  const [nomMenu, setnomMenu] = useState("");
  const [data, setData] = useState([]);
  const [plats_id, setPlats_id] = useState([]);
  const [user_role] = userRoleStore((store) => [store.user_role]);

  useEffect(() => {
    PlatController.getPlats()
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {});
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            enregistrer();
          }}
          style={{
            backgroundColor: COLOR.color1,
            padding: horizontalScale(10),
            marginRight: horizontalScale(3),
            borderRadius: moderateScale(100),
          }}
        >
          <Text style={{ color: COLOR.color2 }}>Enregistrer!</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  useEffect(() => {
    console.log(plats_id);
  }, [plats_id]);
  const addPlat = (id) => {
    setPlats_id([...plats_id, id]);
    console.log(plats_id);
  };
  const removePlat = (id) => {
    setPlats_id(plats_id.filter((id_) => id_ != id));
  };
  const enregistrer = () => {
    const data_menu = {
      nomMenu: nomMenu,
    };
    if (nomMenu.length < 1 || plats_id.length < 1) {
      Alert.alert("erreur", "Un menu doit contenir un nom et au moins 1 plats");
      return;
    }
    MenusController.createMenus(data_menu)
      .then((res) => {
        let id_menu = res.data;
        plats_id.map((p_id) => {
          MenusController.linkPlatToMenu(id_menu, p_id)
            .then((res) => {})
            .catch(() => {
              return;
            });
        });
        setnomMenu("");
        setPlats_id([]);
        console.log("menu cree avec success");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={{
            borderWidth: 0.5,
            padding: horizontalScale(10),
            borderColor: COLOR.color2,
            marginBottom: verticalScale(10),
          }}
          value={nomMenu}
          placeholder=" Entrez le nom du menu"
          onChangeText={(nomMenu) => {
            setnomMenu(nomMenu);
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: horizontalScale(10),
        }}
      >
        <Text style={{ color: COLOR.color1, fontWeight: "bold" }}>
          Liste des plats
        </Text>
        <Text style={{ color: COLOR.color1, fontWeight: "bold" }}>
          {" "}
          {data.length}
        </Text>
      </View>

      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View
              style={[styles.card, { opacity: item.isDisponible ? 1 : 0.5 }]}
            >
              <Image
                source={require("../../../assets/images/menu_1.jpg")}
                style={styles.card_image}
              />
              <View style={styles.card_description}>
                <Text style={styles.card_description_price}>
                  {" "}
                  FCFA {item.prixUnitaire}
                </Text>
                <Text style={styles.card_description_name}>{item.nom}</Text>
                <Text style={styles.card_description_details}>
                  {item.description}
                </Text>
              </View>
              {user_role == "cuisinier" ? (
                <View style={{ flex: 1 }}></View>
              ) : (
                <View style={styles.card_counter}>
                  {plats_id.includes(item.id) == true ? (
                    <TouchableOpacity
                      onPress={() => {
                        removePlat(item.id);
                      }}
                    >
                      <Ionicons name={ICON.valid} size={moderateScale(20)} />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() => {
                        addPlat(item.id);
                      }}
                    >
                      <Ionicons name={ICON.add} size={moderateScale(20)} />
                    </TouchableOpacity>
                  )}
                </View>
              )}
            </View>
          )}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: horizontalScale(10),
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
    fontSize: moderateScale(14),
    marginBottom: verticalScale(2),
  },
  card_description_name: {
    color: COLOR.color1,
    fontWeight: "400",
    fontSize: moderateScale(13),
    marginBottom: verticalScale(2),
  },
  card_description_details: {
    color: COLOR.color2,
    fontWeight: "350",
    fontSize: moderateScale(12),
    marginBottom: verticalScale(2),
  },
  card_counter: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
