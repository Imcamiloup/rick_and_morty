import { useEffect,  } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../Card/Card';
export default function Detail({character,onSearch }) {

    const { id } = useParams();
    
    useEffect(()=> {
        onSearch(id,'');
    },[id])

    useEffect(()=> {console.log(character)},[character]) 

    return (
        <div>
           <Card key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            image={character.image}
            />   
        </div>
    )
}
