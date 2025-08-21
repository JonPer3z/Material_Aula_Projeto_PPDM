import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { COLORS } from './Constants/Coolors';

export default function TransactionModal({ visible, onClose }) {
    const [tipo, setTipo] = useState('pagar');

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
                        <TouchableOpacity
                            style={[
                                styles.selectorButton,
                                tipo === 'pagar' ? styles.pagarButtonActive : {}
                            ]}
                            onPress={() => setTipo('pagar')}
                        >
                            <Text style={[
                                styles.selectorText,
                                tipo === 'pagar' ? styles.textActive : styles.pagarText
                            ]}>
                                Pagar
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[
                                styles.selectorButton,
                                tipo === 'receber' ? styles.receberButtonActive : {}
                            ]}
                            onPress={() => setTipo('receber')}
                        >
                            <Text style={[
                                styles.selectorText,
                                tipo === 'receber' ? styles.textActive : styles.receberText
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
                                // Futuramente, podemos usar o estado 'tipo' aqui
                                console.log('Tipo da transação:', tipo);
                                onClose();
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
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 25,
        width: '80%',
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
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
        borderRadius: 10,
    },

    selectorButton: {
        paddingVertical: 8,
        paddingHorizontal: 25,
        borderRadius: 20,
        alignItems: 'center',
    },
    selectorText: {
        fontSize: 18,
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

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)'
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