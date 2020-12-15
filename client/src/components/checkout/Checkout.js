import React from 'react';
import './Checkout.css';
import CheckoutProduct from '../checkout-product/CheckoutProduct'
import Subtotal from "../subtotal/Subtotal"
import {useStateValue} from '../../contextAPI/StateProvider';
import {Link} from 'react-router-dom'


function Checkout() {
    const[{basket}, dispatch]=useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" 
                    src="https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2020/Holiday/GCLPBanners/holi_GCLP_3rd_EN_1024x90_20200918.jpg" 
                    alt="banner ad"
                />
                {basket.length>0? 
                    <div>
                        <h2 className="checkout__title">Your Shopping Cart</h2>
                                {basket.map(basketItem=>(
                                <CheckoutProduct
                                key={basketItem.id}  
                                id={basketItem.id}
                                title={basketItem.title}
                                image={basketItem.image}
                                price={basketItem.price}
                                rating={basketItem.rating}
                                />))}
                    </div>:   
                    <div className="checkout__empty">
                        <h1 className='checkout__emptyTitle'>Your Shopping Cart is empty.</h1>
                        <p className='checkout__emptyContent'>Your Shopping Cart lives to serve. Give it purpose — fill it with groceries, clothing, household supplies, electronics, and more.
                        Continue shopping on the <Link className='checkout__emptyLink' to='/'>Amazon-Clone.com homepage</Link>.</p>
                    </div>}
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
