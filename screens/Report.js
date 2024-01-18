import { View, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import { useNavigation } from '@react-navigation/native'

export default function Report() {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Header Name={'Report'} />

      <View style={{padding:20}}>


        <View style={{ backgroundColor: '#DCD9EF', padding: 10, borderRadius: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginTop: 15 }}>

          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',padding:10 }}>

            <Image source={require('../assets/icons/Group.png')} />
            <Text style={{ fontSize: 14, fontWeight: 500, paddingLeft: 10 }} >Mid-terms9324.pdf</Text>
          </View>

          <TouchableOpacity style={{ paddingRight: 10 }} >
            <Image source={require('../assets/icons/cloud_download.png')} style={{ width: 24, height: 24 }} />
            

          </TouchableOpacity>

        </View>


        <View style={{ backgroundColor: '#DCD9EF', padding: 10, borderRadius: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginTop: 15 }}>

          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',padding:10 }}>

            <Image source={require('../assets/icons/Group.png')} />
            <Text style={{ fontSize: 14, fontWeight: 500, paddingLeft: 10 }} >Unit-test1_9324.pdf</Text>
          </View>

          <TouchableOpacity style={{ paddingRight: 10 }} >
            <Image source={require('../assets/icons/cloud_download.png')} style={{ width: 24, height: 24 }} />
            

          </TouchableOpacity>

        </View>

        
        <View style={{ backgroundColor: '#DCD9EF', padding: 10, borderRadius: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginTop: 15 }}>

          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',padding:10 }}>

            <Image source={require('../assets/icons/Group.png')} />
            <Text style={{ fontSize: 14, fontWeight: 500, paddingLeft: 10 }} >Unit-test2_9324.pdf</Text>
          </View>

          <TouchableOpacity style={{ paddingRight: 10 }} >

            <Image source={require('../assets/icons/cloud_download.png')} style={{ width: 24, height: 24 }} />
            

          </TouchableOpacity>

        </View>

      </View>
    </View>
  )
}