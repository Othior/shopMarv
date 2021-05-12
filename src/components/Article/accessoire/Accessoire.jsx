import React, { useEffect, useState } from 'react';
import { db } from '../../../firebase/firebase';

function Accessoire() {
    
    let totalAccessoire = [];
    const [accessoire, setAccessoire] = useState([]);
    
    const fetchAllAccessoire = () => {
        db.collection("Article").where("categorie","in",["accessoire"]).get().then(querySnapchot => {
            querySnapchot.forEach(doc => {
                totalAccessoire.push({id:doc.id,contenu:doc.data()});
            });
            setAccessoire(totalAccessoire);
        }).catch(err => {
            console.log("error list article => ",err)
        })
        
    }

    useEffect(() => {
        fetchAllAccessoire();
    }, [])

    return (
        <div>
            <h2 className="titre_roller">Roller</h2>
            <div className="content_roller">
                {
                    accessoire.map((accessoire,index) => (
                        <div className="block_article_container"  key={`article_` + index} >
                                <img className="image_article" src={accessoire.contenu.imageUrl} alt={accessoire.contenu.titre} />
                                <div className="contenu_article">
                                    <h3 className="titre_article">{accessoire.contenu.titre}</h3>
                                    <span className="prix_article">{accessoire.contenu.prix}€</span>
                                </div>
                            {/* <Link to={"/article/" + roller.id} className="lien_article" id={roller.id} onClick={ (e) => handlerSendIdArticle(e) }>
                                Voir plus
                            </Link> */}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Accessoire
