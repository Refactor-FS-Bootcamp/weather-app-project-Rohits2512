import React from "react";
import Button from "./Btn";
import Model from "./Model";
import { useState } from "react";

const Header = (props) => {
  
  const [displayModel, setDisplayModel] = useState(false);
  const {heading} =props;

  const addNewCity = () =>{
    setDisplayModel(true);
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
      {displayModel ? <Model/> : <></>}
      </div>
  )
};
export default Header;

