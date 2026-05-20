import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const fakeData = [
  { id: "1", title: "AI Dashboard", icon: "analytics" },
  { id: "2", title: "Cloud Sync", icon: "cloud" },
  { id: "3", title: "Secure Auth", icon: "shield-checkmark" },
  { id: "4", title: "Live Chat", icon: "chatbubble-ellipses" },
  { id: "5", title: "Payments", icon: "card" },
];

export default function Home() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const router = useRouter();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0F172A" }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          paddingBottom: insets.bottom + 50, 
        }}
      >
        <Animated.View style={{ opacity: fadeAnim }}>
          <Text style={styles.heading}> Expo SDK 55 Test</Text>
          <Text style={styles.subHeading}>
            Advanced React Native UI running successfully
          </Text>
        </Animated.View>

        <View style={styles.heroCard}>
          <Ionicons name="phone-portrait" size={60} color="#0cb346" />
          <Text style={styles.heroTitle}>Mobile App System</Text>
          <Text style={styles.heroText}>
            Testing animations, state, lists, styling, and routing.
          </Text>
        </View>

        <Text style={styles.section}>Interactive Counter</Text>

        <View style={styles.counterBox}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setCount(count - 1)}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>

          <Text style={styles.counter}>{count}</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setCount(count + 1)}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.section}>Input Test</Text>

        <TextInput
          placeholder="Enter your name"
          placeholderTextColor="#999"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />

        <Text style={styles.greeting}>
          {name ? `Hello ${name} 👋` : "Type something above"}
        </Text>

        <Text style={styles.section}>Feature Cards</Text>

        <FlatList
          data={fakeData}
          horizontal
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Ionicons name={item.icon as any} size={34} color="#6C63FF" />
              <Text style={styles.cardTitle}>{item.title}</Text>
            </View>
          )}
        />

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>98%</Text>
            <Text style={styles.statLabel}>Performance</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>55</Text>
            <Text style={styles.statLabel}>SDK Version</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.bigButton}>
          <Ionicons name="rocket" size={22} color="white" />
          <Text style={styles.bigButtonText}>Launch App</Text>
        </TouchableOpacity>

        <View style={{ marginTop: 40 }}>
          <TouchableOpacity
            style={styles.bigButton}
            onPress={() => router.push("/profile")}
          >
            <Text style={styles.bigButtonText}>Go to Profile →</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.bigButton, { backgroundColor: "#22C55E" }]}
            onPress={() => router.push("/analytics")}
          >
            <Text style={styles.bigButtonText}>Go to Analytics →</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  heading: {
    color: "white",
    fontSize: 34,
    fontWeight: "bold",
  },

  subHeading: {
    color: "#94A3B8",
    marginTop: 10,
    fontSize: 16,
  },

  heroCard: {
    backgroundColor: "#6C63FF",
    borderRadius: 25,
    padding: 30,
    marginTop: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },

  heroTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 15,
  },

  heroText: {
    color: "#E2E8F0",
    textAlign: "center",
    marginTop: 10,
    lineHeight: 22,
  },

  section: {
    color: "white",
    fontSize: 22,
    fontWeight: "700",
    marginTop: 35,
    marginBottom: 15,
  },

  counterBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    backgroundColor: "#6C63FF",
    width: 60,
    height: 60,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },

  counter: {
    color: "white",
    fontSize: 32,
    marginHorizontal: 25,
    fontWeight: "bold",
  },

  input: {
    backgroundColor: "#1E293B",
    padding: 18,
    borderRadius: 15,
    color: "white",
    fontSize: 16,
  },

  greeting: {
    color: "#CBD5E1",
    marginTop: 15,
    fontSize: 18,
  },

  card: {
    backgroundColor: "#1E293B",
    width: width * 0.45,
    padding: 20,
    borderRadius: 20,
    marginRight: 15,
    alignItems: "center",
  },

  cardTitle: {
    color: "white",
    marginTop: 15,
    fontSize: 18,
    fontWeight: "600",
  },

  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },

  statCard: {
    backgroundColor: "#1E293B",
    width: "48%",
    padding: 25,
    borderRadius: 20,
    alignItems: "center",
  },

  statNumber: {
    color: "#6C63FF",
    fontSize: 32,
    fontWeight: "bold",
  },

  statLabel: {
    color: "#CBD5E1",
    marginTop: 10,
  },

  bigButton: {
    marginTop: 40,
    backgroundColor: "#6C63FF",
    padding: 20,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  bigButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
