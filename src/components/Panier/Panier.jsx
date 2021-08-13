import React, {  } from 'react'
import ListPanier from './ListPanier/ListPanier'
import "./Panier.css"

function Panier() {

    return (
        <div className="container_panier">
            <ListPanier />
            <button className="btn_achat_list_panier">Passer à l'achat</button>
        </div>
    )
}

export default Panier
