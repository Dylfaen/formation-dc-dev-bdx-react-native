import React, {useState} from 'react';
import { View, Text, TextInput, Button } from 'react-native';


export default function Login(props) {


  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleUsername = (texte) => {
    setUsername(texte)
  }

  const handlePassword = (texte) => {
    setPassword(texte)
  }

  const handleLogin = () => {
    console.log("login infos", username, password)
    props.onLogin(username, password)
  }


  return (
    <View>
      <Text>Login</Text>
      <TextInput onChangeText={handleUsername} />
      <TextInput onChangeText={handlePassword}/>
      <Button onPress={handleLogin} title="Se connecter"/>
    </View>
  )
}