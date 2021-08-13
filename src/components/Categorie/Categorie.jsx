import React, { useEffect, useRef, useState } from 'react'
import { db } from '../../firebase/firebase';
import "./Categorie.css"

function Categorie({ categorie }) {

    const [categories, setCategories] = useState([]);
    const selectRef = useRef();

    useEffect(() => {
        const total = [];
        const fetchAllCategories = () => {
            db.collection("Categories").get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    total.push(doc.data())
                });
                setCategories(total);
            })
        }
        fetchAllCategories();
    }, [])

    const handler = () => {
        categorie(selectRef.current.value);
    }

    return (
        <select className="selectArticle" name="categorie" id="" ref={selectRef} onChange={handler}>
            {categories.map((itemCategorie, index) => (
                <option className="optionArticle" key={"categorie_" + index} value={itemCategorie.categorie}>
                    {itemCategorie.categorie}
                </option>
            ))}
        </select>
    )
}

export default Categorie
