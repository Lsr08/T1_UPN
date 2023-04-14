import React, { useReducer, useState } from 'react';
import './App.css';

const formReducer = (state, event) => {
 return {
   ...state,
   [event.name]: event.value
 }
}

function App() {
  const [razonSocial, setRazonSocial] = useReducer(formReducer, {});
  const [nombreComercial, setNombreComercial] = useReducer(formReducer, {});
  const [ruc, setRUC] = useReducer(formReducer, {});
  const [contacto, setContacto] = useReducer(formReducer, {});
  const [telefono, setTelefono] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 20000);
  }

  const handleChange = event => {
    setRazonSocial({
      name: event.target.name,
      value: event.target.value,
    });
  }

  const handleChange2 = event => {
    setNombreComercial({
      name: event.target.name,
      value: event.target.value,
    });
  }

  const handleChange3 = event => {
    setRUC({
      name: event.target.name,
      value: event.target.value,
    });
  }

  const handleChange4 = event => {
    setContacto({
      name: event.target.name,
      value: event.target.value,
    });
  }

  const handleChange5 = event => {
    setTelefono({
      name: event.target.name,
      value: event.target.value,
    });
  }
  return(
    <div className="estilo">
      <h1>Registro de Proveedor</h1>
      {submitting &&
       <div>
         Información de proveedor registrada
         <ul>
           {Object.entries(razonSocial).map(([name, value]) => (
             <li key={name}><strong>Razón social</strong>: {value.toString()}</li>
           ))}
         </ul>
         <ul>
           {Object.entries(nombreComercial).map(([name, value]) => (
             <li key={name}><strong>Nombre Comercial</strong>: {value.toString()}</li>
           ))}
         </ul>
         <ul>
           {Object.entries(ruc).map(([name, value]) => (
             <li key={name}><strong>RUC</strong>: {value.toString()}</li>
           ))}
         </ul>
         <ul>
           {Object.entries(contacto).map(([name, value]) => (
             <li key={name}><strong>Nombre de Contacto</strong>: {value.toString()}</li>
           ))}
         </ul>
         <ul>
           {Object.entries(telefono).map(([name, value]) => (
             <li key={name}><strong>Telefono/Celular</strong>: {value.toString()}</li>
           ))}
         </ul>
       </div>
      }
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Razón Social</p>
            <input name="name" onChange={handleChange}/>
          </label>
          <label>
            <p>Nombre Comercial</p>
            <input name="ape" onChange={handleChange2}/>
          </label>

          <label>
            <p>RUC</p>
            <input name="dir" onChange={handleChange3}/>
          </label>
          <label>
            <p>Contacto</p>
            <input name="ape" onChange={handleChange4}/>
          </label>

          <label>
            <p>Telefono/Celular</p>
            <input name="dir" onChange={handleChange5} />
          </label>
        </fieldset>
        
        <button type="submit">Registrar</button>
      </form>
    </div>
  )
}

export default App;