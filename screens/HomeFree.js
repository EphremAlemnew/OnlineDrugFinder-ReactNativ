import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,Image,
    TextInput,
    TouchableOpacity,
    View,
  } from "react-native";
  import React, { useState } from "react";
  import Spacing from "../constants/Spacing";
  import FontSize from "../constants/FontSize";
  import Colors from "../constants/Colors";
  import Layout from "../constants/Layout";
  import Font from "../constants/Font";
  import { Ionicons } from "@expo/vector-icons";
import FreeDrug from "./freeDrug";
import Icon from 'react-native-vector-icons/FontAwesome';
const HomeFree = ({navigation:{navigate} }) => {
  const [cat,setCat]=useState('')
  return (
    <SafeAreaView>
        <View style={{flexDirection:'row',}}>
          <TouchableOpacity onPress={()=>navigate('Login')} style={{
            padding:Spacing,
            marginHorizontal:Spacing*2,
            borderRadius:Spacing/2,
            marginTop:Spacing*4,
            marginRight:50}}>
            <Ionicons name="log-in-outline" color={Colors.primary} size={Spacing*3}/>
          </TouchableOpacity>
          <Text style={{color:Colors.primary,marginTop:Spacing*4,marginLeft:35, alignSelf:'center', fontSize:FontSize.large}}>Home</Text>
          <TouchableOpacity 
          onPress={()=>navigate("FreeSearch")}
          style={{
            alignSelf:'flex-end',
            alignItems:'center',
            marginTop:Spacing*4,
            marginLeft:100,
            width:50,
            height:40,
            borderRadius:Spacing,
          }}>
             <Ionicons style={{
              // alignSelf:'center'
              }} name="search-outline" color={Colors.primary} size={Spacing*2.5}/>
          </TouchableOpacity>
        </View>
        <ScrollView style={{height:600, backgroundColor:Colors.lightPrimary,}}  scrollEnabled={true} endFillColor={'brown'}>
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
            <View style={{flexDirection:'row', height:Layout.height*23/100, borderRadius:5, borderColor:Colors.primary}}>
            <ScrollView horizontal={true}>
              <TouchableOpacity onPress={()=>{setCat('child')}} style={{margin:5,width:Layout.width*40/100, height:Layout.height*50/100,alignItems:'center',color:Colors.primary}}>
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
          <FreeDrug />
          </ScrollView>
          <View  style={{flexDirection:'row',alignItems:'flex-end', }}>
            <TouchableOpacity onPress={()=>navigate('HomeFree')} style={{alignItems:'center',backgroundColor:Colors.primary, marginLeft:Layout.width*1/100,width:Layout.width/5,padding:Spacing}}>
            <Ionicons name="home-outline" color={'white'} size={Spacing*3}/>
              <Text style={{color:'white'}}>Home</Text>
            </TouchableOpacity >
            <TouchableOpacity onPress={()=>navigate('FreePharmacyList')} style={{alignItems:'center',marginLeft:Layout.width/5,width:Layout.width/4.5, padding: Spacing}}>
            <Image style={{tintColor:Colors.primary,width:Layout.width*9/100,height:Layout.width*9/100}} source={require("../assets/images/drugstore.png")}></Image>
             <Text>Pharmacy</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigate('FreeDrugList')}  style={{alignItems:'center',marginLeft:Layout.width/7,width:Layout.width/5, padding:Spacing,}}>
            <Image style={{tintColor:Colors.primary,width:Layout.width*9/100,height:Layout.width*9/100}} source={require("../assets/images/drugs.png")}></Image>
              <Text>Drugs</Text>
            </TouchableOpacity>
          </View>
    </SafeAreaView>
  )
}

export default HomeFree