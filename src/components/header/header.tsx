import React from "react";
import "./header.css";
import Logo from "../../assets/images/logo.svg";
import Dropdown from "../dropdown/dropdown";

const Header = () => {
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2">
              <img src={Logo} alt="" />
            </div>
            {/* Header search start */}
            <div className="col-sm-5">
              <div className="headerSearch d-flex align-items-center">
                <Dropdown />

                <div className="search">
                  <input type="text" placeholder="Seach for items..." />
                </div>
              </div>
            </div>
            {/* Header search end */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
