import { Main } from "./Components/Main.jsx";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
 

export default function App() {
  return (
    <SafeAreaProvider>
      <ScrollView>
      <View style={styles.container}>
        <StatusBar style="light" />
        <Main />
      </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 12,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
