import AddIconButton from "./Add-Icon-Button";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function Content() {
    function addCity(){
        console.log("city added");
    }
  return (
    <div className="cities-wrapper">
      <div className="left-container">
        <div className="city-left-header">
          <div>Cities</div>
          <div className="add-btn"><AddIconButton handleClick={addCity} data={<AddCircleOutlineIcon/>}/></div>
          
        </div>
        <div className="">
            <div className="none-selected-city-text">You haven't selected any city.</div>
        </div>
        <hr />
        
      </div>
    </div>
  );
}
export default Content;
