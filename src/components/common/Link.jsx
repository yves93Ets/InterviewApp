import { NavLink } from 'react-router-dom';
import theme from '../../utils/theme';
export default function LinkComponent({ route = '' }) {
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
      {route}
    </NavLink>
  );
}
