import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import UserContext from './User.js';

const HomePage = () => {

    const [isCheckout,setIsCheckout] = useState(false);
    const [fullName,setFullName] = useState('');
    
    const {setPeople} = useContext(UserContext);
    const {people} = useContext(UserContext);
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
            // setCheckoutHistory([...checkouts]);
            setCheckouts([]);
            setIsCheckout(false);
        }
    }



    if (!isCheckout) {
        return (
            <React.Fragment>
                <div id="SiteHeading">
                    <h1>Welcome to the McKenna Center Clothing Pantry!</h1>
                </div>
                <div className='navlinks'>
                    <Link to='createuser'>Create User</Link>
                </div>
                <div className='navlinks'>
                    <Link to='createclothing'>Create New Clothing Item</Link>
                </div>
                <div className='navlinks'>
                    <Link to='history'>View Transaction History</Link>
                </div>
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
                {checkouts.map((checkout)=>{
                    const {id,clothingType,clothingQuantity} = checkout;
                    return (
                        <div key={id} className='item'>
                            <h3>Type: {clothingType}</h3>
                            <h3>Quantity: {clothingQuantity}</h3>
                        </div>
                    )
                })}
                <button type='submit' onClick={finishCheckout} className='btn'>End Checkout and Return to Home</button>
            </React.Fragment>
        )
    }

}

export default HomePage;