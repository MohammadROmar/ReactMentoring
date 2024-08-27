import { NavLink } from "react-router-dom";

import UpcomingSessions from "./UpcomingSessions";

export default function Header() {
  return (
    <header className="main-header">
      <h1 className="main-header__title">ReactMentoring</h1>
      <nav className="main-header__navigation">
        <ul className="main-header__navigation-list">
          <li className="main-header__navigation-item">
            <NavLink to="" className="main-header__navigation-link">
              Home
            </NavLink>
          </li>
          <li className="main-header__navigation-listitem">
            <NavLink to="sessions" className="main-header__navigation-link">
              Sessions
            </NavLink>
          </li>
          <li>
            <UpcomingSessions />
          </li>
        </ul>
      </nav>
    </header>
  );
}
