import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0F172A" }}>
      <View style={styles.container}>
        <Text style={styles.title}>👤 Profile Builder</Text>

        <TextInput
          placeholder="Username"
          placeholderTextColor="#888"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />

        <TextInput
          placeholder="Bio"
          placeholderTextColor="#888"
          value={bio}
          onChangeText={setBio}
          style={[styles.input, { height: 120 }]}
          multiline
        />

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Live Preview</Text>
          <Text style={styles.preview}>Name: {username || "Not set"}</Text>
          <Text style={styles.preview}>Bio: {bio || "No bio yet"}</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/analytics")}
        >
          <Text style={styles.buttonText}>Go to Analytics →</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#EF4444" }]}
          onPress={() => router.back()}
        >
          <Text style={styles.buttonText}>Back</Text>
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
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    color: "white",
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#1E293B",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    color: "white",
  },
  card: {
    backgroundColor: "#1E293B",
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
  },
  cardTitle: {
    color: "#38BDF8",
    marginBottom: 10,
  },
  preview: {
    color: "white",
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
