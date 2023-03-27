import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const SingleCard = (props) => {
    console.log(props.data);
    const {img,name,price,seller,ratings}=props.data;
    return (
            <div className=' rounded-lg lg:h-full border-2' >
                <div className=' p-2'>
                    <img className=' rounded-lg md:h-48 lg:h-full w-full' src={img} alt="" />
                    <p>{name}</p>
                    <p className='mb-4'>Price:${price}</p>
                    <p>Manufacturer:{seller}</p>
                    <p>Rating: {ratings} stars</p>
               
                </div>
                <hr />
                 <div className='flex h-[50px] justify-center bg-orange-500  items-center'>
                    <p onClick={()=>props.summery(props.data)} className='' >Add To Cart <FontAwesomeIcon icon={faCartShopping} /></p>
                    {/* {faCartShopping} */}
                </div>
            </div>
    );
};

export default SingleCard;