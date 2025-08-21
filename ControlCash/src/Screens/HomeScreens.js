import { View, Text, StyleSheet, SafeAreaView } from "react-native";

import Footer from "../Components/Footer";
import Header from "../Components/Header";


export default function HomeScreen(){
    return(
        <SafeAreaView style={styles.screenContainer}> 
            <View style={styles.contentContainer}>
                <Text style={styles.text}>CONTEÚDO PRINCIPAL DA TELA</Text>
                <Header></Header>
            </View>
            <Footer />
        
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1, 
    backgroundColor: '#f0f4f5' 
  },
  // CONTAINER QUE EMPURRA O FOOTER PARA BAIXO POIS AINDA N TEM NADA NA TELA 
  contentContainer: {
    flex: 1, 
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});