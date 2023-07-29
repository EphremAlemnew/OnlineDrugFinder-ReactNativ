import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,Image,
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
import Api from "../constants/Api";
import axios from "axios";
import { useState,useEffect } from "react";
const LoggedHome = ({navigation,navigation:{navigate}}) => {
  const [category,setCategory]=React.useState('')
  const userID=useSelector((state)=>state.User_ID)
  const first=useSelector((state)=>state.FName)
  const cartLength=useSelector((state)=>state.Cart)
  const last=useSelector((state)=>state.LName)

  const [carts,setCarts]= useState([])
  const fetchcart=()=>{
    
    axios.get(`http://${Api}/order/cartParameter/?user=${userID}`)
    .then((r)=>{setCarts(r.data)})
    .catch((err)=>{console.log(err)})
}
useEffect(() => {
  fetchcart();
}, []);
  return (
    <SafeAreaView>
        <View style={{flexDirection:'row',}}>
          <TouchableOpacity onPress={()=>navigation.openDrawer()} style={{
            padding:Spacing,
            marginHorizontal:Spacing*2,
            borderRadius:Spacing/2,
            marginTop:Spacing*4,
            marginRight:50}}>
            <Ionicons name="menu-outline" color={Colors.primary} size={Spacing*3}/>
          </TouchableOpacity>
          <Text style={{color:Colors.primary,marginTop:Spacing*4,marginLeft:35, alignSelf:'center', fontSize:FontSize.large}}>Home</Text>
          <TouchableOpacity 
          onPress={()=>navigate("LoggedSearch")}
          style={{
            alignSelf:'flex-end',
            alignItems:'center',
            marginTop:Spacing*4,
            marginLeft:Layout.width*20/100,
            width:Layout.width*10/100,
            bottom:Layout.height*1.5/100,
            borderRadius:Spacing,
          }}>
             <Ionicons style={{
              // alignSelf:'center'
              }} name="search-outline" color={Colors.primary} size={Spacing*2.5}/>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={()=>navigate("CartList")}
          style={{
            flexDirection:'row',
            alignSelf:'flex-end',
            alignItems:'center',
            marginTop:Spacing*4,
            marginLeft:Layout.width*3/100,
            width:Layout.width*10/100,
            bottom:Layout.height*1.5/100,
            borderRadius:Spacing,
          }}>
             <Ionicons style={{
              // alignSelf:'center'
              }} name="cart-outline" color={Colors.primary} size={Spacing*2.5}/>
              <Text style={{backgroundColor:'red',borderRadius:50,width:15,height:15,textAlign:'center',color:Colors.onPrimary,fontFamily:Font["poppins-regular"],fontWeight:'bold',position:'absolute',marginLeft:15}}>{carts.length}</Text>
          </TouchableOpacity>
        </View>
          <ScrollView style={{height:Layout.height*83/100, backgroundColor:Colors.lightPrimary,}}  scrollEnabled={true} endFillColor={'brown'}>
            <View>
            <Image style={{width:Layout.width*95/100,height:Layout.height*20/100,borderRadius:20,margin:5}} source={require("../assets/images/First-Aid-Kit.png")}></Image>
           </View>
          <View style={{
            paddingHorizontal:Spacing,
            paddingTop:Spacing,
            
          }}>
            <Text style={{
              fontSize:FontSize.large, 
              color:Colors.primary,
              fontFamily:Font['poppins-bold'], 
              textAlign:'left'}}>
              Categories
            </Text>
            <View style={{flexDirection:'row', height:Layout.height*22/100, borderRadius:5, borderColor:Colors.primary}}>
            <ScrollView horizontal={true}>
              <TouchableOpacity style={{margin:5,width:Layout.width*40/100, height:Layout.height*50/100,alignItems:'center',color:Colors.primary}}>
              <Image style={{width:Layout.width*30/100,height:Layout.height*15/100,borderRadius:20}} source={require("../assets/images/chronic-conditions.png")}></Image>
                 <Text style={{fontSize:FontSize.large , color:Colors.primary}}>chronic conditions</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{margin:5,marginLeft:0, width:Layout.width*40/100, height:Layout.height*50/100,alignItems:'center',color:Colors.primary}}>
              <Image style={{width:Layout.width*40/100,height:Layout.height*15/100,borderRadius:20}} source={require("../assets/images/Pregnant.jpg")}></Image>
                 <Text style={{fontSize:FontSize.large, color:Colors.primary}}>Pregnancy and Woman health</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{margin:5,marginLeft:0, width:Layout.width*40/100, height:Layout.height*50/100,alignItems:'center',color:Colors.primary}}>
              <Image style={{width:Layout.width*40/100,height:Layout.height*15/100,borderRadius:20}} source={require("../assets/images/baby-care.jpg")}></Image>
                 <Text style={{fontSize:FontSize.large, color:Colors.primary}}>Baby care</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{margin:5,marginLeft:0, width:Layout.width*40/100, height:Layout.height*50/100,alignItems:'center',color:Colors.primary}}>
              <Image style={{width:Layout.width*40/100,height:Layout.height*15/100,borderRadius:20}} source={require("../assets/images/First-Aid-Kit.png")}></Image>
                 <Text style={{fontSize:FontSize.large, color:Colors.primary}}>First aid</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{margin:5,marginLeft:0, width:Layout.width*40/100, height:Layout.height*50/100,alignItems:'center',color:Colors.primary}}>
              <Image style={{width:Layout.width*40/100,height:Layout.height*15/100,borderRadius:20}} source={require("../assets/images/pain-relief.jpg")}></Image>
                 <Text style={{fontSize:FontSize.large, color:Colors.primary}}>Pain relief</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{margin:5,marginLeft:0, width:Layout.width*40/100, height:Layout.height*50/100,alignItems:'center',color:Colors.primary}}>
              <Image style={{width:Layout.width*40/100,height:Layout.height*15/100,borderRadius:20}} source={require("../assets/images/digestive.jpg")}></Image>
                 <Text style={{fontSize:FontSize.large, color:Colors.primary}}>Digestive</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{margin:5,marginLeft:0, width:Layout.width*40/100, height:Layout.height*50/100,alignItems:'center',color:Colors.primary}}>
              <Image style={{width:Layout.width*40/100,height:Layout.height*15/100,borderRadius:20}} source={require("../assets/images/Vitamines.jpg")}></Image>
                 <Text style={{fontSize:FontSize.large, color:Colors.primary}}>Vitamines</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{margin:5,marginLeft:0, width:Layout.width*40/100, height:Layout.height*50/100,alignItems:'center',color:Colors.primary}}>
              <Image style={{width:Layout.width*40/100,height:Layout.height*15/100,borderRadius:20}} source={require("../assets/images/alergies.jpg")}></Image>
                 <Text style={{fontSize:FontSize.large, color:Colors.primary}}>Alergy and flu</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{margin:5,marginLeft:0, width:Layout.width*40/100, height:Layout.height*50/100,alignItems:'center',color:Colors.primary}}>
              <Image style={{width:Layout.width*40/100,height:Layout.height*15/100,borderRadius:20}} source={require("../assets/images/skin-care.jpg")}></Image>
                 <Text style={{fontSize:FontSize.large, color:Colors.primary}}>Skin care</Text>
              </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
          <View>
            <DrugList category={category}/>
          </View>
        </ScrollView>
          <View  style={{flexDirection:'row',alignItems:'flex-end', }}>
          <TouchableOpacity onPress={()=>navigate('LoggedHome')} style={{alignItems:'center', backgroundColor:Colors.primary,marginLeft:Layout.width*0/100,width:Layout.width*20/100,padding:Spacing}}>
            <Ionicons name="home-outline" color={Colors.onPrimary} size={Spacing*3}/>
              <Text style={{color:Colors.onPrimary}}>Home</Text>
            </TouchableOpacity >
            <TouchableOpacity onPress={()=>navigate('LoggedPharmacyList')} style={{alignItems:'center',marginLeft:Layout.width*4/100,width:Layout.width*21/100, padding: Spacing}}>
            <Image style={{tintColor:Colors.primary,width:Layout.width*9/100,height:Layout.width*9/100}} source={require("../assets/images/drugstore.png")}></Image>
              <Text>Pharmacy</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigate('LoggedDrugList')}  style={{alignItems:'center',marginLeft:Layout.width*4/100,width:Layout.width*21/100, padding:Spacing,}}>
            <Image style={{tintColor:Colors.primary,width:Layout.width*9/100,height:Layout.width*9/100}} source={require("../assets/images/drugs.png")}></Image>
              <Text>Drugs</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigate('LoggedPrescriptionList')}  style={{alignItems:'center',marginLeft:Layout.width*4/100,width:Layout.width*24/100, padding:Spacing,}}>
            <Ionicons name="document-text-outline" color={Colors.primary} size={Spacing*3}/>
              <Text>Prescription</Text>
            </TouchableOpacity>
          </View>
    </SafeAreaView>
  )
}

export default LoggedHome