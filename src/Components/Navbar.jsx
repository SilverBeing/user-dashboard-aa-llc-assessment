import React, { useState } from "react";
import { BiGhost, BiSearch, BiNotification, BiPlus } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
const Navbar = () => {
  // The clicked state stores data of when the user clicks the icon
  const [clicked, setClicked] = useState(false);

  const handleMobileNavbar = () => {
    // This toggles the mobile navbar by changing the display .
    setClicked((current) => !current);
  };
  return (
    <nav>
      <div className="nav__logo">
        <BiGhost />
        <span>Ghosts</span>
      </div>

      <div className={`nav__mobile-menu ${clicked ? "display" : ""}`}>
        <div className="nav__menu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Resources</a>
            </li>
            <li>
              <a href="/">Event</a>
            </li>
            <li>
              <a href="/">Groups</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
          </ul>
        </div>
        <div className="nav__Icons">
          <button>
            <BiSearch />
          </button>
          <button>
            <BiNotification />
          </button>
          <button className="nav__icons-create">
            Create <BiPlus />
          </button>
        </div>
      </div>
      <div className="nav__toggle">
        <button onClick={handleMobileNavbar}>
          {/* When the button is clicked the navbar icon changes */}
          {clicked ? <GrClose /> : <RxHamburgerMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
