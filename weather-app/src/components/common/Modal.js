import { useState } from "react";
import { Cities } from "../helper/CityData";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddIconButton from "./Add-Icon-Button";
import CloseIcon from "@mui/icons-material/Close";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import { MyContext } from "./Context";
import { useContext } from "react";

const Modal = (props) => {
  const context = useContext(MyContext);
  const [searchText, setSearchText] = useState("");
  // const [allCity, setAllCity] = useState(Cities);
  // const [currentCity, setCurrentCity] = useState(Cities);
  // const [selectedCities, setSelectedCities] = useState([]);
  // const [close, setClose] = useState(false)

  useEffect(()=>{
    const unselected = Cities.filter((city)=>!context.selectedCities.includes(city))
    context.setAllCity(unselected)
  },[])

  //handleChange **
  const handleChange = (e) => {
    setSearchText(e.target.value);
    const filteredList = Cities.filter((value) =>
      value.name.toLowerCase().includes(e.target.value.toLowerCase()) && !context.selectedCities.includes(value)
    );
    context.setAllCity(filteredList);
  };

  //handleAdd **
  function handleAdd(ct) {
    console.log("city added");
    if(!context.selectedCities.includes(ct)){
      const selected = [...context.selectedCities, ct];
      console.log(selected);
      context.setSelectedCities(selected);
      

      const unselectedCities =  context.allCity.filter((c) => c.id !== ct.id);
      console.log(unselectedCities);
      context.setAllCity(unselectedCities);

      toast.success("Added!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
        hideProgressBar: false,
        newestOnTop: false,
        closeOnClick: false,
        theme: "light",
      });
    } 
  
  };
 
  return (
    <div className="model-cover">
      <ToastContainer 
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" 
      />
      <div className="model-main-box">
        <div className="model-header">
          <div className="model-title"> Add City Modal </div>
          <div className="model-icon">
            <AddIconButton
              data={<CloseIcon />}
              handleClick={props.closeModal}
            />
          </div>
        </div>
        {/* <div className="model-container"> */}
        <div className="model-sub-container">
          <div className="model-search">
            <input
              type="text"
              placeholder="search city"
              value={searchText}
              onChange={handleChange}
            />
          </div>
          <div className="model-cities-container">
            {context.allCity.map((city) => {
              return (
                <div className="city-con" onClick={() => handleAdd(city)}>
                  <div>{city.name}</div>
                  <div className="add-btn">
                    <AddIconButton data={<AddCircleOutlineIcon />} />
                  </div>
                </div>
              );
            })}
            {context.allCity.length === 0 && (
              <div className="not-found-container"> data not found </div>
            )}
          </div>
        </div>
      </div>
      <div
        className="close-clicked"
        onClick={(e) => {
          e.preventDefault();
          props.closeModal();
        }}
      ></div>
    </div>
  );
};
export default Modal;
