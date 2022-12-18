import React from 'react'
import img from "../img/img.png";
import attach from "../img/attach.png";


function Input() {
    return (
        <div className='input'>
            <input type="text" placeholder='Type Something....'/>
            <div className='send'>
                <img src={attach}/>
                <input type="file" style={{display:"none"}} id="file"/>
                <label htmlFor='file'>
                    <img src={img} alt=""/>
                </label>
                <button>send</button>
            </div>
        </div>
    );
  }
  
  export default Input;