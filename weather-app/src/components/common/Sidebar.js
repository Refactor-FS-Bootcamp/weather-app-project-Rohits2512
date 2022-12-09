import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { MyContext } from "./Context";
// import { useContext } from "react";

export default function Sidebar(props) {
  const [selectedTab, setSelectedTab] = useState("Home");
  // const context = useContext(MyContext);
  // const sample ="This is city description";
  // const para = "You have not selected any city as a favorite yet.";
  const navigate = useNavigate();
  const { sbTabs } = props;

  const handleClick = (tab) => {
    setSelectedTab(tab);
    if (tab === "Home") {
      navigate("/");
      console.log("home");
    } else if (tab === "City") {
      navigate("/city");
      console.log("cities");
    }
  };
  const customStyle = {
    marginTop: "0px",
    padding: "20px",
    textAlign: "center",
    cursor: "pointer",
  };

  return (
    <div className="main-sb-container">
      {sbTabs.map((tab) => {
        return (
          <>
            <div
              className={
                selectedTab === tab.tab ? "side-bar-active" : "side-bar-inactive"
              }
              style={customStyle}
              onClick={() => handleClick(tab.tab)}
            >
              {tab.tab}
            </div>
          </>
        );
      })}
    </div>
  );
}
