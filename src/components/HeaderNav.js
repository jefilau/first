import { Link } from 'react-router-dom';
import './HeaderNav.css';

export default function HeaderNav() {
  return (
    <div>
      <nav>
        <div className="Menu">
          <div className="container">
            <table className="link-table">
              <tbody>
                <tr>
                  <td>
                    <Link to="/" className="top-bar-link">Home</Link>
                  </td>
                  <td>
                    <Link to="/question" className="top-bar-link">Question</Link>
                  </td>
                  <td>
                    <Link to="/test" className="top-bar-link">Test</Link>
                  </td>

                  <td>
                    <Link to="/Aboutus" className="top-bar-link">About Us</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </nav>
    </div>
  );
}
/*
                  <td>
                    <Link to="/game" className="top-bar-link">Game</Link>
                  </td>
                  <td>
                    <Link to="/trial" className="top-bar-link">Trial</Link>
                  </td>
                  <td>
                    <Link to="/trial2" className="top-bar-link">Trial2</Link>
                  </td>
                  */

/*
import { Link } from 'react-router-dom';
import './HeaderNav.css';

export default function HeaderNav(){
  return(
    <div>
      <nav><div className="Menu">
        <div className="container">
            <div className="top-bar-links">
            <div className="top-bar-link">
                 <Link to="/">Home</Link>
            </div>
            <div className="top-bar-link">
                <Link to="/question">Question</Link>
            </div>
             <div className="top-bar-link">
                 <Link to="/test">Test</Link>
            </div>
            <div className="top-bar-link">
                 <Link to="/trial">Trial</Link>
            </div>
         </div>
        </div>
      </div></nav>
    </div>
  )
}
*/


//export default Menu;
/*
<a className="navbar-brand" href="#">Logo</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                




import { Link } from 'react-router-dom';

function Menu() {
  return (
    
  );
}
<Link to="/" >First Page!   </Link>
<Link to="/question" >Question!!   </Link>
<Link to="/test" >test!!!   </Link>



import React from 'react';
import { Link } from 'react-router-dom';

function TopBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Logo</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Link 1</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/page2">Link 2</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/page3">Link 3</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default TopBar;
*/
