
import { FlatList, StyleSheet, Text, View } from "react-native";
import Cabecalho from "./src/components/cabecalho";
import Botao from "./src/components/botao";
import Jogos from "./src/components/jogos";
import Jogos2 from "./src/components/jogos2";
import Dados from "./dados/dadosJogos";
import Dados2 from "./dados/dadosJogos2";


export default function App() {
  return (
    <View style={{backgroundColor:'#DEDEDE', flex:1}}>
      <Cabecalho/>
      <View>
        <Botao
        Logo="ios-apps" Texto="APPS" Cor="black" 
        Logo2="ios-game-controller" Texto2="JOGOS" Cor2="green" 
        />

        <Botao  
        Logo="ios-videocam" Texto="FILMES" Cor="#2956F1"
        Logo2="ios-book-sharp" Texto2="LIVROS" Cor2="#FE9C10"
        />
      </View>

      <Text style={estilo.titulo}> Jogos em Destaque </Text>

      <View>
        <FlatList
        horizontal = {true}
        data = {Dados}
        keyExtractor = {(item) => item.id}
        renderItem = { ({ item }) => (

        <Jogos
        titulo = {item.nome}
        imagem = {item.imagem}
        valor = {item.valor}
        />
        )}

        />
      </View>
      
      <Text style={estilo.titulo}> Próximos Lançamentos </Text>

      <FlatList
      horizontal = {true}
      data = {Dados2}
      keyExtractor = {(item) => item.id}
      renderItem = { ({ item }) => (

      <Jogos2
      titulo = {item.nome}
      imagem = {item.imagem}
      valor = {item.valor}
      />
      )}

      />
     </View>
  );
}

const estilo = StyleSheet.create({
  titulo:{
      color:'black',
      fontSize:20,
      fontWeight:'bold',
      margin: 8,
  }

})
