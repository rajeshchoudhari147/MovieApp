const apiKey =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNmNjMzVhNzI1NDVmOGM0OTc4YjI5YTA1MDE2OWRmYSIsInN1YiI6IjY1ZmJiYjI4N2Y2YzhkMDE3YzZiZmUwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xvasry-70dc8UZ5tfGcq5cZP9m4Hte9JZG6vUOsnCzk';
const headers = {
  accept: 'application/json',
  'content-type': 'application/json',
  Authorization: 'Bearer ' + apiKey,
};

export const addMovieToWatchlist = async (id: number) => {
  const url = `https://api.themoviedb.org/3/account/21124635/watchlist`;
  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify({
      media_type: 'movie',
      media_id: id,
      watchlist: true,
    }),
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Failed to add movie to watchlist`);
  }

  const json = await response.json();
  return json;
};

export const fetchMoviesWatchlist = async () => {
  const url =
    'https://api.themoviedb.org/3/account/21124635/watchlist/movies?language=en-US&page=1&sort_by=created_at.desc';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNmNjMzVhNzI1NDVmOGM0OTc4YjI5YTA1MDE2OWRmYSIsInN1YiI6IjY1ZmJiYjI4N2Y2YzhkMDE3YzZiZmUwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xvasry-70dc8UZ5tfGcq5cZP9m4Hte9JZG6vUOsnCzk',
    },
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Failed to fetch movie watchlist`);
  }

  const json = await response.json();
  return json.results;
};
