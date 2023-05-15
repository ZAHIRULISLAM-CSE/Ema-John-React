import React from 'react';

const Loader = async () => {
    const loadedProduct= await fetch('http://localhost:5000/products')
    const data= await loadedProduct.json();
    return data;
};

export default Loader;