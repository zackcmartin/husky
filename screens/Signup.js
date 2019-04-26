import React from 'react';
import styles from '../styles';
import { connect } from 'react-redux';
import ModalSelector from 'react-native-modal-selector'

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Picker
} from 'react-native'
class Signup extends React.Component{


    render(){
        let index = 0;
        const datas = [
            { key: index++, label: 'Berklee College of Music' },
            { key: index++, label: 'Boston College' },
            { key: index++, label: 'Boston University' },
            { key: index++, label: 'Emerson College' },
            { key: index++, label: 'Emmanuel College' },
            { key: index++, label: 'Harvard University' },
            { key: index++, label: 'MassArt' },
            { key: index++, label: 'MCPHS' },
            { key: index++, label: 'MIT' },
            { key: index++, label: 'New England Conservatory' },
            { key: index++, label: 'Northeastern University' },
            { key: index++, label: 'Simmons College' },
            { key: index++, label: 'Suffolk University' },
            { key: index++, label: 'UMass Boston' },
            { key: index++, label: 'Wentworth Institute of Technology' }
        ];

        return(
        <View style={styles.container}>
            <View style={[styles.left, styles.marginLeft, styles.marginTop]}>
                <Text style={styles.bold2}>Name</Text>
                <View styles={styles.inputContainer}>
                    <TextInput 
                        style={styles.textInput2}
                        multiline={false}
                        numberOfLines={1}
                        placeholder='Mary Doe'
                        placeholderTextColor='#84C8EB'
                        borderBottomWidth={2}
                        borderBottomColor='#1b90cb'/>
                </View>
            </View>

            <View style={[styles.left, styles.marginLeft, styles.marginTop]}>
                <Text style={styles.bold2}>University</Text>
                <ModalSelector 
                        data={datas}
                        initValue="Select your University"
                        style={{width: 330, marginTop: 15}}
                />
            </View>

            <View style={[styles.center, styles.marginTop2]}>
                <Text style={ styles.button }>Create Account</Text>
            </View>
        </View>
        )
    }

}


/**
 *                         <TextInput 
                            style={styles.textInput2}
                            multiline={false}
                            numberOfLines={1}
                            placeholder='Northeastern University'
                            placeholderTextColor='#84C8EB'
                            borderBottomWidth={2}
                            borderBottomColor='#1b90cb'/>
 */
export default Signup; 