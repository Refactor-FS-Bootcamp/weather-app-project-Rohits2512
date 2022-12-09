import React from "react";
import Button from "./Btn";
import Modal from "./Modal";
import { useState } from "react";
import { useContext } from "react";
import { MyContext } from "./Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddIconButton from "./Add-Icon-Button";
import StarIcon from '@mui/icons-material/Star';

const Header = (props) => {
  const [displayModal, setDisplayModal] = useState(false);
  const { heading } = props;
  const context = useContext(MyContext);

  function closeModal() {
    setDisplayModal(false);
  }

  const addCity = () => {
    setDisplayModal(true);
    console.log("Add City");
  };

  const customStyleBtn = {
    backgroundColor: "purple",
    color: "white",
    height: "40px",
    fontSize: "17px",
    border: "none",
    outline: "none",
  };

  const removeFavCity = (city) => {
    console.log("city removed");
    const favCity = context.favCity.filter((c) => c.id !== city.id);
    context.setFavCity(favCity);
    toast("❌City removed from favorites", {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="all-content">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="header-wrapper">
        <div>
          <h3>{heading}</h3>
        </div>
        <div>
          <Button
            data="Add New City"
            handleClick={addCity}
            customStyle={customStyleBtn}
          />
        </div>
      </div>
      <div className="text-content">
        {context.favCity.length === 0 ? (
          <div className="no-city">
            You have not selected any city as a favorite yet.
          </div>
        ) : (
          <>
            {context.favCity.map((city) => {
              return (
                <div className="favcity-box">
                  <div className="favcity-header">
                    <div>{city.name}</div>
                    <AddIconButton
                      data={<StarIcon/>}
                      handleClick={() => removeFavCity(city)}
                    />
                  </div>
                  <div className="favcity-content">
                    <div style={{ color: "green" }}>
                      <i>"{city.desc}"</i>
                    </div>
                    <div>
                      <b>Temperature: </b>
                      {city.temp}
                    </div>
                    <div>
                      <b>Humidity: </b>
                      {city.humidity}
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
      {displayModal ? <Modal closeModal={closeModal} /> : <></>}
    </div>
  );
};
export default Header;
