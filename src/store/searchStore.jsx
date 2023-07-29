import { create } from 'zustand';

const useSearchStore = create((set) => ({
  searchQuery: '',
  isSearchUsed: false,
  setSearchQuery: (query) => set({ searchQuery: query, isSearchUsed: true }),
  resetSearch: () => set({ searchQuery: '', isSearchUsed: false }),
}));

export default useSearchStore;
