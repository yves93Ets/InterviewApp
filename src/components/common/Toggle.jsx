import { Switch, Typography, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';

function Toggle({ prefix, suffix, handleChange }) {
  const { t } = useTranslation();

  return (
    <Stack className="toggle" direction="row" spacing={1} alignItems="center">
      <Typography>{t(prefix)}</Typography>
      <Switch color="warning" onChange={handleChange} />
      <Typography>{t(suffix)}</Typography>
    </Stack>
  );
}

export default Toggle;
