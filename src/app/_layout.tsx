import Navbar from "@/components/navbar";
import { Stack } from "expo-router";
import { useColorScheme } from "nativewind";
import { View } from "react-native";
import "../../global.css";

export default function RootLayout() {
  const { colorScheme } = useColorScheme();

  return (
    <View className={`flex-1 bg-background ${colorScheme}`}>
      <View className="z-50 w-full">
        <Navbar />
      </View>

      <View className="flex-1 bg-background">
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: "transparent" },
          }}
        />
      </View>
    </View>
  );
}
