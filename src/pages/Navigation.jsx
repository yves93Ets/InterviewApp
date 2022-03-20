import KuvaLogo from '../media/KuvaLogo.png';
import theme from '../utils/theme';
import { ROUTES } from '../utils/constants';
import { Link } from '../components/common';
import { Stack, Box } from '@mui/material';
function NavigationBar() {
  return (
    <Box
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
      <Stack spacing={2}>
        {ROUTES.map((route) => (
          <Link key={route} route={route} />
        ))}
      </Stack>
    </Box>
  );
}

export default NavigationBar;
