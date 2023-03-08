import React from 'react';
import ReactDom from 'react-dom';

import './styles.css'

function Greeting() {
  return (
    <React.Fragment>
      <SiteHeading/>
      <NameEntry/>
      <ClothingType/>
      <NumberOfPoints/>
      <QuantityOfItems/>
      <DateOfPurchase/>
      <LinkToOtherSites/>
    </React.Fragment>
  )
}

const SiteHeading = () => {
  return (
    <div id="SiteHeading">
      <h1>Welcome to the McKenna Center Clothing Pantry!</h1>
    </div>
  );
}

const NameEntry = () => {
  return (
    <div id="NameEntry" class="subComponent">
      <h2>Guest Name: </h2>
      <input type="text"/>
    </div>
  );
}

const ClothingType = () => {
  return (
    <div id="ClothingType" class="subComponent">
      <h2>Clothing Type: </h2>
      <input type="text"/>
    </div>
  );
}

const NumberOfPoints = () => {
  return (
    <div id="NumberOfPoints" class="subComponent">
      <h2>Number of Points </h2>
      <h1>20</h1>
    </div>
  );
}

const QuantityOfItems = () => {
  return (
    <div id="QuantityOfItems" class="subComponent">
      <h2>Quantity of Items: </h2>
      <input type="text"/>
    </div>
  );
}

const DateOfPurchase = () => {
  return (
    <div id="DateOfPurchase" class="subComponent">
      <h2>DateOfPurchase </h2>
      <input type="date"/>
    </div>
  );
}

const LinkToOtherSites = () => {
  return (
    <div id="LinkToOtherSites" class="subComponent">
      <h2>LinkToOtherSites </h2>
      <button>Click to Access the Database</button>
    </div>
  );
}

ReactDom.render(<Greeting/>, document.getElementById('root'));