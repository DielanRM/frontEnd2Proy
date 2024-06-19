import useForm from '../../hooks/useForm.jsx';
import { regiserUserService } from '../../services/userServices.js'
import './Signup.scss';

export default function Signup() {

    const datosPorDefecto ={
      first_name:'',
      last_name:'',
      email:'',
      gender:'F',
      password:'',
      role:''
    }

    const enviarDatos = (datos)=>{
      regiserUserService(datos)
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error.message))
    }

    const {formData, handleSubmit, handleInputChange} = useForm(enviarDatos, datosPorDefecto)


  return (
    <div>
      <div className='form-container'>
        <h1 className='form-container__title'>Sign Up</h1>
        <form onSubmit={handleSubmit} className='form'>
          <div className='form__form-group'>
            <label htmlFor="first_name" className='form__form-group__label'>Nombre</label>
            <input
              type="text"
              name="first_name"
              placeholder="nombre"
              id="first_name"
              value={formData.first_name}
              onChange={handleInputChange}
              className="form__form-group__input"
            />
          </div>

          <div className='form__form-group'>
            <label htmlFor="last_name" className='form__form-group__label'>Apellido</label>
            <input
              type="text"
              name="last_name"
              placeholder="apellido"
              id="last_name"
              value={formData.last_name}
              onChange={handleInputChange}
              className="form__form-group__input"
            />
          </div>


          <div className='form__form-group'>
            <label htmlFor="email" className='form__form-group__label'>email</label>
            <input
              type="text"
              name="email"
              placeholder="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form__form-group__input"
            />
          </div>

          <div className='form__form-group'>
            <label htmlFor="password" className='form__form-group__label'>Contraseña</label>
            <input
              type="password"
              name="password"
              placeholder="contrasena"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              className="form__form-group__input"
            />
          </div>

          <div className='form__form-group'>
            <label htmlFor="role" className='form__form-group__label'>Role</label>
            <select name="role" id="role" value={formData.role} onChange={handleInputChange}>
            <option value="">Elige un tipo de usuario</option>
            <option value="CUSTOMER">Cliente</option>
            <option value="ADMIN">Administrador</option>
            </select>
          </div>

          <div className='form__form-group'>
            <button type='submit' className='form__form-group__button'>Registrate</button>
          </div>
        </form>
      </div>
    </div>
  )
}
