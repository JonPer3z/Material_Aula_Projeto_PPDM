import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { COLORS } from './Constants/Coolors'; 
export default function TransactionModal({ visible, onClose }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>

          <View style={styles.selectorContainer}>
            <TouchableOpacity>
              <Text style={[styles.selectorText, styles.pagarText]}>Pagar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[styles.selectorText, styles.receberText]}>Receber</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.valueContainer}>
            <Text style={styles.valueLabel}>Valor</Text>
            <TextInput
              style={styles.valueInput}
              placeholder="R$ 0,00"
              keyboardType="numeric"
              placeholderTextColor="#aaa"
            />
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={[styles.button, styles.buttonCancel]}
              onPress={onClose} 
            >
              <Text style={styles.textStyle}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonConfirm]}
              onPress={() => {
                // Aqui virá a lógica de finalizar
                onClose(); // Por enquanto, apenas fecha
              }}
            >
              <Text style={styles.textStyle}>Finalizar</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.bgButton, 
  },
  modalView: {
    margin: 20,
    backgroundColor: COLORS.background,
    borderRadius: 20,
    padding: 25,
    width: '40%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  selectorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  selectorText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  pagarText: {
    color: 'red',
  },
  receberText: {
    color: COLORS.green,
  },
  valueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingVertical: 15,
    marginBottom: 20,
  },
  valueLabel: {
    fontSize: 18,
    color: '#333',
  },
  valueInput: {
    fontSize: 18,
    textAlign: 'right',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    flex: 1,
    marginHorizontal: 5,
  },
  buttonCancel: {
    backgroundColor: COLORS.red,
  },
  buttonConfirm: {
    backgroundColor: COLORS.green,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});