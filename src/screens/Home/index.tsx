import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { Image } from 'expo-image';
import axios from 'axios';
import styles from './style';
import { IProduct } from '../../store/types';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { add } from '../../store/actions';



const Home = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch<AppDispatch>();


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          'https://fakestoreapi.com/products'
        );
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

    const addMenuItem = (product: IProduct) => dispatch(add(product));
    const buy = (product : IProduct) => {
      Alert.alert(
        'Add To Basket',
        'Are you sure you want to add this item to your basket?',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => addMenuItem(product)},
        ],
        {cancelable: false},
      );
    }

  const renderProductItem = ({item} : {item : IProduct}) => (
    <TouchableOpacity style={styles.product} onPress={
      () => buy(item)
    }>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.row}>
      <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
      <Text style={styles.price}>${item.price}</Text>
      </View>
      
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        bounces={false}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;