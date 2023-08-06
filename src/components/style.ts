import { Colors } from "../theme/colors";
import { StyleSheet } from "react-native";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../utils/size";

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Comfortaa-Bold',
    color: Colors.BLACK,
    letterSpacing: 0.5,
    marginTop: 5,
  },
  headerRight: {
    marginRight: 20,
  },
  totalPriceText: {
    fontSize: 16,
    fontFamily: 'Comfortaa-Bold',
    color: Colors.BLACK,
    letterSpacing: 0.5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10
  },
  image: {
    alignSelf: 'stretch',
    resizeMode: "cover",
    backgroundColor: Colors.LIGHT_GRAY,
    borderRadius: 18,
  },
    price: {
    fontSize: 18,
    color: Colors.ICE_BLUE,
    letterSpacing: 0.3,
    fontFamily: 'Comfortaa-Medium',
  },
  discountText: {
    fontSize: 14,
    letterSpacing: 0.3,
    fontFamily: 'Comfortaa-Medium',
    color: Colors.DARK_GRAY,
    marginLeft: 10,
  },
  product: {
  marginVertical: 20,
  marginHorizontal: 15,
  shadowColor: Colors.BLACK,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
  borderStartColor: Colors.WHITE,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  menuContainer: {
    position: 'absolute',
    top: 40, 
    right: -20, 
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 4,
    width: DEVICE_WIDTH / 2,
    height: DEVICE_HEIGHT / 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  menuItem: {
    padding: 8,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Comfortaa-Medium',
    color: Colors.BLACK,
    letterSpacing: 0.3,
    marginTop: 5,
  },
});

export default styles;
