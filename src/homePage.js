import React, { useState, useEffect } from 'react';

const HomePage = () => {

    const [isCheckout,setIsCheckout] = useState(false);

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [people,setPeople] = useState([]);

    const [clothingType,setClothingType] = useState('');
    const [clothingQuantity,setClothingQuantity] = useState(1);
    const [checkouts,setCheckouts] = useState([]);

    const proceedToCheckout = (e) => {
        e.preventDefault();
        if (firstName && lastName) {
            const person = {id:new Date().getTime().toString(), firstName:firstName, lastName:lastName};
            setPeople((people)=>{return [...people,person]})
            setIsCheckout(true);
        } else {
            alert('empty form')
        }
    }

    const checkout = (e) => {
        e.preventDefault();
        if (clothingType && clothingQuantity) {
            
        }
    }

    if (!isCheckout) {
        return (
            <React.Fragment>
                <div id="SiteHeading">
                    <h1>Welcome to the McKenna Center Clothing Pantry!</h1>
                </div>
                <div id="firstNameEntry">
                    <label htmlFor='firstName'>Guest First Name: </label>
                    <input 
                        type='text' 
                        id='firstName' 
                        name='firstName' 
                        value={firstName}
                        onChange={(e)=>setFirstName(e.target.value)}>
                    </input>
                </div>
                <div id="lastNameEntry">
                    <label htmlFor='lastName'>Guest Last Name: </label>
                    <input 
                        type='text' 
                        id='lastName' 
                        name='lastName' 
                        value={lastName}
                        onChange={(e)=>setLastName(e.target.value)}>
                    </input>
                </div>
                <button type='submit' onClick={proceedToCheckout}>Proceed to Checkout</button>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <h1>Checkout for {firstName} {lastName}</h1>
                <form className='form'>
                    <div className='form-control'>
                        <label htmlFor='clothingType'>Clothing Type: </label>
                        <input
                            type='text'
                            id='clothingType'
                            name='clothingType'
                            value={clothingType}
                            onChange={(e)=>setClothingType(e.target.value)}
                        >
                        </input>
                        <br></br>
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
                </form>
            </React.Fragment>
        )
    }

}

export default HomePage;

// function Greeting() {
//     return (
//       <React.Fragment>
//         <SiteHeading/>
//         <NameEntry/>
//         <ClothingType/>
//         <NumberOfPoints/>
//         <QuantityOfItems/>
//         <DateOfPurchase/>
//         <LinkToOtherSites/>
//       </React.Fragment>
//     )
//   }
  
//   const SiteHeading = () => {
//     return (
//       <div id="SiteHeading">
//         <h1>Welcome to the McKenna Center Clothing Pantry!</h1>
//       </div>
//     );
//   }
  
//   const NameEntry = () => {
//     return (
//       <div id="NameEntry" class="subComponent">
//         <h2>Calvin Timm</h2>
//         <input type="text"/>
//       </div>
//     );
//   }
  
//   const ClothingType = () => {
//     return (
//       <div id="ClothingType" class="subComponent">
//         <h2>Clothing Type: </h2>
//         <input type="text"/>
//       </div>
//     );
//   }
  
//   const NumberOfPoints = () => {
//     return (
//       <div id="NumberOfPoints" class="subComponent">
//         <h2>Number of Points </h2>
//         <h1>20</h1>
//       </div>
//     );
//   }
  
//   const QuantityOfItems = () => {
//     return (
//       <div id="QuantityOfItems" class="subComponent">
//         <h2>Quantity of Items: </h2>
//         <input type="text"/>
//       </div>
//     );
//   }
  
//   const DateOfPurchase = () => {
//     return (
//       <div id="DateOfPurchase" class="subComponent">
//         <h2>DateOfPurchase </h2>
//         <input type="date"/>
//       </div>
//     );
//   }
  
//   }