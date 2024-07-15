import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Form = () => {
  const { store, actions } = useContext(Context);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()

  const manejarEnvio = async (e) => {
    e.preventDefault();
    if (name === '' || phone === '' || email === '' || address === '') {
      setError('All fields are required');
      return;
    }
    setError('');
    const res = await actions.addContact(name, phone, email, address);
    // Resetear los estados después de enviar
    if(res ){
      navigate("/")
      setName('');
      setPhone('');
      setEmail('');
      setAddress('');
    }
  };

  return (
    <form onSubmit={manejarEnvio}>
      <h1 className="text-center">Add a new contact</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="mb-3">
        <label htmlFor="exampleInputName1" className="form-label">Full Name</label>
        <input type="text" className="form-control" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
        <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPhone1" className="form-label">Phone</label>
        <input type="text" className="form-control" placeholder="Enter Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputAddress1" className="form-label">Address</label>
        <input type="text" className="form-control" placeholder="Enter address" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};