import { ReactNode } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export interface NavbarLinkProps {
  label: ReactNode;
  redirectLink: string;
  onClick: () => void;
  className?: string;
}

export const NavbarLink: React.FC<NavbarLinkProps> = ({
  label,
  redirectLink,
  onClick,
  className,
}) => {
  let resolved = useResolvedPath(redirectLink);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      className={`navbar-link ${className}`}
      to={redirectLink}
      style={{ textDecoration: match ? 'underline' : 'none' }}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};
