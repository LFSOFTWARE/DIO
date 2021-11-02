import React,{useState} from 'react';
import {View} from 'react-native';


import {
  Container,
  ProductContainer,
  ProductList,
  Product,
  ProductImage,
  ProductTitle,
  PriceContainer,
  ProductPrice,
  ProductButton,
  ProductButtonText,
} from './styles.js';

export default function App() {

  const [products,setProducts] = useState([
    {
      id:'1',
      title:'Assinatura Trimestral',
      image_url:'https://e7.pngegg.com/pngimages/185/740/png-clipart-sony-playstation-sony-playstation.png',
      price:150,
    }
  ])

  return (


    <Container>
      <ProductContainer>
        <ProductList
        data={products}
        keyExtractor={(item)=>item.id}
        listFooterComponent={<View/>}
        listFooterComponentStyle={{
          heigth:80,
        }}

        renderItem={({item})=>(
          <Product>
            <ProductImage source={{ uri:item.image_url }} />
            <ProductTitle>{item.title}</ProductTitle>
          </Product>
        )}
        
        
        
      />
      </ProductContainer>
    
    </Container>


  );
}
