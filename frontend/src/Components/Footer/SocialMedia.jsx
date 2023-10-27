import React from "react";

function SocialMedia({ name, title, url }) {
  return (
    <div className="sm-btn">
      <a href={url} target="_blank" rel="noreferrer">
        <i className={`lab la-${name} sm-btn__lab`}></i>
        <p className="sm-btn__txt">{title}</p>
      </a>
    </div>
  );
}

export default SocialMedia;
