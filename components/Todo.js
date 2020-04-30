import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Text, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


export default function Todo(props) {

  let [todos, setTodos] = useState([
    { title: "Faire les courses", finished: false },
    { title: "Réviser le java", finished: true },
  ])

  let [currentInput, setCurrentinput] = useState("")


  const handleChangeText = (texte) => {
    setCurrentinput(texte)
  }

  const addTodo = () => {
    let newTodos = [...todos, { title: currentInput, finished: false }];
    setTodos(newTodos);
  }

  const removeTodo = (index) => {
    let newTodos = [...todos]
    newTodos.splice(index, 1);

    setTodos(newTodos);
  }

  const finishTodo = (index) => {
    let newTodos = [...todos]
    newTodos[index].finished = true;

    setTodos(newTodos)
  }



  const itemComponent = (data) => {

    let finishedStyle;

    if (data.item.finished === true) {
      finishedStyle = styles.todoItemTextFinished;
    }

    return (
      <View style={styles.todoItem}>
        <Text style={[styles.todoItemText, finishedStyle]}>{data.item.title}</Text>
        <Button style={styles.todoItemButton} title="Supprimer" onPress={() => removeTodo(data.index)} />
        {
          data.item.finished === false &&
          <Button style={styles.todoItemButton} title="Terminer" onPress={() => finishTodo(data.index)} />
        }
        
      </View>
    )

  }



  const keyExtractor = (item, index) => index.toString()


  return (
    <View>
      <View>
        <TextInput style={styles.input} onChangeText={handleChangeText} />
        <Button onPress={addTodo} title="ajouter" />
      </View>
      <View>
        <FlatList
          data={todos}
          renderItem={itemComponent}
          keyExtractor={keyExtractor}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    borderWidth: 1,
  },
  todoItem: {
    flexDirection: "row"
  },
  todoItemText: {
    flex: 4,
  },
  todoItemTextFinished: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  },
  todoItemButton: {
    flex: 1,
  }
})