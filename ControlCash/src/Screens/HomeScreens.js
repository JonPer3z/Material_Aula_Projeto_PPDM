import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
} from "react-native";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import TransactionModal from "../Components/TransactionModal";
import BalanceChart from "../Components/BalanceChart";
import { COLORS } from "../Components/Constants/Coolors";

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [initialTransactionType, setInitialTransactionType] = useState("pagar");
  const [transacoes, setTransacoes] = useState([]);

  const handleOpenModal = (type) => {
    setInitialTransactionType(type);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleAddTransaction = (novaTransacao) => {
    setTransacoes((listaAnterior) => [...listaAnterior, novaTransacao]);
  };

  const receitas = transacoes
    .filter((t) => t.tipo === "receber")
    .reduce((soma, t) => soma + t.valor, 0);

  const despesas = transacoes
    .filter((t) => t.tipo === "pagar")
    .reduce((soma, t) => soma + t.valor, 0);

  const saldo = receitas - despesas;

  return (
    <SafeAreaView style={styles.screenContainer}>
      <Header
        saldoTotal={saldo}
        receitas={receitas}
        despesas={despesas}
        onCardPress={handleOpenModal}
      />

      <BalanceChart transacoes={transacoes} />

      <View style={styles.transactionsContainer}>
        <Text style={styles.transactionsTitle}>🧾 Transações Recentes</Text>

        {transacoes.length === 0 ? (
          <Text style={styles.noTransactionsText}>
            Nenhuma transação registrada ainda.
          </Text>
        ) : (
          <FlatList
            data={transacoes.slice(-5).reverse()}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.transactionCard}>
                <View>
                  <Text style={styles.transactionType}>
                    {item.tipo === "receber" ? "Receita" : "Despesa"}
                  </Text>
                  <Text style={styles.transactionDate}>
                    {new Date().toLocaleDateString()}
                  </Text>
                </View>
                <Text
                  style={[
                    styles.transactionValue,
                    {
                      color:
                        item.tipo === "receber"
                          ? COLORS.sucesso
                          : COLORS.erro,
                    },
                  ]}
                >
                  {item.tipo === "receber" ? "+ " : "- "}R$ {item.valor.toFixed(2)}
                </Text>
              </View>
            )}
          />
        )}
      </View>

      <TransactionModal
        visible={modalVisible}
        onClose={handleCloseModal}
        initialType={initialTransactionType}
        onAddTransaction={handleAddTransaction}
      />

      <Footer onTransactionPress={() => handleOpenModal("pagar")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  transactionsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 12,
  },
  transactionsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: COLORS.azulEscuro,
  },
  noTransactionsText: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: "center",
    marginTop: 10,
  },
  transactionCard: {
    backgroundColor: COLORS.cardBackground,
    padding: 14,
    borderRadius: 14,
    marginVertical: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.borderLight,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  transactionType: {
    fontSize: 14,
    color: COLORS.text,
  },
  transactionDate: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  transactionValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
