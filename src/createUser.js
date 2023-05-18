import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import UserContext from './User.js';

const CreateUser = () => {

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [startingPoints,setStartingPoints] = useState(100);

    const {setGuests} = useContext(UserContext);
    const {guests} = useContext(UserContext);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName && lastName && startingPoints) {
            const guest = {id:new Date().getTime().toString(), firstName:firstName, lastName:lastName, startingPoints:startingPoints};
            setGuests((guests)=>{return [...guests,guest]});
            setFirstName('');
            setLastName('');
        } else {
            alert("Please Fill the Entire Form.")
        }
    }

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
                <h1>Create New User</h1>
            </div>
            <form>
                <div class="container">
                    <div className='inputs'>
                        <label htmlFor='firstName'>First Name: </label>
                        <input
                            type='text'
                            id='firstName'
                            name='firstName'
                            value={firstName}
                            onChange={(e)=>setFirstName(e.target.value)}
                        >
                        </input>
                    </div>
                    <div className='inputs'>
                        <label htmlFor='lastName'>Last Name: </label>
                        <input
                            type='text'
                            id='lastName'
                            name='lastName'
                            value={lastName}
                            onChange={(e)=>setLastName(e.target.value)}
                        >
                        </input>
                    </div>
                    
                    <div className='inputs'>
                        <label htmlFor='startingPoints'>Starting Points: </label>
                        <input
                            type='number'
                            id='startingPoints'
                            name='startingPoints'
                            value={startingPoints}
                            onChange={(e)=>setStartingPoints(e.target.value)}
                        >
                        </input>
                    </div>
                </div>
                <button type='submit' class="btn" onClick={handleSubmit}>Submit Request</button>
            </form>
            <div className='elements'>
                {guests.map((guest)=>{
                    const {id,firstName,lastName,startingPoints} = guest;
                    return (
                        <div key={id} className='item'>
                            <h3><span className='lbl'>First Name: </span>{firstName}</h3>
                            <h3><span className='lbl'>Last Name: </span>{lastName}</h3>
                            <p><span className='lbl'>Starting Points: </span>{startingPoints}</p>
                        </div>
                    )
                })}
            </div>
        </React.Fragment>
    )

}

export default CreateUser;
