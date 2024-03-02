import { useState } from 'react'
import axios from 'axios'

const AgregarActor = () => {

    const url = 'http://localhost:3000/api/actor'

    const [id, setid] = useState();
    const [nombre, setnombre] = useState();
    const [Nacionalidad, setNacionalidad] = useState();
   const [Fecha_cumpleanos, setFecha_cumpleanos] = useState();

   const idHandler = (event) => {

    const { name, value } = event.target;
    setid(value);

}
 
   const nombreHandler = (event) => {

    const { name, value } = event.target;
    setnombre(value);

}

const NacionalidadHandler = (event) => {

    const {name,value} = event.target;
    setNacionalidad(value);
}

const Fecha_CumpleanosHandler = (event) => {

   const {name, value} = event.target;
   setFecha_cumpleanos(value);

}

const submitHandler = async (event) =>{

    event.preventDefault();
  const data = {
    nombre: nombre,
    Nacionalidad: Nacionalidad,
    Fecha_cumpleanos: Fecha_cumpleanos
  }

  try {
    const result = await axios.post(url,data);
    const resultData = (await result).data;

    console.log(result);
    console.log(resultData);
} catch (error) {
    console.error("Error al enviar el formulario:", error);
}

}

const deleteHandler = async (event) => {
    event.preventDefault();

const data = {
    id:id
}

    try {
        const result = await axios.delete(url + `/${id}`);
        console.log(result.data);
    } catch (error) {
        console.error("Error al eliminar:", error);
    }
};

const PutHandler = async (event) => {
    event.preventDefault();

    const data = {
        nombre: nombre,
        Nacionalidad: Nacionalidad,
        Fecha_cumpleanos: Fecha_cumpleanos
    }

    try{
  const result = await axios.put(url + `/${id}` , data)
  console.table(result.data)
    }catch(error){
        console.error("Error al Actualizar Registro", error)
    }
}


    return (
        <>
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="row">
                    <form onSubmit={submitHandler}>
                        <h1><p className="font-monospace">¡Agrega a tu actor Favorito!</p></h1>
                        <div className="input-group mb-3 col-6">
                            <span className="input-group-text" id="basic-addon1">ID</span>
                            <input type="text" name="id" className="form-control" placeholder="En caso de Actualizar o Eliminar..." onChange={idHandler}/>
                        </div>
                        <div className="input-group mb-3 col-6">
                            <span className="input-group-text" id="basic-addon1">Nombre</span>
                            <input type="text" name="nombre" className="form-control" placeholder="Will Smith..." onChange={nombreHandler}/>
                        </div>
                        <div className="input-group mb-3 col-6">
                            <span className="input-group-text" id="basic-addon1">Nacionalidad</span>
                            <input type="text" name='Nacionalidad' className="form-control" placeholder="Donde Nacio...?" onChange={NacionalidadHandler}/>
                        </div>
                        <div className="input-group mb-3 col-6">
                            <span className="input-group-text" id="basic-addon1">Fecha de Cumpleaños</span>
                            <input type="text" name='Fecha_cumpleanos' className="form-control" pattern="\d{4}/\d{2}/\d{2}" onChange={Fecha_CumpleanosHandler} placeholder="YYYY/MM/DD" required/>
                        </div>
                        <button type='submit' className='btn btn-primary'>Registrar Actor</button>
                        <button type='submit' className='btn btn-danger mx-3' onClick={deleteHandler}>Eliminar Registo</button>
                        <button type='submit' className='btn btn-success mx-2' onClick={PutHandler}>Actualizar Registro</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AgregarActor
