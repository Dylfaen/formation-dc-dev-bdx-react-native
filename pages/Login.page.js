import React from 'react';
import Login from '../components/Login';

import axios from 'axios';

export default function LoginPage(props) {


  const checkLogin = async (username, password) => {

    //TODO: A remplacer par une vrai route de login et entourer d'un try catch pour gérer l'erreur
    let response = await axios.get('https://5eb15fa7e6828200164a772e.mockapi.io/api/users', {
      params: {
        filter: username
      }
    })

    let userFound = response.data[0];

    if (userFound === undefined) {
      alert("L'identifiant ou le mot de passe est incorrecte")
    } else {
      props.onLoginSuccessful(userFound)
    }
  }



  return (
    <Login onLogin={checkLogin} />
  )

}