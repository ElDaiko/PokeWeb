import React from 'react';
import PokeDB from './PokeDB';
import ball from '../img/ball.png';
import { useContext, useEffect,useState } from 'react';
import { userContext } from './context/userContext';
import axios from 'axios';
import {useLocation } from 'react-router-dom';

const Home = ({ pokeObj, idPoke=[] }) => {

    const [name, setName] = useContext(userContext)
    const [companion, setCompanion] = useState("")
    const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeObj.id}.png`;
    const [id, setId] = useState()
    const pokemonTypes = []

    pokeObj.types.forEach((item) => {
        pokemonTypes.push(item.type.name);
    });

    const addCompanion = async (idPokemon, emailUser) => {

        const body = {
            emailUser: emailUser,
            idPokemon: idPokemon
        }

        const url = `http://localhost:5103/api/PokeWeb/api/registrarCompanion`
        const respuesta = await axios.post(url, body)
        
        setCompanion(respuesta);
    }

    const location = useLocation()

    /* console.log(location.pathname); */

    return (
        <div className="pc-container">
            <div className="pokemon-card">
                 <div className={idPoke.includes(pokeObj.id) ? `card_front2 pokemon-container` : `card_front pokemon-container`}>
                    <img src={spriteUrl}></img>
                    <div className="circle"></div>
                    <h5 className="poke-id"> #{pokeObj.id} </h5>
                    <h5 className="poke-name"> {idPoke.includes(pokeObj.id) ? pokeObj.name.replace(/\w/, (ch) => ch.toUpperCase()) : `???????`} </h5>
                    <h5> {idPoke.includes(pokeObj.id) ? pokemonTypes.join(" / ").replace(/\b\w/g, (ch) => ch.toUpperCase()) : `???????`} </h5>
                </div>
                <div className="card_back">
                    <div className="poke-stats-name">HP: {pokeObj.stats[0].base_stat}</div>
                    <div className="poke-stats-name">Attack: {pokeObj.stats[1].base_stat}</div>
                    <div className="poke-stats-name">Defense: {pokeObj.stats[2].base_stat}</div>
                    <div className="poke-stats-name">Special-Attack: {pokeObj.stats[3].base_stat}</div>
                    <div className="poke-stats-name">Special-Defense: {pokeObj.stats[4].base_stat}</div>
                    <div className="poke-stats-name">Speed: {pokeObj.stats[5].base_stat}</div>
                    {location.pathname!=="/pokedex" ? <button onClick={() => addCompanion(pokeObj.id, name)} className="poke-img"><img src={ball}/></button> : <></>}
                </div>
            </div>
        </div>
    );
}

export default Home;
