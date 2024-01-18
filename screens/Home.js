import { View, Text, Image, Dimensions, ScrollView, } from 'react-native'
import { TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


export default function Home() {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ backgroundColor: '#fff', height: 42, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingLeft: 20, paddingRight: 20, }} >
        <View style={{ backgroundColor: '#EDEDF1', borderRadius: 50, width: 42, height: 42, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
          <TouchableOpacity>
            <Image source={require('../assets/icons/menu.png')} style={{ width: 28, height: 28 }} />
          </TouchableOpacity>
        </View>

        <View style={{ backgroundColor: '#EDEDF1', borderRadius: 50, width: 42, height: 42, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
          <TouchableOpacity onPress={()=>navigation.navigate('Notification')} >
            <Image source={require('../assets/icons/notifications_unread.png')} style={{ width: 28, height: 28 }} />
          </TouchableOpacity>
        </View>

      </View>

      <ScrollView>

        <View style={{ marginTop: 20, }} >
          <View style={{ paddingLeft: 20, paddingBottom: 20, }}>
            <Text style={{ fontSize: 12, fontWeight: 400, }} >Welcome back,</Text>
            <Text style={{ fontSize: 24, fontWeight: 500, }} >Amit Patel</Text>
          </View>

          <View style={{ paddingLeft: 15, paddingRight: 15 }} >
            <View style={{ backgroundColor: '#978CD0', padding: 30, borderRadius: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }} >


              <View>
                <Text style={{ color: 'white', fontSize: 12, fontWeight: 400, paddingLeft: 3 }} >Attendance</Text>

                <View style={{ flexDirection: 'row' }} >
                  <Text style={{ color: 'white', fontSize: 20, fontWeight: 500, }} >Jan 2024</Text>
                  <Image source={require('../assets/icons/expand_more.png')} />
                </View>

              </View>

              <View>
                <Image source={require('../assets/icons/Frame.png')} />
              </View>

            </View>
          </View>
        </View>

        <View style={{ padding: 20, }} >

          <View style={{ paddingBottom: 10, }}>
            <Text style={{ fontSize: 16, fontWeight: 500, paddingLeft: 8 }} >Quick Links</Text>
          </View>

          <View style={{ backgroundColor: '#DCD9EF', padding: 20, borderRadius: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }} >
            <TouchableOpacity  onPress={()=>navigation.navigate('Report')} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('../assets/icons/Group.png')} />
              <Text style={{ fontSize: 13, fontWeight: 400, lineHeight: 30 }} >Report</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('../assets/icons/syllabus.png')} />
              <Text style={{ fontSize: 13, fontWeight: 400, lineHeight: 30 }} >Syllabus</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
              <Image source={require('../assets/icons/unittest.png')} />
              <Text style={{ fontSize: 13, fontWeight: 400, lineHeight: 30 }} >Unit Test</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('../assets/icons/payment.png')} />
              <Text style={{ fontSize: 13, fontWeight: 400, lineHeight: 30 }} >Payment</Text>
            </TouchableOpacity>

          </View>


        </View>

        <View style={{ padding: 20, }} >
          <View>
            <Text style={{ fontSize: 16, fontWeight: 500, paddingLeft: 8 }} >Upcoming Events (07)</Text>
          </View>

          <View style={{ backgroundColor: '#DCD9EF', padding: 10, borderRadius: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginTop: 15 }}>

            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

              <Image source={require('../assets/icons/summarize.png')} style={{ width: 25, height: 25 }} />
              <Text style={{ fontSize: 14, fontWeight: 500, paddingLeft: 2 }} >Science Fair Showcase</Text>
            </View>

            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: 10 }} >
              <Text style={{ fontSize: 12, fontWeight: 500, }} >Jan</Text>
              <Text style={{ fontSize: 24, fontWeight: 500, }} >18</Text>

            </View>

          </View>


          <View style={{ backgroundColor: '#DCD9EF', padding: 10, borderRadius: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginTop: 15 }}>

            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

              <Image source={require('../assets/icons/emoji_events.png')} style={{ width: 25, height: 25 }} />
              <Text style={{ fontSize: 14, fontWeight: 500, paddingLeft: 2 }} >Math Olympiad</Text>
            </View>

            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: 10 }} >
              <Text style={{ fontSize: 12, fontWeight: 500, }} >Jan</Text>
              <Text style={{ fontSize: 24, fontWeight: 500, }} >24</Text>

            </View>

          </View>


          <View style={{ backgroundColor: '#DCD9EF', padding: 10, borderRadius: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginTop: 15 }}>

            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

              <Image source={require('../assets/icons/calculate.png')} style={{ width: 25, height: 25 }} />
              <Text style={{ fontSize: 14, fontWeight: 500, paddingLeft: 2 }} >Sports Day Extravaganza</Text>
            </View>

            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: 10 }} >
              <Text style={{ fontSize: 12, fontWeight: 500, }} >Jan</Text>
              <Text style={{ fontSize: 24, fontWeight: 500, }} >31</Text>

            </View>

          </View>
          <View style={{ backgroundColor: '#DCD9EF', padding: 10, borderRadius: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginTop: 15 }}>

            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

              <Image source={require('../assets/icons/summarize.png')} style={{ width: 25, height: 25 }} />
              <Text style={{ fontSize: 14, fontWeight: 500, paddingLeft: 2 }} >Science Fair Showcase</Text>
            </View>

            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: 10 }} >
              <Text style={{ fontSize: 12, fontWeight: 500, }} >Jan</Text>
              <Text style={{ fontSize: 24, fontWeight: 500, }} >18</Text>

            </View>

          </View>

        </View>
      </ScrollView>
    </View>
  )
}