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
import MapView from "react-native-maps";
import Icon from 'react-native-vector-icons/FontAwesome';
const PharmacistHome = ({navigation,navigation:{navigate}}) => {
    const [isVisible, setIsVisible] = React.useState(false);
  

    const toggleFloatScreen = () => {
      setIsVisible(!isVisible);
    };
    const [isVisible2, setIsVisible2] = React.useState(false);
    
  
    const toggleFloatScreen2 = () => {
      setIsVisible2(!isVisible2);
    };
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
            onPress={()=>navigate("PharmacistSearch")}
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
              <View style={{flexDirection:'row', height:120, borderRadius:5, borderColor:Colors.primary}}>
              <ScrollView horizontal={true}>
                <TouchableOpacity style={{margin:5,width:100,backgroundColor:'white', height:100,padding:Spacing/4,borderColor:'lightgreen', borderWidth:1,alignItems:'center',borderRadius:30, color:Colors.primary}}>
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
                <TouchableOpacity style={{margin:5,width:100, height:100,padding:Spacing/4,borderColor:'lightgreen', borderWidth:1,alignItems:'center',borderRadius:30, color:Colors.primary}}>
                   <Ionicons size={FontSize.xLarge} name="search-outline" />
                   <Text style={{fontSize:FontSize.large , color:Colors.primary}}>Abcd</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{margin:5,width:100, height:100,padding:Spacing/4,borderColor:'lightgreen', borderWidth:1,alignItems:'center',borderRadius:30, color:Colors.primary}}>
                   <Ionicons size={FontSize.xLarge} name="search-outline" />
                   <Text style={{fontSize:FontSize.large , color:Colors.primary}}>Abcd</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{margin:5,width:100, height:100,padding:Spacing/4,borderColor:'lightgreen', borderWidth:1,alignItems:'center', borderRadius:30,color:Colors.primary}}>
                   <Ionicons size={FontSize.xLarge} name="search-outline" />
                   <Text style={{fontSize:FontSize.large , color:Colors.primary}}>Abcd</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{margin:5,width:100, height:100,padding:Spacing/4,borderColor:'lightgreen', borderWidth:1,alignItems:'center', borderRadius:30,color:Colors.primary}}>
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
                </ScrollView>
              </View>
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
                Drugs
              </Text>
                <View style={{ borderRadius:5, borderColor:Colors.primary}}>
                
                <TouchableOpacity 
                onPress={toggleFloatScreen} 
                style={{
              height:40,
              margin:Spacing,
              marginTop:5,
              backgroundColor:Colors.primary,
              marginVertical:Spacing/4,
              borderRadius:Spacing/3
            }}>
                <Text style={{
                marginLeft:5,
                fontFamily:Font['poppins-semiBold'],
                fontSize:FontSize.large,
                color:Colors.onPrimary,
                // alignSelf:'left'
                }}>Paracetamol</Text>
                </TouchableOpacity>
                
                </View>
                
              
            </View>
            </ScrollView>
            {isVisible && (
          <ScrollView
            style={{
              height: Layout.height*87/100,
              position: "absolute",
              bottom: (Layout.height * 12) / 100,
              backgroundColor: "white",
              marginLeft:10,
              borderRadius: 10,
              width:Layout.width*95/100,
              elevation: 10,
            }}
            scrollEnabled={true}
          >
            <View style={{
              paddingHorizontal:Spacing,
              paddingTop:Spacing,
            }}>
              <Text style={{
                fontSize:FontSize.large, 
                color:Colors.primary,
                fontFamily:Font['poppins-bold'], 
                textAlign:'left'}}>
                Basic Information
              </Text>
              <View style={{borderRadius:5, borderColor:Colors.primary}}>
                  <Text style={{fontSize:FontSize.large, fontFamily:Font["poppins-regular"]}}>Name:</Text>
                  <Text style={{fontSize:FontSize.large,fontFamily:Font["poppins-regular"]}}>Batch no:</Text>
                  <Text style={{fontSize:FontSize.large,fontFamily:Font["poppins-regular"]}}>Dosage:</Text>
                  <Text style={{fontSize:FontSize.large,fontFamily:Font["poppins-regular"]}}>Strength:</Text>
                  <Text style={{fontSize:FontSize.large,fontFamily:Font["poppins-regular"]}}>Manufacturer:</Text>
                  <Text style={{fontSize:FontSize.large,fontFamily:Font["poppins-regular"]}}>Estimated Price:</Text>
                  <Text style={{fontSize:FontSize.large,fontFamily:Font["poppins-regular"]}}>Additional description:</Text>
                  
              </View>
              </View>
          <View style={{
              paddingHorizontal:Spacing,
              paddingTop:Spacing,
            }}>
              <Text style={{
                fontSize:FontSize.medium, 
                color:Colors.primary,
                fontFamily:Font['poppins-bold'], 
                textAlign:'left'}}>
                Nearby pharmacies in which the drug is found
              </Text>
              
              
              <View style={{ borderRadius:5, borderColor:Colors.primary}}>
                
                <TouchableOpacity 
                onPress={toggleFloatScreen2} 
                style={{
              height:40,
              margin:Spacing,
              marginTop:5,
              backgroundColor:Colors.primary,
              marginVertical:Spacing/4,
              borderRadius:Spacing/3
            }}>
                <Text style={{
                marginLeft:5,
                fontFamily:Font['poppins-semiBold'],
                fontSize:FontSize.large,
                color:Colors.onPrimary,
                // alignSelf:'left'
                }}>Ab pharmacy</Text>
                </TouchableOpacity>
                
                </View>
                
           </View>
           <TouchableOpacity
                  onPress={toggleFloatScreen}
                  style={{marginTop:Layout.height*30/100,
                    padding: Spacing,
                    paddingRight: 30,
                    alignItems: "center",
                    backgroundColor: "green",
                    borderRadius: Spacing / 2,
                    marginLeft:10,
                    marginRight:10
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
                    Ok
                  </Text>
                </TouchableOpacity>
          </ScrollView>
          
        )}
        {isVisible2 && (
          <ScrollView
          style={{
            height: Layout.height*87/100,
            position: "absolute",
            bottom: (Layout.height * 12) / 100,
            backgroundColor: "white",
            marginLeft:10,
            borderRadius: 10,
            width:Layout.width*95/100,
            elevation: 10,
          }}
          scrollEnabled={true}
        >
          <View style={{
              paddingHorizontal:Spacing,
              paddingTop:Spacing,
            }}>
              <Text style={{
                fontSize:FontSize.large, 
                color:Colors.primary,
                fontFamily:Font['poppins-bold'], 
                textAlign:'left'}}>
                Basic Information
              </Text>
              <View style={{borderRadius:5, borderColor:Colors.primary}}>
                  <Text style={{fontSize:FontSize.large, fontFamily:Font["poppins-regular"]}}>Name:</Text>
                  <Text style={{fontSize:FontSize.large,fontFamily:Font["poppins-regular"]}}>Phone Number:</Text>
                
              </View>
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
               Pharmacy Location
              </Text>
              <View style={{height:400,borderWidth:1, borderRadius:5, borderColor:Colors.primary, marginBottom:Spacing*2}}>
                  <MapView mapType="hybrid" showsCompass={true} showsUserLocation={true} style={{flex:1}}
                    initialRegion={{
                      latitude: 12.6048,
                      longitude: 37.4689,
                      latitudeDelta: 0.0922,
                      longitudeDelta: 0.0421,
                    }}> 
                  </MapView>
              </View>
              <TouchableOpacity
                  onPress={toggleFloatScreen2}
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
                    Ok
                  </Text>
                </TouchableOpacity>
           </View>
        </ScrollView>
        )}
            <View  style={{flexDirection:'row',alignItems:'flex-end', }}>
            <TouchableOpacity onPress={()=>navigate('PharmacistHome')} style={{alignItems:'center', backgroundColor:Colors.primary,marginLeft:Layout.width*0/100,width:Layout.width*20/100,padding:Spacing}}>
            <Ionicons name="home-outline" color={Colors.onPrimary} size={Spacing*3}/>
              <Text style={{color:Colors.onPrimary}}>Home</Text>
            </TouchableOpacity >
            <TouchableOpacity onPress={()=>navigate('PharmacistDrugList')}  style={{alignItems:'center',marginLeft:Layout.width*4/100,width:Layout.width*21/100, padding:Spacing,}}>
            <Image style={{tintColor:Colors.primary,width:Layout.width*9/100,height:Layout.width*9/100}} source={require("../assets/images/drugs.png")}></Image>
              <Text>Drugs</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigate('PharmacyOrders')}  style={{alignItems:'center',marginLeft:Layout.width*4/100,width:Layout.width*21/100, padding:Spacing,}}>
            <Icon name="shopping-bag" color={Colors.primary}  size={Spacing*3}/>
             <Text>Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigate('PharmacistPrescription')}  style={{alignItems:'center',marginLeft:Layout.width*4/100,width:Layout.width*24/100, padding:Spacing,}}>
            <Ionicons name="document-text-outline" color={Colors.primary} size={Spacing*3}/>
              <Text>Prescription</Text> 
            </TouchableOpacity>
            </View>
      </SafeAreaView>
  )
}

export default PharmacistHome