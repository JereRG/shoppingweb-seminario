import React from 'react'
import "../../styles/formQueja.css"
import toast, { Toaster } from 'react-hot-toast'

export const FormQueja = () => {
    
    const enviarQueja = () => {
        toast.success("Queja Enviada Correctamente")
    }
    return (
    <>
    <Toaster richColors position="bottom-left"  />
    <div className="containerformq">
	<div className="row">
			<h1 className='h1'>Queja</h1>
	</div>
	<div className="row">
			<h4 className='h4' style={{textAlign:"center"}}>Completa el formulario para realizar una queja</h4>
	</div>
	<div className="row input-container">
			<div className="col-xs-12">
				<div className="styled-input wide">
					<input className='input' type="text" required />
					<label className="label">Nombre</label> 
				</div>
			</div>
			<div className="col-md-6 col-sm-12">
				<div className="styled-input">
					<input className='input' type="text" required />
					<label className="label">E-mail</label> 
				</div>
			</div>
			<div className="col-md-6 col-sm-12">
				<div className="styled-input" style={{float:"right"}}>
					<input className='input' type="text" required />
					<label className="label">Numero de telefono</label> 
				</div>
			</div>
			<div className="col-xs-12">
				<div className="styled-input wide">
					<textarea className='textarea' required></textarea>
					<label className="label">Escriba su queja</label>
				</div>
			</div>
			<div className="col-xs-12" style={{margin:"0 auto"}}>
				<button className="btn-lrg submit-btn" onClick={() => enviarQueja()}>Enviar Queja</button>
			</div>
	</div>
</div>
</>
  )
}
