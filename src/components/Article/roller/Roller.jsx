import React, { useEffect, useState } from 'react';
import { db } from '../../../firebase/firebase';
import { Link } from 'react-router-dom';



function Roller() {

    let total = [];
    const [rollers, setRollers] = useState([]);

    
    const fetchAllRoller = () => {
        db.collection("Article").where("categorie","in",["roller","roller quad"]).get().then(querySnapchot => {
            querySnapchot.forEach(doc => {
                total.push({id:doc.id,contenu:doc.data()});
            });
            setRollers(total);
        }).catch(err => {
            console.log("error list article => ",err)
        })
        
    }

    const handlerSendIdArticle = (e) => {
        
    }

    
    useEffect(() => {
        fetchAllRoller();
    }, [])

    return (
        <>
            <h2 className="titre_roller">Roller</h2>
            <div className="content_roller">
                {
                    rollers.map((roller,index) => (
                        <div className="block_article_container"  key={`article_` + index} >
                                <img className="image_article" src={roller.contenu.imageUrl} alt={roller.contenu.titre} />
                                <div className="contenu_article">
                                    <h3 className="titre_article">{roller.contenu.titre}</h3>
                                    <span className="prix_article">{roller.contenu.prix}€</span>
                                </div>
                            <Link to={"/article/" + roller.id} className="lien_article" id={roller.id} onClick={ (e) => handlerSendIdArticle(e) }>
                                Voir plus
                            </Link>
                        </div>
                    ))
                }
            </div>
            
        </>
    )
}

export default Roller
