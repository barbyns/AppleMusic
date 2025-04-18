import React from 'react';

function Topbar() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gray-800">
      <div className="text-lg">Apple Music Clone</div>
      <button className="bg-red-500 text-white px-4 py-2 rounded">Accedi</button>
    </header>
  );
}

export default Topbar;