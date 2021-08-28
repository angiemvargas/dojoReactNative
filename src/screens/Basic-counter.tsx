import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FabButton } from '../components/FabButton';

const styles = StyleSheet.create({
    container:{
        flex: 1, 
          justifyContent: 'center'
    },
    textItem:{
        fontSize: 50,
        textAlign: 'center'
    },
    fabToRigth:{
        position: 'absolute',
        bottom: 20,
        right: 20
    },
    fabToLeft:{
        position: 'absolute',
        bottom: 20,
        left: 20
    },
    btnInc:{
        backgroundColor: 'green',
        borderRadius: 100,
        width: 60,
        height: 60,
        justifyContent: 'center'
    },
    btnDec:{
        backgroundColor: 'red',
        borderRadius: 100,
        width: 60,
        height: 60,
        justifyContent: 'center'
    },
    fabText:{
        color:'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})

export const BasicCounterscreen = () =>{

    const [counter, setCounter] = useState(0);

    function increment(){
        setCounter(counter+1)
    }

    return (
        <View style={styles.container}>
          <Text style={styles.textItem}>Contador: {counter}</Text>
            <FabButton title='-1' position='left' onClick={() =>setCounter(counter-1)}/>
            <FabButton title='+1' position='rigth' onClick={() =>setCounter(counter+1)}/>
        </View>

      );
}