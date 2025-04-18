import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Topbar />
        <Home />
      </div>
    </div>
  );
}

export default App;
