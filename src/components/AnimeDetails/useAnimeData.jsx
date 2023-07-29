import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAnimeData } from '../../services/apiServices';

const useAnimeData = () => {
  const { id } = useParams();
  const [animeData, setAnimeData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAnimeData(id);
      setAnimeData(data);
    };

    fetchData();
  }, [id]);

  return animeData;
};

export default useAnimeData;
