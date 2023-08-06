import { Colors } from "../../theme/colors";
import { StyleSheet } from "react-native";
import { DEVICE_WIDTH } from "../../utils/size";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    paddingTop: 10,
  },
  image: {
    width: DEVICE_WIDTH * 0.9,
    height: 200,
    borderRadius: 18,
    alignSelf: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 28,
    marginTop: 5,
  },
  product: {
  marginVertical: 20,
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
  title: {
    maxWidth: 280,
    fontSize: 16,
    color: Colors.BLACK,
    fontFamily: 'Comfortaa-Medium',
    letterSpacing: 0.3,
    marginTop: 5,
  },
  price: {
    fontSize: 16,
    fontFamily: 'Comfortaa-Bold',
    color: Colors.BLACK,
    letterSpacing: 0.3,
    marginTop: 5,
  },
});

export default styles;