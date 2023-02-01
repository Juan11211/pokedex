import React, {useEffect, useState} from 'react'
import PokemonCard from '../PokemonCard/PokemonCard'
import './PokeList.css'

function PokeList() {

    const [allPokemons, setAllPokemons] = useState([])

    const getAllPokemons = async() => { 
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?offset=350&limit=350")
        const data = await res.json();

        function createPokemonObject(results){
            results.forEach(async (pokemon) => { 
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                const data = await res.json();
                setAllPokemons((currentList) => 
                [...currentList, data]); 
                await allPokemons.sort((a,b) => a.id - b.id) // sorting pokemon by id. 
            })
        }
        createPokemonObject(data.results); 
        console.log(allPokemons)
    }

    useEffect(() => { 
        getAllPokemons()
    }, [])

  return (
    <div className='container'>
        <div className='pokemon--container'>
            <div className='all--container'>
                {allPokemons.map((pokemonStats) => (
                    <PokemonCard 
                    key={pokemonStats.name}
                    id={pokemonStats.id.toString().padStart(3, '0')} 
                    image={pokemonStats.sprites.other['official-artwork'].front_default}
                    name={pokemonStats.name}
                    type={pokemonStats.types[0].type.name}
                    weight={pokemonStats.weight}
                    height={pokemonStats.height}
                    stats={pokemonStats.stats.map((stat) => stat.base_stat).slice(0,3)}
                    statsName={pokemonStats.stats.map((stat) =>  stat.stat.name).slice(0,3)}
                    
                />
                ))}
            </div>
        </div>
    </div>
  )
}

export default PokeList