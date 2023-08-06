import {StyleSheet} from 'react-native';
import { Colors } from '../../theme/colors';
import { DEVICE_WIDTH } from '../../utils/size';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
  },
  image: {  
    width: 100,
    height: 100,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    alignItems: 'center',
    width: DEVICE_WIDTH * 0.9,
    marginHorizontal: 20,
    borderRadius: 16,
    height: 140,
    marginTop: 15,
    marginBottom: 10,  
    backgroundColor: Colors.WHITE,
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    },
  countRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.LIGHT_GRAY,
    borderRadius: 30,
    paddingHorizontal: 5,
    width: 80,
  },
  column: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 20,
    height: 100,
  },
  title: {
    maxWidth: 200,
    fontSize: 16,
    color: Colors.BLACK,
    fontFamily: 'Comfortaa-SemiBold',
    letterSpacing: 0.3,
  },
  desc: {
    maxWidth: 200,
    fontSize: 12,
    color: Colors.DARK_GRAY,
    fontFamily: 'Comfortaa-Medium',
    letterSpacing: 0.3,
    marginTop: 5,
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 200,
    marginTop: 10,
  },
  priceText: {
    fontSize: 18,
    color: Colors.ICE_BLUE,
    letterSpacing: 0.3,
    fontFamily: 'Comfortaa-Medium',
    marginRight: 5,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  count: {
    fontSize: 16,
    color: Colors.BLACK,
    fontFamily: 'Comfortaa-Bold',
  },
  orderButton: {
    width: DEVICE_WIDTH * 0.9,
    height: 50,
    borderRadius: 30,
    backgroundColor: Colors.ICE_BLUE,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  orderText: {
    fontSize: 16,
    color: Colors.WHITE,
    fontFamily: 'Comfortaa-Bold',
    letterSpacing: 0.3,
  },
  emptyView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
  },
  emptyText: {
    fontFamily: 'Comfortaa-Bold',
    fontSize: 16,
    marginTop: 20,
    letterSpacing: 0.3,
    color: Colors.DARK_GRAY,
  },
  emptyLottie: {
    width: 300,
    height: 300,
  },
});

export default styles;
