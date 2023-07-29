import {
  SafeAreaView,
  ScrollView,
  StyleSheet,Image,
  Text,Alert,Button,
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
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import Api from "../constants/Api";
import Icon from 'react-native-vector-icons/FontAwesome';
//import { DatePickerIOSBase } from "react-native";
//import DatePicker from "react-native-datepicker";
//import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
const PharmacistDrugList = ({navigation:{navigate}}) => {
  //////////////////////////////////////////////////////////
  // const [date, setDate] = useState(new Date(1598051730000));

  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate;
  //   setDate(currentDate);
  // };

  // const showMode = (currentMode) => {
  //   DateTimePickerAndroid.open({
  //     value: date,
  //     onChange,
  //     mode: currentMode,
  //     is24Hour: true,
  //   });
  // };

  // const showDatepicker = () => {
  //   showMode('date');
  // };

  // const showTimepicker = () => {
  //   showMode('time');
  // };
  // const [date, setDate] = useState(new Date(1598051730000));
  // const [mode, setMode] = useState('date');
  // const [show, setShow] = useState(false);

  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || date;
  //   setShow(Platform.OS === 'ios');
  //   setDate(currentDate);
  // };

  // const showMode = (currentMode) => {
  //   setShow(true);
  //   setMode(currentMode);
  // };

  // const showDatepicker = () => {
  //   showMode('date');
  // };

  // const showTimepicker = () => {
  //   showMode('time');
  // };
  
  ////////////////////////////////////////////////////
  const [counter,setCounter] = useState(0)
  const [dPrice, setdPrice]=useState(0)
  const [isVisible, setIsVisible] = React.useState(false);
  const increaseQuantity=()=>{
    setCounter(prevCounter => prevCounter + 1);
    
  }
  const decreaseQuantity=()=>{
    if (counter > 0) {
      setCounter(prevCounter => prevCounter - 1);
      
    }
  }
  const calculateTotalPrice = () => {
    return dPrice * counter;
  };
  let updatedQuantity=dQunatity
  const calculateAvailableQUantity = () => {
    updatedQuantity = dQunatity - counter;
    return updatedQuantity >= 0 ? updatedQuantity : 0;
    
  };

  //const [u,setU]=useState({dId:'',dname:'',dBrName:'kjhjk',dGenName:'',dBatchNo:'',dDosage:'',dManuName:'',dPrice:'',dStrength:'',dExpire:'',dManuDate:'',dQunatity:'',dAdditional:'',dPharmacy:''})
  const [dId, setdId]=useState('')
  const [Dname, setDname]=useState('')
  const [dBrName, setdBrName]=useState('')
  const [dGenName, setdGenName]=useState('')
  const [dBatchNo, setdBatchNo]=useState('')
  const [dDosage, setdDosage]=useState('')
  const [dManuName, setdManuName]=useState('')
  
  const [dStrength, setdStrength]=useState('')
  const [dExpire, setdExpire]=useState('')
  const [dManuDate, setdManuDate]=useState('')
  const [dQunatity, setdQunatity]=useState(0)
  const [dAdditional, setdAdditional]=useState('')
  const [dPharmacy, setdPharmacy]=useState('')
  const handleView =(drId,drname,drBrName,drGenName,drBatchNo,drDosage,drManuName,drPrice,drStrength,drExpire,drManuDate,drQunatity,drAdditional,drPharmacy)=>{
    setdId(drId)
    setDname(drname)
    setdBrName(drBrName)
    setdGenName(drGenName)
    setdBatchNo(drBatchNo)
    setdDosage(drDosage)
    setdManuName(drManuName)
    setdPrice(drPrice)
    setdStrength(drStrength)
    setdExpire(drExpire)
    setdDosage(drDosage)
    setdManuDate(drManuDate)
    setdQunatity(drQunatity)
    setdAdditional(drAdditional)
    setdPharmacy(drPharmacy)
    setIsVisible(!isVisible);
   }


  const toggleFloatScreen = () => {
    setIsVisible(!isVisible);
  };
  const [isVisible2, setIsVisible2] = React.useState(false);
  

  const toggleFloatScreen2 = () => {
    fitchDrugs()
    setIsVisible2(!isVisible2);
  };
  const [isVisible3, setIsVisible3] = React.useState(false);
  const toggleFloatScreen3 = () => {
    setIsVisible3(!isVisible3);
  };
  const [isVisible4, setIsVisible4] = React.useState(false);
  const toggleFloatScreen4 = () => {
    setIsVisible4(!isVisible4);
    fitchDrugs()
    if (isVisible3){
      setIsVisible3(!isVisible3)
    }else{
      setIsVisible3(isVisible3)
    }
  };
  const [isVisible5, setIsVisible5] = React.useState(false);
  const toggleFloatScreen5 = () => {
    setDname('')
    setdBrName('')
    setdGenName('')
    setdBatchNo('')
    setdDosage('')
    setdManuName('')
    setdPrice(0)
    setdStrength('')
    setdExpire('')
    setdDosage('')
    setdManuDate('')
    setdQunatity(0)
    setdAdditional('')
    setIsVisible5(!isVisible5);
  };
  const [isVisible6, setIsVisible6] = React.useState(false);
  const toggleFloatScreen6 = () => {
    fitchDrugs()
    setIsVisible6(!isVisible6);
    if (isVisible5){
      setIsVisible5(!isVisible5)
    }else{
      setIsVisible5(isVisible5)
    }
  };
  const [isVisible7, setIsVisible7] = React.useState(false);
  const toggleFloatScreen7= () => {
    
    setIsVisible7(!isVisible7);
    if (isVisible){
      setIsVisible(!isVisible)
      fitchDrugs()
    }
  };
  
  

  const pharmacyId=useSelector((state)=>state.pharmaID)
  const [drugs,setDrugs]= useState([])
  const fitchDrugs=()=>{
    axios.get(`http://${Api}/drugs/drugsParameter/?pharmacy=${pharmacyId}`)
    .then((r)=>setDrugs(r.data))
    .catch((err)=>console.log(err))
}
React.useEffect(()=>{fitchDrugs()},[])

//const [selectedDate, setSelectedDate] = useState('');
// const handleDateChange = (date) => {
//   setSelectedDate(date);
// };
// useEffect(() => {
//   console.log('Selected Date:', selectedDate);
// }, [selectedDate]);

const handleDelete = async()=>{
    
    axios.delete(`http://${Api}/drugs/drugsDetails/${dId}`)
    .then((res)=>toggleFloatScreen7())
    .catch((err)=>console.log(err))
  
}
const handleQuantityUpdate = async()=>{
  const data = {
    DrugName: Dname,
    BrandName: dBrName,
    GenericName: dGenName,
    BatchNo: dBatchNo,
    Dosage: dDosage,
    Manufacturer: dManuName,
    Price: dPrice,
    Strength: dStrength,
    ExpireDate: dExpire,
    ManufacturedDate: dManuDate,
    Quantity: updatedQuantity,
    additional: dAdditional,
    pharmacy: pharmacyId
};
  axios.put(`http://${Api}/drugs/drugsDetails/${dId}`,data)
  .then((res)=>toggleFloatScreen2())
  .catch((error) => {
    // Handle the error response
    console.log(error);
    alert("Something went wrong!");
  });
}
const handleSubmit = async() => {
       
const data = {
        DrugName: Dname,
        BrandName: dBrName,
        GenericName: dGenName,
        Category:'child',
        BatchNo: dBatchNo,
        Dosage: dDosage,
        Manufacturer: dManuName,
        Price: dPrice,
        Strength: dStrength,
        ExpireDate: dExpire,
        ManufacturedDate: dManuDate,
        Quantity: dQunatity,
        additional: dAdditional,
        pharmacy: pharmacyId
};

// Make a POST request to the Django API endpoint with axios
axios
 .post(`http://${Api}/drugs/drugsList/`, data)
 .then(
   // Handle the successful response
   toggleFloatScreen6
 )
 .catch((error) => {
   // Handle the error response
   console.log(error);
   alert("Something went wrong!");
 });
};

const handleUpdate = async() => {
       
  const data = {
          DrugName: Dname,
          BrandName: dBrName,
          GenericName: dGenName,
          BatchNo: dBatchNo,
          Dosage: dDosage,
          Manufacturer: dManuName,
          Price: dPrice,
          Strength: dStrength,
          ExpireDate: dExpire,
          ManufacturedDate: dManuDate,
          Quantity: dQunatity,
          additional: dAdditional,
          pharmacy: pharmacyId
  };
  
  // Make a POST request to the Django API endpoint with axios
  axios
   .put(`http://${Api}/drugs/drugsDetails/${dId}`, data)
   .then(
     // Handle the successful response
     toggleFloatScreen4
   )
   .catch((error) => {
     // Handle the error response
     console.log(error);
     alert("Something went wrong!");
   });
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
            <Text style={{color:Colors.primary,marginTop:Spacing*4,marginLeft:Layout.width*20/100, alignSelf:'center', fontSize:FontSize.large}}>Drug List</Text>
             <TouchableOpacity onPress={toggleFloatScreen5}  style={{
            padding:Spacing,
            marginHorizontal:Spacing,
            borderRadius:Spacing/2,
            marginTop:Spacing*4,
            marginLeft:90,
            }}>
            <Ionicons name="add-outline" color={Colors.primary} size={Spacing*3} /></TouchableOpacity>
         </View>
         <ScrollView style={{height:600, backgroundColor:Colors.lightPrimary}} scrollEnabled={true}>
        <View style={{ paddingHorizontal:Spacing,
            paddingTop:Spacing,borderRadius:5, borderColor:Colors.primary}}>
        <Text style={{
              fontSize:FontSize.large, 
              color:Colors.primary,
              fontFamily:Font['poppins-bold'], 
              textAlign:'left'}}>
              Medication
            </Text>
            {drugs.length>0? drugs.map((d)=>{return(
              <TouchableOpacity key={d.id}
              onPress={()=>handleView(d.id,d.DrugName,d.BrandName,d.GenericName,d.BatchNo,d.Dosage,d.Manufacturer,d.Price,d.Strength,d.ExpireDate, d.ManufacturedDate,d.Quantity,d.additional,d.pharmacy)} 
              style={{
                height:Layout.height*8/100,
                margin:Spacing,
                marginTop:5,
                backgroundColor:Colors.primary,
                marginVertical:Spacing/4,
                borderRadius:Spacing/3
          }}>
             <View style={{flexDirection:'row',alignItems:'center'}} key={d.id}>
              <View>
              <Image style={{tintColor:Colors.onPrimary,width:Layout.width*9/100,height:Layout.width*9/100,marginLeft:5}} source={require("../assets/images/medicine-drug.png")}></Image>
              </View>
              <View>
              <Text style={{ 
              marginLeft:5,
              fontFamily:Font['poppins-semiBold'],
              fontSize:Layout.width*5/100,
              color:Colors.onPrimary,
              // alignSelf:'left'
              }}>{d.DrugName}</Text>
              <Text style={{
              marginLeft:5,
              fontFamily:Font['poppins-semiBold'],
              fontSize:Layout.width*4/100,
              color:Colors.onPrimary,
              // alignSelf:'left'
              }}>Price: {d.Price}</Text>
              </View>
                
              </View>
              </TouchableOpacity>
            )}):<View style={{alignItems:"center"}}><Text style={{marginLeft:5,
              fontFamily:Font['poppins-semiBold'],
              fontSize:FontSize.large,
              color:'red',}}>No Drugs</Text></View>}
              
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
              <Text style={{fontSize:FontSize.large,fontFamily:Font["poppins-regular"]}}>Name: {Dname}</Text>
              <Text style={{fontSize:FontSize.large,fontFamily:Font["poppins-regular"]}}>Brand name: {dBrName}</Text>
              <Text style={{fontSize:FontSize.large,fontFamily:Font["poppins-regular"]}}>Generic name: {dGenName}</Text>
              <Text style={{fontSize:FontSize.large,fontFamily:Font["poppins-regular"]}}>Batch no: {dBatchNo}</Text>
              <Text style={{fontSize:FontSize.large,fontFamily:Font["poppins-regular"]}}>Dosage: {dDosage}</Text>
              <Text style={{fontSize:FontSize.large,fontFamily:Font["poppins-regular"]}}>Strength: {dStrength}</Text>
              <Text style={{fontSize:FontSize.large,fontFamily:Font["poppins-regular"]}}>Manufacturer: {dManuName}</Text>
              <Text style={{fontSize:FontSize.large,fontFamily:Font["poppins-regular"]}}>Manufactured date: {dManuDate}</Text>
              <Text style={{fontSize:FontSize.large,fontFamily:Font["poppins-regular"]}}>Expire date: {dExpire}</Text>
              <Text style={{fontSize:FontSize.large,fontFamily:Font["poppins-regular"]}}>Price:{dPrice}</Text>
              <Text style={{fontSize:FontSize.large,fontFamily:Font["poppins-regular"]}}>Available Quantity: {dQunatity}</Text>
              <Text style={{fontSize:FontSize.large,fontFamily:Font["poppins-regular"]}}>Additional description: {dAdditional}</Text>
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
              <Text style={{marginRight:Layout.width*5/100,fontSize:FontSize.large, fontFamily:Font["poppins-bold"]}}>{counter}</Text>
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
              <Text style={{marginRight:Layout.width*5/100,fontSize:FontSize.large, fontFamily:Font["poppins-bold"]}}>Ava. Quant. after selling: {calculateAvailableQUantity()}</Text>
           
              <Text style={{marginTop:Spacing,marginRight:Layout.width*5/100,fontSize:FontSize.large, fontFamily:Font["poppins-bold"]}}>Sold price will be:{calculateTotalPrice()}</Text>
             
              <TouchableOpacity
              onPress={() =>
                Alert.alert("Update", "Are you sure?Yow want to Update?", [
                  { text: "No" },
                  { text: "Yes",onPress:handleQuantityUpdate},
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
               Update quantity
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
                    { text: "Yes",onPress:handleDelete},
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
        
        <TextInput value={Dname} onChangeText={setDname} placeholder="Medication name" 
        placeholderTextColor={Colors.darkText} 
        style={{
          fontFamily:Font['poppins-regular'],
          fontSize:FontSize.small,
          padding:Spacing*2,
          backgroundColor:Colors.lightPrimary,
          borderRadius:Spacing,
          marginVertical:Spacing
        }}/>
        <TextInput  value={dBrName} onChangeText={setdBrName} placeholder="Brand name" 
        placeholderTextColor={Colors.darkText} 
        style={{
          fontFamily:Font['poppins-regular'],
          fontSize:FontSize.small,
          padding:Spacing*2,
          backgroundColor:Colors.lightPrimary,
          borderRadius:Spacing,
          marginVertical:Spacing
        }}/>
        <TextInput  value={dGenName} onChangeText={setdGenName} placeholder="Generic name" 
        placeholderTextColor={Colors.darkText} 
        style={{
          fontFamily:Font['poppins-regular'],
          fontSize:FontSize.small,
          padding:Spacing*2,
          backgroundColor:Colors.lightPrimary,
          borderRadius:Spacing,
          marginVertical:Spacing
        }}/>
        <TextInput  value={dBatchNo} onChangeText={setdBatchNo} placeholder="Batch no" 
        placeholderTextColor={Colors.darkText} 
        style={{
          fontFamily:Font['poppins-regular'],
          fontSize:FontSize.small,
          padding:Spacing*2,
          backgroundColor:Colors.lightPrimary,
          borderRadius:Spacing,
          marginVertical:Spacing
        }}/>
        <TextInput  value={dDosage} onChangeText={setdDosage} placeholder="Dosage" 
        placeholderTextColor={Colors.darkText}
         
        style={{
          fontFamily:Font['poppins-regular'],
          fontSize:FontSize.small,
          padding:Spacing*2,
          backgroundColor:Colors.lightPrimary,
          borderRadius:Spacing,
          marginVertical:Spacing
        }}/>
        <TextInput  value={dStrength} onChangeText={setdStrength} placeholder="Strength" 
        placeholderTextColor={Colors.darkText} 
        style={{
          fontFamily:Font['poppins-regular'],
          fontSize:FontSize.small,
          padding:Spacing*2,
          backgroundColor:Colors.lightPrimary,
          borderRadius:Spacing,
          marginVertical:Spacing
        }}/>
        <TextInput  value={dManuName} onChangeText={setdManuName} placeholder="Manufacturer" 
        placeholderTextColor={Colors.darkText}
        multiline={true}
        style={{
          
          fontFamily:Font['poppins-regular'],
          fontSize:FontSize.small,
          padding:Spacing*2,
          backgroundColor:Colors.lightPrimary,
          borderRadius:Spacing,
          marginVertical:Spacing/2
        }}/><Text>Current price</Text>
        <TextInput  value={dPrice.toString()} onChangeText={setdPrice} placeholder="Price" 
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
        <Text>Available quantity</Text>
        <TextInput  value={dQunatity.toString()} onChangeText={setdQunatity} placeholder="Quantity" 
        placeholderTextColor={Colors.darkText}
        multiline={true}
        style={{
          
          fontFamily:Font['poppins-regular'],
          fontSize:FontSize.small,
          padding:Spacing*2,
          backgroundColor:Colors.lightPrimary,
          borderRadius:Spacing,
          marginVertical:Spacing/2
        }}/><Text>Manufactured Date</Text>
        <TextInput  value={dManuDate} onChangeText={setdManuDate} placeholder="YYYY-MM-DD" 
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
        <Text>Expire date</Text>
        <TextInput  value={dExpire} onChangeText={setdExpire} placeholder="YYYY-MM-DD" 
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
        <TextInput  value={dAdditional} onChangeText={setdAdditional} placeholder="Additional description" 
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
          { text: "Yes",onPress:handleUpdate},
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
        {isVisible5 && (
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
     Fill the information below to Add
    </Text>
   
    <View style={{
        }}>
        
        <TextInput value={Dname} onChangeText={setDname} placeholder="Medication name" 
        placeholderTextColor={Colors.darkText} 
        style={{
          fontFamily:Font['poppins-regular'],
          fontSize:FontSize.small,
          padding:Spacing*2,
          backgroundColor:Colors.lightPrimary,
          borderRadius:Spacing,
          marginVertical:Spacing
        }}/>
        <TextInput  value={dBrName} onChangeText={setdBrName} placeholder="Brand name" 
        placeholderTextColor={Colors.darkText} 
        style={{
          fontFamily:Font['poppins-regular'],
          fontSize:FontSize.small,
          padding:Spacing*2,
          backgroundColor:Colors.lightPrimary,
          borderRadius:Spacing,
          marginVertical:Spacing
        }}/>
        <TextInput  value={dGenName} onChangeText={setdGenName} placeholder="Generic name" 
        placeholderTextColor={Colors.darkText} 
        style={{
          fontFamily:Font['poppins-regular'],
          fontSize:FontSize.small,
          padding:Spacing*2,
          backgroundColor:Colors.lightPrimary,
          borderRadius:Spacing,
          marginVertical:Spacing
        }}/>
        <TextInput  value={dBatchNo} onChangeText={setdBatchNo} placeholder="Batch no" 
        placeholderTextColor={Colors.darkText} 
        style={{
          fontFamily:Font['poppins-regular'],
          fontSize:FontSize.small,
          padding:Spacing*2,
          backgroundColor:Colors.lightPrimary,
          borderRadius:Spacing,
          marginVertical:Spacing
        }}/>
        <TextInput  value={dDosage} onChangeText={setdDosage} placeholder="Dosage" 
        placeholderTextColor={Colors.darkText}
         
        style={{
          fontFamily:Font['poppins-regular'],
          fontSize:FontSize.small,
          padding:Spacing*2,
          backgroundColor:Colors.lightPrimary,
          borderRadius:Spacing,
          marginVertical:Spacing
        }}/>
        <TextInput  value={dStrength} onChangeText={setdStrength} placeholder="Strength" 
        placeholderTextColor={Colors.darkText} 
        style={{
          fontFamily:Font['poppins-regular'],
          fontSize:FontSize.small,
          padding:Spacing*2,
          backgroundColor:Colors.lightPrimary,
          borderRadius:Spacing,
          marginVertical:Spacing
        }}/>
        <TextInput  value={dManuName} onChangeText={setdManuName} placeholder="Manufacturer" 
        placeholderTextColor={Colors.darkText}
        multiline={true}
        style={{
          
          fontFamily:Font['poppins-regular'],
          fontSize:FontSize.small,
          padding:Spacing*2,
          backgroundColor:Colors.lightPrimary,
          borderRadius:Spacing,
          marginVertical:Spacing/2
        }}/><Text>Current price</Text>
        <TextInput  value={dPrice.toString()} onChangeText={setdPrice} placeholder="Price" 
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
        <Text>Available quantity</Text>
        <TextInput  value={dQunatity.toString()} onChangeText={setdQunatity} placeholder="Quantity" 
        placeholderTextColor={Colors.darkText}
        multiline={true}
        style={{
          
          fontFamily:Font['poppins-regular'],
          fontSize:FontSize.small,
          padding:Spacing*2,
          backgroundColor:Colors.lightPrimary,
          borderRadius:Spacing,
          marginVertical:Spacing/2
        }}/><Text>Manufactured Date</Text>
        <TextInput  value={dManuDate} onChangeText={setdManuDate} placeholder="YYYY-MM-DD" 
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
        <Text>Expire date</Text>
        <TextInput  value={dExpire} onChangeText={setdExpire} placeholder="YYYY-MM-DD" 
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
        <TextInput  value={dAdditional} onChangeText={setdAdditional} placeholder="Additional description" 
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
        <View>
      {/* <Button onPress={showDatepicker} title="Show date picker!" />
      <Button onPress={showTimepicker} title="Show time picker!" />
      <Text>selected: {date.toLocaleString()}</Text> */}


      
    </View>
      </View>
      <View style={{flexDirection:"row"}}>
      <TouchableOpacity 
      onPress={toggleFloatScreen5}
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
        Alert.alert("Add", "Are you sure?Yow want to Add", [
          { text: "No" },
          { text: "Yes",onPress:handleSubmit},
        ])
      }
      style={{
         padding:Spacing,
         marginTop:Spacing,
         paddingRight:20,
         backgroundColor:Colors.primary,
         marginVertical:Spacing*3,
         borderRadius:Spacing
      }}>
          <Text style={{
          fontFamily:Font['poppins-semiBold'],
          fontSize:FontSize.large,
          color:Colors.onPrimary,
          alignSelf:'center'}}>Add</Text>
          </TouchableOpacity>
      </View>
      
  </View>
          
          </ScrollView>
        )}
        {isVisible6 && (
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
                A new drug is added successfully!
              </Text>   
              <Ionicons name="checkmark-circle-outline" style={{alignSelf:'center'}} color={Colors.primary} size={Spacing*6}/>
                <TouchableOpacity
                  onPress={toggleFloatScreen6}
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
        <TouchableOpacity onPress={()=>navigate('PharmacistHome')} style={{alignItems:'center', backgroundColor:Colors.onPrimary,marginLeft:Layout.width*0/100,width:Layout.width*20/100,padding:Spacing}}>
            <Ionicons name="home-outline" color={Colors.primary} size={Spacing*3}/>
              <Text style={{color:Colors.primary}}>Home</Text>
            </TouchableOpacity >
            <TouchableOpacity onPress={()=>navigate('PharmacistDrugList')}  style={{alignItems:'center',backgroundColor:Colors.primary,marginLeft:Layout.width*4/100,width:Layout.width*21/100, padding:Spacing,}}>
            <Image style={{tintColor:Colors.onPrimary,width:Layout.width*9/100,height:Layout.width*9/100}} source={require("../assets/images/drugs.png")}></Image>
              <Text style={{color:Colors.onPrimary}}>Drugs</Text>
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
    </SafeAreaView>)
}

export default PharmacistDrugList