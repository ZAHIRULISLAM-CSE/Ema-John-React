import React, { useEffect, useState } from "react";
import AddToLocal from "../Database/AddToLocal";
import SingleCard from "../SingleCard/SingleCard";
import CardSummary from "./CardSummary";

const Card = () => {
  const [cardData, setCardData] = useState([]);
  const [orderDetails, setOrderDetails] = useState([]);
  const [totalCard, setTotalCard] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const summeryDetails = (orderData) => {
    let newCart = [];
    const exists = orderDetails.find((pd) => pd._id === orderData._id);
    if (!exists) {
      orderData.quantity = 1;
      newCart = [...orderDetails, orderData];
    } else {
      exists.quantity = exists.quantity + 1;
      const remaining = orderDetails.filter((pd) => pd._id !== orderData._id);
      newCart = [...remaining, exists];
    }
    setOrderDetails(newCart);
    AddToLocal(orderData._id);
  };

  const clearCart = () => {
    localStorage.removeItem("shopping-cart");
    setOrderDetails([]);
  };

//   useEffect(() => {
//     fetch("http://localhost:5000/products")
//       .then((res) => res.json())
//       .then((data) => setCardData(data));
//   }, []);

  //pagination works start here
  useEffect(() => {
    fetchData();
  }, [currentPage, itemsPerPage]);


  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/products?page=${currentPage}&limit=${itemsPerPage}`
      );
      const newData = await response.json();
      setCardData(newData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };



  useEffect(() => {
    fetch("http://localhost:5000/total")
      .then((res) => res.json())
      .then((data) => setTotalCard(data.result));
  }, []);

  const totalPages = Math.ceil(totalCard / itemsPerPage);

  //create page number dynamically
  const pageNumbers = [...Array(totalPages).keys()];
  const itemsPerPageOptions = [5, 10, 15, 20];

  const handleItemsPerPageChange = (event) => {
    const newItemsPerPage = parseInt(event.target.value);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(0);
  };






  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("shopping-cart"));
    //get the product with id
    const storeDataInArray = [];
    for (const id in savedCart) {
      const savedProduct = cardData.find((product) => product._id === id);
      if (savedProduct) {
        //setting up quantity
        const quantity = savedCart[id];
        savedProduct.quantity = quantity;
        storeDataInArray.push(savedProduct);
      }
      setOrderDetails(storeDataInArray);
    }
  }, [cardData]);

  return (
    <div>
      <div className=" lg:grid grid-cols-5">
        <div className="col-span-4 gap-8 mx-[8%]  mt-12 lg:grid grid-cols-3">
          {cardData.map((singleCard) => (
            <SingleCard summery={summeryDetails} data={singleCard}></SingleCard>
          ))}
        </div>
        <div>
          <CardSummary delete={clearCart} card={orderDetails}>
            <p>Review Order</p>
          </CardSummary>
        </div>
      </div>
      {/* Pagination Work */}
      <div className="text-center">
        <p>{currentPage}</p>
        {pageNumbers.map((number) => (
          <button
            onClick={() => setCurrentPage(number)}
            className="px-4 ml-[4px]  text-2xl rounded-xl bg-gray-400"
            key={number}
          >
            {number}
          </button>
        ))}
      </div>
      <div className="text-center mt-4">
        <label htmlFor="itemsPerPage">Items Per Page:</label>
        <select
          id="itemsPerPage"
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
        >
          {itemsPerPageOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Card;
