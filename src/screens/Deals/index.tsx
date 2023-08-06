import type {FC, ReactElement} from 'react';
import {
  Alert,
  View,
} from 'react-native';
import React, { useEffect, useState} from 'react';
import MasonryList from '@react-native-seoul/masonry-list';
import axios from 'axios';
import styles from './style';
import { IProduct } from '../../store/types';
import { add } from '../../store/actions';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import ProductCard from '../../components/Product';



const App: FC = () => {
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

  const renderItem = ({item, i}:{item: unknown, i: number}): ReactElement => {
    const itemData = item as IProduct;
    return (
      <ProductCard item={itemData} style={{marginLeft: i % 2 === 0 ? 0 : 12}} onPress={() => buy(itemData)} />
    );
  };

  return (
    <View style={styles.container}>
      <MasonryList
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<View />}
        contentContainerStyle={styles.MasonryListStyle}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={products}
        renderItem={renderItem}
      />
    </View>
  );
};

export default App;

function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}
