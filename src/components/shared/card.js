import React from 'react';
import './card.css';

const Card = (props) => {
    return (
        <div>
            <section>
                <div className="card" onClick = {props.onClick}>
                    <h4>{props.title}</h4>
                    <p>{props.body}.</p>
                </div>
            </section>
        </div>
    )
}

export default Card;