import React, { useState } from 'react'

function BtnQuantite({quantite,increment,decrement}) {
    console.log("quantite =>",quantite);
    const [quantiter, setQuantiter] = useState(quantite)

    return (
        <div className="block_ajouter_quantite">
            <button className="btn_decrement_quantite" onClick={() => decrement(setQuantiter(quantiter - 1))}>-</button>
            <span className="quantite_list_panier" >{quantiter}</span>
            <button className="btn_increment_quantite" onClick={() => increment(setQuantiter(quantiter + 1))}>+</button>
        </div>
    )
}

export default BtnQuantite
