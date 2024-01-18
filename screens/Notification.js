import { View, Text, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import { useNavigation } from '@react-navigation/native'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


export default function Notification() {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Header Name={'Notifications'} />
      <ScrollView>
        <View style={{ paddingLeft: 25, paddingRight: 20 }} >

          <View style={{ backgroundColor: '#DCD9EF', marginTop: 30, borderRadius: 16, paddingTop: 12, paddingRight: 20, paddingBottom: 12, paddingLeft: 20, display: 'flex', width: width - 50 }} >
            <View style={{ width: 6, height: 6, backgroundColor: '#5140B1', borderRadius: 50, left: width - 90, }} ></View>
            <Text style={{ fontSize: 14, fontWeight: 400, }} >Attention parents! The end-of-term exams are approaching. Ensure your child is prepared and review the exam schedule available on the app.</Text>
          </View>

          <View style={{ backgroundColor: '#DCD9EF', marginTop: 10, borderRadius: 16, paddingTop: 12, paddingRight: 20, paddingBottom: 12, paddingLeft: 20, display: 'flex', width: width - 50 }} >
            <View style={{ width: 6, height: 6, backgroundColor: '#5140B1', borderRadius: 50, left: width - 90, }} ></View>
            <Text style={{ fontSize: 14, fontWeight: 400, }} >As the seasons change, please ensure your child is dressed appropriately and carries necessary items like water bottles. Health is wealth!</Text>
          </View>

          <View style={{ backgroundColor: '#DCD9EF', marginTop: 10, borderRadius: 16, paddingTop: 12, paddingRight: 20, paddingBottom: 12, paddingLeft: 20, display: 'flex', width: width - 50 }} >
            <Text style={{ fontSize: 14, fontWeight: 400, color: '#666666' }} >A friendly reminder about upcoming fee payments. Access the app for convenient online payment options and ensure a hassle-free transaction.</Text>
          </View>

          <View style={{ backgroundColor: '#DCD9EF', marginTop: 10, borderRadius: 16, paddingTop: 12, paddingRight: 20, paddingBottom: 12, paddingLeft: 20, display: 'flex', width: width - 50 }} >
            <Text style={{ fontSize: 14, fontWeight: 400, color: '#666666' }} >We're planning a fun and educational class outing. Kindly check the app for the permission slip and details. We look forward to an enjoyable day!</Text>
          </View>

          <View style={{ backgroundColor: '#DCD9EF', marginTop: 10, borderRadius: 16, paddingTop: 12, paddingRight: 20, paddingBottom: 12, paddingLeft: 20, display: 'flex', width: width - 50 }} >
            <Text style={{ fontSize: 14, fontWeight: 400, color: '#666666' }} >Your child's safety is our priority. We will be conducting emergency drills this 02/01/2024. Familiarize yourself with the safety procedures through the app.</Text>
          </View>

          <View style={{ backgroundColor: '#DCD9EF', marginTop: 10, borderRadius: 16, paddingTop: 12, paddingRight: 20, paddingBottom: 12, paddingLeft: 20, display: 'flex', width: width - 50 }} >
            <Text style={{ fontSize: 14, fontWeight: 400, color: '#666666' }} >Dear parents, don't miss the chance to discuss your child's progress. The next Parent-Teacher Meeting is scheduled for [date] at [time]. Mark your calendars!</Text>
          </View>

          <View style={{ backgroundColor: '#DCD9EF', marginTop: 10, borderRadius: 16, paddingTop: 12, paddingRight: 20, paddingBottom: 12, paddingLeft: 20, display: 'flex', width: width - 50 }} >
            <Text style={{ fontSize: 14, fontWeight: 400, color: '#666666' }} >We're planning a fun and educational class outing. Kindly check the app for the permission slip and details. We look forward to an enjoyable day!</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}