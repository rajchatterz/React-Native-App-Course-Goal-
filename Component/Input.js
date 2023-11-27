import React from 'react'
import { StyleSheet } from 'react-native'

import { View,TextInput,Button,Modal,Image } from 'react-native'
const Input = ({ input,closeModal, buttonHandler,value ,visible}) => {
    
  return (
      <Modal visible={visible} animationType='fade'>
          <View style={styles.inputContainer}>
              <Image style={styles.image} source={require('../assets/Images/goal.png')}/>
              <TextInput onChangeText={input} value={value} style={styles.textInput} placeholder='Your Course Goal' />
              <Button title='cancel' onPress={closeModal}/>
              <View>
              <Button onPress={buttonHandler} title='Add Goal' />
              </View>
        </View>
    </Modal>
  )
}

export default Input

const styles = StyleSheet.create({
    inputContainer: {
        flex:1,


        gap: 15,
        alignItems: 'center',
        paddingBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor:'purple'
        
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        padding:8
    },
    image: {
        width: 100,
        height: 100,
        margin:20
      }
})