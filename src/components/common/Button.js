import Button from '@mui/material/Button';
import theme from '../../utils/theme';

export default function ButtonComponent({ onClick, label = 'No label yet' }) {
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
      {label}
    </Button>
  );
}
