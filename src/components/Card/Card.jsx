import {Link} from 'react-router-dom';


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
      <div>
         <button onClick={()=>onClose(id)}>X</button>
         <h2>{id}</h2>
         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h1>{gender}</h1>
         <h1>{origin}</h1>
         <img src = {image} alt = "Not Found" />
      </div>
   );
}
