import './App.css';
import Profile  from './Profile/Profile.js';
import Photo from "./Profile/photo.jpg";
function App() {
  const alertfun = () => {
    return alert("this my alert");
  }
  return (
    <div className="App">
       < Profile fullName="See Misurata" bio=" " profession="IN Libya" alert={alertfun} Photo={Photo}  />
    </div>
  );
}

export default App;