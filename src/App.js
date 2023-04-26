import React, { useState, useEffect } from 'react';
import HomePage from './homePage.js';
import CreateUser from './createUser.js';
import CreateClothing from './createClothing.js';

function App() {

    const [pageNum,setPageNum] = useState(0);

    if (pageNum === 0) {
        return (
            <React.Fragment>
            <div className='individualLine'>
                <button onClick={()=>{setPageNum(0)}}>Home Page</button>
                <button onClick={()=>{setPageNum(2)}}>Create New Clothing</button>
                <button onClick={()=>{setPageNum(1)}}>Create New User</button>
            </div>
            <div>
                <HomePage/>
            </div>
            </React.Fragment>
        )
    } else if (pageNum === 1) {
        return (
            <React.Fragment>
            <div className='individualLine'>
                <button onClick={()=>{setPageNum(0)}}>Home Page</button>
            </div>
            <div>
                <CreateUser/>
            </div>
            </React.Fragment>
        )
    } else if (pageNum === 2) {
        return (
            <React.Fragment>
            <div className='individualLine'>
                <button onClick={()=>{setPageNum(0)}}>Home Page</button>
            </div>
            <div>
                <CreateClothing/>
            </div>
            </React.Fragment>
        )
    } else {
        return (<h1>Page Not Found</h1>)
    }


}

export default App
