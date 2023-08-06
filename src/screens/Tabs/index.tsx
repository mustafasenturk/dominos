import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Home from '../Home';
import Deals from '../Deals';
import Basket from '../Basket';
import { Colors } from '../../theme/colors';
import HeaderLeft from '../../components/HeaderLeft';
import { TotalPrice } from '../../components/HeaderRight';
import styles from './style';
import { selectBasket } from '../../store/selectors';
import { useSelector } from 'react-redux';


const Tab = createBottomTabNavigator();



const Tabs = () => {
  const data = useSelector(selectBasket);
  const totalPrice = data.products.reduce((acc, item) => acc + item.price * item.count, 0).toFixed(1);
  const totalProduct = data.products.reduce((acc, item) => acc + item.count, 0);

 


  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShadowVisible: false,
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarStyle: styles.tabStyle,
        headerTitle: '',
        headerStyle: styles.headerStyle,
        tabBarLabelStyle: styles.tabLabelStyle,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerLeft: () => HeaderLeft('Home'),
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={32} />
          ),
        }}
      />
      <Tab.Screen
        name="Deals"
        component={Deals}
        options={{
          headerLeft: () => HeaderLeft('Hot Deals'),
          tabBarLabel: 'Deals',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="tag" color={color} size={32} />
          ),
        }}
      />
      <Tab.Screen
        name="Basket"
        component={Basket}
        options={{
          headerLeft: () => HeaderLeft('Basket'),
           headerRight: () => Number(totalPrice) > 0 ? TotalPrice(totalPrice) : undefined,
          tabBarLabel: 'Basket',
          tabBarIcon: ({ color}) => (
            <MaterialCommunityIcons name="basket" color={color} size={32} />
          ),
          tabBarBadge: totalProduct === 0 ? undefined : totalProduct,
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;