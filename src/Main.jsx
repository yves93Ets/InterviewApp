import Navigation from './pages/Navigation';
import Home from './pages/Home';
import Events from './pages/Events';
import NoMatch from './pages/NoMatch';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Main() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Main;
