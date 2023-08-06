import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native'
import React, { useCallback } from 'react'
import styles from './style'
import { Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Colors } from '../../theme/colors'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { selectBasket } from '../../store/selectors'
import { IProduct } from '../../store/types'
import { changeCount, clearBasket, del } from '../../store/actions'
import { navigationRef } from '../../routes/type'
import LottieView from 'lottie-react-native'


const Basket = () => {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector(selectBasket);


  const increase = useCallback(
    (id: number) => {
      dispatch(changeCount({id, count: +1}));
    },
    [dispatch],
  );

  const decrease = useCallback(
    (id: number) => {
      dispatch(changeCount({id, count: -1}));
    },
    [dispatch],
  );

  const delProduct = (id: number) => dispatch(del({id}));

  const delAlert = (id: number) => {
    Alert.alert(
      'Delete',
      'Are you sure you want to delete this item?',
      [
        {text: 'Cancel'},
        {text: 'Delete', onPress: () => delProduct(id)},
      ],
      {cancelable: false},
    );
  }

  const newOrder = () => {
    setTimeout(() => {
      dispatch(clearBasket());
    }, 1000);
    Alert.alert(
      'Your Order Received',
      'Your order will be prepared and shipped as soon as possible.',
      [{text: 'Tamam', onPress: () => navigationRef.current?.navigate('Home' as never)}],
    );
  };

  const renderItem = ( item : IProduct) => (
    <View style={styles.item}>
      <Image source={
        { uri: item.image}
      } style={styles.image}
      />
      <View style={styles.column}>
        <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
        <Text numberOfLines={2} style={styles.desc}>{item.description}</Text>
        <View style={styles.row}>
          <View style={styles.countRow}>
              <TouchableOpacity onPress={() =>  item.count === 1 ? delAlert(item.id) : decrease(item.id)}>
                <MaterialCommunityIcons name="minus" color={Colors.BLACK} size={24} />
              </TouchableOpacity>
              <Text style={styles.count}>{item.count}</Text>
              <TouchableOpacity onPress={() => increase(item.id)}>
                <MaterialCommunityIcons name="plus" color={Colors.BLACK} size={18} />
              </TouchableOpacity>
          </View>
          <View style={styles.priceRow}>
            <Text style={styles.priceText}>$ {(item.price * item.count).toFixed(1)}</Text>
            <MaterialCommunityIcons name="tag" color={Colors.ICE_BLUE} size={18} />
           </View>
        </View>
      </View>
    </View>
  )

  return (
    <>
    { data.products.length === 0 ? (
        <TouchableOpacity
          onPress={()=> navigationRef.navigate('Home' as never)}
          style={styles.emptyView}>
          <LottieView
            source={require('../../assets/lottie/empty.json')}
            style={styles.emptyLottie}
            autoPlay
            loop
          />
          <Text style={styles.emptyText}>
            Your basket is empty.{'\n'}Let's add something.
          </Text>
        </TouchableOpacity>
      ) :(
    <View style={styles.container}>
      <FlatList
        data={data.products}
        renderItem={({item}) => renderItem(item)}
        bounces={false}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity style={[styles.orderButton]} onPress={newOrder}>
        <Text style={styles.orderText}>Complete Order</Text>
      </TouchableOpacity>
    </View> )}
    </>
  )
}

export default Basket
