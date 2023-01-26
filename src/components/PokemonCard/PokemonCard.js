import React, {useState} from 'react'
import './Pokemon.css'
import download from '../../images/download.png'
import uncolor from '../../images/uncolor.png'
import Modal from '../Modal/Modal'

function PokemonCard({id, name, image, height, weight, type, stats}) {

  const [statsName, setStatsName] = useState([])
  const [isShown, setIsShown] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false)

  function modalHandler() {
    setModalIsOpen(true)
  }

  function CloseModalHandler(){
    setModalIsOpen(false)
  }
 
  return (
    <div className='pc-container'>
      {isShown  && (
      <div className='show'>
        <div className='container-title'>
      <img src={image} style={{width: 100, height: 100, }} className='img-title' /> 
      <h4>{name}</h4>
      <p style={{width: '180px', color: 'black'}}>No. {id}</p>
      <img src={download} alt='pokeball' 
      className='pokeball-title' />
      </div>
      <img src={image} alt={name} />
      <div className='' style={{display: 'flex', width: '100%'}}>
        <div className='stats-left' style={{ background: '#dbdb9', textAlign: 'center'}}>
          <p>Type</p>
          <p>Height</p>
          <p>Weight</p>
          </div>
      <div style={{backgrround: '#ffffff'}} className='stats-right'>
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
  )}
  <div className='right' 
  onMouseEnter={() => setIsShown(true)}
  onMouseLeave={() => setIsShown(false)}
  onClick={modalHandler}>   
    <img src={image} alt={name} style={{ maxWidth: "50px", marginRight: "10px",
    width: "50px"}} />
    <p style={{width: "270px"}}>No. {id}</p>
    <p>{name}</p>
    <img src={uncolor} alt='uncolor-pokeball' style={{
      marginLeft: 'auto', width: '40px'
    }}/>
  </div>
      {modalIsOpen && (
        <Modal 
          id={id}
          name={name}
          image={image}
          height={height}
          weight={weight} 
          stats={stats}
          statsName={statsName}
          type={type}
          onClick={CloseModalHandler} />

       )}
    </div>
  )
}

export default PokemonCard
