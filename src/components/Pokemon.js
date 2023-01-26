import axios from 'axios'
import React, {useState, useEffect} from 'react'
import PokemonCard from './PokemonCard'

function Pokemon() {

    const [data, setData] = useState([])
    

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(res => setData(res.data.results))
        .catch(err => console.log(err))
}, [])

  return (
    <div>
        {data.map(pokemon => (
        <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png' />,
           <h1>{pokemon.name}</h1>
           

        ))}
    </div>


  )
}

export default Pokemon