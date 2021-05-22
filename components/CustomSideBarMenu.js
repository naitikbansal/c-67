import React,{Component} from 'react';
import {StyleSheet,View,Text,TouchableOpacity } from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import firebase from 'firebase';
import { render } from 'react-dom';

export default class CustomSideBarMenu extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <View style={styles.drawerItemsContainer}>
                    <DrawerItems {...this.props}></DrawerItems>
                </View>
                <View style={styles.logoutContainer}>
                    <TouchableOpacity style={styles.logoutButton}
                    onPress={()=>{
                        this.props.navigation.navigate('WelcomeScreen')
                        firebase.auth().signOut();
                    }}>
                        <Text>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
   drawerItemsContainer:{
       flex:0.8
   } 
})