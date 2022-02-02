import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  
  const popLinks = links.map(link => <a key={link} href={`#${link}`}>{link}</a>)
  
  return <nav>{popLinks}</nav>;
}

export default NavBar;
