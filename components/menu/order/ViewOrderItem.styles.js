import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  quantityAndOptionsContainer: {
    flexDirection: "row",
  },
  quantityText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#484848",
    marginRight: 27,
  },
  itemDetailsContainer: {
    flexDirection: "column",
  },
  itemNameText: {
    color: "#484848",
    fontWeight: "600",
    fontSize: 18,
  },
  itemOptionContainer: {
    flexDirection: "row",
  },
  itemOptionText: {
    fontWeight: "400",
    fontSize: 11,
    color: "#626262",
  },
  priceContainer: {
    alignItems: "flex-end",
  },
  priceText: {
    color: "#484848",
    fontWeight: "600",
    fontSize: 16,
  },
});
