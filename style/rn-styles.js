import { StyleSheet } from 'react-native';
import { height, width } from '../constants/dims'

export default StyleSheet.create({
    imageBackground: {
        height: height/3.5,
        backgroundPosition: 'top',
        backgroundSize: '50%',
        zIndex: -2,
        position: 'relative',
        top: 0
    },
    backgroundOverlay: {
        zIndex: 1,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    formCard: div => {
        return {
            maxHeight: height/div,
            backgroundColor: '#fff',
            marginTop: 'auto',
            marginLeft: 7,
            marginRight: 7,
            borderRadius: 20,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            paddingTop: 30,
            paddingLeft: 25,
            paddingRight: 25
        }
    }
})