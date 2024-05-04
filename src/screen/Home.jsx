import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Data =[
  {id: 1, namaIcon: 'alpha-g-circle', judulIcon:'gratis ongkir'},
  {id: 2, namaIcon: 'truck-delivery', judulIcon:'cod'},
  {id: 4, namaIcon: 'home', judulIcon:'home'},
  {ID: 5, namaIcon: 'package-variant-closed', judulIcon:'barang'},

];

const Home = () => {
  return (
    <View style={{padding:20}}>
      <FlatList
      data={Data}
      horizontal={true}
      renderItem={({item}) => (
      <TouchableOpacity style={{width:50, marginRight:35}}>
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