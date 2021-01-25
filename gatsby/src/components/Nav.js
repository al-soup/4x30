import React from "react";
import { Link } from "gatsby";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/signup">SignUp</Link></li>
      </ul>
    </nav>
  )
}