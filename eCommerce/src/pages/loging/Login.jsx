import { useState } from "react"
import './Login.scss'

export default function Login() {
//PASO 2.- CREAR ESTADOS PARA GUARDAR  VALORES DEÑ FOLRMULARIO  
const [email, setEmail] = useState('')
const [contrasena, setContrasena] = useState('')
const [mostrarPassword, setMostrarPassword] = useState(false)

//PASO 4.- CREAR UNA FUNCION QUE SE EJECUTARA CUANDO SE ENVIE EL FORMULARIO
 const handleSubmit = (event) =>{
    event.preventDefault()
    const datosEnviados = {
        email,
        contrasena
    }
    console.log(datosEnviados)
    setEmail('')
    setContrasena('')
 }

  //PASO 1.- CREAR FORMULARIO BASE
    return (
    <div className="form-container">
        <h1 className="form-container__title">Inicia sesion</h1>
        <form onSubmit={handleSubmit} className="form">
          {/*PASO 3.- GUARDAR CADA CAMBIO DE CADA INPUT EN SU ESTADO CORRESPONDIENTE */}
            <div className="form__form-group">
                <label htmlFor="email" className="form__form-group__label">email</label>
                <input 
                    type="text"
                    name="email"
                    id="email"
                    placeholder="email"
                    value={email}//el valor tiene que ser igual al estado que lo va a controlar
                    onChange={(event)=>setEmail(event.target.value)}
                />
            </div>

            <div className="form__form-group">
                <label htmlFor="contrasena" className="form__form-group__label">contrasena</label>
                <input 
                    type={mostrarPassword ? 'text' : 'password'}
                    name="contrasena"
                    id="contrasena"
                    placeholder="contrasena"
                    value={contrasena}
                    onChange={(evento)=>setContrasena(evento.target.value)}
                />
                <button type="button" onClick={()=> setMostrarPassword(!mostrarPassword)}>
                    {mostrarPassword ? 'ocultar' : 'mostrar'}
                </button>
            </div>

            <div className="form__form-group">
                <button type="submit" className="form__form-group__button">
                    iniciar sesion
                </button>
            </div>
        </form>
    </div>
  )
}
