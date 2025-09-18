import React, { useState, useEffect } from 'react';
import { 
    Modal, 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    TextInput, 
    Keyboard,
    Pressable, // MUDANÇA: Usaremos o Pressable para o fundo
    TouchableWithoutFeedback // MUDANÇA: Usaremos como "escudo"
} from 'react-native';
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
      {/* MUDANÇA: O fundo agora é um Pressable que fecha o modal */}
      <Pressable style={styles.centeredView} onPress={onClose}>
        
        {/* MUDANÇA CRÍTICA: Este componente age como um "escudo".
            Ele captura o clique dentro do modal, impedindo que ele
            se propague para o fundo e feche o modal. */}
        <TouchableWithoutFeedback>
          <View style={styles.modalView}>
            <View style={styles.selectorContainer}>
              <TouchableOpacity
                style={[
                  styles.selectorButton,
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
                  styles.selectorButton,
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
                autoFocus={true} // Adicionado para focar automaticamente ao abrir
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

// Seus estilos permanecem os mesmos
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
  selectorButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  selectorText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textActive: {
    color: 'white',
  },
  pagarButtonActive: {
    backgroundColor: COLORS.red,
  },
  receberButtonActive: {
    backgroundColor: COLORS.green,
  },
  pagarText: {
    color: COLORS.red,
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
    backgroundColor: '#ccc',
  },
  buttonConfirm: {
    backgroundColor: COLORS.azul,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});