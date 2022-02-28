import { NavigationLink } from './NavigationLink';

import logo from '../../logo.png';

import '../../styles.css';

export const Navigation = () => {
  return (
    <nav className="nav">
      <a className="logo-link" href="/">
        <img
          src={logo}
          width="40px"
          height="40px"
          alt="flex logo"
          className="logo"
        />
      </a>
      <ul className="nav-container">
        <NavigationLink redirectLink="/flex-direction" text="Flex Direction" />
        <NavigationLink
          redirectLink="/justify-content"
          text="Justify Content"
        />
        <NavigationLink redirectLink="/align-items" text="Align Items" />
        <NavigationLink redirectLink="/flex" text="Flex" />
        <NavigationLink redirectLink="/gap" text="Gap" />
      </ul>
    </nav>
  );
};
