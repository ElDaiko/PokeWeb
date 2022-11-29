import React from 'react';
import Home from './Home';
import axios from 'axios';
import BounceLoader from "react-spinners/BounceLoader";
import PokeDB from './PokeDB';
import { useContext, useEffect,useState } from 'react';
import { userContext } from './context/userContext';
import UsePoke from '../hooks/usePoke';

const Page = () => {

    
    const [poke, setPoke] = useState("");
    const [name, setName] = useState("");
    const [pokeContext, setPokeContext] = useContext(userContext)
    const {requestCompanion, idPoke} = UsePoke(pokeContext);


    const getPokemon = async (name) => {
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${name}`
            const respuesta = await axios.get(url)
            setPoke(respuesta.data)
        } catch (error) {
            console.log("Pokemon erroneo");
        }
    }

    useEffect(() => {
        requestCompanion(pokeContext)
    }, []);

    const handleChange = e => {
        setName(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        getPokemon(name)
    }

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
            {poke.id ? <Home pokeObj={poke} key={poke.id} idPoke={idPoke}/> : null}
        </div>

    );
}

export default Page;
