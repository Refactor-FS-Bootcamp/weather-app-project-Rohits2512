import AddIconButton from "../common/Add-Icon-Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState } from "react";
import Modal from "../common/Modal";
import CityInfo from "./CityInfo";
import { MyContext } from "../common/Context";
import { useContext } from "react";

const Content = () => {
    const context = useContext(MyContext);
  const [displayModal, setDisplayModal] = useState(false);
//   const [selectedCities, setSelectedCities] = useState([]);
//   const [currentCity,setCurrentCity]= useState();
//   const [cardState, setCardState] = useState(false);

  function addCity() {
    console.log("city added");
    setDisplayModal(true);
  }

  function closeModal() {
    setDisplayModal(false);
  }

  function displayCityDetails(city){
    context.setCurrentCity(city);
    context.setCardState(true);
  }

  return (
    <div className="cities-wrapper">
      <div className="left-container">
        <div className="city-left-header">
          <div>Cities</div>
          <div className="add-btn">
            <AddIconButton
              handleClick={addCity}
              data={<AddCircleOutlineIcon />}
            />
          </div>
        </div>
        <div className="">
            {context.selectedCities.length === 0 ? (<div className="none-selected-city-text">
            You haven't selected any city.
          </div>) : (
            <>
                {context.selectedCities.map((ct) => {
                    return(
                        <div className="left-city-container" onClick={() => displayCityDetails(ct)}>
                            <div>{ct.name}</div>
                            <div>{ct.temp}</div>
                        </div>
                    )
                })}
            </>
          )}
        </div>
        <hr />
      </div>
      <CityInfo/>
      {displayModal ? <Modal closeModal={closeModal} reset={true} /> : <></>}
    </div>
  )
};
export default Content;
