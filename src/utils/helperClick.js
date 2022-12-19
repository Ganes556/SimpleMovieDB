export function clickFavorite(useFavorites, data) {
  const [favorite, setFavorite] = useFavorites;
  setFavorite(!favorite);
  const favorites = localStorage.getItem('favorites')
    ? JSON.parse(localStorage.getItem('favorites'))
    : [];

  if (!favorite) {
    if (favorites.filter((e) => e.id === data.id).length === 0) {
      favorites.push(data);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  } else {
    favorites.splice(
      favorites.findIndex((e) => e.id === data.id),
      1
    );
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
}
