import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView  } from 'react-native';
import Intro from './src/pages/Intro';
import Movies from './src/pages/Movies';
import StackNav from './src/navigations/Stack';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <StackNav />
        </NavigationContainer>
      </SafeAreaView>
      <StatusBar barStyle="light-content" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
