import { Colors } from "../../theme/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
tabStyle: {
    backgroundColor: Colors.WHITE,
    padding: 10,
    width: '100%',
    height: 84,
    zIndex: 0,
},
tabLabelStyle: {
    fontSize: 12,
    fontFamily: 'Comfortaa-SemiBold',
    color: Colors.BLACK,
    textAlign: 'center',
    letterSpacing: 0.5,
},
headerStyle: {
    backgroundColor: Colors.WHITE,
},
});

export default styles;