import "../App.css";
import { Route, Routes } from "react-router-dom";
import Cities from "../Pages/cities";
import Home from "../Pages/Home";
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
              <Cities />
            </CustomLayout>
          }
        />
      </Routes>
    </div>
  );
}
