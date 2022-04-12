import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from "react-native";

export default function Jogos2({ titulo, valor, imagem }) {
    return (
        <TouchableOpacity style={estilo.containerJogos}>
            <Image
                style={estilo.images}
                source={require(`../../imagens/${imagem}`)}
            />
    
            <Text style={estilo.titulo}>{titulo}</Text>
            <Text style={estilo.valor}>{valor}</Text>
        </TouchableOpacity>
    );
}

const estilo = StyleSheet.create({
    containerJogos: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 8,
        padding: 8,
        margin: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 300,
        height: 215,
        marginLeft: 8,
    },
    titulo: {
        color:'black',
        fontSize: 14,
        fontWeight:'bold',
        marginLeft: -200,
        marginTop: 10,
        
    },
    valor: {
        color:'green',
        fontSize: 12,
        marginLeft: 200,
        marginBottom: 100,
        fontWeight:'bold',
    },
    images: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        
    },
});