import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Header/Header';
import Home from './Pages/HomePage/Home/Home';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams
} from "react-router-dom";

// ========
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import AuthProvider from './Context/AuthProvider';
import useAuth from './hooks/useAuth';
import Doctors from './Pages/HomePage/Doctors/Doctors';
import PrivateRoute from './Private/PrivateRoute';

const element = <FontAwesomeIcon icon={faCoffee} />
// ========


function App() {
  return (
    <AuthProvider>
      <Router>

        <Header></Header>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Router path="/signup">
            <Signup></Signup>
          </Router>

          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/doctors">
            <Doctors></Doctors>
          </PrivateRoute>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>

      </Router>
    </AuthProvider>
  );
}

export default App;
