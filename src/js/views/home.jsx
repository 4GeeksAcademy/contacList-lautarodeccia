import React, { useContext } from "react";
import { Card } from "../component/card.jsx";
import { Context } from "../store/appContext";//2. importamos el Contexto


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			{store.contacts.map(contact => (
				<Card key={contact.id} contact={contact}

				/>

			))}
		
		</div>
	)
};
