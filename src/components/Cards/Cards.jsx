import React from 'react';
import Card from '../Card/Card';
export default function Cards({characters, onClose}) {
   return (
      <div>
         {characters.map((character) => (
            <Card key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            image={character.image}
            onClose={onClose}
            />        
         ))}
      </div>
   );
}