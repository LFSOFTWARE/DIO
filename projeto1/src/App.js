/* eslint-disable prettier/prettier */
import React,{useState} from 'react';

import {
    Text,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    } from 'react-native';










// App
const App = ()=>{

    const [numero,setNumero] = useState(0 )

    function  gerarNum(){
        const newNumber = Math.floor(Math.random()*100)
        setNumero(newNumber)
    }
   
    return (
    <SafeAreaView style={style.container}>
    <Text style={style.textos}>{numero}</Text>
    <TouchableOpacity onPress={gerarNum} style={style.btn} >
        <Text>Gerar Numero</Text>
    </TouchableOpacity>
    </SafeAreaView>
    );

};


// Estilos 
const style = StyleSheet.create({
    container:{
        backgroundColor:'#000',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        fontSize:20,
    },

    textos:{
        color: '#FFFF',
        fontSize:38,
        fontWeight:'bold'
    },
    btn:{
        backgroundColor:'#FFFF',
        width:'80%',
        paddingHorizontal:5,
        paddingVertical:10,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius:5,
        marginTop:50
    }
});



export default App;
