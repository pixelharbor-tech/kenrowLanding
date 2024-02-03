import React from "react";
import { pageTitleName } from "../utils/PageTitle";
import "../style/headerPreview.scss"
import  Home from "../assets/who-we-help.jpg"
const HeaderPreviews = ({
  backgroundImage,
  upDescription,
  description,
  callToAction,
  pageTitle,
  height,
}) => {

    const pageName = pageTitleName(pageTitle)
  return (
    <>
    {pageName}
      <div className="container header-preview" 
       style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/who-we-help.jpg)`,
        height: "100vh"
       }}
      >
        <div className="overlay">
            
        </div>
      </div>
    </>
  );
};

export default HeaderPreviews;
