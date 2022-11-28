import React from 'react';
import Home from './Home';
import axios from 'axios';
import { useEffect, useState } from 'react';
import BounceLoader from "react-spinners/BounceLoader";
import PokeDB from './PokeDB';

const Page = () => {

    const [poke, setPoke] = useState("");
    const [name, setName] = useState("");


    const getPokemon = async (name) => {
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${name}`
            const respuesta = await axios.get(url)
            setPoke(respuesta.data)
        } catch (error) {
            console.log("Pokemon erroneo");
        }
    }

    const handleChange = e => {
        setName(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        getPokemon(name)
    }

    console.log(poke.id);

    return (

        <div className="poke">
            <form onSubmit={onSubmit}>
                <input
                    placeholder="Press enter to search"
                    className="search"
                    value={name.toLocaleLowerCase()}
                    onChange={handleChange}
                />
                <button type="submit"></button>
            </form>  
            {poke.id ? <Home pokeObj={poke} key={poke.id} /> : null}
        </div>

    );
}

export default Page;
