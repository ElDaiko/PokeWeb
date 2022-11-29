import axios from 'axios';
import React from 'react';
import Home from './Home';
import BounceLoader from "react-spinners/BounceLoader";
import Page from './Page'; 
import { useContext, useEffect,useState } from 'react';
import { userContext } from './context/userContext';
import UsePoke from '../hooks/usePoke';

const Generations = ({ name }) => {

    return (
        <div className="generation"><li>{name}</li></div>
    )
}


const PokeDB = () => {

    const [name, setName] = useContext(userContext)
    const [loading, setLoading] = useState(true);
    const [pokedex, setPokedex] = useState(0)
    const {requestCompanion, idPoke} = UsePoke(name);

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

    const getPokedex = async () => {

        const entries = [];
        for (let i = 0; i < 9; i++) {
            if (i > 7) break;
            entries.push(generations[i][0])
            for (let id = generations[i][1]; id <= generations[i][2]; id++) {
                const url = `https://pokeapi.co/api/v2/pokemon/${id}`
                const respuesta = await axios.get(url)
                entries.push(respuesta.data);
            }
            setPokedex(entries);
        }
    }

    useEffect(() => {
        requestCompanion(name)
    }, []);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
        getPokedex()
    }, []);

    console.log(idPoke);

    if (!pokedex[0]) return null;


    return (
        <>
            {
                loading ?
                    <div>
                        <BounceLoader className='loader' color={'#000'} loading={loading} size={80} aria-label="Loading Spinner" />
                        <p className='text-loader'>PokeWeb</p>
                    </div>
                    :
                    <div className='flex'>
                        <div className="poke-style">Pokedex</div>
                        {pokedex.map(entry => (typeof entry) == "string" ? <Generations name={entry} key={entry} /> : <Home pokeObj={entry} key={entry.id} idPoke={idPoke} />)}
                    </div>

            }
        </>
    );

}


export default PokeDB;
