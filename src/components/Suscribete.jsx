import React from 'react'
import { Link } from 'react-router-dom'

const Contacto = () => {
  return (
    <>
      <div className="container  d-flex justify-content-center align-items-center vh-100">
        <div className="row">
          <div className="text-center mt-3">
            <h4>¡Suscribete y mantente al tanto de nuevas noticias!</h4>
          </div>
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='...' />
              <div id="emailHelp" className="form-text text-light">No compartiremos informacion a ninguno otro usuario...</div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder='...' />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" for="exampleCheck1">Manteneme al tanto</label>
            </div>
            <Link to='/' type="submit" className="btn btn-success">Suscribirse</Link>
          </form>
        </div>
      </div>

      

    </>
  )
}

export default Contacto
