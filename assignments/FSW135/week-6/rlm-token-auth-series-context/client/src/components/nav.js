import React from "react";

export default function NavBar() {
  return (
    <nav>
      <ul className="nav-container">
        <li>
          <a className="nav-text" href="default.asp">
            Home
          </a>
        </li>
        <li>
          <a className="nav-text" href="news.asp">
            News
          </a>
        </li>
        <li>
          <a className="nav-text" href="contact.asp">
            Contact
          </a>
        </li>
        <li>
          <a className="nav-text" href="about.asp">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}
