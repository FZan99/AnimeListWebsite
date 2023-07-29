import React from 'react';
import { useNavigate } from 'react-router-dom';

const AnimeItem = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/anime/${item.mal_id}`)}
      key={item.mal_id}
      className="flex flex-col items-center justify-center cursor-pointer hover:cursor-pointer"
    >
      <div className="mb-4">
        <img
          src={item.images.jpg.image_url}
          alt={item.title}
          className="object-contain w-full max-h-64"
        />
      </div>
      <h2 className="whitespace-normal overflow-wrap break-words max-w-[200px]">
        {item.title}
      </h2>
    </div>
  );
};

export default AnimeItem;
