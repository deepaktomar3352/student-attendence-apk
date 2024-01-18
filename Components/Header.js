import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Header(props) {
    const navigation = useNavigation()
    return (
        <View>
            <View style={{ backgroundColor: '#fff', height: 42, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingLeft: 20, paddingRight: 20, }} >

                <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row',justifyContent:'center' }}>
                    <TouchableOpacity>
                        <Image source={require('../assets/icons/arrow_back.png')} style={{ width: 28, height: 28 }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, fontWeight: 400, }}>{props.Name}</Text>
                </View>

                <View style={{ backgroundColor: '#EDEDF1', borderRadius: 50, width: 42, height: 42, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                    <TouchableOpacity  onPress={()=>navigation.navigate('Notification')}>
                        <Image source={require('../assets/icons/notifications_unread.png')} style={{ width: 28, height: 28 }} />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}