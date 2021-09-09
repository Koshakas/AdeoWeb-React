import "./css/content-page.scss";
import React from "react";

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
  const [pageHistory, setPageHistory] = React.useState(["home"]);
  const page = pageHistory[pageHistory.length - 1];

  const setPage = p => {
    if (p !== page) setPageHistory([...pageHistory, p]);
  };
  const onBack = () => {
    if (pageHistory.length > 1) setPageHistory(pageHistory.slice(0, -1));
  };

  return (
    <>
      <Header onPageChange={setPage} />
      {page === "home" && (
        <>
          <Welcome />
          <Products />
          <Contact />
        </>
      )}
      {page === "about-me" && <About onBack={onBack} />}
      {page === "contact-me" && <ContactPage onBack={onBack} />}
      {page === "service" && <Service onBack={onBack} />}
      {page === "works" && <Works onBack={onBack} />}
      <Footer onPageChange={setPage} />
    </>
  );
}

export default App;
if (module.hot) {
  module.hot.accept();
}
