import React, {  useRef, useState } from 'react';
import { db } from '../../../firebase/firebase';
import Categorie from '../../Categorie/Categorie';
import "./AddArticle.css"

function AddArticle() {

    
    const titre = useRef();
    const prix = useRef();
    const taille = useRef();
    const imageUrl = useRef();
    const [categorie , setCategorie] = useState("")
    const description = useRef();
    
    const handleForm = () => {
        db.collection("Article").doc().set({
            titre: titre.current.value,
            prix: prix.current.value,
            taille: taille.current.value,
            imageUrl:imageUrl.current.value,
            categorie:categorie,
            description:description.current.value
        })

    }

    return (
        <div className="container">
            <h2>Ajouter Article</h2>
            <div className="form">
                <div className="contenu_article_titre_prix">
                    <label htmlFor="">Titre</label><input type="text" placeholder="Titre" ref={titre} />
                    <label htmlFor="">Prix</label><input type="number" placeholder="Prix" ref={prix} />
                </div>
                <div className="contenu_article_taille_imageUrl">
                    <label htmlFor="">Taille</label><input type="number" placeholder="Taille"  ref={taille} />
                    <label htmlFor="">imageUrl</label><input type="text" placeholder="imageUrl" ref={imageUrl} />
                </div>
                <div className="categorie_article">
                    <label>Categorie</label><Categorie categorie={setCategorie}/>
                </div>
                <label htmlFor="">Description</label>
                <textarea name="description" placeholder="description" ref={description}></textarea>
                <button type="submit" onClick={ handleForm }>Ajouter</button>
            </div>
        </div>
    )
}

export default AddArticle
