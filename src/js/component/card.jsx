import React, { useContext, useEffect } from "react";//1. importamos el hook useContext
import { Context } from "../store/appContext";//2. importamos el Contexto
import { Foto } from "./foto.jsx";
import { useNavigate } from "react-router-dom";
import { Update } from "../component/update.jsx";

export const Card = ({ contact }) => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);

    const handleDelete = async (idContact) => {
        await actions.deleteContact(idContact);
    };

    return (
        <div className="card d-flex mb-3 m-5">
            <div className="d-flex">
                <Foto />
                <ul className="list-unstyled d-flex flex-column text-start m-4 my-auto">
                    <li><h5 className="card-title">{contact.name}</h5></li>
                    <li className="card-Address"><i className="fas fa-map-marker-alt"></i> {contact.address}</li>
                    <li className="card-Phone"><i className="fas fa-phone"></i> {contact.phone}</li>
                    <li className="card-Email"><i className="fas fa-envelope"></i> {contact.email}</li>
                </ul>
            </div>
            <div className="d-flex justify-content-end" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-primary"  data-bs-toggle="modal" data-bs-target={"#updateModal-" + contact.id}>
                    <i className="fas fa-pencil-alt"></i>
                </button>
                <Update contact={contact}/>
                <button type="button" className="btn btn-outline-primary" onClick={() => handleDelete(contact.id)}>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        </div>
    );
};
