import React,{Component} from 'react';
import{Header,Icon} from 'react-native-elements'; 
import {View,Text,Stylesheet} from 'react-native';

const MyHeader=props=>{
    return(
        <Header
        centerComponent={{text:props.title,style:{color:'blue',fontSize:20,fontWeight:"bold"}}}></Header>
    )
}
export default MyHeader;