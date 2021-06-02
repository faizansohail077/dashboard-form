import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './style'

const Card = () => {
    return (
        <View style={styles.card__container}>
            <View style={styles.card__containerTop}>
                <Text style={styles.card__conatinerTopHeading}> Total Students </Text>
                <Text style={styles.card__conatinerTopText}>10000</Text>
            </View>
            <View style={styles.card__containerBottom}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.card__containerBottomHeading}> Muqeem </Text>
                    <Text style={styles.card__containerBottomText}>5000</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.card__containerBottomHeading}>Gair Muqeem </Text>
                    <Text style={styles.card__containerBottomText}>5000</Text>
                </View>
            </View>
        </View>
    )
}

export default Card

