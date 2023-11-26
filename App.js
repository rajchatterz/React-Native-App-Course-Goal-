import Item from './Component/Item';
import { StyleSheet, Text, View,Button,TextInput, ScrollView,FlatList } from 'react-native';
import { useState } from 'react';
import Input from './Component/Input';
export default function App() {
  const [storeData, setStoredData] = useState('')
  const [ courseGoal,setCourseGoal] = useState([])
  function goalInputHandler(enteredText) { 
    setStoredData(enteredText)
  };
  
  function addGoalHandler() { 
    setCourseGoal((e) => [...e, { text: storeData, id: Math.random() }])
    setStoredData('')
  };
  function deleteGoalHandler() {
    console.log('delete')
  }
  return (
    <View style={styles.aooContainer}>
      <Input input={goalInputHandler} value={storeData} buttonHandler={ addGoalHandler} />
      <View style={styles.listGoal}  >

        <FlatList renderItem={(itemData) => {
          return (
            <Item onDelteItem={deleteGoalHandler} itemData={ itemData.item.text} />
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
