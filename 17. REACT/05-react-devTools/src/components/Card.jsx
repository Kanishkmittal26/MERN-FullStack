import React from 'react';
import Avatar from './Avatar';
import Detail from './Detail';

function Card(object) {
    console.log(object);
    return <div>
        <div className="card">
            <div className="top">
                <p>{object.id}</p>
                <h2 className="name">{object.name}</h2>
                <Avatar src={object.src}/>
            </div>
            <div className="bottom">
                <Detail 
                    number={object.number}
                    email={object.email}
                />
            </div>
        </div>
    </div>
}

export default Card;