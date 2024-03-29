import React from "react";

const SocialLinks = ({ icon, links }) => {
  return (
    <>
      <a href={links} target="_blank">
        <img
          src={icon}
          alt="icon/social"
          className="w-8 h-8 flex itemscenter cursor-pointer md:w-6 md:h-6 sm:w-5 sm:h-5 transition-all duration-200 hover:scale-110"
        />
      </a>
    </>
  );
};

export default SocialLinks;
