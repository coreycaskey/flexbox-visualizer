import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export const NavigationLink = ({ redirectLink, text }) => {
  let resolved = useResolvedPath(redirectLink);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <li className="nav-item">
      <Link
        className="nav-link"
        to={redirectLink}
        style={{ textDecoration: match ? 'underline' : 'none' }}
      >
        {text}
      </Link>
    </li>
  );
};
