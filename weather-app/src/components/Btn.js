import React from "react";

const Button = (props) => {
  const { btndata, customStyle } = props;
  return (
    <button className="btn-container" style={customStyle}>
      {btndata}
    </button>
  );
};
export default Button;
