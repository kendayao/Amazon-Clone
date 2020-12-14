import React from "react";
import "./Home.css";
import Product from "../product/Product";


function Home() {


  // image="https://images-na.ssl-images-amazon.com/images/I/810%2BGNdkzKL._AC_SX450_.jpg"
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YzExNTRjZmUt/YzExNTRjZmUt-YTJjN2Q5MTct-w1500._CB414654619_.jpg"
          alt="banner"
        />
        <div className="home__row">
          <Product
            id={1}
            title="Ticova Ergonomic Office Chair - High Back Desk Chair with Adjustable Lumbar Support & Thick Seat Cushion - 140°Reclining & Rocking Mesh Computer Chair with Adjustable Headrest, Armrest"
            price={149.99}
            image={
            "https://images-na.ssl-images-amazon.com/images/I/61Rxx9IF88L._AC_SX522_.jpg"
            }
            rating={5}
          />
          <Product 
            id={2}
            title="KUPPET Stand Mixer, 8-Speed Tilt-Head Electric Food Stand Mixer with Dough Hook, Wire Whip & Beater, Pouring Shield, 4.7QT Stainless Steel Bowl (Red)"
            price={129.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/71%2BpGEatBcL._AC_SY450_.jpg"
            }
            rating={4}
            />
        </div>
        <div className="home__row">
        <Product
            id={3}
            title="Fire TV Stick 4K streaming device with Alexa Voice Remote | Dolby Vision | 2018 release"
            price={17.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/51CgKGfMelL._AC_SX569_.jpg"
            }
            rating={4}
          />
          <Product
            id={4}
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation"
            price={19.99}
            image={
            "https://images-na.ssl-images-amazon.com/images/I/41Ag4WE7uyL._SX324_BO1,204,203,200_.jpg"
            }
            rating={5}
          />
          <Product
            id={5}
            title="Hanes Men's Ecosmart Fleece Sweatshirt"
            price={11.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/91crpv2PcsL._AC_UX679_.jpg"
            }
            rating={3}
          />
        </div>
        <div className="home__row">
        <Product
            id={6}
            title="COWIN E7 Active Noise Cancelling Headphones Bluetooth Headphones with Microphone Deep Bass Wireless Headphones Over Ear, Comfortable Protein Earpads, 30 Hours Playtime for Travel/Work, Black"
            price={89.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/41WzHq0SkRL._AC_.jpg"
            }
            rating={5}
          />
          <Product
            id={7}
            title='All-new Fire HD 8 tablet, 8" HD display, 32 GB, designed for portable entertainment, Black'
            price={59.99}
            image={
            "https://images-na.ssl-images-amazon.com/images/I/61jIs7q6SML._AC_SX522_.jpg"
            }
            rating={4}
          />
        </div>
        <div className="home__row">
        <Product
            id={8}
            title="SAMSUNG 50-inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN50TU8000FXZA, 2020 Model)"
            price={499.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/71RiQZ0J2SL._AC_SX450_.jpg"
            }
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;