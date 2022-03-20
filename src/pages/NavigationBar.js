import KuvaLogo from '../media/KuvaLogo.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from '../utils/theme';
import { ROUTES } from '../utils/constants';
import { Link } from '../components/common';
import { Stack } from '@mui/material';
import Home from './Home';
function NavigationBar() {
  return (
    <div
      style={{
        height: '100%',
        width: '15%',
        backgroundColor: theme.color.dark,
      }}
    >
      <img
        alt="logo"
        style={{ width: '70%', margin: theme.margin.sm }}
        src={KuvaLogo}
      />
      <Router>
        <Stack spacing={2}>
          {ROUTES.map((route) => (
            <Link route={route} />
          ))}
        </Stack>
        <Routes style={{ marginTop: '30%', color: 'white' }}>
          <Route path="/home">{Home}</Route>;
        </Routes>
      </Router>
    </div>
  );
}

export default NavigationBar;
