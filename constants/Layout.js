import { Dimensions ,StyleSheet} from "react-native";
import Colors from "./Colors";
import Font from "./Font";
import Spacing from "./Spacing";
import FontSize from "./FontSize";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  scrollContainer:{
    height:height*83/100,
    backgroundColor:Colors.lightPrimary
  },
  headingTouch:{
            padding:Spacing,
            marginHorizontal:Spacing,
            borderRadius:Spacing/2,
            marginTop:Spacing*4,
            marginRight:5
  },
  headingTouchText:{
    color:Colors.primary,
    marginTop:Spacing*4,
    marginLeft:70, 
    alignSelf:'center', 
    fontSize:FontSize.large
},
ListTouch:{
    height:40,
    margin:Spacing,
    marginTop:5,
    backgroundColor:Colors.primary,
    marginVertical:Spacing/4,
    borderRadius:Spacing/3

},
ListTouchText:{
  marginLeft:5,
  fontFamily:Font['poppins-semiBold'],
  fontSize:FontSize.large,
  color:Colors.onPrimary,

},
LoggedTabTouch:{
  alignItems:'center',
  marginLeft:width/14, 
  padding: Spacing

}

})
export default {
  width,
  height,
  isSmallDevice: width < 375,
  styles

};
