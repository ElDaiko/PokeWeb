import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Api = () => {

    const user = "sierra"
    const pass = "3"

    const [login, setLogin] = useState("")

    const getUser = async (user, pass) => {

        const body = {
            emailUser: user,
            userPassword: pass
        }

        const url = `http://localhost:5103/api/PokeWeb/api/confirmarUsuario`
        const respuesta = await axios.post(url, body)
        
        setLogin(respuesta);

    }

    useEffect(() => {
        getUser(user, pass)
    }, []);

    

    console.log(login);

    return (
        <>
            
        </>
    );
}

export default Api;
