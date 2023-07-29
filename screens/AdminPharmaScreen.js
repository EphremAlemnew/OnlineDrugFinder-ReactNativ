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
  import Font from "../constants/Font";
  import { Ionicons } from "@expo/vector-icons";
  import Layout from "../constants/Layout";
  import axios from "axios";
  import Api from "../constants/Api";
  import { useState,useEffect } from "react";
  import { useSelector } from "react-redux";
  import Icon from 'react-native-vector-icons/FontAwesome';
const AdminPharmaScreen = ({navigation,navigation:{navigate}}) => {
  const [approval, setApproval] = useState([]);
const pharmacyId = useSelector((state) => state.pharmaID);
const first=useSelector((state)=>state.FName)
const last=useSelector((state)=>state.LName)

const fetchPharma = () => {
  
  axios
    .get(`http://${Api}/drugs/pharmacyParameter/?id=${pharmacyId}&&approved=True`)
    .then((response) => {
      setApproval(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

useEffect(() => {
  fetchPharma();
}, []);
  return (
    <SafeAreaView>
      {approval.length>0 ? <View>
        <View>
          <View style={{flexDirection:'row'}}>
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
          onPress={()=>navigate('PharmaAdminSearch')}
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
          <TouchableOpacity onPress={()=>navigate('AdminPharma')} style={{alignItems:'center', backgroundColor:Colors.primary,marginLeft:Layout.width*0/100,width:Layout.width*20/100,padding:Spacing}}>
            <Ionicons name="home-outline" color={Colors.onPrimary} size={Spacing*3}/>
              <Text style={{color:Colors.onPrimary}}>Home</Text>
            </TouchableOpacity >
            <TouchableOpacity onPress={()=>navigate('Inventory')}  style={{alignItems:'center',marginLeft:Layout.width*4/100,width:Layout.width*24/100, padding:Spacing,}}>
            <Image style={{tintColor:Colors.primary,width:Layout.width*9/100,height:Layout.width*9/100}} source={require("../assets/images/inventory.png")}></Image>
               <Text>Inventory</Text> 
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigate('PharmaAdminDrugList')}  style={{alignItems:'center',marginLeft:Layout.width*4/100,width:Layout.width*21/100, padding:Spacing,}}>
            <Image style={{tintColor:Colors.primary,width:Layout.width*9/100,height:Layout.width*9/100}} source={require("../assets/images/drugs.png")}></Image>
              <Text>Drugs</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigate('PharmaAdminAccount')}   style={{alignItems:'center',marginLeft:Layout.width*4/100,width:Layout.width*21/100, padding:Spacing,}}>
            <Image style={{tintColor:Colors.primary,width:Layout.width*9/100,height:Layout.width*9/100}} source={require("../assets/images/skills.png")}></Image>
             <Text>Accounts</Text>
            </TouchableOpacity>
          </View>
        </View>
        </View> : 
        <View style={{alignItems:'center'}}>
          <View style={{height:Layout.height*70/100,margin:Layout.width*10/100,marginTop:Layout.width*30/100,width:Layout.width*90/100}}>
          <View
            style={{
              paddingHorizontal: Spacing,
              paddingTop: Spacing,
            }}
          >
            <Text
              style={{marginTop:20,
                fontSize: FontSize.large,
                color:Colors.primary,
                fontFamily: Font["poppins-bold"],
                textAlign: "center",
              }}
            >
             OOPS! Sorry {first} {last} You are registered as pharmacy manager to your pharmacy. 
              but your pharmacy is not approved yet. 
              So please wait until the approval of your pharmacy. for more information call to +251978654324
            </Text>   
            <Ionicons name="checkmark-circle-outline" style={{alignSelf:'center'}} color={Colors.primary} size={Spacing*6}/>
              <TouchableOpacity
               onPress={()=>navigate('Login')}
                style={{marginTop:20,
                  padding: Spacing,
                  paddingRight: 30,
                  alignItems: "center",
                  backgroundColor: "green",
                  borderRadius: Spacing / 2,
                }}
              >
                <Text
                  style={{
                    fontFamily: Font["poppins-semiBold"],
                    fontSize: FontSize.medium,
                    color: Colors.onPrimary,
                    alignSelf: "center",
                  }}
                >
                  Back to login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>}
      
        
    </SafeAreaView>
  )
}

export default AdminPharmaScreen