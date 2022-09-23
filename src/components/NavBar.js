import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkjxs = links.map((addr) =>{
    return <a href={`#${addr}`} key={addr}>{addr}</a>
    
  })

  return <nav>{/* display an <a> tag for each link here */} {linkjxs}</nav>;
}

export default NavBar;
