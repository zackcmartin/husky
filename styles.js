import React from 'react'
import { StyleSheet } from 'react-native'
var Dimensions = require('Dimensions');
var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    color: {
        color: '#1b90cb',
    },
    backColor: {
        backgroundColor: '#ececec'
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    img: {
        width: 90,
        height: 90,
        borderRadius: 45,
        margin: 10,
        backgroundColor: '#fff'
    },
    imgLogin: {
        width: 200,
        height: 200,
        margin: 20,
        resizeMode: 'contain'
    },
    imgRow: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        padding: 15
    },
    imgHeader: {
        paddingTop: 30
    },
    textInput: {
        width: deviceWidth,
        padding: 15,
        backgroundColor: '#fff',
        height: 100
    },
    bold: {
        padding: 10,
        fontSize: 18,
        fontWeight: 'bold'
    },
    button: {
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#1b90cb',
        textAlign: 'center',
        color: '#1b90cb',
        padding: 15,
        margin: 15,
        fontSize: 18,
        fontWeight: 'bold'
    },
    card: {
        width: deviceWidth*.9,
        height: deviceHeight*.7,
    },
    cardDescription: {
        padding: 15,
        justifyContent: 'flex-end',
        flex: 1
    },
    cardInfo: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10
    },
    logo: {
        width: 50,
        height: 25,
    }
})

module.exports = styles; 