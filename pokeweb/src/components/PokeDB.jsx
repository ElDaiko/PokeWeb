import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import Home from './Home';


const PokeDB = () => {

    const [nombre, setNombre] = useState('charizard')
    const [pokemon, setPokemon] = useState({})

    
    const getPokemon = async () => {
        const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`
        const respuesta = await axios.get(url)
        setPokemon(respuesta.data)
    }

    useEffect(() => {
        getPokemon()
    }, [nombre]);

    if (!pokemon.name) return null;

    return (
        <div>
            <Home pokeObj = {pokemon}/>
        </div>
    );
}

export default PokeDB;
