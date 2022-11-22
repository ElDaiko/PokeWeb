import React from 'react';
import { Link } from "react-router-dom";
import {TbPokeball} from 'react-icons/tb';
import pokedex from '../img/pokedex.png'


const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className="container-fluid">
                <Link to="/" className='routerLink'>
                    <h1 className="navbar-brand">PokeWeb <TbPokeball /></h1>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="mailto:mirole16@gmail.com?Subject=I have some questions!">Contact</a>
                        </li>
                        <Link to="/companion"  className='navmargin'>
                            <h2 className="nav-link navMargin">Companions</h2>
                        </Link>
                        <Link to="/signin"  className='navmargin'>
                            <h2 className="nav-link navMargin">Sign in</h2>
                        </Link>
                    </ul>
                    <ul className="navbar-nav">
                        <Link to="/pokedex" className='routerLink'>
                            <h1 className=" navMargin"><img className="pokedex-img" src={pokedex}/></h1>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
