import './App.css';
import { useEffect, useState } from 'react';
import NavigationBar from './pages/NavigationBar';
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
    //TODO: This code should be factored out into multiple files
    <div
      className="App"
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <NavigationBar />
    </div>
  );
}

export default App;
