import "./App.css";
import AppRouter from "./Routes/app-routes";
import { ApplicationContextProvider } from "./components/common/Context";

function App() {
  return (
    <div className="App">
      <ApplicationContextProvider>
        <AppRouter/>
        </ApplicationContextProvider>
    </div>
  );
}

export default App;
