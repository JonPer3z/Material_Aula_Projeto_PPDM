import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>PRECISO REMOVER ESSE CONTAINDER E APLICAR A COR NA TELA INTEIRA</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0F4F5",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});