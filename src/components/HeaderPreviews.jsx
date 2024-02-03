import React from "react";
import { pageTitleName } from "../utils/PageTitle";
import "../style/headerPreview.scss"
const HeaderPreviews = ({
  Keyword,
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
        backgroundImage: `url(${backgroundImage})`,
        height: height
       }}
      >
        <div className="overlay">
            <h3>{upDescription}</h3>
            <h1>{Keyword}</h1>
        </div>
      </div>
    </>
  );
};

export default HeaderPreviews;
