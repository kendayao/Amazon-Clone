// React component imports
import React from 'react'
import "./Subtotal.css";
// current formatter import
import CurrencyFormat from "react-currency-format";
//context api import
import {useStateValue} from '../../contextAPI/StateProvider';
//selector import
import {getBasketTotal} from '../../contextAPI/reducer';
//react router import
import {useHistory} from 'react-router-dom'

function Subtotal() {
    const history=useHistory();
    const [{user, basket}, dispatch]=useStateValue();
    
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value)=>(
                    <>
                    <p>
                        Subtotal ({basket.length} items): <strong>{value}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox"/>This order contains a gift
                    </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={"$"}
            
            
            />
            {(user && basket.length>0) ? <button onClick={e=>history.push('/payment')}>Proceed to Checkout</button>:
            (user && basket.length===0)?<button onClick={e=>history.push('/')}>Add items to cart</button>:
            !user ? <button onClick={e=>history.push('/login')}>Sign In to Checkout</button>:<button disabled>Sign In to Checkout</button> }
        </div>
    )
}

export default Subtotal
