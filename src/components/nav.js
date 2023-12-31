
import { Link, useLocation } from 'react-router-dom';

function Nav() {
  const location = useLocation();

  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <Link to='/' className={location.pathname === "/" ? "clicked" : "unclicked"}>About</Link>
        </li>
        <li className="nav-item">
          <Link to='/Portfolio' className={location.pathname === "/Portfolio" ? "clicked" : "unclicked"}>Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link to='/Resume' className={location.pathname === "/Resume" ? "clicked" : "unclicked"}>Resume</Link>
        </li>
        <li className="nav-item">
          <a href="mailto:brousy2222@gmail.com" className="unclicked">Contact</a>
        </li>
        <li className="nav-item">
          {/* <Link to='/Testimonials' className={location.pathname === "/Testimonials" ? "clicked" : "unclicked"}>Testimonials</Link> */}
        </li>
      </ul>
    </div>
  );
}

export default Nav;