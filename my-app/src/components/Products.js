import React from "react";
import "../css/products.css";
import forecast from "./Forecast";

function Products() {
  const [weather, setWeather] = React.useState();
  forecast().then(setWeather);
  // forecast().then(w => setWeather(w));

  return (
    <div className="container products">
      <h1> Products</h1>
      <h3>Offers today</h3>
      <div className="products-box">
        <div className="large-unsplash">
          {weather && <img src={weather}></img>}
          {!weather && <div>Loading...</div>}
        </div>
        <div className="small-unsplash">
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
