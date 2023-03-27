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
        <div>
            {
                cardData.map( singleCard => <SingleCard data={singleCard} ></SingleCard>)
            }
        </div>
    );
};

export default Card;