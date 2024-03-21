export const fetchTopRatedMovies = async () => {
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNmNjMzVhNzI1NDVmOGM0OTc4YjI5YTA1MDE2OWRmYSIsInN1YiI6IjY1ZmJiYjI4N2Y2YzhkMDE3YzZiZmUwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xvasry-70dc8UZ5tfGcq5cZP9m4Hte9JZG6vUOsnCzk",
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    return json.results;
  } catch (error) {
    console.error("error:" + error);
  }
};
