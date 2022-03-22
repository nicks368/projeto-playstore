
import { StyleSheet, Text, View } from "react-native";
import Cabecalho from "./src/components/cabecalho";
import Botao from "./src/components/botao";


export default function App() {
  return (
    <View style={{backgroundColor:'#D3D3D3', flex:1}}>
      <Cabecalho/>
      <Botao
      Logo="ios-apps" Texto="APPS" Cor="black" 
      Logo2="ios-game-controller" Texto2="JOGOS" Cor2="green" 
      />

      <Botao  
      Logo="ios-videocam" Texto="FILMES" Cor="blue"
      Logo2="ios-book-sharp" Texto2="LIVROS" Cor2="orange"
      />
     </View>
  );
}
