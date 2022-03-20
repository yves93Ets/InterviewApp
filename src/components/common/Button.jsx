import Button from '@mui/material/Button';
import theme from '../../utils/theme';
import { useTranslation } from 'react-i18next';

export default function ButtonComponent({ onClick, label = 'No label yet' }) {
  const { t } = useTranslation();
  return (
    <Button
      variant="contained"
      onClick={onClick}
      style={{
        background: theme.color.orange,
        maxHeight: 25,
        margin: theme.margin.sm,
      }}
    >
      {t(label)}
    </Button>
  );
}
