import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from "@/constants/Colors"; 
import EditScreenInfo from '@/src/components/EditScreenInfo';
// import { Text, View } from '@/components/Themed';
import products from "../../../assets/data/products";


const product = products[1];





export default function MenuScreen() {
  return (
    <View>
      <ProductListItem product={products[2]} />
      <ProductListItem product={products[1]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10
  },

  price: {
     color: Colors.light.tint
  }
});
