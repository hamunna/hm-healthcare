import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
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
import ServiceDetails from './Pages/PrivatePages/ServiceDetails/ServiceDetails';
import CovidData from './Pages/PrivatePages/CovidData/CovidData';

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

          <Route exact path="/login">
            <Login></Login>
          </Route>

          <Route exact path="/signup">
            <Signup></Signup>
          </Route>


          <PrivateRoute path="/doctors">
            <Doctors></Doctors>
          </PrivateRoute>

          <PrivateRoute path="/healthTips">
            <HealthTips></HealthTips>
          </PrivateRoute>

          <PrivateRoute path="/covid">
            <CovidData></CovidData>
          </PrivateRoute>

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
