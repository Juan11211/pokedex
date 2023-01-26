import React from 'react'
import './BottomBar.css'

function BottomBar() {
  return (
    <div className='bottom'>
        <div className='bottom--btn'>
            <p className='bg-circle-white'>A</p>
            <p className=''>See Pokedex Details</p>
        </div>
        <div className='bottom--btn'>
            <p className='bg-circle-white'>X</p>
            <p className=''>Habitat</p>
        </div>
        <div className='bottom--btn'>
            <p className='bg-circle-white'>Y</p>
            <p className=''>Sort</p>
        </div>
        <div className='bottom--btn'>
            <p className='bg-circle-white'>+</p>
            <p className=''>See Evaluation</p>
        </div>
        <div className='bottom--btn'>
            <p className='bg-circle-white'>-</p>
            <p className=''>Back</p>
        </div>
    </div>
  )
}

export default BottomBar;