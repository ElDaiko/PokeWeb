import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import Home from './Home';


const Generations = ({name}) => {

    return(
        <div className="generation"><li>{name}</li></div>
    )
}


const PokeDB = () => {

    const [nombre, setNombre] = useState('charizard')
    const [pokemon, setPokemon] = useState({})
    const [pokedex, setPokedex] = useState(0)

    const generations = [
        ["Kanto", 1, 151],
        ["Johto", 152, 251],
        ["Hoenn", 252, 386],
        ["Sinnoh", 387, 493],
        ["Unova", 494, 649],
        ["Kalos", 650, 721],
        ["Alola", 722, 809],
        ["Galar", 810, 905]
    ];

    /* const getPokemon = async () => {
        const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`
        const respuesta = await axios.get(url)
        setPokemon(respuesta.data)
    } */

    const getPokedex = async () => {

        const entries = [];
        for(let i = 0; i < 9; i++){
            if(i > 7) break;
            entries.push(generations[i][0])
            console.log(generations[i][0]);
            for (let id = generations[i][1]; id <= generations[i][2]; id++) {     
                const url = `https://pokeapi.co/api/v2/pokemon/${id}`
                const respuesta = await axios.get(url)
                entries.push(respuesta.data); 
            }
            setPokedex(entries);
        } 
        
    }

    useEffect(() => {
        getPokedex()
    },[]);

    if (!pokedex[0]) return null;


    return (
        <div className='flex'>
            {pokedex.map(entry => (typeof entry) == "string" ? <Generations name={entry} key={entry}/> : <Home pokeObj={entry} key={entry.id} />)} 
        </div>
    );

}


export default PokeDB;
