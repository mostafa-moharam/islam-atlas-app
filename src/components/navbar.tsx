import { useColorScheme } from "nativewind";
import { StyleSheet, Text, View } from "react-native";
import { ThemeToggle } from "./theme-toggle";

export default function Navbar() {
  const { colorScheme } = useColorScheme();
  return (
    <View className="w-full flex-row items-center bg-container justify-between p-4 border-b border-border">
      <Text className="text-lg font-bold text-text-primary">أطلس الإسلام</Text>
      <ThemeToggle />
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: "red",
  },
});
