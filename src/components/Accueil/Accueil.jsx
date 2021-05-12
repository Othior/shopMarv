import React from 'react'
import Accessoire from '../Article/accessoire/Accessoire'
import ListArticle from '../Article/ListArticle/ListArticle'
import Roller from '../Article/roller/Roller'
import './Accueil.css'

function Accueil() {
    return (
        <div className="container">
            <div className="block_image_accueil">
                <img src="https://cdn.pixabay.com/photo/2017/07/01/08/15/inline-speed-skating-2460833_960_720.jpg" alt="imageRoller" />
            </div>
            <h2 className="titre_roller">Produit</h2>
            {/* <ListArticle /> */}
            <Roller />
            <Accessoire />
        </div>
    )
}

export default Accueil
