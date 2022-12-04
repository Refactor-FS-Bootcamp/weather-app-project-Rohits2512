import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar(props) {
  const [active, setActive] = useState("Home");
  // const sample ="This is city description";
  // const para = "You have not selected any city as a favorite yet.";
  const navigate = useNavigate();
  const { sbTabs } = props;

  const handleClick = (tab) => {
    setActive(tab);
    if (tab === "Home") {
      navigate("/");
      console.log("home");
    } else if (tab === "Cities") {
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
                active === tab.tab ? "side-bar-active" : "side-bar-inactive"
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
