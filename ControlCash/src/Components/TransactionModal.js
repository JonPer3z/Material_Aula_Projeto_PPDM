import React, { useState, useEffect } from 'react';
import {
    Modal,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Keyboard,
    Pressable,
    TouchableWithoutFeedback
} from 'react-native';

// Supondo que seu arquivo de cores esteja em uma pasta Constants no mesmo nível ou acima
// Ajuste o caminho se necessário
import { COLORS } from './Constants/Coolors';

export default function TransactionModal({ visible, onClose, initialType, onAddTransaction }) {
  const [tipo, setTipo] = useState(initialType);
  const [valor, setValor] = useState('');

  useEffect(() => {
    if (visible) {
      setTipo(initialType);
    }
  }, [visible, initialType]);

  const handleFinalizar = () => {
    const valorNumerico = parseFloat(valor.replace(',', '.'));
    if (!valorNumerico || isNaN(valorNumerico) || valorNumerico <= 0) {
      alert('Por favor, insira um valor válido.');
      return;
    }

    onAddTransaction({ tipo: tipo, valor: valorNumerico });
    setValor('');
    Keyboard.dismiss();
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <Pressable style={styles.centeredView} onPress={onClose}>
        <TouchableWithoutFeedback>
          <View style={styles.modalView}>
            <View style={styles.selectorContainer}>
              <TouchableOpacity
                style={[
                  styles.selectorButtonPagar,
                  tipo === 'pagar' ? styles.pagarButtonActive : {},
                ]}
                onPress={() => setTipo('pagar')}
              >
                <Text style={[
                  styles.selectorText,
                  tipo === 'pagar' ? styles.textActive : styles.pagarText,
                ]}>
                  Pagar
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.selectorButtonReceber,
                  tipo === 'receber' ? styles.receberButtonActive : {},
                ]}
                onPress={() => setTipo('receber')}
              >
                <Text style={[
                  styles.selectorText,
                  tipo === 'receber' ? styles.textActive : styles.receberText,
                ]}>
                  Receber
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.valueContainer}>
              <Text style={styles.valueLabel}>Valor</Text>
              <TextInput
                style={styles.valueInput}
                placeholder="R$ 0,00"
                keyboardType="numeric"
                placeholderTextColor="#aaa"
                value={valor}
                onChangeText={setValor}
                autoFocus={true}
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
                onPress={handleFinalizar}
              >
                <Text style={styles.textStyle}>Finalizar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    width: '85%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  selectorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
  },
  selectorButtonPagar: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    // ✅ CORREÇÃO AQUI: Usando a variável de cor, sem aspas
    backgroundColor: COLORS.erro,
  },
  selectorButtonReceber: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    // ✅ CORREÇÃO AQUI: Usando a variável de cor, sem aspas
    backgroundColor: COLORS.sucesso,
  },
  selectorText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textActive: {
    color: 'white',
  },
  pagarButtonActive: {
    backgroundColor: COLORS.erro, // Originalmente já estava certo aqui, mas usando seu novo COLORS
  },
  receberButtonActive: {
    backgroundColor: COLORS.sucesso, // Originalmente já estava certo aqui
  },
  pagarText: {
    color: COLORS.erro, // Originalmente já estava certo aqui
  },
  receberText: {
    color: COLORS.sucesso, // Originalmente já estava certo aqui
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
    flex: 1,
    marginLeft: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    borderRadius: 10,
    padding: 12,
    elevation: 2,
    flex: 1,
    marginHorizontal: 5,
  },
  buttonCancel: {
    backgroundColor: COLORS.erro, // Originalmente já estava certo aqui
  },
  buttonConfirm: {
    backgroundColor: COLORS.sucesso, // Originalmente já estava certo aqui
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});