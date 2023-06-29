import React from "react";
import Card from "./Card";
import contacts from "../contact";

function App() {
    return (
        <div>
            <h1 className="heading">My Contacts</h1>
            <Card
                name = {contacts[0].name}
                src =  {contacts[0].imgURL}
                alt = {contacts[0].alt}
                number = {contacts[0].phone}
                email = {contacts[0].email}
      />
            <Card 
                name = {contacts[1].name}
                src =  {contacts[1].imgURL}
                alt = {contacts[1].alt}
                number = {contacts[1].phone}
                email = {contacts[1].email}
            />
            <Card 
                name = {contacts[2].name}
                src =  {contacts[2].imgURL}
                alt = {contacts[2].alt}
                number = {contacts[2].phone}
                email = {contacts[2].email}
            />
        </div>
    );
}

export default App;
