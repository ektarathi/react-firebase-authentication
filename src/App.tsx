import React from 'react';
import './App.scss';
import "./assets/scss/base.scss";
import Home from "./components/Home";
import About from "./components/AboutUs";
import Contact from "./components/Contact";
import Header from './components/Header';
import Footer from './components/Footer';
import LogIn from './components/authentication/LogInPage';
import SignUp from './components/authentication/SignupPage';
import PasswordReset from './components/authentication/PasswordReset';
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <main>
      <Header />
      <Router>
        <Home path="home" />
        <About path="about-us"/>
        <Contact path="contact-us"/>
        <LogIn path="/"/>
        <SignUp path="signup"/>
        <PasswordReset path="password-reset"/>
      </Router>
      <Footer/>
      </main>
    </div>
  );
}

export default App;
