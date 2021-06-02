import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    card__container: {
        backgroundColor: '#F1D09F',
        // backgroundColor: '#4bb543',
        opacity: 0.6,
        marginHorizontal: 30,
        marginVertical: 20,
        padding: 20,
        alignItems: 'center',
        borderRadius: 10
    },
    card__containerTop: {
        alignItems: 'center',
        marginBottom: 10
    },
    card__conatinerTopHeading: {
        fontSize: 19,
        color: 'black',
        fontWeight: 'bold'
    },
    card__conatinerTopText: {
        fontSize: 17,
        color: 'black',

    },
    card__containerBottom: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 5
    },
    card__containerBottomHeading: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',

    },
    card__containerBottomText: {
        fontSize: 15, color: 'black',
    }
})
