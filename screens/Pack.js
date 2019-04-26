import React from 'react';
import { connect } from 'react-redux';


import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput 
} from 'react-native';

class Pack extends React.Component {
    state = {}

    render() {
        return(
            <ScrollView>
                <Text>This is where the Pack will be</Text>
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}
export default connect(mapStateToProps)(Pack); 