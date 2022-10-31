import React, {useState} from 'react';
import './FormContact.css'

function FormContact() {
    const [firstname, setFirstname] = useState ('');
    const [lastname, setLastname] = useState ('');
    const [mail, setMail] = useState ('');
    const [phone, setPhone] = useState ('');
    const [reason, setReason] = useState ('');
    const [message, setMessage] = useState ('');

    const handleSubmit = (e) => {
        e.preventDefault ();
        console.log (`Se ha enviado un formulario:
        De ${firstname} ${lastname} por motivos de ${reason} ${message}.
        Comunicarse al ${phone} o ${mail}`)
        alert (`Se ha enviado un formulario:
        De ${firstname} ${lastname} por motivos de ${reason} ${message}.
        Comunicarse al ${phone} o ${mail}`)
    }


    return (
        <div className='containerForm'>
            <form onSubmit={handleSubmit} className='formForm'>
                <div className='containerInput'>
                <span className='labelForm input-group-text'><strong>First Name: </strong>
                    <input className='inputForm form-control' required type='text' name='firstname' value={firstname} onChange={(e) => setFirstname(e.target.value)} placeholder="Enter your first name"></input>
                </span>
                <span className='labelForm  input-group-text'><strong>Last Name: </strong>
                    <input className='inputForm form-control' required type='text' name='lastname' value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder='Enter your last name'></input>
                </span>
                </div>
                <div className='containerForm'>
                <span className='labelForm  input-group-text'><strong>Mail: </strong>
                    <input className='inputForm form-control' required type='email' name='mail' value={mail} onChange={(e) => setMail(e.target.value)} placeholder='Enter your mail'></input>
                </span>
                <span className='labelForm  input-group-text'><strong>Phone:</strong>
                    <input className='inputForm form-control' required type='number' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Enter your phone number'></input>
                </span>
                </div>
                <div className='containerForm'>
                <span className='input-group-text'><strong>Reason: </strong>
                    <select className='form-select' name='reason' value={reason} onChange={(e) => setReason(e.target.value)}>
                        <option value="Servicio al cliente">Servicio al cliente</option>
                        <option value="Compras">Compras</option>
                        <option value="Facturacion">Facturacion</option>
                    </select>
                </span>
                <span className='input-group-text'><strong>Message : </strong>
                    <textarea className='form-control' name='message' value={message} onChange={(e) => setMessage(e.target.value)} cols="30" rows="3" placeholder='Write an information'></textarea>
                </span>
                </div>
                
                <button type="submit" class="btn btn-outline-info">Send</button>
                
            </form>
        </div>
    )
}

export default FormContact;