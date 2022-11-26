import React from 'react';
import PokeDB from './PokeDB';
import ball from '../img/ball.png';

const Home = ({ pokeObj }) => {

    const spriteUrl = pokeObj.sprites.other["official-artwork"].front_default;

    const pokemonTypes = []
    pokeObj.types.forEach((item) => {
        pokemonTypes.push(item.type.name);
    });

    return (
        <div className="pc-container">
            <div className="pokemon-card">
                <div className="card_front pokemon-container">
                    <img src={spriteUrl}></img>
                    <div className="circle"></div>
                    <h5 className="poke-id"> #{pokeObj.id} </h5>
                    <h5 className="poke-name"> {pokeObj.name.replace(/\w/, (ch) => ch.toUpperCase())} </h5>
                    <h5> {pokemonTypes.join(" / ").replace(/\b\w/g, (ch) => ch.toUpperCase())} </h5>
                </div>
                <div className="card_back">
                    <div className="poke-stats-name">HP: {pokeObj.stats[0].base_stat}</div>
                    <div className="poke-stats-name">Attack: {pokeObj.stats[1].base_stat}</div>
                    <div className="poke-stats-name">Defense: {pokeObj.stats[2].base_stat}</div>
                    <div className="poke-stats-name">Special-Attack: {pokeObj.stats[3].base_stat}</div>
                    <div className="poke-stats-name">Special-Defense: {pokeObj.stats[4].base_stat}</div>
                    <div className="poke-stats-name">Speed: {pokeObj.stats[5].base_stat}</div>
                    <button className="poke-img"><img src={ball}/></button> 
                </div>
            </div>
        </div>
    );
}

export default Home;
