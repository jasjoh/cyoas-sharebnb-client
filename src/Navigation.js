import { NavLink } from "react-router-dom";

/**Renders the navigation bar with appropriate links depending on whether
 * user is logged in or not
 *
 * Props: logout (callback to log a user out)
 *
 * App--> Navigation
*/
function Navigation() {

  let activeStyle = {
    "fontWeight": "bold"
  };


  return (

    <nav className="Navigation">

      <div className="Navigation-home">
        <NavLink to='/' style={({ isActive }) =>
          isActive ? activeStyle : undefined} end>
          ShareBnB
        </NavLink>
      </div>
      <div className="Navigation-pages">


          <>
            <NavLink to='/properties' style={({ isActive }) =>
              isActive ? activeStyle : undefined} end>
              Find Property
            </NavLink>

            <NavLink to='/properties/list' style={({ isActive }) =>
              isActive ? activeStyle : undefined} end>
              Post Listing
            </NavLink>

            <NavLink to='/' style={({ isActive }) =>
              isActive ? activeStyle : undefined} end>
              Profile
            </NavLink>

          </>

      </div>
    </nav>
  );
}

export default Navigation;