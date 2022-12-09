import AddIconButton from "../common/Add-Icon-Button";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { MyContext } from "../common/Context";
import { useContext } from "react";

const CityInfo = () => {
//   const [cardState, setcardState] = useState(false);
//   const [currentCity, setCurrentCity] = useState(Cities);
//   const [favCity,setFavCity]=useState([])
    const context = useContext(MyContext);

  const addFavCity = () => {
    if (!context.favCity.includes(context.currentCity)) {
      const current = [...context.favCity, context.currentCity];
      context.setFavCity(current);
      toast.success('City added to favorites', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    else
    {
      const fav = context.favCity.filter((c) => c.id !== context.currentCity.id);
      context.setFavCity(fav)
      
      toast('❌removed from favorites', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  };

  return (
    <div className="city-details">
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
      {context.cardState ? (
        <div className="right-container">
            <div className="city-right-header">
            <div>{context.currentCity.name}</div>
          <div className="add-btn">
          <AddIconButton data={!context.favCity.includes(context.currentCity) ? <StarBorderIcon/> : <StarIcon/>} handleClick={addFavCity} />
            </div>
          </div>
          <div className="right-data-container">
            <div style={{color:"green"}}>
              <i>"{context.currentCity.desc}"</i>
            </div>
            <div>
              <b>Temperature: </b>
              {context.currentCity.temp}
            </div>
            <div>
              <b>Humidity: </b>
              {context.currentCity.humidity}
            </div>
          </div>
        </div>
      ) : (
        <><div></div></>
      )}
    </div>
  );
};
export default CityInfo;
