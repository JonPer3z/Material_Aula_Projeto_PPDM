import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import TransactionModal from '../Components/TransactionModal';
import { COLORS } from '../Components/Constants/Coolors';

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [initialTransactionType, setInitialTransactionType] = useState('pagar');
  
  // MUDANÇA: Agora este estado vai guardar nossa lista de transações
  const [transacoes, setTransacoes] = useState([]);

  const handleOpenModal = (type) => {
    setInitialTransactionType(type);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  // MUDANÇA CRÍTICA: Esta função agora atualiza o estado com a nova transação
  const handleAddTransaction = (novaTransacao) => {
    // Adiciona a nova transação à lista existente
    setTransacoes(listaAnterior => [...listaAnterior, novaTransacao]);
  };

  // Lógica para calcular os totais a partir da lista de transações
  const receitas = transacoes
    .filter(t => t.tipo === 'receber')
    .reduce((soma, t) => soma + t.valor, 0);

  const despesas = transacoes
    .filter(t => t.tipo === 'pagar')
    .reduce((soma, t) => soma + t.valor, 0);

  const saldo = receitas - despesas;

  return (
    <SafeAreaView style={styles.screenContainer}>
      {/* MUDANÇA: Passando os valores calculados dinamicamente para o Header */}
      <Header
        saldoTotal={saldo}
        receitas={receitas}
        despesas={despesas}
        onCardPress={handleOpenModal}
      />

      <TransactionModal
        visible={modalVisible}
        onClose={handleCloseModal}
        initialType={initialTransactionType}
        onAddTransaction={handleAddTransaction}
      />

      <View style={styles.contentContainer}>
        {/* Aqui você poderia começar a mostrar a lista de transações */}
        <Text style={styles.text}>Transações Recentes</Text>
      </View>

      <Footer onTransactionPress={() => handleOpenModal('pagar')} />
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