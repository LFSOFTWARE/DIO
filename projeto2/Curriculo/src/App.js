

import React from 'react';
import {View,StyleSheet,Image,Text,TouchableOpacity,Alert} from 'react-native';

import foto from './assets/foto.jpg';
import Card from './components/Card/index.js'

const App = () => {
  function perfil() {
      Alert.alert('Meu perfil','https://www.facebook.com/luizfernando.silvadossantos.3/')
  }
  return (
    <>

    <View style={style.page}>
      <View style={style.containerCabe}>

        <TouchableOpacity onPress={()=>{
          perfil()
        }}>
        <Image style={style.foto} source={foto}/>
        </TouchableOpacity>
        <Text style={style.nome}>LUIZ FERNANDO</Text>
        <Text style={style.funcao}>Desenvolvedor FullStack</Text>
        <View>

        
        </View>

        <Card titulo="Formação academica">
               <Text style={style.card_content_text}>FAETC</Text>
               <Text style={style.card_content_text}>SENAC</Text>
        
        
        </Card>
     <Card titulo="Experiencia Profissional">
               <Text style={style.card_content_text}>Tribunal de contas da união</Text>
               
            
        
        </Card>
      </View>

      
    </View>
    </>
  );
};


const style = StyleSheet.create({
  page:{
    backgroundColor:'#E7E7E7',
    flex:1
  },

  containerCabe:{
    flex:1,
    alignItems:'center',
    marginTop:15
  },

  foto:{
    width:250,
    height:250,
    borderRadius:125
  },

  nome:{
    fontSize:26,
    fontWeight:'bold',
    marginTop:10
  },

  funcao:{
    color:'#939393',
    marginBottom:10
  },

        card_content_text:{
            color:"#939393",
            marginTop:10
        }

})
export default App;
