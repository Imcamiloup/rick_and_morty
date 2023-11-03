import React from 'react';
import Cards from '../Cards/Cards';

export default function Home({characters, onClose}) {
    return(
        <div>
            <Cards  onClose={onClose} characters={characters}  />
        </div>
        )
};