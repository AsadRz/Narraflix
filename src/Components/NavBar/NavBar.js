import "./NavBar.css";
const NavBar = () => {
  const navMenuViewer = () => {
    var x = document.getElementById("navLinks");
    if (x.className === "navLinks") {
      x.className += " responsive";
    } else {
      x.className = "navLinks";
    }
  };
  return (
    <div className="Nav">
      <h4>Stories</h4>

      {/* <div className="navLinks" id="navLinks">
        <a href="#home" className="active navLink" >
          Home
        </a>
        <a href="#news" className="navLink">News</a>
        <a href="#contact" className="navLink">Contact</a>
        <a href="#about" className="navLink">About</a>
        <a  className="icon" onClick={navMenuViewer}>
          --<i className="fa fa-bars"></i>
        </a>
      </div> */}
    </div>
  );
};
export default NavBar;
