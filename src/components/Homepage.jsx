import React, { useState, useEffect } from 'react';
import AnimeList from './AnimeList';
import SearchBar from './SearchBar/SearchBar';
import useSearchStore from '../store/searchStore';
import SearchResult from './SearchBar/SearchResult';

const Homepage = () => {
  const searchQuery = useSearchStore((state) => state.searchQuery);

  return (
    <div>
      <div className="flex justify-center items-center pt-10">
        <h1 className="text-4xl font-bold text-gray-800 py-2 px-4 ">
          Anime List
        </h1>
      </div>
      <div class="py-14">
        <SearchBar />
      </div>
      {searchQuery ? <SearchResult /> : <AnimeList />}
    </div>
  );
};

export default Homepage;
