import { useState } from "react";
import { Cities } from "../helper/CityData";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddIconButton from "./Add-Icon-Button";
import CloseIcon from '@mui/icons-material/Close';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Model = () => {
    const [searchText, setSearchText] = useState("");
  const [allCity, setAllCity] = useState(Cities);
  const [currentCity, setCurrentCity] = useState(Cities);
  const [selectedCities, setSelectedCities] = useState([]);
  const [close, setClose] = useState(false)

  const handleChange = (event) =>{
    setSearchText(event.target.value);
        const filteredList = currentCity.filter((value) => 
        value.name.toLowerCase().includes(event.target.value.toLowerCase())
  );
    setAllCity(filteredList);
  };

//   function citiesFilter(value){
//         value.name.toLowerCase().include()
//   }

  function handleAdd(ct) {
    console.log("city added");
    const unselectedCities = currentCity.filter((c) => c.id !== ct.id);
    toast.success('Added!', {
        position: toast.POSITION.TOP_CENTER,
            autoClose: 1000,
            hideProgressBar: false,
            newestOnTop:false,
            closeOnClick: false,
            theme: "light"
    });
    console.log(unselectedCities);
    setAllCity(unselectedCities);
    console.log(allCity);
    setCurrentCity(unselectedCities);
    console.log(currentCity);
    let selectedCity = [...selectedCities, ct];
    setSelectedCities(selectedCity);
    setSearchText("")
  };
  console.log(selectedCities);

  function closeModal(){
    console.log("close model");
  };

  return (
    <div className="model-cover">
            <ToastContainer
            
          />
      <div className="model-main-box">
        <div className="model-header">
          <div className="model-title"> Add City Modal </div>
          <div className="model-icon" > <AddIconButton data={<CloseIcon />} handleClick={closeModal}/></div>
        </div>
        {/* <div className="model-container"> */}
        <div className="model-sub-container">
          <div className="model-search">
            <input type="text" placeholder="search city" value={searchText} onChange={handleChange}></input>
          </div>
          <div className="model-cities-container">
            {allCity.map((c) => {
              return (
                <div className="city-con" onClick={() => handleAdd(c)}>
                  <div>{c.name}</div>
                  <div className="add-btn">
                    <AddIconButton data={<AddCircleOutlineIcon />} />
                  </div>
                </div>
              );
            })}
            {allCity.length === 0 && <div className="not-found-container"> data not found </div>}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Model;
