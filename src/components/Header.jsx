import React from "react";
import logo from "../assets/logo/logo.webp";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to={"/"}>
        <div className="pl-5 pt-3">
          <img
            className="h-[60px] md:h-[100px] w-[60px] md:w-[100px] absolute"
            src={logo}
            alt=""
          />
        </div>
      </Link>
    </div>
  );
};

export default Header;
