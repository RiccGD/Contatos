import { StatusBar, View, StyleSheet } from 'react-native'
import { Contatos } from './src/telas/Contatos'

export default function App() {
  return (
    <View style={estilos.conteiner}>
      <StatusBar barStyle='default' />
      <Contatos />
    </View>
  );
}

const estilos = StyleSheet.create({
    conteiner: {
      flex: 1,
      backgroundColor: '#000',
    },
  });
