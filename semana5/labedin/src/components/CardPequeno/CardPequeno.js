import React from 'react';


function CardPequeno(props) {
    return (
        <div className="bigcard-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p><b>{ props.telefone }</b></p>
            </div>
        </div>
    )
}

export default CardPequeno;