import React from "react";
import Button from "./Btn";

const Header = (props) => {
  const { headdata, subheaddata} = props;

  const customStyle = {
    backgroundColor: "purple",
    color: "white",
    height: "40px",
    // width : "135px",
    fontSize: "17px",
    border: "none",
    fontStyle: "Courier New",
  };

  return (
    <div className="main-container">
      <div className="head-wrapper">
        <div className="header-container">
          <div className="header-text">
            <h3>{headdata}</h3>
          </div>
          <div className="header-btn">
            <Button btndata={"Add New City"} customStyle={customStyle} />
          </div>
        </div>
        <div><p>{subheaddata}</p></div>
      </div>
    </div>
  );
};
export default Header;
