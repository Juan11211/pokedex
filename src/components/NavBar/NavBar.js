import React from 'react'
import uncolor from '../../images/uncolor.png'
import download from '../../images/download.png'
import './NavBar.css'


function NavBar() {
  return (
<div className='nav'>
    <div className='nav--title'> 
            <h3>Pokedex</h3>
        <div className='caught-seen'>
            <div className='caught'>
                <img src={uncolor} alt='uncaught' style={{width: '30px', marginRight: '10px'}}/>
            <p>450</p>
            </div>
            <div className='seen'>
                <img src={download} alt='uncaught' style={{width: '30px', marginRight: '10px'}}/>
            <p>450</p>   
            </div>
        </div>
    </div>
    <p style={{color: "white"}}>A - Z</p>
</div>
  )
}

export default NavBar