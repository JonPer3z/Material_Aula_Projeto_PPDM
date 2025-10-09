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

// Lembre-se de ajustar o caminho para o seu arquivo de cores se necessário
// E de ter a cor 'azul' e 'textSecondary' nele!
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
                  styles.selectorButton,
                  tipo === 'pagar' ? styles.pagarButtonActive : {},
                ]}
                onPress={() => setTipo('pagar')}
              >
                <Text style={[
                  styles.selectorText,
                  tipo === 'pagar' ? styles.textActive : styles.pagarTextInactive,
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
                  tipo === 'receber' ? styles.textActive : styles.receberTextInactive,
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

            {/* --- BOTÕES DE AÇÃO (Cancelar/Finalizar) - MUDANÇA AQUI --- */}
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={[styles.button, styles.buttonCancel]}
                onPress={onClose}
              >
                {/* Texto do cancelar agora usa o novo estilo */}
                <Text style={styles.buttonCancelText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                // Estilo simplificado para um único botão de confirmação
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
  // --- ESTRUTURA DO MODAL (sem alterações) ---
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

  // --- ESTILOS DOS SELETORES (sem alterações) ---
  selectorContainer: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    padding: 4,
  },
  selectorButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 16,
    alignItems: 'center',
  },
  pagarButtonActive: {
    backgroundColor: COLORS.erro,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  receberButtonActive: {
    backgroundColor: COLORS.sucesso,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  selectorText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textActive: {
    color: COLORS.white,
  },
  pagarTextInactive: {
    color: COLORS.erro,
  },
  receberTextInactive: {
    color: COLORS.sucesso,
  },

  // --- ESTILOS DO INPUT DE VALOR (sem alterações) ---
  valueContainer: {
    flexDirection: 'row',
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

  // --- ESTILOS DOS BOTÕES DE AÇÃO (MUDANÇA AQUI) ---
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
  },
  button: {
    borderRadius: 10,
    padding: 12,
    elevation: 2,
    flex: 1,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonCancel: {
    backgroundColor: 'transparent',
    elevation: 0,
  },
  buttonCancelText: {
    // MUDANÇA: Cor alterada para o azul da marca
    color: COLORS.azul,
    fontWeight: 'bold',
    fontSize: 16,
  },
  // NOVO ESTILO: Botão de confirmação agora é sempre azul
  buttonConfirm: {
    backgroundColor: COLORS.azul,
  },
  // ESTILOS REMOVIDOS: buttonFinalizarPagar e buttonFinalizarReceber não são mais necessários
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});