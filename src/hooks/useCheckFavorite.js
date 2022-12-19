import React, { useEffect } from 'react';

function useCheckFavorite(useFavorite, params, id, setFavorites) {
  const [favorite, setFavorite] = useFavorite;
  return useEffect(() => {
    const favorites = localStorage.getItem('favorites')
      ? JSON.parse(localStorage.getItem('favorites'))
      : [];
    const there = favorites.filter((e) => e.id === id);
    if (there.length > 0) {
      setFavorite(true);
    } else {
      if (setFavorites) {
        setFavorites(favorites);
      }
      setFavorite(null);
    }
  }, [, params, favorite]);
}

export default useCheckFavorite;
