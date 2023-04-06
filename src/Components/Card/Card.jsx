import React, { useEffect, useState } from 'react';
import AddToLocal from '../Database/AddToLocal';
import SingleCard from '../SingleCard/SingleCard';
import CardSummary from './CardSummary';

const Card = () => {
     const [cardData,setCardData] = useState([]);
     const [orderDetails,setOrderDetails]=useState([]);
     const allCartFromLocal=[];
        const summeryDetails=(orderData)=>{ 
            let newCart = [];
            const exists = orderDetails.find(pd => pd.id === orderData.id);
            if (!exists) {
                orderData.quantity = 1;
                newCart = [...orderDetails, orderData]
            }
            else {
                exists.quantity = exists.quantity + 1;
                const remaining = orderDetails.filter(pd => pd.id !== orderData.id);
                newCart = [...remaining, exists];
            }
            setOrderDetails(newCart);
            AddToLocal(orderData.id)
    }

    //handleDeletebUTTON
    const handleDeleteButton=()=>{
        console.log("ok")
    }



    // console.log(orderDetails);
    useEffect(()=>{
        fetch("products.json")
        .then( res => res.json())
        .then( data => setCardData(data))
     },[])

    useEffect(()=>{
        const savedCart=JSON.parse(localStorage.getItem("shopping-cart"));
        //get the product with id
        const storeDataInArray=[];
        for (const id in savedCart){
           const savedProduct=cardData.find(product => product.id === id);
           if(savedProduct){
                //setting up quantity
                const quantity=savedCart[id];
                savedProduct.quantity=quantity;
                storeDataInArray.push(savedProduct);
           }
           setOrderDetails(storeDataInArray);
        }
        
    },[cardData])

    return (
        <div className=' lg:grid grid-cols-5'  >
            <div className='col-span-4 gap-8 mx-[8%]  mt-12 lg:grid grid-cols-3'>
            {
                cardData.map( singleCard => <SingleCard summery={summeryDetails} data={singleCard} ></SingleCard>)
            }
            </div>
            <div>
                <CardSummary  delete={handleDeleteButton} card={orderDetails} ></CardSummary> 
            </div>
        </div>
        
    );
};

export default Card;