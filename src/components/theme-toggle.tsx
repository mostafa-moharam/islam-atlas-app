import { Feather, Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useColorScheme } from "nativewind";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";

type ThemeOption = "system" | "light" | "dark";

export function ThemeToggle() {
  const { colorScheme, setColorScheme } = useColorScheme();
  const [selectedTheme, setSelectedTheme] = useState<ThemeOption>("system");

  // Fix: استخدام async function داخلية لتجنب خطأ effect.run
  useEffect(() => {
    const loadSavedTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem("user-theme");
        if (savedTheme) {
          const theme = savedTheme as ThemeOption;
          setSelectedTheme(theme);
          setColorScheme(theme);
        } else {
          setSelectedTheme("system");
          setColorScheme("system");
        }
      } catch (e) {
        console.error("Failed to load theme", e);
      }
    };

    loadSavedTheme();
  }, []);

  const handleThemeChange = async () => {
    let nextTheme: ThemeOption;

    if (selectedTheme === "system") {
      nextTheme = "light";
    } else if (selectedTheme === "light") {
      nextTheme = "dark";
    } else {
      nextTheme = "system";
    }

    setSelectedTheme(nextTheme);
    setColorScheme(nextTheme);
    await AsyncStorage.setItem("user-theme", nextTheme);
  };

  return (
    <TouchableOpacity
      onPress={handleThemeChange}
      className="p-2 rounded-md bg-container border border-border items-center justify-center"
    >
      {selectedTheme === "light" ? (
        <Ionicons
          name="sunny-outline"
          size={20}
          className="text-text-primary"
        />
      ) : selectedTheme === "dark" ? (
        <Ionicons name="moon-outline" size={20} className="text-text-primary" />
      ) : (
        <Feather name="smartphone" size={20} className="text-text-primary" />
      )}
    </TouchableOpacity>
  );
}
