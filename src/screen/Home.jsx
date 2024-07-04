import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Data =[
  {id: 1, namaIcon: 'camera-enhance', judulIcon:'edit foto'}, 
  {id: 2, namaIcon: 'video', judulIcon:'Edit Video'},
 
];

const Home = ({navigation}) => {
  return (
    <View style={{padding:20}}>
      <FlatList
      data={Data}
      horizontal={true}
      renderItem={({item}) => (
      <TouchableOpacity style={{width:50, marginRight:35}} onPress={() => {
        navigation.navigate("Edit")
      }}>
        <View style={{width:50, height:50, backgroundColor:'gray', borderRadius:10, alignItems:'center', justifyContent:'center'}}>
          <MaterialCommunityIcons name={item.namaIcon} color='white' size={30} />
        </View>
        <Text style={{color:'black', textAlign:'center'}}>{item.judulIcon}</Text>
      </TouchableOpacity>

  )} />
    </View>
  )
}


export default Home

const styles = StyleSheet.create({})