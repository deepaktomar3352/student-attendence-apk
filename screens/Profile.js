import { View, Text, Image } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import { useNavigation } from '@react-navigation/native'

export default function Profile() {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }} >
      <Header Name={'Profile'} />

      <View style={{ padding: 23 }} >

        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',paddingRight:10 }}>
          <Text style={{ fontSize: 24, fontWeight: 500,paddingLeft:10 }} >Amit Patel</Text>
          <Image source={require('../assets/icons/avatar.png')} style={{ width: 56, height: 56,paddingRight:20 }} />
        </View>

        <View style={{ backgroundColor: '#DCD9EF', marginTop: 30, borderRadius: 20, padding: 20 }} >

          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }} >
            <Text style={{ fontSize: 13, fontWeight: 400,lineHeight:40,color:'#666666' }} >Student ID Number:</Text>
            <Text style={{ fontSize: 13, fontWeight: 400,lineHeight:40,color:'#666666' }} >S987654</Text>
          </View>


          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }} >
            <Text style={{ fontSize: 13, fontWeight: 400,lineHeight:40,color:'#666666' }} >Class/Grade:</Text>
            <Text style={{ fontSize: 13, fontWeight: 400,lineHeight:40,color:'#666666'}} >11th Grade</Text>
          </View>

          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }} >
            <Text style={{ fontSize: 13, fontWeight: 400,lineHeight:40,color:'#666666' }} >Contact Number:</Text>
            <Text style={{ fontSize: 13, fontWeight: 400,lineHeight:40,color:'#666666'}} >9875555678</Text>
          </View>

          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }} >
            <Text style={{ fontSize: 13, fontWeight: 400,lineHeight:40,color:'#666666' }} >Email Address:</Text>
            <Text style={{ fontSize: 13, fontWeight: 400,lineHeight:40,color:'#666666'}} >amit.patel@example.com</Text>
          </View>

          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }} >
            <Text style={{ fontSize: 13, fontWeight: 400,lineHeight:40,color:'#666666' }} >Parent/Guardian:</Text>
            <Text style={{ fontSize: 13, fontWeight: 400,lineHeight:40,color:'#666666'}} >Nita Patel</Text>
          </View>

          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }} >
            <Text style={{ fontSize: 13, fontWeight: 400,lineHeight:40,color:'#666666' }} >Parent Contact:</Text>
            <Text style={{ fontSize: 13, fontWeight: 400,lineHeight:40,color:'#666666'}} >8865551234</Text>
          </View>

          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }} >
            <Text style={{ fontSize: 13, fontWeight: 400,lineHeight:40,color:'#666666' }} >Address:</Text>
            <Text style={{ fontSize: 13, fontWeight: 400,lineHeight:40,color:'#666666'}} >789 Tulsi Street, Jaipur</Text>
          </View>

        </View>

      </View>

    </View>
  )
}