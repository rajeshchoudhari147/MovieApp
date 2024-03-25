import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

interface Movie {
  id: string;
  poster_path: string;
}

export default function MovieListItem({ movie }: { movie: Movie }) {
  return (
    <Link href={`/${movie.id}`} asChild>
      <Pressable style={{ flex: 1 }}>
        <View style={{ padding: 10, flex: 1 }}>
          <Image
            source={{
              uri: 'https://image.tmdb.org/t/p/w500/' + movie.poster_path,
            }}
            style={{ width: '100%', aspectRatio: 3 / 5, borderRadius: 20 }}
          />
        </View>
      </Pressable>
    </Link>
  );
}
