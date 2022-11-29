import React from 'react';
import { useState} from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { userContext } from './context/userContext';
import { useNavigate } from 'react-router-dom';

const Api = () => {

    const navigate = useNavigate()
    const [user, setUser] = useContext(userContext)
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [login, setLogin] = useState("")

    const handleChangeName = e => {
        setName(e.target.value);
    }

    const handleChangePass = e => {
        setPassword(e.target.value);
    }

    const confirmUser = async (name, password) => {

        const body = {
            emailUser: name,
            userPassword: password
        }

        const url = `http://localhost:5103/api/PokeWeb/api/confirmarUsuario`
        const respuesta = await axios.post(url, body)
        
        setLogin(respuesta);
    }


    

    const onSubmit = (e) => {
        e.preventDefault();
        confirmUser(name, password)
    }
    

    if (login != ""){
        if (login.data.confirmation == true) {
            setUser(name)
            navigate("/pokedex", {replace:true})
        }
    }

    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    placeholder="email"
                    value={name}
                    onChange={handleChangeName}
                />
                <input
                    placeholder="password"
                    value={password}
                    onChange={handleChangePass}
                />
                <button>Confirm</button>
            </form>
        </div>
    );
}

export default Api;
