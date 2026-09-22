import { ThemeToggle } from "@/components/theme-toggle";
import { ScrollView, StyleSheet, Text } from "react-native";
import "../../global.css";
const App = () => {
  return (
    <ScrollView
      className="bg-background"
      contentContainerStyle={styles.contentContainer}
    >
      <Text className="text-primary">Hello World</Text>
      <ThemeToggle />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: "white",
  //   paddingTop: 40,
  // },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#region",
  },
});
export default App;
