import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';

const Game = ({ route }) => {
  const [number, setNumber] = useState('');
  const [history, setHistory] = useState([]);

  const Try = () => {
    const { randomNumber } = route.params;
    const guess = parseInt(number, 10);

    if (randomNumber === guess) {
      setNumber('');
      setHistory((prevHistory) => [...prevHistory, { guess, result: 'Win' }]);
    } else if (randomNumber < guess) {
      setNumber('');
      setHistory((prevHistory) => [...prevHistory, { guess, result: 'Too High' }]);
    } else {
      setNumber('');
      setHistory((prevHistory) => [...prevHistory, { guess, result: 'Too Low' }]);
    }
  };

  const renderHistoryItem = ({ item }) => (
    <View style={styles.historyItem}>
      <Text>Guess: {item.guess}</Text>
      <Text>Result: {item.result}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome To Devinette Game</Text>
      <TextInput
        style={styles.input}
        placeholder='Put the number in your mind'
        value={number}
        onChangeText={(text) => setNumber(text)}
      />
      <TouchableOpacity style={styles.button} onPress={Try}>
        <Text>Try to win</Text>
      </TouchableOpacity>

      <View style={styles.history}>
        <FlatList
          data={history}
          renderItem={renderHistoryItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: 'pink',
  },
  button: {
    backgroundColor: 'blue',
    color: 'pink',
    padding: 10,
    borderRadius: 5,
  },
  history: {
    marginTop: 20,
    
    width: 300,
  },
  historyItem: {
    backgroundColor: 'lightgray',
    padding: 10,
    marginBottom: 5,
  },
});

export default Game;
