// AnimeDetails.js

import React from 'react';
import AnimeDetailsComponent from './AnimeDetailsComponent';
import useAnimeData from './useAnimeData';

const AnimeDetails = () => {
  const animeData = useAnimeData();

  return <AnimeDetailsComponent animeData={animeData} />;
};

export default AnimeDetails;
