import React from 'react'
import { StyleSheet } from 'react-native'
import { View,TextInput,Button } from 'react-native'
const Input = ({ input, buttonHandler,value }) => {
    
  return (
    <View style={styles.inputContainer}>
        <TextInput onChangeText={input} value={value} style={styles.textInput} placeholder='Your Course Goal' />
        <Button onPress={buttonHandler} title='Add Goal'/>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    inputContainer: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
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
})