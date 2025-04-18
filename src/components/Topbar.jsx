import appleLogo from '../assets/apple.svg';
import musicLogo from '../assets/music.svg';


const Topbar = () => (
  <header className="bg-black text-white sticky top-0 p-4 flex items-center justify-between z-10">
    
    <div className="flex gap-4 items-center">
      <img src={musicLogo} alt="Music Controls" className="h-6 w-6" />
    </div>

   
    <div className="flex-1 mx-4 flex items-center justify-center">
      <div className="bg-gray-800 px-4 py-2 rounded-lg flex items-center gap-2 w-full max-w-md">
        <span role="img" aria-label="search">🔍</span>
        <input
          type="text"
          placeholder="Cerca"
          className="bg-transparent outline-none text-white flex-1"
        />
      </div>
    </div>

    <div className="flex items-center gap-4">
      <img src={appleLogo} alt="Apple Logo" className="h-6 w-6" />
      <button className="bg-red-600 px-4 py-2 rounded-lg">Accedi</button>
    </div>
  </header>
);

export default Topbar;
