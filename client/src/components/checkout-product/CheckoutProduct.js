import React from 'react';
import './CheckoutProduct.css';
import {useStateValue} from '../../contextAPI/StateProvider';

function CheckoutProduct({id, image, title, price, rating, hideButton}) {
    const [{basket}, dispatch]=useStateValue();

    const removeFromBasket=()=>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <div className='checkoutProduct'>
            <img src={image} className='checkoutProduct__image' alt=""/>
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price"><small>$</small><strong>{price}</strong></p>
                <div className="checkoutProduct__rating"><p>{" ⭐".repeat(rating)}</p></div>
                {!hideButton&&(
                    <button onClick={removeFromBasket}>Remove from cart</button>
                )}
                
            </div>
        </div>
    )
}

export default CheckoutProduct