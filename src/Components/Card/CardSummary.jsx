import React from 'react';
import { Link } from 'react-router-dom';

const CardSummary = (props) => {
    const card=props.card;
    let totalSum=0;
    let totalProducts=0;
    let shippingCharge=0;
    for(const singleOrderDetails of card){
    //    singleOrderDetails.quantity=singleOrderDetails.quantity ||1;
        totalSum=totalSum+singleOrderDetails.price*singleOrderDetails.quantity;
        totalProducts=totalProducts+singleOrderDetails.quantity;
        shippingCharge=shippingCharge+singleOrderDetails.shipping;
    }
    let tax=totalSum*7/100;
    let grandTotal=totalSum+shippingCharge+tax;   
    return (
        <div className='sticky bg-orange-500  p-4 top-0' >
            <h1>Order Summary</h1>
                <h1>Selected Items:{totalProducts}</h1>
                <h1>Total Price:{totalSum}</h1>
                <h1>Total Shipping Charge:{shippingCharge}</h1>
                <h1>Tax:{tax}</h1>
                <h1>Grand Total:{grandTotal}</h1>
                <button onClick={props.delete} className='bg-gray-300 mt-2 p-2 rounded-md block' >Clear Cart</button>
                {
                    props.children.props.children =="Review Order"?<span><Link to='/order'><button className='bg-gray-300 mt-2 p-2 rounded-md'>Review Order</button></Link></span>:<span><Link to='/checkout'><button className='bg-gray-300 mt-2 p-2 rounded-md'>Proceed To Checkout</button></Link></span>
                }
        </div>
    );
};

export default CardSummary;