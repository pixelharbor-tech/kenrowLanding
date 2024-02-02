import React from "react";
import { useLocation } from "react-router-dom";
const HeaderController = () => {
  const { pathname } = useLocation();

  let backgroundImage;
  let Keyword;
  let description;
  let callToAction;

  if (pathname === "/") {
    
  }
  return <div></div>;
};

export default HeaderController;
