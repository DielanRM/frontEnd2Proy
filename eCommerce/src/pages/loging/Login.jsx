import { useState } from "react"
import { loginUserService } from "../../services/userServices.js"
import './Login.scss'

export default function Login() {
    //PASO 2.- CREAR ESTADOS PARA GUARDAR  VALORES DEÑ FOLRMULARIO  
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [mostrarPassword, setMostrarPassword] = useState(false)

    //PASO 4.- CREAR UNA FUNCION QUE SE EJECUTARA CUANDO SE ENVIE EL FORMULARIO
    const handleSubmit = (event) => {
        event.preventDefault()
        const datosEnviados = {
            email,
            password
        }
        loginUserService(datosEnviados)
            .then((res) => {
                localStorage.setItem('token', res.data.token)
            })// se guardo el token
            .then(() => window.location.href = '/')//direcciona a la ruta raiz
            .catch((error) => console.error(error.message))

        setEmail('')
        setPassword('')
    }

    //PASO 1.- CREAR FORMULARIO BASE
    return (
        <div className="form-container">
            <h1 className="form-container__title">Inicia sesion</h1>
            <form onSubmit={handleSubmit} className="form">
                {/*PASO 3.- GUARDAR CADA CAMBIO DE CADA INPUT EN SU ESTADO CORRESPONDIENTE */}
                <div className="form__form-group">
                    <div className="input_style">
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="email"
                        value={email}//el valor tiene que ser igual al estado que lo va a controlar
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    </div>
                </div>

                <div className="form__form-group">
                    <div className="input_style">
                        <input
                            type={mostrarPassword ? 'text' : 'password'}
                            name="password"
                            id="password"
                            placeholder="password"
                            value={password}
                            onChange={(evento) => setPassword(evento.target.value)}
                        />
                        <button type="button" onClick={() => setMostrarPassword(!mostrarPassword)}>
                            {mostrarPassword ? '🙈' : '🐵'}
                        </button>
                    </div>
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
