import React from 'react';
import { useForm } from 'react-hook-form';
import useSearchStore from '../../store/searchStore';

const SearchBar = () => {
  const searchQuery = useSearchStore((state) => state.searchQuery);
  const { register, handleSubmit } = useForm();
  const setSearchQuery = useSearchStore((state) => state.setSearchQuery);
  const { resetSearch } = useSearchStore();

  const onSubmit = (data) => {
    if (!data.query) {
      resetSearch();
      return;
    }

    setSearchQuery(data.query);
  };

  return (
    <div>
      <div className="flex justify-center mt-8">
        <form className="flex" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register('query')}
            placeholder="Search..."
            className="border border-gray-300 px-4 py-2 rounded-l-lg focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
