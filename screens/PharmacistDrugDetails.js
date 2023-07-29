import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
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
const PharmacistDrugDetails = () => {
  return (
    <SafeAreaView>
    <View style={{flexDirection:'row', shadowColor:'gray',shadowOffset:{width:0,height:Spacing},shadowOpacity:0.3,shadowRadius:Spacing}}>
          <TouchableOpacity 
          onPress={()=>navigate('PharmaDrugList')}
          style={{
            padding:Spacing,
            marginHorizontal:Spacing,
            borderRadius:Spacing/2,
            marginTop:Spacing*4,
            marginRight:5}}>
            <Ionicons name="chevron-back-outline" color={Colors.primary} size={Spacing*3}/>
            </TouchableOpacity>
            <Text style={{color:Colors.primary,marginTop:Spacing*4,marginLeft:70, alignSelf:'center', fontSize:FontSize.large}}>Medications Details</Text>
        </View>
    <ScrollView style={{height:600}}  scrollEnabled={true}>
    <View style={{
      paddingHorizontal:Spacing,
      paddingTop:Spacing,
    }}>
      <Text style={{
        fontSize:FontSize.large, 
        color:Colors.primary,
        fontFamily:Font['poppins-bold'], 
        textAlign:'left'}}>
       Basic information
      </Text>
     
      <View style={{
          marginVertical:Spacing*2,}}>
          <TextInput placeholder="Medication ID"
          placeholderTextColor= {Colors.darkText} 
          style={{
            fontFamily:Font['poppins-regular'],
            fontSize:FontSize.small,
            padding:Spacing*2,
            backgroundColor:Colors.lightPrimary,
            borderRadius:Spacing,
            marginVertical:Spacing
          }}/>
          <TextInput placeholder="Medication name" 
          placeholderTextColor={Colors.darkText} 
          style={{
            fontFamily:Font['poppins-regular'],
            fontSize:FontSize.small,
            padding:Spacing*2,
            backgroundColor:Colors.lightPrimary,
            borderRadius:Spacing,
            marginVertical:Spacing
          }}/>
          <TextInput placeholder="Category" 
          placeholderTextColor={Colors.darkText}
           
          style={{
            fontFamily:Font['poppins-regular'],
            fontSize:FontSize.small,
            padding:Spacing*2,
            backgroundColor:Colors.lightPrimary,
            borderRadius:Spacing,
            marginVertical:Spacing
          }}/>
          <TextInput placeholder="Total Item" 
          placeholderTextColor={Colors.darkText}
           
          style={{
            fontFamily:Font['poppins-regular'],
            fontSize:FontSize.small,
            padding:Spacing*2,
            backgroundColor:Colors.lightPrimary,
            borderRadius:Spacing,
            marginVertical:Spacing
          }}/>
          <TextInput placeholder="Avaialable Item" 
          placeholderTextColor={Colors.darkText}
           
          style={{
            fontFamily:Font['poppins-regular'],
            fontSize:FontSize.small,
            padding:Spacing*2,
            backgroundColor:Colors.lightPrimary,
            borderRadius:Spacing,
            marginVertical:Spacing
          }}/>
          <TextInput placeholder="Price" 
          placeholderTextColor={Colors.darkText}
           
          style={{
            fontFamily:Font['poppins-regular'],
            fontSize:FontSize.small,
            padding:Spacing*2,
            backgroundColor:Colors.lightPrimary,
            borderRadius:Spacing,
            marginVertical:Spacing
          }}/>
          <TextInput placeholder="Manufactured Date" 
          placeholderTextColor={Colors.darkText}
          style={{
            fontFamily:Font['poppins-regular'],
            fontSize:FontSize.small,
            padding:Spacing*2,
            backgroundColor:Colors.lightPrimary,
            borderRadius:Spacing,
            marginVertical:Spacing
          }}/>
          <TextInput placeholder="Expire Date" 
          placeholderTextColor={Colors.darkText}
          style={{
            fontFamily:Font['poppins-regular'],
            fontSize:FontSize.small,
            padding:Spacing*2,
            backgroundColor:Colors.lightPrimary,
            borderRadius:Spacing,
            marginVertical:Spacing
          }}/>
          
          <TextInput placeholder="Detail information" 
          placeholderTextColor={Colors.darkText}
          multiline={true}
          style={{
            height:200,
            fontFamily:Font['poppins-regular'],
            fontSize:FontSize.small,
            padding:Spacing*2,
            backgroundColor:Colors.lightPrimary,
            borderRadius:Spacing,
            marginVertical:Spacing/2
          }}/>
        </View>
            <View style={{flexDirection:'row', alignItems:'center', marginBottom:10}}>
          <TouchableOpacity  style={{
            padding:Spacing,
            backgroundColor:'green',
            marginRight:20,
            borderRadius:Spacing/2
          }}>
              <Text style={{
              fontFamily:Font['poppins-semiBold'],
              fontSize:FontSize.medium,
              color:Colors.onPrimary,
              alignSelf:'center'}}>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={{
            padding:Spacing,
            backgroundColor:'red',
            borderRadius:Spacing/2
          }}>
              <Text style={{
              fontFamily:Font['poppins-semiBold'],
              fontSize:FontSize.medium,
              color:Colors.onPrimary,
              alignSelf:'center'}}>Delete</Text>
          </TouchableOpacity>

        </View>
    </View>
    </ScrollView>
    <View  style={{flexDirection:'row',alignItems:'flex-end', borderTopWidth:1, borderColor:Colors.primary}}>
    <TouchableOpacity onPress={()=>navigate('PharmaAdminHome')} style={{alignItems:'center', marginLeft:10,padding:Spacing}}>
          <Ionicons name="home-outline" color={Colors.primary} size={Spacing*3}/>
            <Text>Home</Text>
          </TouchableOpacity >
          <TouchableOpacity  style={{alignItems:'center',marginLeft:10, padding:Spacing}}>
          <Ionicons name="settings-outline" color={Colors.primary} size={Spacing*3}/>
           <Text>Settings</Text>
          </TouchableOpacity >
          <TouchableOpacity style={{alignItems:'center',marginLeft:10, padding: Spacing}}>
          <Ionicons name="location-outline" color={Colors.primary} size={Spacing*3}/>
            <Text>Pharmacy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{alignItems:'center',marginLeft:10, padding:Spacing,}}>
          <Ionicons name="help-circle-outline" color={Colors.primary} size={Spacing*3}/>
            <Text>Categories</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{alignItems:'center',marginLeft:10, padding:Spacing,}}>
          <Ionicons name="person-circle-outline" color={Colors.primary} size={Spacing*3}/>
            <Text>Drugs</Text>
          </TouchableOpacity>
        </View>
</SafeAreaView>
  )
}

export default PharmacistDrugDetails