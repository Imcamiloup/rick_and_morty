import React from 'react';
import SearchBar from "../SearchBar/SearchBar";
import {Link} from 'react-router-dom';
import styles from './Nav.module.css';
//Renderiza la SearchBar dentro de este componente aqui
export default function Nav({onSearch}) {
    
    return(

        <div className={styles.Nav}>
            <Link to='/about'>
                    <button  className={styles.button}>
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