import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import colors from "../assets/colors/colors";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

export default Details = ({ route, navigation }) => {
  const { item } = route.params;

  const renderIngredientsItem = ({ item }) => {
    return (
      <View
        style={[
          styles.ingredientItemWrapper,
          {
            marginLeft: item.id === "1" ? 20 : 0,
          },
        ]}
      >
        <Image source={item.image} style={styles.ingredientImage} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.headerLeft}>
              <Feather name="chevron-left" size={12} color={colors.textDark} />
            </View>
          </TouchableOpacity>
          <View style={styles.headerRight}>
            <MaterialCommunityIcons
              name="star"
              size={12}
              color={colors.white}
            />
          </View>
        </View>
      </SafeAreaView>

      <View style={styles.titlesWrapper}>
        <Text style={styles.title}>{item.title}</Text>
      </View>

      <View style={styles.priceWrapper}>
        <Text style={styles.priceText}>¢{item.price}</Text>
      </View>

      <View style={styles.infoWrapper}>
        <View style={styles.infoLeftWrapper}>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Size</Text>
            <Text style={styles.infoItemText}>
              {item.sizeName} {item.sizeNumber}"
            </Text>
          </View>

          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Crust</Text>
            <Text style={styles.infoItemText}>{item.crust}</Text>
          </View>

          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Delivery in</Text>
            <Text style={styles.infoItemText}>{item.deliveryTime} mins</Text>
          </View>
        </View>
        <View style={styles.infoRightWrapper}>
          <Image source={item.image} style={styles.itemImage} />
        </View>
      </View>

      <View style={styles.ingredientsWrapper}>
        <Text style={styles.ingredientsTitle}>Ingeredients</Text>
        <View style={styles.ingredientsListWrapper}>
          <FlatList
            data={item.ingredients}
            renderItem={renderIngredientsItem}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>

      <TouchableOpacity onPress={() => alert("Your order has been placed")}>
        <View style={styles.orderWrapper}>
          <Text style={styles.orderText}>Place an order</Text>
          <Feather name="chevron-right" size={18} color={colors.black} style={{marginTop: 12}} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  headerLeft: {
    borderColor: colors.textLight,
    borderWidth: 2,
    borderRadius: 10,
    padding: 12,
  },
  headerRight: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 10,
    borderColor: colors.primary,
    borderWidth: 2,
  },
  titlesWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  title: {
    fontFamily: "Bold",
    fontSize: 32,
    color: colors.textDark,
    width: "70%",
  },
  priceWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  priceText: {
    color: colors.price,
    fontFamily: "Bold",
    fontSize: 32,
  },
  infoWrapper: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoLeftWrapper: {
    paddingLeft: 20,
  },
  infoItemWrapper: {
    marginBottom: 20,
  },
  infoItemTitle: {
    fontFamily: "Medium",
    fontSize: 14,
    color: colors.textLight,
  },
  infoItemText: {
    fontFamily: "SemiBold",
    fontSize: 18,
    color: colors.textDark,
  },
  itemImage: {
    resizeMode: "contain",
    marginLeft: 50,
  },
  ingredientsWrapper: {
    marginTop: 30,
  },
  ingredientsTitle: {
    paddingHorizontal: 20,
    fontFamily: "Bold",
    fontSize: 16,
    color: colors.textDark,
  },
  ingredientsListWrapper: {
    paddingVertical: 20,
  },
  ingredientItemWrapper: {
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    marginRight: 15,
    borderRadius: 15,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  ingredientImage: {
    resizeMode: "contain",
  },
  orderWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center", 
    marginTop: 60,
    marginHorizontal: 20,
    backgroundColor: colors.primary,
    borderRadius: 50,
    paddingBottom: 20,
    paddingVertical: 5,
  },
  orderText: {
    fontFamily: "Bold",
    fontSize: 14,
    marginRight: 10,
    marginTop: 10,
  },
});
