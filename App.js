import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './home';
import ProductDetailsScreen from './ProductDetailsScreen';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Stack = createNativeStackNavigator();
  const fetchFonts = async () => {
    await Font.loadAsync({
      'luckyGuy': require('./assets/font/LuckiestGuy-Regular.ttf'),
    });
  };
  
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login">
          {({ navigation }) => (
            <View style={styles.container}>
                                  <ImageBackground
        style={styles.backgroundImage}
        source={require('./img/bg1.png')}
      />
              <View style={styles.imageContainer}>
                
                <ImageBackground
                  source={require('./img/LSTB2.png')}
                  style={styles.img1}
                ></ImageBackground>
                
              </View>

              <View style={styles.logcontainer}>
                <Text style={styles.title}>Connexion</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  autoCapitalize="none"
                  keyboardType="email-address"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Mot de passe"
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry
                />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                  <Text style={styles.buttonText}>Se connecter</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Home')}>
                  <Text style={styles.buttonText}>Se connecter sans compte</Text>
                </TouchableOpacity>
              </View>

              <StatusBar style="auto" />
            </View>
          )}
        </Stack.Screen>
        <Stack.Screen name="Home">
          {({ navigation }) => <HomeScreen navigation={navigation} />}
        </Stack.Screen>
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
imageContainer: {
  flex: 1,
  justifyContent: 'top',
  alignItems: 'center',
  paddingBottom: 80,
  width: '80%', 
},
img1: {
  width: '100%', 
  aspectRatio: 41.5 / 9, 
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'center',
  marginTop: '10%', 
  resizeMode: 'cover',
},

  logcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%', 
    paddingHorizontal: 16, 
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'luckyGuy',
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    marginBottom: 16,
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: '8%',
  },
  button: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  button2: {
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
});
