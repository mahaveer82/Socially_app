import React from 'react'
import Sidebar from '../Components/Sidebar'
import Chat from '../Components/Chat'
import Login from './Login';
import Register from './Register';
function Home() {
    return (
        <div className='home'>
            <div className='container'>
            
                <Sidebar/>
                <Chat/>
                {/* <Register/> */}
                {/* <Login/> */}
            </div>
        </div>
    );
  }

  export default Home;