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
                        const {id,clothingType,clothingQuantity} = checkout;
                        return (
                            <div key={id} className='item'>
                                <h3>Type: {clothingType}</h3>
                                <h3>Quantity: {clothingQuantity}</h3>
                            </div>
                        )
                    })}
            </div>
        </React.Fragment>
    )

}

export default History;