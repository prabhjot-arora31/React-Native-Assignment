import React, { useRef } from 'react';
import { View , Animated , TouchableOpacity , Text , StyleSheet, Button} from "react-native";
const Balloon = ({navigation}) => {
    const balloonSize = useRef(new Animated.Value(0)).current;

    const inflateBalloon = () => {
      Animated.timing(balloonSize, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    };
  
    const defalteBalloon = () => {
      Animated.timing(balloonSize, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    };
  
    const balloonStyle = {
      width: balloonSize.interpolate({
        inputRange: [0, 1],
        outputRange: [100, 200], 
      }),
      height: balloonSize.interpolate({
        inputRange: [0, 1],
        outputRange: [100, 200], 
      }),
      borderRadius: balloonSize.interpolate({
        inputRange: [0, 1],
        outputRange: [50, 100], 
      }),
    };
    return (
        <View style={styles.container}>
        <Animated.View style={[styles.balloon, balloonStyle]} />
        <TouchableOpacity onPress={inflateBalloon} style={styles.button}>
          <Text style={styles.buttonText}>Inflate Balloon</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={defalteBalloon} style={styles.button}>
          <Text style={styles.buttonText}>Deflate Balloon</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.form} 
        onPress={()=>{
            navigation.navigate("Form")
        }}
        >
            <Text style={{fontSize:19,color:'white'}}>Register ? Click Here</Text>
        </TouchableOpacity>
      </View>
    )
}
const styles = StyleSheet.create({
    form:{
        paddingVertical:10,
        paddingHorizontal:70,
        backgroundColor:'blue',
        borderRadius:30,
        marginTop:35

    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      backgroundColor: '#3F51B5',
      padding: 20,
      paddingVertical:10,
      paddingHorizontal:70,
      marginBottom: 10,
      borderRadius: 30,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
    },
    balloon: {
      backgroundColor: 'blue',
      marginBottom: 40,
    },
  });
export default Balloon;