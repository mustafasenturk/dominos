import { useMemo } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { IProduct } from "../store/types";
import styles from "./style";
import { Image } from 'expo-image';


const ProductCard = ({item,style, onPress} : {item: IProduct, style: any, onPress: ()=>void}) => {

  const randomBool = useMemo(() => Math.random() < 0.5, []);
  return (
    <TouchableOpacity key={item.id} style={[styles.product, style]} onPress={onPress}>
      <Image
        source={{uri: item.image}}
        style={[{
          height: randomBool ? 150 : 280,
        }, styles.image]}
      />
      <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
      <View style={styles.row}>
        <Text style={styles.price}>${item.price}</Text>
        <Text style={styles.discountText}>%25 OFF</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;