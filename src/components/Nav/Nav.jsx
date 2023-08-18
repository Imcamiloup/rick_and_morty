import React from 'react';
import SearchBar from "../SearchBar/SearchBar";
import {Link} from 'react-router-dom';
//Renderiza la SearchBar dentro de este componente aqui
export default function Nav({onSearch}) {
    
    return(

        <div className="Nav">
            <Link to='/about'>
                    <button className="Nav-button">
                        About
                    </button> 
            </Link>
                
            <Link to='/home'>
                    <button className="Nav-button">
                        Home
                    </button>
            </Link>
            <SearchBar onSearch={onSearch}/>                    
            
        </div>
    )
};