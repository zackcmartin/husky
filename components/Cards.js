import React from 'react';
import styles from '../styles'
import { connect } from 'react-redux';
import {ImageBackground, View, Text, TouchableOpacity} from 'react-native';

class Cards extends React.Component {    
    state = {
        num: 0
    }

    nextPhoto(){
        var num = this.state.num
        var length = this.props.images.length -1
        if (num >= length){
            this.setState({num: 0 })
        }
        else {
            num += 1
            this.setState({ num: num })
        }
    }
    render() {
      //  console.log("were here" + JSON.stringify(this.props.user.aboutMe));
        return (
            <TouchableOpacity onPress={() => this.nextPhoto()}>
                <ImageBackground style={styles.card} source={{uri: this.props.images[this.state.num]}}>
                    <View style={styles.cardDescription}>
                        <View style={styles.cardInfo}>
                            <Text style={styles.bold}>{this.props.name}</Text>
                            <Text>{this.props.user.aboutMe}</Text>
                        </View>
                    </View>
                 </ImageBackground>
            </TouchableOpacity>
        )
    }
}

function mapStateToProps(state) {
    console.log("hello");
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(Cards);