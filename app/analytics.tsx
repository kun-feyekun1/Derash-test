import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const data = [
  { id: "1", label: "Users", value: 1200 },
  { id: "2", label: "Revenue", value: 5400 },
  { id: "3", label: "Clicks", value: 9800 },
  { id: "4", label: "Sessions", value: 4300 },
];

export default function Analytics() {
  const router = useRouter();
  const [filter, setFilter] = useState("ALL");

  const filtered = filter === "ALL" ? data : data.filter((d) => d.value > 5000);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0F172A" }}>
      <View style={styles.container}>
        <Text style={styles.title}>📊 Analytics Dashboard</Text>

        <View style={styles.filters}>
          <TouchableOpacity onPress={() => setFilter("ALL")}>
            <Text style={styles.filter}>ALL</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFilter("HIGH")}>
            <Text style={styles.filter}>HIGH VALUE</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.label}>{item.label}</Text>
              <Text style={styles.value}>{item.value}</Text>
            </View>
          )}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/")}
        >
          <Text style={styles.buttonText}>Back Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    color: "white",
    fontWeight: "bold",
    marginBottom: 20,
  },
  filters: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  filter: {
    color: "#38BDF8",
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#1E293B",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
  },
  label: {
    color: "#94A3B8",
  },
  value: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5,
  },
  button: {
    backgroundColor: "#6C63FF",
    padding: 15,
    borderRadius: 12,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
