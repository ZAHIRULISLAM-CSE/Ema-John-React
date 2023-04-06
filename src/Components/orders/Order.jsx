import React, { useEffect, useState } from "react";
import CardSummary from "../Card/CardSummary";
import { useLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Order = () => {
  const cardData = useLoaderData();
  const [cart, setCart] = useState([]);


  const deleteSingleProduct = (id) => {
    const remainDataInArray = cart.filter((p) => p.id != id);
    setCart(remainDataInArray);
    const savedCart = JSON.parse(localStorage.getItem("shopping-cart"));
    if (id in savedCart) {
      delete savedCart[id];
      localStorage.setItem('shopping-cart', JSON.stringify(savedCart));
  }
};


const clearCart=()=>{
   localStorage.removeItem('shopping-cart');
   setCart([]); 
}

  useEffect(() => {
    // //get selected order from local storage
    const savedCart = JSON.parse(localStorage.getItem("shopping-cart"));
    //get the product with id
    let storeDataInArray = [];
    for (const id in savedCart) {
      const savedProduct = cardData.find((product) => product.id === id);
      if (savedProduct) {
        //setting up quantity
        const quantity = savedCart[id];
        savedProduct.quantity = quantity;
        storeDataInArray.push(savedProduct);
      }
    }
    setCart(storeDataInArray);
  }, []);

 

  return (
    <div className="flex  w-4/5 mx-auto flex-row-reverse">
      <div className=" mt-6 p-5 rounded-sm w-1/3">
        <CardSummary delete={clearCart}  card={cart}><p>Proceed Checkout</p></CardSummary>
      </div>
      <div className="flex-1  w-4/5 mx-auto">
        {cart.map((singleElement) => (
          <div className="flex border-2 p-3 w-2/3 gap-5 mt-5 mb-4">
            <img className="h-24 " src={singleElement.img} alt="" />
            <div className="flex items-center justify-between flex-grow">
              <div className="flex flex-col justify-between">
                <h1 className="text-2xl">{singleElement.name}</h1>
                <p>
                  Price:
                  <span className="text-orange-500">
                    ${singleElement.price}{" "}
                  </span>
                </p>
                <p>Shipping:{singleElement.shipping}</p>
              </div>
              <div className="bg-red-400 p-2 rounded-full">
                <FontAwesomeIcon
                  onClick={() => deleteSingleProduct(singleElement.id)}
                  icon={faTrash}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
