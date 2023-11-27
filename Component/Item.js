import { StyleSheet } from "react-native"
import {View,Text,Pressable} from 'react-native'
const Item = ({ itemData, onDelteItem ,id}) => {
    
    return (
            <View style={styles.goalItem}>
                <Pressable style={(e)=>e && styles.pressItem}  onPress={onDelteItem.bind(this,id)}>
                    <Text  style={styles.text}>{ itemData}</Text>
                </Pressable>
            </View>
    )
}
export default Item

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 10,
        backgroundColor: '#5e0acc',
        
        color:'white'
    },
    pressItem: {
        opacity:0.5
    },
    text: {
        padding: 9,
        color:'white'
      }
})