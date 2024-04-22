import React from "react";
import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";
import profile from "../../data/profile.json";
import colors from "./colors";

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    marginHorizontal: 50,
    marginVertical: 20,
    padding: 10,
    height: 140,
    width: 495,
    backgroundColor: colors.primary,
    flexDirection: "row",
    gap: 8,
    borderColor: colors.background,
    borderWidth: 10,
  },
  icon: {
    width: 20,
    height: 20,
    color: "white",
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  titleText: {
    fontFamily: "Poppins",
    color: colors.background,
    fontSize: 32,
    fontWeight: 900,
  },
  item: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  itemText: {
    fontFamily: "Poppins",
    color: colors.background,
    fontSize: 14,
    fontWeight: 900,
  },
});

const PDFHeader = () => {
  return (
    <View style={styles.header} fixed>
      <Image
        style={styles.profilePicture}
        src={`${window.location.origin}${window.location.pathname}/${profile.profilePicture}`}
      />
      <View>
        <Text
          style={styles.titleText}
        >{`${profile.firstname.toLocaleUpperCase()} ${profile.lastname.toLocaleUpperCase()}`}</Text>
        <View style={styles.item}>
          <Image
            style={styles.icon}
            src={`${window.location.origin}${window.location.pathname}/img/email-icon.png`}
          />
          <Text style={styles.itemText}>{profile.contact.email}</Text>
        </View>
        <View style={styles.item}>
          <Image
            style={styles.icon}
            src={`${window.location.origin}${window.location.pathname}/img/phone-icon.png`}
          />
          <Text style={styles.itemText}>{profile.contact.phoneNumber}</Text>
        </View>
      </View>
    </View>
  );
};

export default PDFHeader;
