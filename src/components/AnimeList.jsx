import React, { useState, useEffect } from 'react';
import { AnimeListApi } from '../services/apiServices';
import AnimeItem from './common/AnimeItem';

const AnimeList = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const apiData = await AnimeListApi(currentPage);
      if (apiData) {
        setData(apiData.data);
        setLastPage(apiData.pagination.last_visible_page);
      }
    };
    fetchData();
  }, [currentPage]);

  const loadNextPage = () => {
    if (currentPage < lastPage) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const loadPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div class="flex flex-col items-center justify-center min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {data.map((item) => (
          <div class="mb-4">
            <AnimeItem key={item.mal_id} item={item} />
          </div>
        ))}
      </div>
      <div class="mt-4 flex items-center justify-center">
        <button
          class="px-3 py-2 bg-blue-500 text-white rounded-md w-32 h-12 mr-2 hover:bg-blue-600"
          onClick={loadPreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          class="px-3 py-2 bg-blue-500 text-white rounded-md w-32 h-12 ml-2 hover:bg-blue-600"
          onClick={loadNextPage}
          disabled={currentPage === lastPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AnimeList;
