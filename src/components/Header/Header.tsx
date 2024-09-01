import { NavLink } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import UpcomingSessions from "../UpcomingSessions/UpcomingSessions.tsx";

import "./Header.css";
import { useState } from "react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    if (scrollY.getPrevious() === undefined) {
      return;
    }

    if (
      scrollY.getPrevious()! < latestValue &&
      latestValue > 200 &&
      isVisible
    ) {
      setIsVisible(false);
    } else if (scrollY.getPrevious()! > latestValue && !isVisible) {
      setIsVisible(true);
    }
  });

  return (
    <motion.header
      variants={{
        hidden: { y: "-100%" },
        visible: { y: 0 },
      }}
      animate={isVisible ? "visible" : "hidden"}
      transition={{ type: "just" }}
      className="main-header"
    >
      <h1 className="main-header__title">ReactMentoring</h1>
      <nav className="main-header__navigation">
        <ul className="main-header__navigation-list">
          <li className="main-header__navigation-item">
            <NavLink to="" className="main-header__navigation-link">
              Our Mission
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
    </motion.header>
  );
}
