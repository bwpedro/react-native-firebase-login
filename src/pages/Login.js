import React, {Component} from 'react';
import {
	StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

import firebase from 'react-native-firebase';

export default class Login extends Component {
  
  state = {
    email : '',
    senha : '',
    logado : false,
  }
  
  login = async () => {
    const { email, senha } = this.state;

    try {
      const user = await firebase.auth().signInWithEmailAndPassword(email, senha);
      console.log(user);
      this.setState({logado : true})
    } catch (e) {
      console.log(e);
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image 
            style={styles.image} 
            source={require('../img/react-native.png')}
          />
          {this.state.logado ? <Text style={styles.buttonCadastrar}>Bem-vindo, {this.state.email}!</Text> : <Text style={styles.buttonCadastrar}>Bem-vindo! Logue abaixo.</Text>}
        </View>

        <View style={styles.inputs}>
          <TextInput 
            style={styles.textInput} 
            placeholder="Email" 
            placeholderTextColor='#ffffff'
            value={this.state.email}
            onChangeText={(email) => this.setState({email})}
          />
          <TextInput 
            style={styles.textInput} 
            placeholder="Senha" 
            placeholderTextColor='#ffffff'
            secureTextEntry={true}
            value={this.state.senha}
            onChangeText={(senha) => this.setState({senha})}
          />

          <TouchableOpacity style={styles.button} onPress={this.login}>
            <Text style={styles.buttonEntrar}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.buttonCadastrar}>Não tem um cadastro? Clique aqui</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
  },
  image: {
		width: 85,
    height: 76,
    marginBottom: 20,
	},
	welcomeText: {
		fontSize: 15,
		color: 'rgba(255, 255, 255, 0.7)',
		marginBottom: 15,
  },
  logo: {
    marginTop: 200,
    alignItems: 'center',
    marginBottom: 80,
  },
  textInput: {
    width: 300,
    height: 35,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  buttonEntrar: {
    fontSize: 15,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
  buttonCadastrar: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
  },
  button: {
    width: 150,
    height: 35,
    backgroundColor: '#1c313a',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  inputs: {
    marginTop: 30,
    alignItems: 'center',
  }
});