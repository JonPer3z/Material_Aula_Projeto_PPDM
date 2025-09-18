import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { COLORS } from '../Components/Constants/Coolors';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import TransactionModal from '../Components/TransactionModal';

export default function HomeScreen() {

  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <Header />
      <TransactionModal
        visible={modalVisible}
        onClose={handleCloseModal}
      />

      <View style={styles.contentContainer}>
        <Text style={styles.text}>CONTEÚDO PRINCIPAL DA TELA</Text>
      </View>

      <Footer onTransactionPress={handleOpenModal} />

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