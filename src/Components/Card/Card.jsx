import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const Card = () => {
     const [cardData,setCardData] = useState([]);
     const [orderDetails,setOrderDetails]=useState([])

    const summeryDetails=(orderData)=>{
        console.log(orderData);
        setOrderDetails([...orderDetails,orderData]);
    }

    console.log(orderDetails);
    let totalSum=0;
    let shippingCharge=0;
    for(const singleOrderDetails of orderDetails){
        totalSum=totalSum+singleOrderDetails.price;
        shippingCharge=shippingCharge+singleOrderDetails.shipping;
    }
    let tax=totalSum*7/100;
    let grandTotal=totalSum+shippingCharge+tax;


     useEffect(()=>{
        fetch("products.json")
        .then( res => res.json())
        .then( data => setCardData(data))
     },[])
    return (
        <div className=' lg:grid grid-cols-5'  >
            <div className='col-span-4 gap-8 mx-[8%]  mt-12 lg:grid grid-cols-3'>
            {
                cardData.map( singleCard => <SingleCard summery={summeryDetails} data={singleCard} ></SingleCard>)
            }
            </div>
            <div>
                <h1>Order Summay</h1>
                <h1>Selected Items:{orderDetails.length}</h1>
                <h1>Total Price:{totalSum}</h1>
                <h1>Total Shipping Charge:{shippingCharge}</h1>
                <h1>Tax:{tax}</h1>
                <h1>Grand Total:{grandTotal}</h1>
            </div>
        </div>
        
    );
};

export default Card;