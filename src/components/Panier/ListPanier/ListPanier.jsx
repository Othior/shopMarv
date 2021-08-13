import React, {  } from 'react'
import BtnQuantite from '../BtnQuantite/BtnQuantite'
import "./ListPanier.css"

function ListPanier() {

    const item = JSON.parse(localStorage.getItem("panier"))
    
    const decrement = (value) => {
        if(value < 0){
            value = 0
        }else{
            value--
        }
    }
    const increment = (value) => {
        if(value < 10){
            value = 10
        }else{
            value++
        }
    }

    return (
        <div className="container_list_panier">
            {
               item === null ? 
                <div className="block_list_panier">
                    <p className="text_list_panier">Votre panier est vide</p>
                </div>
                : 
                item.map((panierItem,index) => (
                    <div className="block_list_panier" key={ "panier_" + index}>
                        <img className="image_list_panier" src={panierItem.image} alt={panierItem.titre} />
                        <div className="contenu_list_panier">
                            <p className="titre_list_panier">{panierItem.titre}</p>
                            <span className="prix_list_panier" >{panierItem.prix} €</span>
                            <BtnQuantite quantite={panierItem.quantite} decrement={decrement} increment={increment}/>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ListPanier
