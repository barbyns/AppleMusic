import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar () {
    return (
        <aside className="w-60 bg-black p-4 text-white">
            <h1 className="text-2xl font-bold mb-6">Music</h1>
            <nav className="flex flex-col gap-4">
                <Link to="/">Home</Link>
                <Link to="/novita">Novità</Link>
                <Link to="/radio">Radio</Link>
            </nav>
        </aside>
    );
}
export default Sidebar;