const key = import.meta.env.VITE_API_KEY;
const baseUrl = import.meta.env.VITE_BASE_URL;

export async function getUpcomming(page = 1) {
  const data = await fetch(
    `${baseUrl}/3/movie/upcoming?api_key=${key}&language=en-US&page=${page}`
  );
  switch (data.status) {
    case 404:
    case 401:
    case 422:
      throw data;
  }
  return data.json();
}
export async function getNowPlaying(page = 1) {
  const data = await fetch(
    `${baseUrl}/3/movie/now_playing?api_key=${key}&language=en-US&page=${page}`
  );
  switch (data.status) {
    case 404:
    case 401:
    case 422:
      throw data;
  }
  return data.json();
}

export async function getDetail(id) {
  const data = await fetch(
    `${baseUrl}/3/movie/${id}?api_key=${key}&language=en-US`
  );

  return data.json();
}
