import React, { useState } from "react";
import Button from "./Btn";

export default function Sidebar(props) {
  const [active, setActive] = useState("Home");

  const { sidebarTabs } = props;

  const handleClick = (tab) => {
    setActive(tab);
    if (tab === "Home") {
      console.log("home");
    } else if (tab === "Cities") {
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
      {sidebarTabs.map((tab) => {
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
