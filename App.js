
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';

export default function App() {
  return (
    <View >
      <View>
        <TextInput placeholder='Your Course Goal' />
        <Button title='Add Goal'/>
      </View>
      <View>
        <Text>List of goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
