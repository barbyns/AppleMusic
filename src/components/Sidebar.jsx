const Sidebar = () => (
  <aside className="w-64 bg-black text-white h-screen fixed p-4 flex flex-col gap-4">
    <h1 className="text-2xl font-bold mb-4">Music</h1>
    <input className="p-2 rounded bg-gray-800 text-white" placeholder="Cerca" />
    <nav className="flex flex-col gap-2 mt-4">
      <button className="text-left">Home</button>
      <button className="text-left">Novità</button>
      <button className="text-left">Radio</button>
    </nav>
  </aside>
);

export default Sidebar;
