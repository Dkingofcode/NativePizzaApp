import { View, Text, Image } from 'react-native'
import React from 'react'

const ProductListItem = ({ product }) => {
  
    return (
      <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} /> 
  
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.title}>${product.price}</Text>
      
    </View>
    );
  };

export default ProductListItem;