import React,{Component} from 'react';
import {Text,View,TextInput,StyleSheet,TouchableOpacity, Alert,Modal,ScrollView,KeyboardAvoidingView} from 'react-native';
import db from '../config.js';
import firebase from 'firebase';
export default class WelcomeScreen extends Component{
    constructor(){
        super();
        this.state={
            emailId:'',
            password:'',
            isModalVisible:'false',
            firstName:'',
            lastName:'',
            Address:'',
            Contact:'',
            confirmPassword:''
        }
    }
    showModal=()=>{
    return(
        <Modal animationType="fade"
        transparent={true}
        visible={this.state.isModalVisible}>
            <View style={styles.modalContainer}>
                <ScrollView style={{width:'100%'}}>
                    <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
                        <Text style={styles.modalTitle}>Registration</Text>
                        <TextInput style={styles.formTextInput}
                        placeholder={"First Name"}
                        maxLength={8}
                        onChangeText={(text)=>{
                            this.setState({firstName:text})
                        }}>
                        </TextInput>
                        
                        <TextInput style={styles.formTextInput}
                        placeholder={"Last Name"}
                        maxLength={8}
                        onChangeText={(text)=>{
                            this.setState({lastName:text})
                        }}>
                        </TextInput>

                        <TextInput style={styles.formTextInput}
                        placeholder={"Address"}
                        multiline={true}
                        onChangeText={(text)=>{
                            this.setState({Address:text})
                        }}>
                        </TextInput>

                        <TextInput style={styles.formTextInput}
                        placeholder={"Contact"}
                        maxLength={10}
                        keyboardType={'numeric'}
                        onChangeText={(text)=>{
                            this.setState({Contact:text})
                        }}>
                        </TextInput>

                        <TextInput style={styles.formTextInput}
                        placeholder={"Email"}
                        keyboardType={'email-address'}
                        onChangeText={(text)=>{
                            this.setState({emailId:text})
                        }}>
                        </TextInput>

                        <TextInput style={styles.formTextInput}
                        placeholder={"Password"}
                        secureTextEntry={true}
                        onChangeText={(text)=>{
                            this.setState({password:text})
                        }}>
                        </TextInput>

                        <TextInput style={styles.formTextInput}
                        placeholder={"Confirm Password"}
                        secureTextEntry={true}
                        onChangeText={(text)=>{
                            this.setState({confirmPassword:text})
                        }}>
                        </TextInput>
                        <View style={styles.modalBackButton}>
                           <TouchableOpacity style={styles.registerButton}
                           onPress={()=>
                           this.userSignUp(this.state.emailId,this.state.password,this.state.confirmPassword)}>
                               <Text style={styles.registerButtonText}>Register</Text>
                           </TouchableOpacity>
                        </View>
                        <View style={styles.modalBackButton}>
                            <TouchableOpacity style={styles.cancelButton}
                            onPress={()=>
                                this.setState({
                                    "isModalVisible":false
                                })
                            }>
                           <Text style={{color:'black'}}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>

                </ScrollView>
            </View>
        </Modal>
    )

    }
    userSignUp=(emailId,password,confirmPassword)=>{
        if(password!==confirmPassword){
            
            return Alert.alert("Check your Password")
        }
        else{
        
        firebase.auth().createUserWithEmailAndPassword(emailId,password)
        .then(()=>{
            db.collection('users').add({
                firstName:this.state.firstName,
                lastName:this.state.lastName,
                Address:this.state.Address,
                Contact:this.state.Contact,
                emailId:this.state.emailId,
                })
           return Alert.alert(
               'User Added Successfully',
               '',
               [
                   {text:'ok',onPress:()=>this.setState({
                       "isModalVisible":false
                   })}
               ]

           )
        })
        .catch(function(error){
            var errorCode=error.code;
            var errorMessage=error.message;
            return Alert.alert(errorMessage)
        })
    }
    }
   userLogin=(emailId,password)=>{
       firebase.auth().signInWithEmailAndPassword(emailId,password)
       .then(()=>{
           this.props.navigation.navigate('DonateBooks')

       })
       .catch(function(error){
           var errorCode=error.code;
           var errorMessage=error.message;
           return Alert.alert(errorMessage)
       })
   }
   
    render(){
        return(
            <View style={styles.container}>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    {
                        this.showModal()
                    }
                </View>

                <View>
                <Text style={styles.title}>BookSanta</Text>

                </View>
                <View>
                <TextInput
                    style={styles.LoginBox}
                    placeholder="abc@example.com"
                    keyboardType='email-address'
                    onChangeText={(text)=>{
                        this.setState({
                            emailId:text
                        })
                    }}/>

                <TextInput
                    style={styles.LoginBox}
                    placeholder="enter password"
                   secureTextEntry={true}
                    onChangeText={(text)=>{
                        this.setState({
                            password:text
                        })
                    }}/>
                    <TouchableOpacity style={[styles.button,{marginBottom:20,marginTop:20}]}
                    onPress={()=>{
                        this.userLogin(this.state.emailId,this.state.password)
                    }}>
                       <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.button}
                    onPress={()=>{
                        this.setState({
                            isModalVisible:true
                        })
                    }}>
                       <Text style={styles.buttonText}>SignUp</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red'
    },
    LoginBox:{
        width:300,
        height:35,
        borderBottomWidth:1.5,
        borderColor:"blue",
        fontSize:20,
        margin:10,
        paddingLeft:10
    },
    buttonText:{
        color:'#ffff',
        fontWeight:'200',
        fontSize:20
      },
    title:{
        fontSize:65,
        fontWeight:'300',
        paddingBottom:30,
        color : 'white'
    },
    KeyboardAvoidingView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
      modalTitle :{
        justifyContent:'center',
        alignSelf:'center',
        fontSize:30,
        color:'#ff5722',
        margin:50
      },
      modalContainer:{
        flex:1,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#ffff",
        marginRight:30,
        marginLeft : 30,
        marginTop:80,
        marginBottom:80,
      },
      formTextInput:{
        width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'#ffab91',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10
      },
      registerButton:{
        width:200,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderRadius:10,
        marginTop:30
      },
      registerButtonText:{
        color:'#ff5722',
        fontSize:15,
        fontWeight:'bold'
      },
      cancelButton:{
        width:200,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        marginTop:5,
      }
      
})