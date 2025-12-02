import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { COLORS } from './Constants/Coolors';

// MUDANÇA: O componente agora recebe os totais como propriedades
export default function Header({ saldoTotal, receitas, despesas, onCardPress }) {
  const [showBalance, setShowBalance] = React.useState(true);

  // Função para formatar os números como moeda brasileira (R$)
  const formatCurrency = (value) => {
    if (typeof value !== 'number') {
      value = 0;
    }
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={{ width: 40 }} />
        <Text style={styles.month}>Setembro ▾</Text>
        <Feather name="user" size={32} color="black" />
      </View>

      <Text style={styles.balanceLabel}>Saldo em conta</Text>
      <Text style={styles.balanceValue}>
        {/* MUDANÇA: Mostrando o saldoTotal formatado */}
        {showBalance ? formatCurrency(saldoTotal) : '••••••••'}
      </Text>

      <TouchableOpacity
        style={styles.eyeButton}
        onPress={() => setShowBalance(!showBalance)}
        activeOpacity={0.7}
      >
        <Ionicons
          name={showBalance ? 'eye' : 'eye-off'}
          size={28}
          color={COLORS.gray}
        />
      </TouchableOpacity>

      <View style={styles.cardsRow}>
        <TouchableOpacity style={styles.card} onPress={() => onCardPress('receber')}>
          <View style={[styles.iconCircle, { backgroundColor: COLORS.green }]}>
            <Ionicons name="arrow-up" size={28} color={COLORS.white} />
          </View>
          <View>
            <Text style={styles.cardTitle}>Receitas</Text>
            <Text style={[styles.cardValue, { color: COLORS.green }]}>
              {/* MUDANÇA: Mostrando o total de receitas formatado */}
              {formatCurrency(receitas)}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => onCardPress('pagar')}>
          <View style={[styles.iconCircle, { backgroundColor: COLORS.red }]}>
            <Ionicons name="arrow-down" size={28} color={COLORS.white} />
          </View>
          <View>
            <Text style={styles.cardTitle}>Despesas</Text>
            <Text style={[styles.cardValue, { color: COLORS.red }]}>
              {/* MUDANÇA: Mostrando o total de despesas formatado */}
              {formatCurrency(despesas)}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Os estilos continuam os mesmos
const styles = StyleSheet.create({
  container: {
    paddingTop: 56,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: COLORS.white,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  month: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  balanceLabel: {
    marginTop: 16,
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
  },
  balanceValue: {
    marginTop: 6,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  eyeButton: {
    alignSelf: 'center',
    marginTop: 6,
  },
  cardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 6,
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 14,
    color: '#333',
  },
  cardValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});