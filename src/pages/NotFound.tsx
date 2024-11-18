import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <>
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>

      <Link to="/">Go to Home</Link>
    </>
  );
};
