import { Link } from "react-router-dom";

function Header() {

  //an example of an inline style for the nav tag for an initial layout - later additions, or 

  
  return (
    <header id="header">
  
      <nav>
        <Link to="/">
          <div className = 'button'>HOME</div>
        </Link>
        <Link to="/about">
          <div className = 'button'>ABOUT</div>
        </Link>
        <Link to="/projects">
          <div className = 'button'>PROJECTS</div>
        </Link>
      </nav>
      {/* <h1>Sadie Marie Fissiner </h1>
      <h2 id="h2">Full-Stack Developer</h2> */}
    </header>
  );
}

export default Header;