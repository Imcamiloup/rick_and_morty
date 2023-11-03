import { useState } from 'react';
import validate from '../../utils/validation';
import styles from './Form.module.css';

export default function Form({login}){

    const [userData, setUserData] = useState({ 
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData)
        const validationErrors = validate(userData.email, userData.password);
        setErrors(validationErrors);
    
        if (Object.keys(validationErrors).length === 0) {
            alert('Simular login');
            setUserData({
                email: '',
                password: ''
            });
            setErrors({}); // Limpia los errores
        } else {
            alert('Debe llenar todos los campos');
        }
    }
    



    return(
        <div className={styles.Form}>
            <form onSubmit={handleSubmit}>
                <label className={styles.label}  htmlFor="name">Email:</label>
                <input className={styles.input}  name = "email" onChange={handleChange} value={userData.email} type="text" placeholder="Ingrese su email..."/>
                {errors.email && <p className={styles.error} >{errors.email}</p>}<br />
                <label className={styles.label} htmlFor="name">Contraseña:</label>
                <input className={styles.input} name = "password" onChange={handleChange} value ={userData.password} type="text" placeholder="Ingrese su contraseña..."/>
                {errors.password && <p className={styles.error}>{errors.password}</p>}<br />
                <button className={styles.buttom} type="submit">Submit</button>
            </form>
        </div>
    )
} 