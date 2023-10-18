import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navLinks = links.map((link) => {
    let linkUrl = `#${link}`;
    return <a href={linkUrl} key={link}>{link}</a>
  })

  return <nav>
    {navLinks}
  </nav>;
}

export default NavBar;
