import React from 'react';
import ResponsiveMenu from './Menu/ResponsiveMenu';
import Footer from './Footer/Footer';
import { Route, Switch, Redirect } from "react-router-dom";
import jwtDecode from 'jwt-decode';
import './App.css';

import Login from './Pages/Login/Login';
import Admin from './Pages/Admin/Admin';
import Home from './Pages/Home/Home';
import Sobre from './Pages/Sobre/Sobre';
import Contato from './Pages/Contato/Contato';
import Ondulindas from './Pages/Ondulindas/Ondulindas';
import Cabelos from './Pages/Categorias/Cabelos/Cabelos';

function IsUserLoggedIn() {
  const token = localStorage.getItem('token')
  if (!token) {
    return false;
  }
  try {
    const jwtDecoded = jwtDecode(token)
    console.log(jwtDecoded)
    return true;
  }
  catch (e) {
    return false;
  }
};

function App() {

  function GetRoutes() {
    var allRoutes = (
      <>
        <Route exact path="/home" component={Home} />
        <Route exact path="/sobre" component={Sobre} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/contato" component={Contato} />
        <Route exact path="/ondulindas" component={Ondulindas} />
        <Route exact path="/cabelos" component={Cabelos} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </>
    );
    if (IsUserLoggedIn()) {
      return (
        <>
          <Route exact path="/admin" component={Admin} />
          {allRoutes}
        </>
      )
    } else {
      return (
        <>
          {allRoutes}

          <Route exact path="/admin">
            <Redirect to="/home" />
          </Route>
        </>
      )
    };
  };

  return (
    <div className="page-container">
      <div className="content-wrap">
        <ResponsiveMenu />

        <Switch>
          {GetRoutes()}
        </Switch>

      </div>
      <Footer />

    </div>
  );
}

export default App;
