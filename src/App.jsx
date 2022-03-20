import './App.css';
import Navigation from './pages/Navigation';
import Home from './pages/Home';
import Events from './pages/Events';
import NoMatch from './pages/NoMatch';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  // const axios = require('axios');
  // //TODO: API functions (more to be added) should be in their own file!
  // const getEvents = () => {
  //   axios
  //     .get(`${BASE_URL}/events`)
  //     .then(function (response) {
  //       setImages(response.data.scanResults);
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       //TODO: this should display an error in the UI!
  //       console.log(error);
  //     });
  // };

  // useEffect(() => {
  //   getEvents();
  // }, []);

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

export default App;
