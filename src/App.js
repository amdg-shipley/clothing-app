import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './homePage.js';
import CreateUser from './createUser.js';
import CreateClothing from './createClothing.js';
import History from './History.js';
import UserContext from './User.js';




function App() {

  
  const [people,setPeople] = useState([]);
  const [guests,setGuests] = useState([]);
  const [items,setItems] = useState([]);
  const [checkouts,setCheckouts] = useState([]);
  const [checkoutHistory,setCheckoutHistory] = useState([]);

    return (
        <React.Fragment>
          <UserContext.Provider value={{people, setPeople, guests, setGuests, items, setItems, checkouts, setCheckouts, checkoutHistory, setCheckoutHistory}}>
            <Router>
              <Routes>
                  <Route path="/" element={<HomePage/>} />
                  <Route path="/createuser" element={<CreateUser/>} />
                  <Route path="/createclothing" element={<CreateClothing/>} />
                  <Route path="/history" element={<History/>} />
              </Routes>
            </Router>
          </UserContext.Provider>
        </React.Fragment>
    );

}

export default App
