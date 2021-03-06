import React from "react";
import "../css/products.scss";
import forecastUrl from "./Forecast";

function Products() {
  const [weather, setWeather] = React.useState();
  React.useEffect(() => {
    forecastUrl().then(setWeather);
  }, []);

  // forecast().then(w => setWeather(w));

  return (
    <div className="container products">
      <h1> Products</h1>
      <h3>Offers today</h3>
      <div className="products-box">
        <div className="banner-l">
          {weather && <img src={weather} alt="Our offers"></img>}
          {!weather && <div>Loading...</div>}
        </div>
        <div className="banner-s">
          <div id="top-banner">
            <h3>The best coffee</h3>
          </div>
          <div id="bottom-banner">
            <h3>top 100 books</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
