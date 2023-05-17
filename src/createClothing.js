import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import UserContext from './User.js';

const CreateClothing = () => {

    const [itemName,setItemName] = useState('');
    const [pointCost,setPointCost] = useState(0);
    const [limit,setLimit] = useState(0);

    const {items,setItems} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (itemName) {
            const item = {id:new Date().getTime().toString(), itemName:itemName, pointCost:pointCost, limit:limit};
            setItems((items)=>{return [...items,item]});
            setItemName('');
            setPointCost(0);
            setLimit(0);
        } else {
            alert("Please Fill the Entire Form.")
        }
    }

    return (
        <React.Fragment>
            <h1>Create New Clothing Item</h1>
            <div className='navlinks'>
                <Link to='../'>Back to Home</Link>
            </div>
            <form>
                <div>
                    <label htmlFor='itemName'>Item Name: </label>
                    <input
                        type='text'
                        id='itemName'
                        name='itemName'
                        value={itemName}
                        onChange={(e)=>setItemName(e.target.value)}
                    >
                    </input>
                </div>
                <div>
                    <label htmlFor='pointCost'>Point Cost: </label>
                    <input
                        type='number'
                        id='pointCost'
                        name='pointCost'
                        value={pointCost}
                        onChange={(e)=>setPointCost(e.target.value)}
                    >
                    </input>
                </div>
                <div>
                    <label htmlFor='limit'>Point Limit: </label>
                    <input
                        type='number'
                        id='limit'
                        name='limit'
                        value={limit}
                        onChange={(e)=>setLimit(e.target.value)}
                    >
                    </input>
                </div>
                <button type='submit' onClick={handleSubmit}>Submit Request</button>
                <p>Please Note: the <em>Point Limit</em> does not prevent the guest from purchasing a piece of clothing. Instead, it informs the staff member that the guest has reached the assigned limit and proceeds with the purchase regardless.</p>
            </form>
            {items.map((item)=>{
                const {id,itemName,pointCost,limit} = item;
                return (
                    <div key={id} className='item'>
                        <h3><span className='lbl'>Item Name: </span>{itemName}</h3>
                        <h3><span className='lbl'>Point Cost: </span>{pointCost}</h3>
                        <p><span className='lbl'>Monthy Limit: </span>{limit}</p>
                    </div>
                )
            })}
        </React.Fragment>
    );

}

export default CreateClothing;
