// import React, { Component} from "react";
// import App from "./navigation/app";

// export default class VpnApp extends Component {
//   render() {
//     return <App />;
//   }
// }

import React, { useState } from 'react';
import { View, Text, StyleSheet,TextInput, Button, ToastAndroid } from 'react-native';
import { StatusBar } from 'expo-status-bar';
// import VPNManager from 'react-native-ikev2-vpn'; // Importez la bibliothèque VPN

const VpnApp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const connectVpn = async () => {
    try {
      // Configurez les paramètres VPN avec l'adresse du serveur VPN
      const vpnConfig = {
        server: '546195468.box.freepro.com',
        username,
        password,
      };

      // Établissez la connexion VPN en utilisant la bibliothèque react-native-ikev2-vpn
      const isConnected = await VPNManager.connect(vpnConfig);

      if (isConnected) {
        ToastAndroid.show('Connexion VPN établie', ToastAndroid.SHORT);
      } else {
        ToastAndroid.show('Échec de la connexion VPN', ToastAndroid.SHORT);
      }
    } catch (error) {
      console.error('Erreur de connexion VPN :', error);
      ToastAndroid.show('Erreur de connexion VPN', ToastAndroid.SHORT);
    }
  };

  return (
  <View style={styles.form}>
    <View style={styles.inputForm}>
          <Text aria-label="Label for User" nativeID="label User" style={styles.label}>Nom d'utilisateur :</Text>
       {/* <Text>Entrez votre nom d'utilisateur et votre mot de passe:</Text> */}
       <TextInput
        placeholder="Nom d'utilisateur"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
    </View>

    <View style={styles.inputForm}>
        <Text aria-label="Label for Password" nativeID="label Password" style={styles.label}>Saissez votre mot de passe :</Text>
      <TextInput
        placeholder="Saissisez votre mot de passe "
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        value={password}
      />
       </View>
      <Button title="Connexion VPN" onPress={connectVpn} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({

  form: {
      marginTop: 50,
      width: '100%',
  },
  
  input: {
      width: '100%',
      height: 40,
      borderWidth: 1,
      borderRadius: 50,
      marginBottom: 25,
      backgroundColor: 'rgba(151, 157, 215, 0.39)',
      padding: 10,
      borderWidth: 0, borderColor: "transparent"
  },

});

export default VpnApp;



