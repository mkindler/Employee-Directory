import React from 'react';
import "../styles/Header.css";

function Header () {
    return (
      <div className="header">
        <h1>Employee Directory</h1>
        <p>Click on the arrows to filter by name, email, phone number, DOB, or use the search function to filter the directory by name.</p>
      </div>
    )
  }

export default Header;
