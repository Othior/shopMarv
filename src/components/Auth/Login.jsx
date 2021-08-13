import React, { useRef,useState } from 'react'
import { db } from '../../firebase/firebase';
// import { get , clef ,encrypter } from './cryptage';

function Login() {

    const form = useRef();
    const baliseErrorMsg = useRef();
    const [msgError, setMsgError] = useState("")

    const handlerLogin = (e) => {
        e.preventDefault();

        // console.log("pseudo => ", form.current[0].value)
        // console.log("mdp => ", form.current[1].value)
        // console.log("set => ",encrypter("test") )
        
        db.collection("User").get().then(querySnapchot => {
            querySnapchot.forEach(docs => {
                if(docs.data().pseudo ===  form.current[0].value && docs.data().Password === form.current[1].value){
                   sessionStorage.setItem("idUser",JSON.stringify(docs.id))
                   sessionStorage.setItem("pseudoUser",JSON.stringify(docs.data().pseudo))
                   sessionStorage.setItem("emailUser",JSON.stringify(docs.data().Email))
                   setMsgError("")
                }else{
                    setMsgError("pseudo ou mot de passe introuvable!")
                }
            });
        }).catch(err => {
            console.log("err login => ",err);
        })

    }

    return (
        <div>
            <h2>se connecter</h2>
            <form ref={form} onSubmit={(e) => handlerLogin(e) }>
                    <label htmlFor=""> Pseudo </label><input type="text" name="pseudo"/>
                    <label htmlFor=""> Mot de passe </label><input type="password" name="motDePasse"/>
                    <button type="submit" >se connecter</button>
            </form>
            <p className="msgError" ref={baliseErrorMsg} hidden>{msgError}</p>
        </div>
    )
}

export default Login
