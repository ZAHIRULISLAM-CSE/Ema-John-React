import React from 'react';
import logo from "../../images/Logo.svg";

const Header = () => {
    return (
        <div className='bg-black' >
            <div className='flex p-4 w-[90%] mx-auto justify-between items-center'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <ul className='flex md:gap-1 lg:gap-4 text-white'>
                    <li>Order</li>
                    <li>Order Review</li>
                    <li>Manage Inventory</li>
                    <li>Login</li>
                </ul>
            </div>
            </div>
        </div>        
    );
};

export default Header;