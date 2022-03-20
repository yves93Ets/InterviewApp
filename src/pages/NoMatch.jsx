import { Link } from 'react-router-dom';

export default function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/home">Go to the home page of the app</Link>
      </p>
    </div>
  );
}
