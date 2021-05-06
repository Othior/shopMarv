import React from 'react'
import ListArticle from '../Article/ListArticle/ListArticle'
import './Accueil.css'

function Accueil() {
    return (
        <div className="container">
            <h2 className="titre_roller">Roller</h2>
            <ListArticle />
        </div>
    )
}

export default Accueil
