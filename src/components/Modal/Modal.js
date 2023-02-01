import React from 'react'
import './modal.css'
import download from '../../images/download.png'
import bg from '../../images/bg.png'


function Modal({ onClick, id, name, image, type, height, stats, statsName, weight}) {


  return (
    <div style={{display: "flex", position: "fixed", top: "0", left: "0", zIndex: "10", width: "100%",
    height: "100%", alignItems: "center", justifyContent: "space-evenly", backgroundImage: `url(${bg})`, 
    backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
      <div onClick={onClick} 
      style={{
        position: "absolute",
        top: "50px",
        right: "50px",
        borderRadius: "50%",
        fontWeight: "500",
        cursor: "pointer",
      }}>x</div>

      <div>
        <img src={image} alt={name} style={{filter:"drop-shadow(2px 4px 12px black)"} } />

      </div>
      <div style={{display:"flex", alignItems: "center", justifyContent: "space-around", flexDirectoion: "column", width: "450px", height: "500px"}}>
        <div className='stat-container-title'>
        <img src={image} style={{width: 100, height: 100, }} className='img-title' /> 
      <p>{name}</p>
      <p style={{width: '180px', color: 'black'}}>No. {id}</p>
      <img src={download} alt='pokeball' 
      className='pokeball-title' />
      </div>
     
      <div className='' style={{display: 'flex', width: '100%'}}>
        <div className='stats-left' style={{ background: '#dbdb9', textAlign: 'center'}}>
          <p>Type</p>
          <p>Height</p>
          <p>Weight</p>
          </div>
      <div style={{background: '#ffffff'}} className='stats-right'>
          <p>{type}</p>
          <p>{height}0 cm</p>
          <p>{weight} lbs</p>
      </div>
     </div>
    <div className='base-stats'>
      <div>
        {statsName.map((stats) => (
          <p className='stats'>{stats}</p>
        ))}
      </div>
      <div>
        {stats.map((stats) => (
          <p className='stats'>{stats}</p>
        ))}
      </div>
      
        </div>
      </div>
  </div> 
  )
}

export default Modal