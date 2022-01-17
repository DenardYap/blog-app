import React from "react";
import NavEle from "./NavEle";

const navbar = () => {
  return (
    <nav>
      <NavEle name="Home" link="#" />
      <NavEle name="Blog" link="#" />
      <NavEle name="About" link="#" />
      <NavEle name="Post" link="#" />
      <NavEle name="More..." link="#" />
    </nav>
  );
};

export default navbar;
