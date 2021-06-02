import React from 'react'
import { Text, TextInput, View } from 'react-native'
import { styles } from './style'
const Input = ({ title, placeholder, error, onChange, value, editable }) => {

    return (
        <View style={{ marginTop: 10 }}>
            <Text style={styles.input__container}>{title}</Text>
            <TextInput editable={editable} value={value} onChange={() => onChange()} placeholder={placeholder} style={error ? styles.input__ErrorTextField : styles.input__TextField} />
        </View>
    )
}

export default Input

