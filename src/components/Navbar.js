import {Link}  from 'react-router-dom';
function Navbar (){
  return (
    <body>
      <nav>
        <div class="navbar">
          <div class="container nav-container">
            <input class="checkbox" type="checkbox" name="" id="" />
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>
            <div class="logo">
      
              <h1>Patient Monitoring System</h1>
            </div>
            <div class="menu-items">
              <Link to="/App">Home</Link>
              <Link to="/periodic">Periodic Patients</Link>
              <Link to="/mid-critical">Med-critical Patients</Link>
              <Link to="/critical">Critcal Patients</Link>
            </div>
          </div>
        </div>
      </nav>
    </body>
  );
}

export default Navbar;