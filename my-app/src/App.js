import "./css/content-page.css";
import React from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// My components
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

//Pages
import About from "./components/About";
import ContactPage from "./components/ContactPage";
import Service from "./components/Service";
import Works from "./components/Works";

function App() {
  return (
    // <div className="App">
    //   <h1>This is my app!!!</h1>
    //   <p>The sky is blue and the grass is green.</p>
    // </div>

    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Welcome />
          <Products />
          <Contact />
        </Route>
        <Route path="/about-me">
          <About />
        </Route>
        <Route path="/contact-me">
          <ContactPage />
        </Route>
        <Route path="/service">
          <Service />
        </Route>
        <Route path="/works">
          <Works />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
if (module.hot) {
  module.hot.accept();
}
