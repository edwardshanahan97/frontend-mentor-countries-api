import "./Navbar.css";
import IconMoon from "../../assets/images/icon-moon.svg";
import IconSun from "../../assets/images/icon-sun.svg";

const Navbar = () => {
  const lightMode = (
    <>
      <img src={IconSun} />
      Light Mode
    </>
  );

  const darkMode = (
    <>
      <img src={IconMoon} />
      Dark Mode
    </>
  );

  return (
    <nav className="navbar">
      <span className="navbar__logo">Where in the world?</span>

      <button className="navbar__toggle" aria-label="Color Mode switcher">
        {darkMode}
      </button>
    </nav>
  );
};

export default Navbar;
