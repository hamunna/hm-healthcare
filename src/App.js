import './App.css';
import Header from './Pages/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/HomePage/Home/Home';
import Footer from './Pages/Footer/Footer';

// ========
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';

const element = <FontAwesomeIcon icon={faCoffee} />
// ========


function App() {
  return (
    <div>
      
      {/* <Header></Header>
      <Home></Home>
      <Footer></Footer> */}

      {/* <Signup></Signup> */}
      <Login></Login>

    </div>
  );
}

export default App;
