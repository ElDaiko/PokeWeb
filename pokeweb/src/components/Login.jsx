import React from 'react';
import { useState} from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { userContext } from './context/userContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {

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
            email: name,
            password: password
        }

        const url = `http://localhost:8080/signInUser`
        const respuesta = await axios.post(url, body)
        
        setLogin(respuesta);
    }

    const registerUser = async (name, password) => {

        let user = name.split("@")

        const body = {
            username: user[0],
            email: name,
            password: password
        }

        const url = `http://localhost:8080/registerUser`
        const respuesta = await axios.post(url, body)
        
        setLogin(respuesta);
    }


    const onSubmit = (e) => {
        e.preventDefault();
        confirmUser(name, password)
    }
    

    if (login !== ""){
        if (login.data.confirmation === true) {
            setUser(name)
            navigate("/pokedex", {replace:true})
            console.log(user)
        }
        else{
            alert("Credential error")
            setLogin("")
        }
        
    }
    

    return (
        <>
            <div className="log-container">
                <form onSubmit={onSubmit} className="search-container">
                    <div>
                    <input className="search"
                        placeholder="Email"
                        value={name}
                        onChange={handleChangeName}
                    />
                    </div>
                    <input className="search"
                        placeholder="Password"
                        value={password}
                        onChange={handleChangePass}
                    />
                    <div>
                        <button className="btn btn-primary btnlog">Login</button>
                    </div>
                </form>
                {name && password !== "" ? <button className="btn btn-primary search-container btnregist" onClick={() => registerUser(name, password)}>Register</button> 
                : <div></div>}
            </div>
            <div>
                <h1 className="poke-style">Welcome to PokeWeb!</h1>
            </div>
        </>
    );
}

export default Login;
