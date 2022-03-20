import { Link } from 'react-router-dom';

export default function LinkComponent({ route = '' }) {
  return (
    <Link className="link" to={`/${route}`}>
      {route}
    </Link>
  );
}
