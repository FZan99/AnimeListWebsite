import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homepage from './components/Homepage';
import AnimeDetails from './components/AnimeDetails';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/anime/:id" element={<AnimeDetails />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
