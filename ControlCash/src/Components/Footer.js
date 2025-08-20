import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons'; 

export default function Footer() {
  return (
    <View style={styles.footerContainer}>

      <TouchableOpacity style={styles.footerButton}>
        <Ionicons name="wallet" size={24} color="white" />
        <Text style={styles.footerText}>Carteira</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.footerButton}>
        <FontAwesome name="line-chart" size={24} color="white" />
        <Text style={styles.footerText}>Investimentos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.footerButton}>
        <FontAwesome5 name="hand-holding-usd" size={24} color="white" />
        <Text style={styles.footerText}>Transações</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#38b6ff', 
    paddingVertical: 10, 
    flexDirection: 'row',     
    justifyContent: 'space-around', 
    alignItems: 'center',     
  },
  footerButton: {
    alignItems: 'center', 
  },
  footerText: {
    color: '#fff', 
    fontSize: 12,
    marginTop: 4, 
  },
});