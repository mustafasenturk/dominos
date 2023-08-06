import { Colors } from "../../theme/colors";
import { StyleSheet } from "react-native";
import { DEVICE_WIDTH } from "../../utils/size";

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    paddingTop: 10,
  },
  MasonryListStyle: {
    paddingHorizontal: 24,
    alignSelf: 'stretch'
  },
  title: {
    maxWidth: 280,
    fontSize: 16,
    color: Colors.BLACK,
    fontFamily: 'Comfortaa-Medium',
    letterSpacing: 0.3,
    marginTop: 10,
  },
});

export default styles;