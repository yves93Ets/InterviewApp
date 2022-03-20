import { NavLink } from 'react-router-dom';
import theme from '../../utils/theme';
import { useTranslation } from 'react-i18next';
export default function LinkComponent({ route = '' }) {
  const { t } = useTranslation();
  return (
    <NavLink
      style={({ isActive }) => {
        return {
          color: isActive ? theme.color.orange : '',
        };
      }}
      className="link"
      to={`/${route}`}
      key={route}
    >
      {t(route)}
    </NavLink>
  );
}
