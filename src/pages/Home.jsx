import { useEffect, useState } from 'react';
import BannerCard from '../components/BannerCard';
import Section from '../components/Section';
import MusicCard from '../components/MusicCard';
import { useDispatch } from 'react-redux';
import { setCurrentTrack } from '../features/playerSlice';

// Importa le immagini locali
import Banner1 from '../assets/1a.png';
import Banner2 from '../assets/1b.png';
import Banner3 from '../assets/1c.png';

import Episode1 from '../assets/2a.png';
import Episode2 from '../assets/2b.png';
import Episode3 from '../assets/2c.png';
import Episode4 from '../assets/2d.png';
import Episode5 from '../assets/2e.png';
import Episode6 from '../assets/2f.png';

const Home = () => {
  const dispatch = useDispatch();
  const [newTracks, setNewTracks] = useState([]);

  // Carica tracce da API Deezer
  useEffect(() => {
    async function fetchTracks() {
      try {
        const response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=new');
        if (!response.ok) throw new Error('Errore nella risposta Deezer');
        const data = await response.json();
        setNewTracks(data.data.slice(0, 9)); // Prendiamo i primi 9 risultati
      } catch (error) {
        console.error('Errore caricando le tracce:', error);
      }
    }

    fetchTracks();
  }, []);

  const handleTrackClick = (track) => {
    dispatch(setCurrentTrack(track));
  };

  // Dati statici per "Nuovi episodi radio"
  const radioEpisodes = [
    { id: 1, image: Episode1, title: 'Rauw Alejandro', artist: 'Cosa Nuestra' },
    { id: 2, image: Episode2, title: 'Stephan Moccio', artist: 'Feel More Radio' },
    { id: 3, image: Episode3, title: 'Michael Bublé, Carly Pearce', artist: 'Zane Lowe' },
    { id: 4, image: Episode4, title: 'Stephan Moccio', artist: 'Zane Lowe' },
    { id: 5, image: Episode5, title: 'Julia Michaels', artist: 'Chart Show' },
    { id: 6, image: Episode6, title: 'Karri & Travis Mills', artist: '' },
  ];

  return (
    <main className="ml-64 p-8 bg-black min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Novità</h1>

      {/* Banner principale */}
      <div className="flex gap-4 mb-8">
        <BannerCard imgSrc={Banner1} />
        <BannerCard imgSrc={Banner2} />
        <BannerCard imgSrc={Banner3} />
      </div>

      {/* Nuovi episodi radio */}
      <Section title="Nuovi episodi radio">
        {radioEpisodes.map((episode) => (
          <div key={episode.id} className="w-40 flex-shrink-0">
            <img src={episode.image} alt={episode.title} className="rounded-lg" />
            <p className="mt-2 text-sm font-semibold truncate">{episode.title}</p>
            <p className="text-xs text-gray-400">{episode.artist}</p>
          </div>
        ))}
      </Section>

      {/* Nuove uscite - Dinamiche da API */}
      <Section title="Nuove uscite">
        {newTracks.length > 0 ? (
          newTracks.map(track => (
            <MusicCard key={track.id} track={track} onClick={handleTrackClick} />
          ))
        ) : (
          <p>Caricamento brani...</p>
        )}
      </Section>
    </main>
  );
};

export default Home;
