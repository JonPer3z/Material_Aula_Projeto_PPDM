import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { COLORS } from './Constants/Coolors';


export default function Footer({ onTransactionPress }) {
  return (
    <View style={styles.footerContainer}>
      
      <TouchableOpacity style={styles.footerButton}>
        <Ionicons name="wallet" size={24} color={COLORS.white} />
        <Text style={styles.footerText}>Carteira</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.footerButton}>
        <FontAwesome name="line-chart" size={24} color={COLORS.white} />
        <Text style={styles.footerText}>Investimentos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.footerButton} onPress={onTransactionPress}>
        <FontAwesome5 name="hand-holding-usd" size={24} color={COLORS.white} />
        <Text style={styles.footerText}>Transações</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: COLORS.azul,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  footerButton: {
    flex: 1,
    alignItems: 'center',
  },
  footerText: {
    color: COLORS.white,
    fontSize: 12,
    marginTop: 4,
    alignItems: 'center',
  },
});