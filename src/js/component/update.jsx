import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

export const Update = ({ contact }) => {
    const { store, actions } = useContext(Context);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');
    //const navigate = useNavigate()

    // const handleDelete = async (idContact) => {
    //     await actions.deleteContact(idContact);
    // };


    const manejarEnvio = async () => {

        if (name === '' || phone === '' || email === '' || address === '') {
            setError('All fields are required');
            return;
        }
        setError('');
        const res = await actions.updateContact(contact.id, name, phone, email, address);
        // Resetear los estados después de enviar
        if (res) {
            navigate("/")
            setName('');
            setPhone('');
            setEmail('');
            setAddress('');
        }
    };
    useEffect(() => {
        console.log(contact.id)
        const currentContact = store.contacts.find((item) => item.id == contact.id)
        console.log(currentContact);
        setName(currentContact.name)
        setEmail(currentContact.email)
        setPhone(currentContact.phone)
        setAddress(currentContact.address)
    }, [contact])
    return (
        <>
            <div className="modal" id={"updateModal-" + contact.id}>
                <div className="modal-dialog modal-lg" tabIndex="-1">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit Contact</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form >
                            <h1 className="text-center">Add a new contact</h1>
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                            <div className="mb-3">
                                <label htmlFor="exampleInputName1" className="form-label">Full Name</label>
                                <input type="text" className="form-control" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
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
                        </form>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={manejarEnvio}>Submit</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}