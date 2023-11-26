import Item from './Component/Item';
import { StyleSheet, Text, View,Button,TextInput, ScrollView,FlatList } from 'react-native';
import { useState } from 'react';
export default function App() {
  const [storeData, setStoredData] = useState('')
  const [ courseGoal,setCourseGoal] = useState([])
  function goalInputHandler(enteredText) { 
    setStoredData(enteredText)
  };
  
  function addGoalHandler() { 
    setCourseGoal((e)=>[...e,{text:storeData,id:Math.random()}])
  };
  return (
    <View style={styles.aooContainer}>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={goalInputHandler} style={styles.textInput} placeholder='Your Course Goal' />
        <Button onPress={addGoalHandler} title='Add Goal'/>
      </View>
      <View style={styles.listGoal}  >

        <FlatList renderItem={(itemData) => {
          return (
            <Item itemData={ itemData.item.text} />
          )
        }} data={courseGoal} alwaysBounceVertical={false}
          keyExtractor={(item, index) => {
          return item.id
        }}
        />

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  aooContainer: {
    padding: 50,
    paddingHorizontal: 16,
    flex:1
  },
  
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
  listGoal: {
    flex:10
  },
  goalItem: {
    margin: 8,
    borderRadius: 10,
    backgroundColor: '#5e0acc',
    padding: 9,
    color:'white'
  },
  text: {
    color:'white'
  }
});
