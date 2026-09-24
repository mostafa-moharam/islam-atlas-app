import QuranPage from "@/components/Quran/quran-page";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-background items-center justify-center p-6">
      <View className="p-6 bg-container border border-border rounded-xl">
        <Text className="text-text-primary">
          <QuranPage />
        </Text>
      </View>
    </View>
  );
}
