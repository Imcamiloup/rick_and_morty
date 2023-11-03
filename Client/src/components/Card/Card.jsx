import {Link} from 'react-router-dom';
import styles from './Card.module.css';


export default function Card({
   id, 
   name , 
   status, 
   species, 
   gender, 
   origin, 
   image, 
   onClose}) {
   return (
      <div className={styles.Card}>
         <button onClick={()=>onClose(id)}>X</button>
         <h2>{id}</h2>
         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h1>{gender}</h1>
         <h1>{origin}</h1>
         <img className={styles.CardImg}  src = {image} alt = "Not Found" />
      </div>
   );
}
