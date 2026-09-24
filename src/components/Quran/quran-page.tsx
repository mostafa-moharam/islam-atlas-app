import { getQuranPage, QuranPageResponse } from "@/services/data";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const QuranPage = () => {
  const [quranPage, setQuranPage] = useState<QuranPageResponse>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    getQuranPage(4)
      .then((data) => setQuranPage(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);
  const handleQuranContent = () => {
    console.log(quranPage);
  };
  return (
    <View>
      <TouchableOpacity onPress={handleQuranContent}>
        <Text>Quran Page</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuranPage;
