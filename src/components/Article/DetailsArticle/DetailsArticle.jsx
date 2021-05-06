import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { db } from '../../../firebase/firebase';
import "./DetailsArticle.css"

function DetailsArticle() {

    const { id } = useParams(JSON.parse(localStorage.getItem("articleId")));
    const [article, setArticle] = useState([])
    const [panier, setPanier] = useState(JSON.parse(localStorage.getItem("panier")))
    const total = []
    const dataPanierTotal = []
    const [dataPanier,setDataPanier] = useState([])

    const getOne = () => {
        console.log(JSON.parse(localStorage.getItem("articleId")));
        db.collection("Article").get().then(querySnapshot => {
            querySnapshot.forEach( doc => {
                if(doc.id === id){
                    total.push(doc.data())
                }
            })
            setArticle(total);
        })
    }

    const ajouterPanier = (value) => {

        if(panier === null){
            dataPanierTotal.push(value)
        }else{
            panier.forEach(el => {
                if(el !== null){
                    dataPanierTotal.push(el)
                }
            });
            dataPanierTotal.push(value)
        }

        localStorage.setItem("panier",JSON.stringify(dataPanierTotal));

    }

    useEffect(() => {
        getOne();
    }, [])

    return (
        <div className="container_details">
            { 
                article.map((itemArticle,index)=>(
                        <div className="block_article_details" key={"article_" + index}>
                            <img className="image_article_details" src={itemArticle.imageUrl} alt={itemArticle.titre} />
                                <div className="contenu_article">
                                    <h3 className="titre_article_details">{itemArticle.titre}</h3>
                                    <span className="prix_article_details">{itemArticle.prix}€</span>
                                    <div className="description_article_details">
                                        <p>{itemArticle.description}</p>
                                    </div>
                                    <span className="pointure_article_details">Pointure : {itemArticle.taille}</span>
                                    <button 
                                        className="btn_achat_article_details"
                                        onClick={() => ajouterPanier({ titre:itemArticle.titre, prix:itemArticle.prix ,image:itemArticle.imageUrl, quantite:1 }) }
                                    >
                                        Ajouter au panier <i className="fas fa-credit-card"></i>
                                    </button>
                                    <div className="article_info_magasin">
                                        <div className="contenu_info_magasin"> <i className="fas fa-box"></i> <p>Retrait en magasin offert</p> </div>
                                        <div className="contenu_info_magasin"> <i className="fas fa-truck"></i> <p>Retour gratuit dans les 365 jours</p> </div>
                                        <div className="contenu_info_magasin"> <i className="fas fa-shield-alt"></i> <p>Minimum 2 ans de garantie</p> </div>
                                    </div>
                                </div>
                        </div>
                        
                ))
            }
        </div>
    )
}

export default DetailsArticle
