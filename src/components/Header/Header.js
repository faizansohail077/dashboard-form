import React from 'react'
import { View, Text } from 'react-native'
import { SvgXml } from 'react-native-svg';
import add from '../../assests/add'
import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const navigation = useNavigation();

    return (
        <View style={{ padding: 30, backgroundColor: 'whitesmoke', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            <Text></Text>
            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Dashboard</Text>
            <SvgXml onPress={() => navigation.navigate("add")} xml={add} fill='black' width="10%" height="100%" />
        </View>
    )
}

export default Header


