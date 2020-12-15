// React component imports
import React, { useEffect, useState } from 'react'
import './Orders.css'
import OrderItem from '../order-item/OrderItem'
// firebase imports
import { db } from '../../firebase/firebase'
//context api imports
import {useStateValue} from '../../contextAPI/StateProvider'
// react router imports
import {Link} from 'react-router-dom'

function Orders() {
    const[{basket, user}, dispatch]=useStateValue();
    const [orders, setOrders]=useState([])

    //on component load get all orders from firebase database
    useEffect(()=>{
        if(user){
            db.collection('users').doc(user?.uid).collection('orders').orderBy('created', 'desc')
            .onSnapshot(snapshot=>(
            setOrders(snapshot.docs.map(doc=>({
                id: doc.id,
                data: doc.data()
            })))))
        }else{
            setOrders([])
        }
    },[user])
    return (
        <div className='orders'>
            {orders.length>0?(
            <div>
                <div className='orders__header'>
                <h1>Your Orders</h1>
                <Link to='/' className='orders_header-link'>Back to Homepage</Link>
                </div>

                <div className='orders__order'>
                    {orders?.map(order=>(
                        <OrderItem order={order}/>
                    ))}
                </div>
            </div>):
            <h1>No Recent Orders</h1>
            }
        </div>
    )
}

export default Orders
