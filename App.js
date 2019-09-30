import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar
} from 'react-native';

import Login from './src/pages/Login';

const App: () => React$Node = () => {
  return (
    <>
      <View style={styles.container}>
        <StatusBar
          backgroundColor='#1c313a'
          barStyle='light-content'
        />
        <Login/>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
