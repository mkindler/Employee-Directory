import React from 'react';
import "../styles/Header.css";

function Header () {
    return (
      <div className="header">
        <h1 class="app-name">Employee Directory</h1>
        <p class="app-description">Hover your mouse next to the field that you are interested in sorting, 
          <br />and click on the arrow to sort by name, email, phone number, or DOB.</p>
        <p class="app-description">You can also use the search function to filter the directory by name.</p>
      </div>
    )
  }

export default Header;
