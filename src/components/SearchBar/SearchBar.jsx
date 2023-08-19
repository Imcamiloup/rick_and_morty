import {useState} from 'react';
import styles from './SearchBar.module.css';
export default function SearchBar({onSearch}) {
   const [id, setId] = useState('');

   function handleChange(event) {
      setId(event.target.value);
   }

   return (
      <div className={styles.SearchBar }>
         <input 
         className={styles.input}
         value = {id} 
         type='search' 
         id='myInput' 
         onChange={handleChange}/>

         <button className={styles.SearchBar} onClick={()=>{
            onSearch(id);
            }}>Agregar</button>
      </div>
   );
}
