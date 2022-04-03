import { NavigationLink, NavigationLinkProps } from './NavbarLink';

export interface NavigationLinksProps {
  links: NavigationLinkProps[];
}

export const NavigationLinks: React.FC<NavigationLinksProps> = ({ links }) => (
  <ul className="nav-container">
    {links.map((link: NavigationLinkProps, index: number) => (
      <li className="nav-item">
        <NavigationLink key={index} {...link} />
      </li>
    ))}
  </ul>
);
