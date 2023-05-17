import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import UserContext from './User.js';

const History = () => {

    const {checkoutHistory} = useContext(UserContext);

    return (
        <React.Fragment>
            <h1>Transaction History</h1>
            <div className='navlinks'>
                <Link to='../'>Back to Home</Link>
            </div>
            <div>
                {checkoutHistory.map((checkout)=>{
                        const {id,clothingType,clothingQuantity,firstName,lastName,guestID} = checkout;
                        return (
                            <div key={id} className='item'>
                                <h3><span className='lbl'>First Name: </span>{firstName}</h3>
                                <h3><span className='lbl'>Last Name: </span>{lastName}</h3>
                                <h3><span className='lbl'>Type: </span>{clothingType}</h3>
                                <h3><span className='lbl'>Quantity: </span>{clothingQuantity}</h3>
                            </div>
                        )
                    })}
            </div>
        </React.Fragment>
    )

}

export default History;
