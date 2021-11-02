import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import Catolog from './pages/Catalog/index.js';
import Header from './components/Header/index.js';


const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator

        screenOptions={
            {
                headerShown:true,
                cardStyle:{backgroundColor:'#313746'},
            }
        }

        initialRouteName="Catalog"

      >
      
        <Stack.Screen

            name="Catalog"
            component={Catolog}
            options={{
               headerShown:true,
               headerTransparent:true,
               headerTitle:()=>{
                 return <Header />
               },
               
            }}
        
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
