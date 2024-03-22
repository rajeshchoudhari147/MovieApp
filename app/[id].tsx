import { View, Text, ActivityIndicator, Image, Pressable } from 'react-native';
import React from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useQuery, useMutation } from '@tanstack/react-query';
import { fetchMovie } from '@/api/movies';
import { FontAwesome } from '@expo/vector-icons';
import { addMovieToWatchlist } from '@/api/watchlist';

export default function MovieDetails() {
  const { id } = useLocalSearchParams();

  const {
    data: movie,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['movies', id],
    queryFn: () => fetchMovie(id),
  });

  const { mutate } = useMutation({
    mutationFn: () => addMovieToWatchlist(id),
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch movie</Text>;
  }

  return (
    <View>
      <Stack.Screen options={{ title: movie.title }} />
      <Image
        source={{
          uri: 'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path,
        }}
        style={{ width: '100%', height: 300 }}
      />
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 24, fontWeight: '500', marginVertical: 20 }}>
          {movie.title}
        </Text>
        <View style={{ marginVertical: 10 }}>
          <Pressable
            style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}
            onPress={() => mutate()}
          >
            <FontAwesome name="bookmark-o" size={24} color="black" />
            <Text>Add to watchlist</Text>
          </Pressable>
        </View>
        <Text style={{ fontSize: 16 }}>{movie.overview}</Text>
      </View>
    </View>
  );
}
