import React from 'react';
import styles from '../styles';
import RootNavigator from '../navigation/RootNavigator'
import { connect } from 'react-redux';
import { login } from '../redux/actions';
import * as firebase from 'firebase';
import firebaseConfig from '../config/firebase.js'; 

firebase.initializeApp(firebaseConfig);

import {
    Text,
    View,
    Alert,
    TouchableOpacity, 
    Image
} from 'react-native'; 


class Login extends React.Component {
    state = {} 

    componentWillMount() {
        /*
         firebase.auth().onAuthStateChanged((user) => {
             if (user != null) {
                 this.props.dispatch(login(user))
             }
         })
         */
    }

    login = async () =>  {
        try {
          const {
            type,
            token, 
            expires,
            permissions,
            declinedPermissions,
          } = await Expo.Facebook.logInWithReadPermissionsAsync('399286583965861', {
            permissions: ['public_profile'],
          });
          if (type === 'success') {
              //Build Firebase credential with the Facebook access token.
               const credential = await firebase.auth.FacebookAuthProvider.credential(token);

               //Sign in with credential from the Facebook user.
               firebase.auth().signInAndRetrieveDataWithCredential(credential).catch((error) => {
                   //Handle Errors here.
                   Alert.alert("Try Again");
               })

               firebase.auth().onAuthStateChanged((user) => {
                if (user != null) {
                    this.props.dispatch(login(user))
                }
            })

          } else {
            // type === 'cancel'
          }
        } catch ({ message }) {
          alert(`Facebook Login Error: ${message}`);
        }
      }


    render() {
        if(this.props.loggedIn){
            return (
                <Text>Hello</Text>
            )
        }
        else{
            return(
                <View style={[styles.container, styles.center]}>
                    <Image style={styles.imgLogin} source={require('../assets/huskyLogo.png')}/>
                    <TouchableOpacity onPress={this.login.bind(this)}>
                        <Text style={styles.button}>Facebook Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Signup")}>
                        <Text style={styles.button}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }   
}

function mapStateToProps(state) {
    return {
        loggedIn: state.loggedIn
    };
}
export default connect(mapStateToProps)(Login); 