import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { COLORS } from "./Constants/Coolors";

export default function BalanceChart({ transacoes }) {
  const valores = transacoes.map((t) =>
    t.tipo === "receber" ? t.valor : -t.valor
  );

  let acumulado = 0;
  const saldoAcumulado = valores.map((v) => (acumulado += v));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📈 Evolução do Saldo</Text>

      <LineChart
        data={{
          labels: transacoes.map((_, i) => `${i + 1}`),
          datasets: [{ data: saldoAcumulado.length ? saldoAcumulado : [0] }],
        }}
        width={Dimensions.get("window").width - 30}
        height={240}
        yAxisLabel="R$"
        fromZero
        chartConfig={{
          backgroundColor: COLORS.background,
          backgroundGradientFrom: COLORS.background,
          backgroundGradientTo: COLORS.background,
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`, // azul
          labelColor: () => COLORS.textSecondary,
          propsForDots: {
            r: "5",
            strokeWidth: "2",
            stroke: COLORS.azul,
          },
          propsForLabels: {
            fontSize: 13,
          },
        }}
        bezier
        style={styles.chart}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.azulEscuro,
    marginBottom: 8,
  },
  chart: {
    borderRadius: 16,
    backgroundColor: COLORS.white,
    padding: 10,
    elevation: 3,
  },
});
