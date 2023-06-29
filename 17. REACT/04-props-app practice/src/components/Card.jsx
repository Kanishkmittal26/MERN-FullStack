import React from 'react';

function Card(object) {
    console.log(object);
    return <div>
        <div className="card">
            <div className="top">
                <h2 className="name">{object.name}</h2>
                <img className="circle-img"
                    src={object.src}
                    alt={object.alt}
                />
            </div>
            <div className="bottom">
                <p className="info">{object.number}</p>
                <p className="info">{object.email}</p>
            </div>
        </div>
    </div>
}

export default Card;