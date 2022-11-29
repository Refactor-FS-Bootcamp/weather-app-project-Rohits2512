import './App.css';
import Header from './components/Header';

function App() {
  let headerdata = "My Favorite cities";
  return (
    <div className="App">
      <Header headerdata = {headerdata}/>
    </div>
  );
}

export default App;
