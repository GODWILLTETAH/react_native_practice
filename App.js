import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import {Entypo, FontAwesome5, AntDesign  } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Home = () => {

  var books = [];
  var img = [
  <Image style={ {width:50, height:50} } source={require('../expo-app/pc.png')}/>,
  <Image style={ {width:50, height:50} } source={require('../expo-app/pc2.png')}/>,
  <Image style={ {width:50, height:50} } source={require('../expo-app/pc3.png')}/>,
  <Image style={ {width:50, height:50} } source={require('../expo-app/pc4.png')}/>,
  <Image style={ {width:50, height:50} } source={require('../expo-app/pc5.png')}/>,
  <Image style={ {width:50, height:50} } source={require('../expo-app/pc6.png')}/>,
  <Image style={ {width:50, height:50} } source={require('../expo-app/pc7.png')}/>,
  <Image style={ {width:50, height:50} } source={require('../expo-app/pc8.png')}/>,
  <Image style={ {width:50, height:50} } source={require('../expo-app/pc.png')}/>,
];

var star = [
<AntDesign name="star" size={10} color="green" />
];
var rate = Math.floor(Math.random()*5);
function go (){
  for (let x = 0; x<rate;x++){
    <View style={ {flex: 1, flexDirection: 'row', alignItems:'center', justifyContent:'center'} }>
      <Text> {star} </Text>
      </View>
  }
}


for (let i = 0; i < 20; i++) {
  var rate = Math.floor(Math.random()*5);
  books.push(
    <View key={i}>
      <View style={styles.bookBox}>
    <Text>book {i}</Text>
    {img[i] }
    </View> 
    <View style={ {flex: 1, flexDirection: 'row', alignItems:'center', justifyContent:'center'} }>
      <Text> {star} {star} {star} </Text>
      </View>
    <View style={styles.line} />
    </View>
    
  );
}

  return (
    
    <View style={styles.container}>
      <View style={styles.heading}>
      <Entypo name="open-book" size={24} color="green" />
        <Text style={{
          color:'yellow', fontSize:24, fontWeight:'bold'  
          }}>My Library</Text>
  <FontAwesome5 name="book-medical" size={24} color="white" />      
</View>            
      <View style={styles.line} />
      <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={styles.bookContainer}>
        {books}
      </View> 
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  heading:{
    backgroundColor : 'skyblue',
    width: '100%',
  height: 'auto', //10%
  justifyContent: 'center',
  alignItems: 'center',
    borderRadius: 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }, container: {
    flex: 1,
    padding : 0,
    marginTop : 25,
    borderRadius: 5,
    backgroundColor: 'whitesmoke'
  }, line :{
    height: 2,
    width: 2,
    padding: 10
  }, bookContainer : {
  flexDirection : 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  padding: 10,
  }, bookBox : {
    width: 90,
    height: 90,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  }

});

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;