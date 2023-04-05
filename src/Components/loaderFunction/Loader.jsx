import React from 'react';

const Loader = async () => {
    const loadedProduct= await fetch('products.json')
    const data= await loadedProduct.json();
    return data;
};

export default Loader;