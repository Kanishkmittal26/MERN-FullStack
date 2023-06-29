import React from 'react';

function Card(object) {
    console.log(object);
    return <div>

        <h2>{object.name}</h2>
        <img
            src={object.src}
            alt={object.alt}
        />
        <p>{object.number}</p>
        <p>{object.email}</p>

    </div>
}

export default Card;