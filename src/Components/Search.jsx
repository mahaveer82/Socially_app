import React from 'react'

function Search() {
    return (
        <div className='search'>
            <div className='searchForm'>
                <input type="text" placeholder='Find a User'/>
            </div>
            <div className='userChat'>
                <img src="https://images.pexels.com/photos/1116380/pexels-photo-1116380.jpeg?auto=compress&cs=tinysrgb&w=600" alt=''/>
                <div className='userChatInfo'>
                    <span>Saloni Parsai</span>
                    <p>Hii</p>
                </div>
            </div>
        </div>
    );
  }
  
  export default Search;