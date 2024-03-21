import { FlatList, StyleSheet, Text } from "react-native";

import { View } from "@/components/Themed";
import { useEffect, useState } from "react";
import { fetchTopRatedMovies } from "@/api/movies";

export default function TabOneScreen() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = fetchTopRatedMovies();
      setMovies(await movies);
    };
    fetchMovies();
  });
  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
  },
});
