import React from "react";

export default function NavBar(props) {
  const { logout } = props;
  return (
    <nav>
      <ul className="nav-container">
        <li>
          <a className="nav-text" onClick={logout}>
            Logout
          </a>
        </li>
      </ul>
    </nav>
  );
}
