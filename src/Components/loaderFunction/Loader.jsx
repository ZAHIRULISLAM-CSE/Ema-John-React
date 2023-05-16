import React from 'react';

const Loader = async () => {

    const savedCart = JSON.parse(localStorage.getItem("shopping-cart"));
    console.log(savedCart);
    const ids=Object.keys(savedCart)


    const loadedProduct= await fetch('http://localhost:5000/orders',{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(ids)
    })
    const data= await loadedProduct.json();
    return data;
};

export default Loader;