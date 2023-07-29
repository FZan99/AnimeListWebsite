import React, { useState, useEffect } from 'react';
import useSearchStore from '../../store/searchStore';
import { AnimeSearch } from '../../services/apiServices';
import AnimeItem from '../common/AnimeItem';

const SearchResult = () => {
  const searchQuery = useSearchStore((state) => state.searchQuery);

  const [apiData, setApiData] = useState(null);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const fetchData = async () => {
    if (!searchQuery) {
      return;
    }

    try {
      const response = await AnimeSearch(searchQuery, currentPage);
      setApiData(response.data);
      setError(null);
    } catch (error) {
      setApiData(null);
      setError('Cannot load data');
    }
  };

  // Fetch data whenever searchQuery or currentPage changes
  useEffect(() => {
    fetchData();
  }, [searchQuery, currentPage]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {error && <p>{error}</p>}

      {searchQuery && apiData && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {apiData.map((item) => (
            <div key={item.mal_id} className="mb-4">
              <AnimeItem item={item} />
            </div>
          ))}
        </div>
      )}

      {apiData && apiData.length > 0 && searchQuery && (
        <div className="mt-6 flex items-center justify-center">
          <button
            className="px-3 py-2 bg-blue-500 text-white rounded-md w-32 h-12 mr-2 hover:bg-blue-600"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="px-3 py-2 bg-blue-500 text-white rounded-md w-32 h-12 ml-2 hover:bg-blue-600"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchResult;
