import Item from './Component/Item';
import { StyleSheet, Text, View,Button,TextInput, ScrollView,FlatList } from 'react-native';
import { useState } from 'react';
import Input from './Component/Input';
import { StatusBar } from 'expo-status-bar';
export default function App() {
  const [storeData, setStoredData] = useState('')
  const [courseGoal, setCourseGoal] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  
  function startAtGoalHandler() {
    setModalVisible(true)
  }
  function endAddGoalHandler() {
    setModalVisible(false)
  }
  function goalInputHandler(enteredText) { 
    setStoredData(enteredText)
  };
  
  function addGoalHandler() { 
    if (storeData.trim().length === 0) {
      return
    }
    setCourseGoal((e) => [...e, { text: storeData, id: Math.random() }])
    setStoredData('')
    endAddGoalHandler()
    
  };
  function deleteGoalHandler(id) {
    setCourseGoal(e => {
      return e.filter((e)=>e.id!==id)
    })
  }
  return (
    <>
      <StatusBar style="dark"/>
    <View style={styles.aooContainer}>
      <Button title="Add new Goal" color="purple" onPress={startAtGoalHandler} /> 
      <Input input={goalInputHandler} closeModal={endAddGoalHandler} visible={modalVisible} value={storeData} buttonHandler={ addGoalHandler} />
      <View style={styles.listGoal}  >

        <FlatList renderItem={(itemData) => {
          return (
            <Item id={itemData.item.id} onDelteItem={deleteGoalHandler} itemData={ itemData.item.text} />
          )
        }} data={courseGoal} alwaysBounceVertical={false}
          keyExtractor={(item, index) => {
          return item.id
        }}
        />

      </View>
      
      </View>
      </>
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
