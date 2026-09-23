import { Text, View } from "react-native";
import { ThemeToggle } from "./theme-toggle";

const Navbar = () => {
  return (
    <View className="h-6 fixed top-0 flex justify-evenly items-center">
      <Text>Navebar</Text>
      <ThemeToggle />
    </View>
  );
};

export default Navbar;
