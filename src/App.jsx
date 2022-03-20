import { useState, useEffect } from 'react';
import './App.css';
import Main from './Main';
import { Box, Alert, AlertTitle, Fade } from '@mui/material';
import { GlobalContextProvider as GlobalProvider } from './hooks/GlobalContext';
import { globalReducer } from './hooks/globalReducer';
import { createInitialState } from './hooks/createInitialState';
import { BASE_URL } from './utils/constants';
import './i18n/i18n';

function App() {
  const [isError, setIsError] = useState(false);
  const [initialState, setinitialState] = useState();
  const axios = require('axios');
  const getEvents = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/events`);
      setinitialState(createInitialState(response.data));
    } catch (error) {
      setIsError(true);
    }
  };
  useEffect(() => {
    getEvents();
  }, []);

  if (!initialState) return null;

  return (
    <Box>
      <Fade in={isError} className="warning">
        <Alert severity="warning" onClick={() => setIsError(false)}>
          <AlertTitle>Error</AlertTitle>
          This is an error alert — <strong>check it out!</strong>
        </Alert>
      </Fade>
      <GlobalProvider reducer={globalReducer} initialState={initialState}>
        <Main />
      </GlobalProvider>
    </Box>
  );
}

export default App;
