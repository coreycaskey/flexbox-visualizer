import { NavigationLink, NavigationLinkProps } from './NavbarLink';

export interface DropdownProps {
  label: string;
  redirectLink: string;
  subLinks: NavigationLinkProps[];
}

export const Dropdown: React.FC<DropdownProps> = ({ label, redirectLink, subLinks }) => {
  const dropdownLabel = (
    <>
      {label} <i className="fa fa-caret-down" />
    </>
  );

  return (
    <div>
      <NavigationLink label={dropdownLabel} redirectLink={redirectLink} />
      <div>
        {subLinks.map((subLink, index) => (
          <NavigationLink key={index} {...subLink} />
        ))}
      </div>
    </div>
  );
};
