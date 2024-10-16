import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './src/pages/LoginPage';
import EmployersPage from './src/pages/EmployersPage';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

const App = () => {
  const [isAppReady, setAppReady] = useState(false);

  useEffect(() => {
    const loadResources = async () => {
      await SplashScreen.preventAutoHideAsync(); // Impede a splash screen de desaparecer automaticamente
  
      try {
        await Font.loadAsync({
          'Helvetica': require('./assets/fonts/Helvetica.ttf'),
        });
      } catch (error) {
        console.warn('Erro ao carregar a fonte:', error);
      } finally {
        // Sinaliza que o app está pronto
        setAppReady(true);
        await SplashScreen.hideAsync();
      }
    };
    loadResources();
  }, []);
  
  if (!isAppReady) {
    return null; // Não renderiza até que o app esteja pronto
  }
  

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen 
            name="Login" 
            component={LoginPage} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="Employers" 
            component={EmployersPage} 
            options={{ headerShown: false }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
