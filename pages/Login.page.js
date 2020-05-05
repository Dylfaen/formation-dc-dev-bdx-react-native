import React from 'react';
import Login from '../components/Login';

export default function LoginPage(props) {


  //En replacement de l'appel API
  let authorizedUsers = [
    {username: "test1", password: "pwd1", firstname: "Test", lastname: "One"},
    {username: "test2", password: "pwd2", firstname: "Test", lastname: "Two"},
    {username: "test3", password: "pwd3", firstname: "Test", lastname: "Three"},
  ]

  const checkLogin = (username, password) => {
    //En remplacement d'un appel API sui vérifie l'authentification
    let userFound = authorizedUsers.find((user) => user.username == username && user.password === password)

    if(userFound === undefined) {
      alert("L'identifiant ou le mot de passe est incorrecte")
    } else {
      props.onLoginSuccessful(userFound)
    }
  }



  return (
    <Login onLogin={checkLogin}/>
  )

}