import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form'; // Importa el formulario desde su carpeta
import axios from 'axios';
function App() {

   const [character, setCharacter] = useState({});
   const [characters, setCharacters] = useState([]);
   const [toShow, setToShow] = useState([]);
   const location = useLocation();
   const navigate = useNavigate()
   const [access, setAccess] = useState(false)
   const EMAIL="luiscgr97@gmail.com"
   const PASSWORD="pokemon23"

   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }

   useEffect(() => {
      !access && navigate('/');}, [access]);

   function onSearch(id, string='all') {
      console.log(id, string);
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
         if (data.id) {
            if(string !== 'all'){
               setCharacter(data);
            }
            else { if (!toShow.includes(data.id) ){
               setCharacters([...characters, data]);
               setToShow([...toShow, data.id]);
            }}
         } else {
            window.alert(`¡No hay personajes con este ID!:${id}` )
         } 
      }) 
   } 
   function onClose(id) {
      setCharacters((oldChars) => oldChars.filter((c) => c.id !== id));
      setToShow(oldToShow => oldToShow.filter(showId => showId !== id));
   }

   

   return (
      
      <div className='App'>
         {location.pathname !== '/' && <Nav onSearch={onSearch} />}
         <Routes>
            <Route path="/" element={<Form login={login}/>} />
            <Route path="/home" element={<Home onClose={onClose} characters={characters} />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail character={character} onSearch={onSearch} onClose={null}/>} />
         </Routes>
         
      </div>
   );
}

export default App;
