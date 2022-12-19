const key = `93a9765f28fef8f667072740d1a49248`;
const baseUrl = 'https://api.themoviedb.org';

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

  // switch (data.status) {
  //   case 404:
  //   case 401:
  //   case 422:
  //     throw data;
  // }

  return data.json();
}
