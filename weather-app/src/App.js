import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route , Routes} from "react-router-dom";
import Cities from "./Pages/cities";
import Home from "./Pages/Home";

function App() {
  
  let subheaddata ="You have not selected any city as a favorite yet."
  const sidebarTabs = [
    {
      tab: "Home",
    },
    {
      tab: "Cities",
    },
  ];

  return (
    <div className="App">
      <Sidebar sidebarTabs={sidebarTabs} />
      <Header headdata={"My Favorite cities"} subheaddata={subheaddata} />
      <BrowserRouter>
       <Routes>
          <Route path="/" element={ <Home />}/>
          <Route path="/Cities" element={<Cities />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
