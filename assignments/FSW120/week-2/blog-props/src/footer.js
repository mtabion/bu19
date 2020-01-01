import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer">
        <div className="name">Melvin Tabion</div>
        <address className="address">
          3610 Taos Lane<br></br> Las Vegas Nevada 89121
        </address>
        <div className="phone">Phone: 702-418-6672</div>
        <div className="email">melvintabion@gmail.com</div>
      </div>
    );
  }
}

export default Footer;

// import React, { Component } from "react";
// import "./header.css";
// import Navbar from "./navbar.js";

// class Header extends Component {
//   state = {};
//   render() {
//     return (
//       <div className="header">
//         <div className="navbar-wrapper">
//           <Navbar />
//         </div>
//         <div className="title-wrapper">My Blog</div>
//       </div>
//     );
//   }
// }

// export default Header;
