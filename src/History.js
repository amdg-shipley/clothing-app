import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import UserContext from './User.js';

const History = () => {

    const {checkoutHistory} = useContext(UserContext);

    return (
        <React.Fragment>
            <div className='navigationcontainer'>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <Link class="navbar-brand" to="/">Home</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link" to="/createuser">Create User</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/createclothing">Create New Clothing Item</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/history">View Transaction History</Link>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div class="SiteHeading">
                <h1>Transaction History</h1>
            </div>
            <div className='elements'>
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
