import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,Alert,
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

const PharmacistSearch = ({navigation:{navigate}}) => {
    let dquantity=10
    let sold=50
    const [quantity,setQuantity] = React.useState(0)
    const [soldPrice,setSoldPrice] = React.useState(0)
    const [isVisible, setIsVisible] = React.useState(false);
    
    const increaseQuantity=()=>{
            setQuantity(quantity+1)
            setSoldPrice(sold*quantity+sold)  
    }
    const decreaseQuantity=()=>{
        if (quantity==0){
            setQuantity(0)
            
        }else
        { 
            setQuantity(quantity-1)
            setSoldPrice(sold*quantity-sold)
            
        }
    }
    
    const toggleFloatScreen = () => {
      setIsVisible(!isVisible);
    };
    const [isVisible2, setIsVisible2] = React.useState(false);
    
  
    const toggleFloatScreen2 = () => {
      setIsVisible2(!isVisible2);
    };
    const [isVisible3, setIsVisible3] = React.useState(false);
    const toggleFloatScreen3 = () => {
      setIsVisible3(!isVisible3);
    };
    const [isVisible4, setIsVisible4] = React.useState(false);
    const toggleFloatScreen4 = () => {
      setIsVisible4(!isVisible4);
      if (isVisible3){
        setIsVisible3(!isVisible3)
      }else{
        setIsVisible3(isVisible3)
      }
    };
    const [isVisible7, setIsVisible7] = React.useState(false);
  const toggleFloatScreen7= () => {
    setIsVisible7(!isVisible7);
    if (isVisible){
      setIsVisible(!isVisible)
    }
  };
    return (
      <SafeAreaView >
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity 
            onPress={()=>navigate('PharmacistHome')}
            style={{
              padding:Spacing,
              marginHorizontal:Spacing,
              borderRadius:Spacing/2,
              marginTop:Spacing*4,
              marginRight:5}}>
              <Ionicons name="chevron-back-outline" color={Colors.primary} size={Spacing*3}/>
              </TouchableOpacity>
              <TextInput style={{color:Colors.primary, marginLeft:Spacing*2,marginTop:Spacing*4, fontSize:FontSize.large}} placeholder="Search here . . . "></TextInput>
         </View>
           <ScrollView style={{height:600, backgroundColor:Colors.lightPrimary}} scrollEnabled={true}>
          <View style={{ paddingHorizontal:Spacing,
              paddingTop:Spacing,borderRadius:5, borderColor:Colors.primary}}>
          <Text style={{
                fontSize:FontSize.large, 
                color:Colors.primary,
                fontFamily:Font['poppins-bold'], 
                textAlign:'left'}}>
                Results
              </Text>
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
              <Text style={{fontSize:FontSize.large,fontFamily:Font["poppins-regular"]}}>Name:</Text>
              <Text style={{fontSize:FontSize.large,fontFamily:Font["poppins-regular"]}}>Brand name:</Text>
              <Text style={{fontSize:FontSize.large,fontFamily:Font["poppins-regular"]}}>Generic name:</Text>
                <Text style={{fontSize:FontSize.large,fontFamily:Font["poppins-regular"]}}>Batch no:</Text>
                <Text style={{fontSize:FontSize.large,fontFamily:Font["poppins-regular"]}}>Dosage:</Text>
                <Text style={{fontSize:FontSize.large,fontFamily:Font["poppins-regular"]}}>Strength:</Text>
                <Text style={{fontSize:FontSize.large,fontFamily:Font["poppins-regular"]}}>Manufacturer:</Text>
                <Text style={{fontSize:FontSize.large,fontFamily:Font["poppins-regular"]}}>Manufactured date:</Text>
                <Text style={{fontSize:FontSize.large,fontFamily:Font["poppins-regular"]}}>Expired date:</Text>
                <Text style={{fontSize:FontSize.large,fontFamily:Font["poppins-regular"]}}>Price:{sold}</Text>
                <Text style={{fontSize:FontSize.large,fontFamily:Font["poppins-regular"]}}>Available Quantity: {dquantity}</Text>
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
                textAlign:'center'}}>
                If you sold this drug please update the quantity here!
              </Text>
              
              
              <View style={{marginLeft:Layout.width*5/100, alignItems:'center', borderRadius:5,flexDirection:'row',}}>
              <Text style={{marginRight:Layout.width*5/100,fontSize:FontSize.large, fontFamily:Font["poppins-bold"]}}>Sold Quantity</Text>
                <TouchableOpacity 
                onPress={decreaseQuantity} 
                style={{
            padding:Spacing,
              height:40,
              marginTop:5,
              marginRight:Layout.width*5/100,
              backgroundColor:Colors.primary,
              borderRadius:Spacing/3
            }}>
                <Text style={{
                marginLeft:5,
                fontFamily:Font['poppins-semiBold'],
                fontSize:FontSize.large,
                color:Colors.onPrimary,
                // alignSelf:'left'
                }}>-</Text>
                </TouchableOpacity>
                <Text style={{marginRight:Layout.width*5/100,fontSize:FontSize.large, fontFamily:Font["poppins-bold"]}}>{quantity}</Text>
                <TouchableOpacity 
                onPress={increaseQuantity} 
                style={{
                    padding:Spacing,
              height:40,
              
              marginTop:5,
              backgroundColor:Colors.primary,
              
              borderRadius:Spacing/3
            }}>
                <Text style={{
                marginLeft:5,
                fontFamily:Font['poppins-semiBold'],
                fontSize:FontSize.large,
                color:Colors.onPrimary,
                // alignSelf:'left'
                }}>+</Text>
                </TouchableOpacity> 
                </View>
                <View style={{borderRadius:5, borderColor:Colors.primary,borderBottomWidth:1}}>
                <Text style={{marginTop:Spacing,marginRight:Layout.width*5/100,fontSize:FontSize.large, fontFamily:Font["poppins-bold"]}}>Sold price will be:{soldPrice}</Text>
              
                <TouchableOpacity
                onPress={() =>
                  Alert.alert("Update", "Are you sure?Yow want to Update?", [
                    { text: "No" },
                    { text: "Yes",onPress:toggleFloatScreen2},
                  ])
                }
                style={{
                  padding: Spacing,
                  backgroundColor: Colors.primary,
                  borderRadius: Spacing / 2,
                  marginRight:Layout.height*3/100,
                  marginBottom:Spacing
                  
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
                 Update
                </Text>
              </TouchableOpacity>
                </View>
                  
           </View>
           <View style={{marginTop:Layout.height*5/100,flexDirection:'row'}}>
           <TouchableOpacity
                onPress={toggleFloatScreen3}
                style={{
                  padding: Spacing,
                  paddingRight: 30,
                  alignItems: "center",
                  backgroundColor: "black",
                  borderRadius: Spacing / 2,
                  marginLeft:10,
                  marginRight:Layout.width*5/100
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
                  Update
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  Alert.alert("Delete", "Are you sure,Yow want to remove?", [
                    { text: "No" },
                    { text: "Yes",onPress:toggleFloatScreen7},
                  ])
                }
                style={{
                  padding: Spacing,
                  paddingRight: 30,
                  alignItems: "center",
                  backgroundColor: "red",
                  borderRadius: Spacing / 2,
                  marginLeft:10,
                  marginRight:Layout.width*10/100
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
                  Delete
                </Text>
              </TouchableOpacity>
                <TouchableOpacity
                  onPress={toggleFloatScreen}
                  style={{
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
        {isVisible2 && (
            <ScrollView
              style={{
                height: Layout.height*40/100,
                position: "absolute",
                bottom: (Layout.height * 40) / 100,
                right: 0,marginRight:50,
                backgroundColor: "white",
                padding: 10,
                borderRadius: 10,
                elevation: 10,
              }}
              scrollEnabled={true}
            >
              <View
                style={{
                  paddingHorizontal: Spacing,
                  paddingTop: Spacing,
                }}
              >
                <Text
                  style={{marginTop:20,
                    fontSize: FontSize.xLarge,
                    color:Colors.primary,
                    fontFamily: Font["poppins-bold"],
                    textAlign: "center",
                  }}
                >
                  Updated successfully!
                </Text>   
                <Ionicons name="checkmark-circle-outline" style={{alignSelf:'center'}} color={Colors.primary} size={Spacing*6}/>
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
          {isVisible3 && (
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
       Fill the information below to update
      </Text>
     
      <View style={{
          }}>
          
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
          <TextInput placeholder="Brand name" 
          placeholderTextColor={Colors.darkText} 
          style={{
            fontFamily:Font['poppins-regular'],
            fontSize:FontSize.small,
            padding:Spacing*2,
            backgroundColor:Colors.lightPrimary,
            borderRadius:Spacing,
            marginVertical:Spacing
          }}/>
          <TextInput placeholder="Generic name" 
          placeholderTextColor={Colors.darkText} 
          style={{
            fontFamily:Font['poppins-regular'],
            fontSize:FontSize.small,
            padding:Spacing*2,
            backgroundColor:Colors.lightPrimary,
            borderRadius:Spacing,
            marginVertical:Spacing
          }}/>
          <TextInput placeholder="Batch no" 
          placeholderTextColor={Colors.darkText} 
          style={{
            fontFamily:Font['poppins-regular'],
            fontSize:FontSize.small,
            padding:Spacing*2,
            backgroundColor:Colors.lightPrimary,
            borderRadius:Spacing,
            marginVertical:Spacing
          }}/>
          <TextInput placeholder="Dosage" 
          placeholderTextColor={Colors.darkText}
           
          style={{
            fontFamily:Font['poppins-regular'],
            fontSize:FontSize.small,
            padding:Spacing*2,
            backgroundColor:Colors.lightPrimary,
            borderRadius:Spacing,
            marginVertical:Spacing
          }}/>
          <TextInput placeholder="Strength" 
          placeholderTextColor={Colors.darkText} 
          style={{
            fontFamily:Font['poppins-regular'],
            fontSize:FontSize.small,
            padding:Spacing*2,
            backgroundColor:Colors.lightPrimary,
            borderRadius:Spacing,
            marginVertical:Spacing
          }}/>
          <TextInput placeholder="Manufacturer" 
          placeholderTextColor={Colors.darkText}
          multiline={true}
          style={{
            
            fontFamily:Font['poppins-regular'],
            fontSize:FontSize.small,
            padding:Spacing*2,
            backgroundColor:Colors.lightPrimary,
            borderRadius:Spacing,
            marginVertical:Spacing/2
          }}/>
          <TextInput placeholder="Price" 
          placeholderTextColor={Colors.darkText}
          multiline={true}
          style={{
            
            fontFamily:Font['poppins-regular'],
            fontSize:FontSize.small,
            padding:Spacing*2,
            backgroundColor:Colors.lightPrimary,
            borderRadius:Spacing,
            marginVertical:Spacing/2
          }}/>
          <TextInput placeholder="Quantity" 
          placeholderTextColor={Colors.darkText}
          multiline={true}
          style={{
            
            fontFamily:Font['poppins-regular'],
            fontSize:FontSize.small,
            padding:Spacing*2,
            backgroundColor:Colors.lightPrimary,
            borderRadius:Spacing,
            marginVertical:Spacing/2
          }}/>
          <TextInput placeholder="Additional description" 
          placeholderTextColor={Colors.darkText}
          multiline={true}
          style={{
            
            fontFamily:Font['poppins-regular'],
            fontSize:FontSize.small,
            padding:Spacing*2,
            backgroundColor:Colors.lightPrimary,
            borderRadius:Spacing,
            marginVertical:Spacing/2
          }}/>
        </View>
        <View style={{flexDirection:"row"}}>
        <TouchableOpacity 
        onPress={toggleFloatScreen3}
        style={{
           padding:Spacing,
           marginTop:Spacing,
           backgroundColor:'brown',
           marginVertical:Spacing*3,
           borderRadius:Spacing,
           marginRight:Layout.width*40/100

        }}>
            <Text style={{
            fontFamily:Font['poppins-semiBold'],
            fontSize:FontSize.large,
            color:Colors.onPrimary,
            alignSelf:'center'}}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity 
        onPress={() =>
          Alert.alert("Update", "Are you sure?Yow want to Update?", [
            { text: "No" },
            { text: "Yes",onPress:toggleFloatScreen4},
          ])
        }
        style={{
           padding:Spacing,
           marginTop:Spacing,
           backgroundColor:Colors.primary,
           marginVertical:Spacing*3,
           borderRadius:Spacing
        }}>
            <Text style={{
            fontFamily:Font['poppins-semiBold'],
            fontSize:FontSize.large,
            color:Colors.onPrimary,
            alignSelf:'center'}}>Update</Text>
            </TouchableOpacity>
        </View>
        
    </View>
            
            </ScrollView>
          )}
          {isVisible4 && (
            <ScrollView
              style={{
                height: Layout.height*40/100,
                position: "absolute",
                bottom: (Layout.height * 40) / 100,
                right: 0,marginRight:50,
                backgroundColor: "white",
                padding: 10,
                borderRadius: 10,
                elevation: 10,
              }}
              scrollEnabled={true}
            >
              <View
                style={{
                  paddingHorizontal: Spacing,
                  paddingTop: Spacing,
                }}
              >
                <Text
                  style={{marginTop:20,
                    fontSize: FontSize.xLarge,
                    color:Colors.primary,
                    fontFamily: Font["poppins-bold"],
                    textAlign: "center",
                  }}
                >
                  Updated successfully!
                </Text>   
                <Ionicons name="checkmark-circle-outline" style={{alignSelf:'center'}} color={Colors.primary} size={Spacing*6}/>
                  <TouchableOpacity
                    onPress={toggleFloatScreen4}
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
          {isVisible7 && (
          <ScrollView
            style={{
              height: Layout.height*40/100,
              position: "absolute",
              bottom: (Layout.height * 40) / 100,
              marginRight:Layout.width*5/100,
              backgroundColor: "white",
              padding: 10,
              borderRadius: 10,
              elevation: 10,
              marginLeft:Layout.width*5/100
            }}
            scrollEnabled={true}
          >
            <View
              style={{
                paddingHorizontal: Spacing,
                paddingTop: Spacing,
              }}
            >
              <Text
                style={{marginTop:20,
                  fontSize: FontSize.xLarge,
                  color:Colors.primary,
                  fontFamily: Font["poppins-bold"],
                  textAlign: "center",
                }}
              >
                A drug is deleted successfully!
              </Text>   
              <Ionicons name="checkmark-circle-outline" style={{alignSelf:'center'}} color={Colors.primary} size={Spacing*6}/>
                <TouchableOpacity
                  onPress={toggleFloatScreen7}
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
          
          <View style={{flexDirection:'row',alignItems:'flex-end',}}>
          <TouchableOpacity onPress={()=>navigate('PharmacistHome')} style={{alignItems:'center', marginLeft:Layout.width/16,padding:Spacing}}>
              <Ionicons name="home-outline" color={Colors.primary} size={Spacing*3}/>
                <Text>Home</Text>
              </TouchableOpacity >
              <TouchableOpacity onPress={()=>navigate('PharmacistDrugList')} style={{alignItems:'center',marginLeft:Layout.width/14, padding: Spacing}}>
              <Ionicons name="fitness-outline" color={Colors.primary} size={Spacing*3}/>
                <Text>Drugs</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigate('PharmacistExpired')}  style={{alignItems:'center',marginLeft:Layout.width/14, padding:Spacing,}}>
              <Ionicons name="leaf-outline" color={Colors.primary} size={Spacing*3}/>
                <Text>Expired</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigate('PharmacistPrescription')}  style={{alignItems:'center',marginLeft:Layout.width/14, padding:Spacing,}}>
              <Ionicons name="document-text-outline" color={Colors.primary} size={Spacing*3}/>
                <Text>Prescription</Text>
              </TouchableOpacity>
            </View>
      </SafeAreaView>
  )
}

export default PharmacistSearch