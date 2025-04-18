const MusicCard = ({ track, onClick }) => (
    <div className="w-32 flex flex-col items-center p-2" onClick={() => onClick(track)}>
      <img src={track.album.cover_medium} alt={track.title} className="rounded-xl" />
      <p className="mt-2 text-sm text-center">{track.title}</p>
      <p className="text-xs text-gray-400">{track.artist.name}</p>
    </div>
  );
  
  export default MusicCard;
  