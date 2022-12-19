import React, { useState } from 'react';

function useFavorites() {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites')) || []
  );
  return [favorites, setFavorites];
}

export default useFavorites;
