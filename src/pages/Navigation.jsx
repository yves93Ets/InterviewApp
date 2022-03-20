import { useState } from 'react';
import KuvaLogo from '../media/KuvaLogo.png';
import theme from '../utils/theme';
import { ROUTES } from '../utils/constants';
import { Link } from '../components/common';
import { Stack, Box } from '@mui/material';
import { Toggle } from '../components/common';
import { useTranslation } from 'react-i18next';

function NavigationBar() {
  const { i18n } = useTranslation();
  const [checked, setChecked] = useState(true);
  const handleChange = () => {
    setChecked(!checked);
    i18n.changeLanguage(checked ? 'fr' : 'en');
  };

  return (
    <Box
      className="navigation"
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
      <Toggle prefix="En" suffix="Fr" handleChange={handleChange} />
      <Stack spacing={2}>
        {ROUTES.map((route) => (
          <Link key={route} route={route} />
        ))}
      </Stack>
    </Box>
  );
}

export default NavigationBar;
