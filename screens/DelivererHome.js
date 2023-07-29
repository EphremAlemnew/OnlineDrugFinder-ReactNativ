import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,Image,Alert,
    TextInput,
    TouchableOpacity,
    View,
  } from "react-native";
  import React from "react";
  import Spacing from "../constants/Spacing";
  import FontSize from "../constants/FontSize";
  import Colors from "../constants/Colors";
  import Layout from "../constants/Layout";
  import Font from "../constants/Font";
  import { Ionicons } from "@expo/vector-icons";
import DrugList from "./DrugList";
import { useSelector } from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome';
const DelivererHome = ({navigation:{navigate}}) => {
  const [category,setCategory]=React.useState('')
  const userID=useSelector((state)=>state.User_ID)
  const first=useSelector((state)=>state.FName)
  const last=useSelector((state)=>state.LName)
  return (
    <SafeAreaView>
        <View style={{flexDirection:'row',}}>
          <TouchableOpacity onPress={()=>Alert.alert("Log out", "Are you sure?", [
                    { text: "No" },
                    { text: "Yes" ,onPress:()=>{navigate('Login')}},
                  ])} style={{
            padding:Spacing,
            marginHorizontal:Spacing*2,
            borderRadius:Spacing/2,
            marginTop:Spacing*4,
            marginRight:50}}>
            <Ionicons name="log-out-outline" color={Colors.primary} size={Spacing*3}/>
          </TouchableOpacity>
          <Text style={{color:Colors.primary,marginTop:Spacing*4,marginLeft:35, alignSelf:'center', fontSize:FontSize.large}}>Home</Text>
         
        </View>
          <ScrollView style={{height:Layout.height*83/100, backgroundColor:Colors.lightPrimary,}}  scrollEnabled={true} endFillColor={'brown'}>

            <View>
              <Text style={{color:Colors.primary, textAlign:'center',fontFamily:Font["poppins-bold"],fontSize:FontSize.large, marginLeft:Layout.width*1/100}}>
                Hello {first} {last}, Welcome Again!
              </Text>
            <Image style={{width:Layout.width*95/100,height:Layout.height*20/100,borderRadius:20,margin:5}} source={require("../assets/images/First-Aid-Kit.png")}></Image>
           </View>
          <View style={{
            paddingHorizontal:Spacing,
            paddingTop:Spacing,
            
          }}>
            
            
          </View>
        </ScrollView>
          <View  style={{flexDirection:'row',alignItems:'flex-end', }}>
          <TouchableOpacity onPress={()=>navigate('DelivererHome')} style={{alignItems:'center',backgroundColor:Colors.primary, marginLeft:Layout.width*1/100,width:Layout.width/5,padding:Spacing}}>
            <Ionicons name="home-outline" color={'white'} size={Spacing*3}/>
              <Text style={{color:'white'}}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigate('DelivererOrders')} style={{alignItems:'center',marginLeft:Layout.width/5,width:Layout.width/4.5, padding: Spacing}}>
            <Icon name="shopping-bag" color={Colors.primary}   size={Spacing*3}/>
             <Text>Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigate('DelivererFinished')}  style={{alignItems:'center',marginLeft:Layout.width/7,width:Layout.width/5, padding:Spacing,}}>
            <Ionicons name="cart" color={Colors.primary}   size={Spacing*3}/>
             <Text>Delivered</Text>
            </TouchableOpacity>
          </View>
    </SafeAreaView>
  )
}

export default DelivererHome