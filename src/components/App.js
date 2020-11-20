import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import AddBirthdays from "./views/AddBirthdays";
import Wishes from "./views/NavBar/Sections/Wishes";
import WishCard from "./views/wishCard/wishCard";
import "./app.css";
import { Experience } from "./views/Experience/Experience";

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <AddBirthdays />
      <WishCard />
      
      <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/experience" component={Auth(Experience, true)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/wishes" component={Auth(Wishes, true)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;