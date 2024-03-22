import { View, Text, ActivityIndicator, Image } from 'react-native';
import React from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { fetchMovie } from '@/api/movies';

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
        <Text style={{ fontSize: 16 }}>{movie.overview}</Text>
      </View>
    </View>
  );
}
