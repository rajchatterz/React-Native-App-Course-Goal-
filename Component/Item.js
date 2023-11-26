import { StyleSheet } from "react-native"
import {View,Text} from 'react-native'
const Item = ({itemData}) => {
    return (
        <View style={styles.goalItem}>
              <Text style={styles.text}>{ itemData}</Text>
        </View>
    )
}
export default Item

const styles = StyleSheet.create({
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
})