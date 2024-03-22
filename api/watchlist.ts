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
