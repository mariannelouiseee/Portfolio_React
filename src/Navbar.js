import logo from "./assets/logo.png";

function Navbar() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar">
      <div className="logo-container">
        <img className="logo" alt="Logo" src={logo} />
        <h3>
          <span>M</span>arianne <span>L</span>ouise
        </h3>
      </div>
      <ul id="nav-links">
        <li>
          <button onClick={() => handleScroll("home")}>HOME</button>
        </li>
        <li>
          <button onClick={() => handleScroll("about")}>ABOUT</button>
        </li>
        <li>
          <button onClick={() => handleScroll("education-timeline")}>
            EDUCATION
          </button>
        </li>
        <li>
          <button onClick={() => handleScroll("skills")}>SKILLS</button>
        </li>
        <li>
          <button onClick={() => handleScroll("contact")}>CONTACTS</button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
