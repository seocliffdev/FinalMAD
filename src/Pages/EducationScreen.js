
import React from "react";
import { View, Text, Button, Alert,Image ,StyleSheet} from "react-native";
import { createStackNavigator, createAppContainer ,createBottomTabNavigator, Drawer,createDrawerNavigator} from "react-navigation";
import { TextInput } from "react-native-gesture-handler";
import {LogoTitle} from "./index"
import { ActionConst, Actions } from "react-native-router-flux";

//@Flow

class EducationScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <LogoTitle />,
      title: 'Muhammad Tayyab Rana',

    
    };
  };
  
  render() {
    return (
      <View style={{ flex: 1, backgroundColor:'white', paddingLeft: 5, }}>
        <Text style={{paddingTop:15, paddingLeft:5,fontWeight:'bold', fontSize: 30}}>EDUCATION:</Text>
      
        <Text style={{paddingTop:15, paddingLeft:5, fontSize:13}}>
        <Text style={{fontWeight:'bold'}}>Matriculation:</Text>  {'\n'}
        - Science Group - 2005  {'\n'}
        {'\n'}
        </Text>
         
        <Text style={{paddingTop:15, paddingLeft:5, fontSize:13}}>
        <Text style={{fontWeight:'bold'}}>Intermediate:</Text>  {'\n'}
        - Pre-Engineering Group - 2007  {'\n'}
        {'\n'}
        </Text>


        <Text style={{paddingTop:15, paddingLeft:5, fontSize:13}}>
        <Text style={{fontWeight:'bold'}}>BSc. :</Text>  {'\n'}
        - Statistics - 2010  {'\n'}
        {'\n'}
        </Text>        


   {/*     Button title="Submit" onPress= {() => 
          // this.props.navigation.navigate('Home', {
          //     fullName: 'Ahmed Shabbir',
          //     userName: 'Ahmed1922',
          //     password: '123'
          //   })}
   //>
 */}
        
        
        

         
  
       
  
        <Button
        onPress={() =>   Actions.experience() }
        title="Objective" style={{backgroundColor:'red', margin:3}}
      />
      <Text></Text>

        
      
      <Button
        onPress={() =>   Actions.experience() }
        title="Experience" style={{backgroundColor:'red', margin:3}}
      />
       
      </View>
    );
  }
}


export {EducationScreen}

const styles ={
  'para':{
    'fontSize': 15,
    'paddingTop':15,
     'paddingLeft':5, 
     'paddingBottom':80
  }
}