import "../App.css";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import City from "../Pages/cities";
import CustomLayout from "../components/custom-layout";

export default function AppRouter() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <CustomLayout>
              <Home />
            </CustomLayout>
          }
        />
        <Route
          path="/City"
          element={
            <CustomLayout>
              <City />
            </CustomLayout>
          }
        />
      </Routes>
    </div>
  );
}
