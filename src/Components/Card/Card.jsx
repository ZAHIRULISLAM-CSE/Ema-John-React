import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const Card = () => {
     const [cardData,setCardData] = useState([]);
     useEffect(()=>{
        fetch("products.json")
        .then( res => res.json())
        .then( data => setCardData(data))
     },[])
    return (
        <div className=' lg:grid grid-cols-5'  >
            <div className='col-span-4 gap-8 mx-[8%]  mt-12 lg:grid grid-cols-3'>
            {
                cardData.map( singleCard => <SingleCard data={singleCard} ></SingleCard>)
            }
            </div>
            <div>
                <h1>Summery</h1>
            </div>
        </div>
        
    );
};

export default Card;