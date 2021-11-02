import React from 'react';
import {Text,View} from 'react-native';

import style from './style.js';


const card = ({titulo,children})=>{
    return(

          <View style = {style.card}>
            <View style = {style.card_header}>
                <Text>{titulo}</Text>
            </View>
            <View style={style.card_content}>
                <Text style={style.card_content_text}>
                {children}
                </Text>
         
            </View>
             </View>

    )
}


export default card 