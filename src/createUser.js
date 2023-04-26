import React, { useState, useEffect } from 'react';

const CreateUser = () => {

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [startingPoints,setStartingPoints] = useState(100);
    const [people,setPeople] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName && lastName && startingPoints) {
            const person = {id:new Date().getTime().toString(), firstName:firstName, lastName:lastName, startingPoints:startingPoints};
            setPeople((people)=>{return [...people,person]});
            setFirstName('');
            setLastName('');
        } else {
            alert("Please Fill the Entire Form.")
        }
    }

    return (
        <React.Fragment>
            <form>
                <div>
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
                <div>
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
                <div>
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
                <button type='submit' onClick={handleSubmit}>Submit Request</button>
            </form>
            {people.map((person)=>{
                const {id,firstName,lastName,startingPoints} = person;
                return (
                    <div key={id} className='item'>
                        <h3>First Name: {firstName}</h3>
                        <h3>Last Name: {lastName}</h3>
                        <p>Starting Points: {startingPoints}</p>
                    </div>
                )
            })}
        </React.Fragment>
    )

}

export default CreateUser;