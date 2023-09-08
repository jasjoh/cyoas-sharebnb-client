import { Link } from "react-router-dom";

function Navigation() {
  return (

    <nav className="Navigation">
      <div className="Navigation-pages">
          <Link to='/properties'>View Properties</Link>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <Link to='/properties/list'>List Property</Link>
      </div>
    </nav>
  );
}

export default Navigation;