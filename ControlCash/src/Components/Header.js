import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import { COLORS } from './Constants/Colors';

export default function Header() {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <View style={styles.container}>
      {/* Linha superior */}
      <View style={styles.topRow}>
        <View style={{ width: 40 }} /> 
        <Text style={styles.month}>Agosto ▾</Text>
        <Feather name="user" size={32} color="black" />
      </View>

      {/* Saldo */}
      <Text style={styles.balanceLabel}>Saldo em conta</Text>
      <Text style={styles.balanceValue}>
        {showBalance ? 'R$ 50.000,00' : '••••••••'}
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

      {/* Receitas e Despesas */}
      <View style={styles.cardsRow}>
        {/* Receitas */}
        <View style={styles.card}>
          <View style={[styles.iconCircle, { backgroundColor: COLORS.green }]}>
            <Ionicons name="arrow-up" size={28} color={COLORS.white} />
          </View>
          <View>
            <Text style={styles.cardTitle}>Receitas</Text>
            <Text style={[styles.cardValue, { color: COLORS.green }]}>
              R$10.000,00
            </Text>
          </View>
        </View>

        {/* Despesas */}
        <View style={styles.card}>
          <View style={[styles.iconCircle, { backgroundColor: COLORS.red }]}>
            <Ionicons name="arrow-down" size={28} color={COLORS.white} />
          </View>
          <View>
            <Text style={styles.cardTitle}>Despesas</Text>
            <Text style={[styles.cardValue, { color: COLORS.red }]}>
              R$15.000,00
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

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
