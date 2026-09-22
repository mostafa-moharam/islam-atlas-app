import AsyncStorage from "@react-native-async-storage/async-storage";
import { useColorScheme } from "nativewind";
import { useEffect, useState } from "react";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { IoIosMoon } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";
import { TouchableOpacity } from "react-native";

type ThemeOption = "system" | "light" | "dark";

export function ThemeToggle() {
  const { colorScheme, setColorScheme } = useColorScheme();
  const [selectedTheme, setSelectedTheme] = useState<ThemeOption>("system");
  useEffect(() => {
    AsyncStorage.getItem("user-theme").then((savedTheme) => {
      if (savedTheme) {
        const theme = savedTheme as ThemeOption;
        setSelectedTheme(theme);
        setColorScheme(theme);
      } else {
        setSelectedTheme("system");
        setColorScheme("system");
      }
    });
  }, []);

  const handleThemeChange = () => {
    if (selectedTheme === "system") {
      setSelectedTheme("light");
      setColorScheme("light");
    } else if (selectedTheme === "light") {
      setSelectedTheme("dark");
      setColorScheme("dark");
    } else if (selectedTheme === "dark") {
      setSelectedTheme("system");
      setColorScheme("system");
    }
    console.log(colorScheme);
    AsyncStorage.setItem("user-theme", selectedTheme);
  };

  return (
    <TouchableOpacity
      onPress={() => handleThemeChange()}
      className={`p-2 rounded-md ${selectedTheme === "system" ? "bg-primary" : ""}`}
    >
      {selectedTheme === "light" ? (
        <IoSunnyOutline />
      ) : selectedTheme === "dark" ? (
        <IoIosMoon />
      ) : (
        <HiOutlineDevicePhoneMobile />
      )}
    </TouchableOpacity>
  );
}
