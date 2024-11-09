import { Link } from "react-router-dom";
import { useContext } from "react";
import generalContext from "../GeneralContext/generalContext";
import PropTypes from "prop-types";

const NavLinks = ({ className }) => {
  const { myReducer } = useContext(generalContext);
  return (
    <>
      <p className="block text-red-600 m-4"> {myReducer} </p>

      <ul>
        <li>
          <Link to="/">Home</Link>

          <Link className={`p-1 m-2 ${className}`} to="/about">
            About
          </Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">Support</Link>
          <Link to={`/test/lose`}>Test</Link>
          <Link to="/me/younouss">Heyy</Link>
        </li>
      </ul>
    </>
  );
};

NavLinks.propTypes = {
  className: PropTypes.string,
};
export default NavLinks;
