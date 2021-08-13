import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../../firebase/firebase';
import './ListArticle.css'

function ListArticle() {

    const total = [];
    const [articles, setArticles] = useState([]);



    const handlerSendIdArticle = (e) => {
        localStorage.setItem("articleId", JSON.stringify(e.target.id));
    }

    useEffect(() => {
        const fetchAll = () => {
            db.collection("Article").get().then(querySnapchot => {
                querySnapchot.forEach(doc => {
                    total.push({ id: doc.id, content: doc.data() });
                });
                setArticles(total);
            }).catch(err => {
                console.log("error list article => ", err)
            })

        }
        fetchAll();
    }, [])

    return (
        <div className="container_list_article">
            <div className="block_article" >
                {articles.map((article, index) => (
                    <div className="block_article_container" key={`article_` + index} >
                        <img className="image_article" src={article.content.imageUrl} alt={article.content.titre} />
                        <div className="contenu_article">
                            <h3 className="titre_article">{article.content.titre}</h3>
                            <span className="prix_article">{article.content.prix}€</span>
                        </div>
                        <Link to={"/article/" + article.id} className="lien_article" id={article.id} onClick={(e) => handlerSendIdArticle(e)}>
                            Voir plus
                        </Link>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default ListArticle
