import React from 'react';
import {
	StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

// import Logo from '../components/Logo';

const Login: () => React$Node = () => {
	return (
		<>
			<View style={styles.container}>
        <View style={styles.logo}>
          <Image 
            style={styles.image} 
            source={require('../img/react-native.png')}
          />
          <Text style={styles.welcomeText}>Welcome to my React Native app.</Text>
        </View>

        <View style={styles.inputs}>
          <TextInput 
            style={styles.textInput} 
            placeholder="Email" 
            placeholderTextColor='#ffffff'
          />
          <TextInput 
            style={styles.textInput} 
            placeholder="Senha" 
            placeholderTextColor='#ffffff'
            secureTextEntry={true}
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonEntrar}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.buttonCadastrar}>Não tem um cadastro? Clique aqui</Text>
          </TouchableOpacity>
        </View>
			</View>
		</>
	);
};

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
    color: '#ffffff',
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

export default Login;