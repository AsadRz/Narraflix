import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="Nav">
      <div className="logo">
        <h4>Stories</h4>
      </div>
      <div className="navLinks">
        <ul className="navItems">
            <li className="navLink">Home</li>
            <li className="navLink">About us</li>
            <li className="navLink">Contact us</li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
