import React from 'react';

const SingleCard = (props) => {
    console.log(props.data);
    const {img,name,price,seller,ratings}=props.data;
    return (
            <div className='p-2 rounded-lg border-2' >
                <img className=' rounded-lg md:h-48 lg:h-72 w-full' src={img} alt="" />
                <p>{name}</p>
                <p className='mb-4'>Price:${price}</p>
                <p>Manufacturer:{seller}</p>
                <p>Rating: {ratings} stars</p>
            </div>
    );
};

export default SingleCard;