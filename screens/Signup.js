import React from 'react';
import styles from '../styles';

import {
    View,
    Text
} from 'react-native'
class Signup extends React.Component{

    render(){
        return(
        <View style={[styles.container, styles.center]}>
            <View style={styles.imgRow}>
                <Text>Name:</Text>
            </View>

        </View>
        )
    }

}

export default Signup; 