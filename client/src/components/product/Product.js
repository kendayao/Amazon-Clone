// React component imports
import React from "react";
import "./Product.css";
// context api imports
import {useStateValue} from '../../contextAPI/StateProvider';

function Product({ id, productSKU, title, image, price, rating }) {
  const [{basket}, dispatch]=useStateValue();

  // add to cart function
  const addToBasket = () => {
    //dispath the item to the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item:{
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    })
  }
  
  return (
    <div key={id} className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
        <p> {" ⭐".repeat(rating)}</p>
        </div>
      </div>
       <img src={image} alt="product" />
      <button onClick={addToBasket}>Add to Cart</button>
    </div>
    
  );
}

export default Product;
