import React from "react";
import Card from "./Card";
import contacts from "../contact";

function createCard(info){
    return <Card
        key={info.id}
        id={info.id}
        name={info.name}
        src={info.imgURL}
        alt={info.alt}
        number={info.phone}
        email={info.email}
    />
}

function App() {
    return (
        <div>
            <h1 className="heading">My Contacts</h1>
            {contacts.map(createCard)}
        </div>
    );
}

export default App;
