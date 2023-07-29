// AnimeDetailsComponent.js

import React from 'react';

const AnimeDetailsComponent = ({ animeData }) => {
  if (!animeData) {
    return <div>Loading...</div>;
  }

  const genres = animeData.genres.map((genre) => genre.name).join(', ');
  const airingStatus = animeData.airing ? 'Airing' : 'Finished Airing';
  const airedDateRange = `${animeData.aired.from} to ${animeData.aired.to}`;

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">{animeData.title}</h1>
        <img
          src={animeData.images.jpg.image_url}
          alt={animeData.title}
          className="rounded-lg border-4 border-white hover:border-indigo-600 transition duration-300 w-full h-auto mb-6"
        />
        <p className="mb-6 text-gray-700 leading-relaxed">
          {animeData.synopsis}
        </p>
        <p className="text-indigo-600">
          <strong>Type:</strong> {animeData.type}
        </p>
        <p className="text-indigo-600">
          <strong>Status:</strong> {animeData.status}
        </p>
        <p className="text-indigo-600">
          <strong>Episodes:</strong> {animeData.episodes}
        </p>
        <p className="text-indigo-600">
          <strong>Genres:</strong> {genres}
        </p>
        <p className="text-indigo-600">
          <strong>Score:</strong> {animeData.score}
        </p>
        <p className="text-indigo-600">
          <strong>Popularity:</strong> #{animeData.popularity}
        </p>
        <p className="text-indigo-600">
          <strong>Airing Status:</strong> {airingStatus}
        </p>
        <p className="text-indigo-600">
          <strong>Aired Date Range:</strong> {airedDateRange}
        </p>
        <p className="text-indigo-600">
          <strong>Trailer YouTube ID:</strong> {animeData.trailer.youtube_id}
        </p>
        <p className="text-indigo-600 mt-4">
          <strong>Titles:</strong>
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          {animeData.titles.map((title) => (
            <li key={title.type}>{title.title}</li>
          ))}
        </ul>
        {/* Add more information you want to display */}
      </div>
    </div>
  );
};

export default AnimeDetailsComponent;
