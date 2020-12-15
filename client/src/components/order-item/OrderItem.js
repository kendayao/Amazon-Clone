import React from 'react';
import CheckoutProduct from '../checkout-product/CheckoutProduct';
import './OrderItem.css';
import moment from 'moment'
import CurrencyFormat from 'react-currency-format'

function OrderItem({order}) {
    return (
        <div className='order'>
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mm a')}</p>
            <p className="order__id">
                <small>transaction-id: {order.id}</small>
            </p>
            {order.data.basket.map(orderItem=>(
            <CheckoutProduct 
                key={orderItem.id}  
                id={orderItem.id}
                title={orderItem.title}
                image={orderItem.image}
                price={orderItem.price}
                rating={orderItem.rating}
                hideButton
            />
            ))}
            <CurrencyFormat 
                renderText={(value)=>(
                    <h3 className="order__total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount/100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    )
}

export default OrderItem