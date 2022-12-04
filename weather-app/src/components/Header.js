import React from "react";
import Button from "./Btn";

const Header = (props) => {
  
  const {heading} =props;
  const addNewCity = () =>{
    console.log("Add City");
  }

  const customStyleBtn = {
      backgroundColor: "purple",
      color: "white",
      height: "40px",
      fontSize: "17px",
      border:"none",
      outline:"none"
    };

  return(
    <div className="all-content">
      <div className="header-wrapper">
            <div><h3>{heading}</h3></div>
            <div>
              <Button data="Add New City" handleClick={addNewCity} customStyle={customStyleBtn}/>
            </div>
      </div>
      <div className="text-content">
      <p>You have not selected any city as a favorite yet.</p>
      </div>
      </div>
  )
};
export default Header;

