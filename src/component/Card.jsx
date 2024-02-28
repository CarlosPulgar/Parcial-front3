import React, { useState } from 'react'


const Card = () => {


  const [cliente, setCliente] = useState(
    {
      nombre:"",
      auto:""
    }
  )

  const [show, setShow] = useState(false)
  const [err, setErr] = useState(false)

  const manejador = (e) => {
    e.preventDefault()
    if(/^\S.{2,}$/.test(cliente.nombre) && cliente.auto.length >= 6){
        setShow(true)
        setErr(false)
    }else{
      setErr(true)
    }
   
    }

  return (   
     <div >
        {!show && <form  onSubmit={manejador} style={{
      display:"flex",
      flexDirection:"column",
     }}  >
          <label >Nombre Cliente</label>
          <input type="text" onChange={({target}) => setCliente({...cliente, nombre:target.value }) } />
          <label> Auto preferido</label>
          <input type="text" onChange={({target}) => setCliente({...cliente, auto:target.value }) } />
          <button style={{margin:20}} >ENVIAR</button>
        </form>}
        {show && <h4>{cliente.nombre},  tu auto preferido es: {cliente.auto}</h4>}
        {err && <p style={{color:"red"}}>Ingrese la informacion necesaria</p>}
    </div>
    
  )
}

export default Card
