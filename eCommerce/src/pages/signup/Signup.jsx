import './Signup.scss'

export default function Signup() {

  
  return (
    <div>
      <div className='form-container'>
        <h1 className='form-container__title'>Sign Up</h1>
        <form onSubmit={() => { }} className='form'>
          <div className='form__form-group'>
            <label htmlFor="first_name" className='form__form-group__label'>Nombre</label>
            <input
              type="text"
              name="first_name"
              placeholder="nombre"
              id="first_name"
              value={''}
              onChange={() => { }}
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
              value={''}
              onChange={() => { }}
              className="form__form-group__input"
            />
          </div>

          <div className='form__form-group'>
            <label htmlFor="contrasena" className='form__form-group__label'>Contraseña</label>
            <input
              type="password"
              name="contrasena"
              placeholder="contrasena"
              id="password"
              value={''}
              onChange={() => { }}
              className="form__form-group__input"
            />
          </div>

          <div className='form__form-group'>
            <label htmlFor="role" className='form__form-group__label'>Apellido</label>
            <select name="role" id="role" value='' onChange={()=>{}}>
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
