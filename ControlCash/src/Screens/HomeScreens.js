import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { COLORS } from '../Components/Constants/Colors';;
import Header from "../Components/Header";

export default function HomeScreen() {




  return (
    <SafeAreaView style={styles.screenContainer}>

      <Header />



      <View style={styles.contentContainer}>
        <Text style={styles.text}>CONTEÚDO PRINCIPAL DA TELA</Text>
      </View>

     

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});