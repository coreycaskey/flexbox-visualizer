import { ReactNode } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export interface NavigationLinkProps {
  label: ReactNode;
  redirectLink: string;
  className?: string;
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  label,
  redirectLink,
  className,
}) => {
  let resolved = useResolvedPath(redirectLink);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      className={`navbar-link ${className}`}
      to={redirectLink}
      style={{ textDecoration: match ? 'underline' : 'none' }}
    >
      {label}
    </Link>
  );
};
