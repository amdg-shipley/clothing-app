import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import UserContext from './User.js';

const HomePage = () => {

    const [isCheckout,setIsCheckout] = useState(false);
    const [fullName,setFullName] = useState('');

    const {guests} = useContext(UserContext);
    const {items} = useContext(UserContext);
    const {checkouts,setCheckouts} = useContext(UserContext);
    const {checkoutHistory,setCheckoutHistory} = useContext(UserContext);

    const [clothingType,setClothingType] = useState('');
    const [clothingQuantity,setClothingQuantity] = useState(1);
    const [currentCustomer,setCurrentCustomer] = useState([]);

    const proceedToCheckout = (e) => {
        e.preventDefault();
        if (currentCustomer) {
            setFullName(guests.find(person => person.id === currentCustomer));
            setIsCheckout(true);
        } else {
            alert('empty form')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (clothingType && clothingQuantity) {
            const checkout = {id:new Date().getTime().toString(), clothingType:clothingType, clothingQuantity:clothingQuantity, firstName:fullName.firstName, lastName:fullName.lastName, guestID:fullName.id};
            setCheckouts((checkouts)=>{return [...checkouts,checkout]});
            setClothingType('');
            setClothingQuantity(1);
        }
    }

    const finishCheckout = (e) => {
        if (checkouts !== []) {
            e.preventDefault();
            const intermediate = [...checkoutHistory]
            console.log(checkouts);
            setCheckoutHistory(intermediate.concat(checkouts))
            setCheckouts([]);
            setIsCheckout(false);
        }
    }



    if (!isCheckout) {
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
                    <h1>Welcome to the McKenna Center Clothing Pantry!</h1>
                </div>
                <div class="container">
                    <div id="fullNameEntry" className='inputs'>
                        <label htmlFor='fullName'>Guest First and Last Name: </label>
                        <select
                            value={currentCustomer} onChange={(e)=>setCurrentCustomer(e.target.value)}>
                            <option>
                                Please Select a Full Name:
                            </option>
                            {
                                guests.map(guest=><option value={guest.id}>{guest.firstName} {guest.lastName}</option>)
                            }
                        </select>
                    </div>
                </div>
                <button type='submit' onClick={proceedToCheckout} className='btn'>Proceed to Checkout</button>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <h1>Checkout for {fullName.firstName} {fullName.lastName}</h1>
                <form className='form'>
                    <div className='form-control'>
                        <div className='inputs'>
                            <label htmlFor='clothingType'>Clothing Type: </label>
                            <select
                                value={clothingType} onChange={(e)=>setClothingType(e.target.value)}
                            >
                                <option>
                                    Please Select a Clothing Type:
                                </option>
                                {
                                    items.map(item=><option>{item.itemName}</option>)
                                }
                            </select>
                        </div>
                        <label htmlFor='clothingQuantity'>Quantity of Clothing: </label>
                        <input
                            type='number'
                            id='clothingQuantity'
                            name='clothingQuantity'
                            value={clothingQuantity}
                            onChange={(e)=>setClothingQuantity(e.target.value)}
                        >
                        </input>
                    </div>
                    <button type='submit' onClick={handleSubmit} className='btn'>Submit Item</button>
                </form>
                <div>
                    {checkouts.map((checkout)=>{
                        const {id,clothingType,clothingQuantity} = checkout;
                        return (
                            <div key={id} className='item'>
                                <h3><span className='lbl'>Type: </span>{clothingType}</h3>
                                <h3><span className='lbl'>Quantity: </span>{clothingQuantity}</h3>
                            </div>
                        )
                    })}
                </div>
                <button type='submit' onClick={finishCheckout} className='btn'>End Checkout and Return to Home</button>
            </React.Fragment>
        )
    }

}

export default HomePage;
