import React from "react";
import "./Home.css";
import Product from "./Product";
import HomeImage from "./img1.jpg";

function Home() {
  return (
    <div>
      <div className="home__container">
        <img className="home__image" src={HomeImage} alt="Home Img" />

        <div className="home__row">
          <Product
            id="12849"
            title="Blood Vessel Support Formula – Healthy Blood Pressure Naturally | Real Health Products"
            price="499"
            image="https://f9f8q8q3.rocketcdn.me/wp-content/uploads/2016/11/front_blood-vessel-main-400x400.png"
            alt="Product 1"
            rating={4.9}
          />

          <Product
            id="3534345"
            title="Vestige Eye Support Capsules"
            price="549"
            image="https://nmclife.com/wp-content/uploads/2020/01/VESTIGE-EYE-SUPPORT.png"
            alt="Product 2"
            rating={4.7}
          />

          <Product
            id="24242"
            title="Natura Health Products Power Adapt - 60 Capsules"
            price="612"
            image="https://images-na.ssl-images-amazon.com/images/I/71eb7z7TiEL._SL1500_.jpg"
            alt="Product 3"
            rating={4.3}
          />
        </div>

        <div className="home__row">
          <Product
            id="23553647"
            title="Home Health, Organic Castor Oil, 8 fl oz (236 ml)"
            price="344"
            image="https://cdn1.evitamins.com/images/products/Home_Health_Products/352557/1400/352557_front.jpg"
            alt="Product 4"
            rating={4.1}
          />

          <Product
            id="359473"
            title="Alta Health Products, herbal SILICA with bioflavonoids - 120 Tablets"
            price="400"
            image="https://cdn1.evitamins.com/images/products/Alta_Health_Products/3806/500/20110822_31.jpg"
            alt="Product 5"
            rating={5}
          />

          <Product
            id="24242"
            title=" Digestive Health - 60 tablets | Core Health "
            price="588"
            image="https://www.corehealthproducts.com/wp-content/uploads/2015/01/Digestive-Health-Front-600x600-1.jpg"
            alt="Product 6"
            rating={4.7}
          />
        </div>

        <div className="home__row">
          <Product
            id="23553647"
            title="Wholehealth Premium Supplements Premium Calcium Pyruvate - Best Value 750mg (300 Capsules)"
            price="999"
            image="https://cdn.shopify.com/s/files/1/0371/8086/6605/products/wholehealth-Calcium-Pyruvate-750mg-300-Capsules-v1a-01_1024x1024@2x.jpg?v=1618501903"
            alt="Product 7"
            rating={4.5}
          />

          <Product
            id="359473"
            title="Windmill Health Products Milltrium High Potency Multivitamin and Mineral Formula - 100 Tablets"
            price="784"
            image="https://cdn1.evitamins.com/images/products/Windmill_Health_Products/277483/1400/277483_front2020.jpg"
            alt="Product 8"
            rating={3.8}
          />

          <Product
            id="4839274"
            title="Tata 1mg Health Products : Buy Tata 1mg Health Products Products Online in India | 1mg"
            price="1199"
            image="https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600898738/cropped/evzdzmgmmpz1gqheuzbw.png"
            alt="Product 9"
            rating={3.3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
