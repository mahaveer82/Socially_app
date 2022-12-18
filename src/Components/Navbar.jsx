import React from 'react'

function Navbar() {
    return (
        <div className='navbar'>
            <span className="logo">Socially</span>
            <div className="user">
                <img src="https://images.pexels.com/photos/1116380/pexels-photo-1116380.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <span>Saloni</span>
                <button>logout</button>
            </div>
        </div>
        
    );
  }
  
  export default Navbar;