import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const Login = ({ navigation }) => {
  const [Resultat, setRes] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPass] = useState('');

  const play = () => {
    if (Email === 'moateztilouch@gmail.com' && Password === '0000aaaa') {
      setRes('Another gama?');
      setEmail('');
      setPass('');
      navigation.navigate('Game');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Devinette Game</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your email'
          value={Email}
          onChangeText={(text) => setEmail(text)}
          keyboardType='email-address'
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder='Enter your password'
          value={Password}
          onChangeText={(text) => setPass(text)}
        />
        <TouchableOpacity style={styles.button} onPress={play}>
          <Text>Login and Play</Text>
        </TouchableOpacity>
        <Text>{Resultat}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  body: {
    alignItems: 'center',
    backgroundColor: 'pink',
    padding: 80,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 5,
  },
});

export default Login;
