import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,Image,
    TouchableOpacity, 
    View
  } from "react-native";
  import React from "react";
  import Spacing from "../constants/Spacing";
  import FontSize from "../constants/FontSize";
  import Colors from "../constants/Colors";
  import Font from "../constants/Font";
  import { Ionicons } from "@expo/vector-icons";
  import WebView from "react-native-webview";
import Layout from "../constants/Layout";

const RegisterHome = ({navigation:{navigate}}) => {
  return (
    <SafeAreaView>
        <View style={{flexDirection:'row'}}>
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
          <TouchableOpacity 
          onPress={()=>navigate('RegisterSearch')}
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
          <ScrollView style={Layout.styles.scrollContainer}>
          <View style={{
            paddingHorizontal:Spacing,
            paddingTop:Spacing,}}>
            <Text style={{
              fontSize:FontSize.large, 
              color:Colors.primary,
              fontFamily:Font['poppins-bold'], 
              textAlign:'left'}}>
              Dashboard
            </Text>
            <View style={{ height:230,borderWidth:1, borderRadius:5, borderColor:Colors.primary}}>
            <View style={{flexDirection:'row'}}>
              <TouchableOpacity style={{margin:5,width:100, height:100,padding:Spacing/4,borderColor:'lightgreen', borderWidth:1,alignItems:'center',borderRadius:30, color:Colors.primary}}>
                 <Ionicons size={FontSize.xLarge} name="search-outline" />
                 <Text style={{fontSize:FontSize.large , color:Colors.primary}}>Abcd</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{margin:5,width:100, height:100,padding:Spacing/4,borderColor:'lightgreen', borderWidth:1,alignItems:'center',borderRadius:30, color:Colors.primary}}>
                 <Ionicons size={FontSize.xLarge} name="search-outline" />
                 <Text style={{fontSize:FontSize.large , color:Colors.primary}}>Abcd</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{margin:5,width:100, height:100,padding:Spacing/4,borderColor:'lightgreen', borderWidth:1,alignItems:'center',borderRadius:30, color:Colors.primary}}>
                 <Ionicons size={FontSize.xLarge} name="search-outline" />
                 <Text style={{fontSize:FontSize.large , color:Colors.primary}}>Abcd</Text>
              </TouchableOpacity>
              </View>
              <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={{margin:5,width:100, height:100,padding:Spacing/4,borderColor:'lightgreen', borderWidth:1,alignItems:'center',borderRadius:30, color:Colors.primary}}>
                 <Ionicons size={FontSize.xLarge} name="search-outline" />
                 <Text style={{fontSize:FontSize.large , color:Colors.primary}}>Abcd</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{margin:5,width:100, height:100,padding:Spacing/4,borderColor:'lightgreen', borderWidth:1,alignItems:'center',borderRadius:30, color:Colors.primary}}>
                 <Ionicons size={FontSize.xLarge} name="search-outline" />
                 <Text style={{fontSize:FontSize.large , color:Colors.primary}}>Abcd</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{margin:5,width:100, height:100,padding:Spacing/4,borderColor:'lightgreen', borderWidth:1,alignItems:'center',borderRadius:30, color:Colors.primary}}>
                 <Ionicons size={FontSize.xLarge} name="search-outline" />
                 <Text style={{fontSize:FontSize.large , color:Colors.primary}}>Abcd</Text>
              </TouchableOpacity>
              </View>
            </View>
            <Text style={{
              fontSize:FontSize.large, 
              color:Colors.primary,
              fontFamily:Font['poppins-bold'], 
              textAlign:'left'}}>
              Notifications
            </Text>
            <View style={{marginTop:10, height:350,borderWidth:1, borderRadius:5, borderColor:Colors.primary}}>

          </View>
          </View>
          
          </ScrollView>
          <View  style={{flexDirection:'row',}}>
          <TouchableOpacity onPress={()=>navigate('RegisterHome')} style={{alignItems:'center', backgroundColor:Colors.primary,marginLeft:Layout.width*0/100,width:Layout.width*20/100,padding:Spacing}}>
            <Ionicons name="home-outline" color={Colors.onPrimary} size={Spacing*3}/>
              <Text style={{color:Colors.onPrimary}}>Home</Text>
            </TouchableOpacity >
            <TouchableOpacity onPress={()=>navigate('RegisterPharmacy')} style={{alignItems:'center',marginLeft:Layout.width*4/100,width:Layout.width*21/100, padding: Spacing}}>
            <Image style={{tintColor:Colors.primary,width:Layout.width*9/100,height:Layout.width*9/100}} source={require("../assets/images/drugstore.png")}></Image>
              <Text>Pharmacy</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigate('RegisterRequests')}  style={{alignItems:'center',marginLeft:Layout.width*4/100,width:Layout.width*21/100, padding:Spacing,}}>
            <Image style={{tintColor:Colors.primary,width:Layout.width*9/100,height:Layout.width*9/100}} source={require("../assets/images/document.png")}></Image>
              <Text>Requests</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigate('RegisterFeedbacks')}  style={{alignItems:'center',marginLeft:Layout.width*4/100,width:Layout.width*24/100, padding:Spacing,}}>
            <Image style={{tintColor:Colors.primary,width:Layout.width*9/100,height:Layout.width*9/100}} source={require("../assets/images/feedback.png")}></Image>
             <Text>feedbacks</Text>
            </TouchableOpacity> 
          </View>
    </SafeAreaView>
  )
}

export default RegisterHome