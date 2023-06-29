import React from 'react'

function Emoji(props) {
    return <div>
        <div className="term">
            <dt>
                <span className="emoji" role="img" aria-label="Tense Biceps">
                    {props.emoji}
                </span>
                <span>{props.name}</span>
            </dt>
            <dd>
                {props.meaning}
            </dd>
        </div>
    </div>
}

export default Emoji;