import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const Card = () => {
     const [cardData,setCardData] = useState([]);
     const [orderDetails,setOrderDetails]=useState([])

    const summeryDetails=(orderData)=>{
        setOrderDetails([...orderDetails,orderData])
    }


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
            </div>
        </div>
        
    );
};

export default Card;