import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Header/Header';
import Home from './Pages/HomePage/Home/Home';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Footer/Footer';
import AuthProvider from './Context/AuthProvider';
import Doctors from './Pages/HomePage/Doctors/Doctors';
import PrivateRoute from './Private/PrivateRoute';
import HealthTips from './Pages/PrivatePages/HealthTips/HealthTips';
import Covid from './Pages/PrivatePages/Covid/Covid';
import ServiceDetails from './Pages/PrivatePages/ServiceDetails/ServiceDetails';

/* // ========
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
const element = <FontAwesomeIcon icon={faCoffee} />
// ======== */


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

          <PrivateRoute path="/healthTips">
            <HealthTips></HealthTips>
          </PrivateRoute>
          
          <Route path="/covid">
            <Covid></Covid>
          </Route>

          <PrivateRoute path="/serviceDetails/:serviceId">
            <ServiceDetails></ServiceDetails>
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
