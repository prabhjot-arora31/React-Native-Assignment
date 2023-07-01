import { Text , TextInput, View , StyleSheet,TouchableOpacity ,  ImageBackground, Image} from "react-native";
const Form = ({navigation}) => {
    const callAPI = () => {
        async function call()
        {
            try{
            const tempData = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const data = await tempData.json();
            console.log(data);
            }catch(error){
                console.log(error);
            }
        }
        call();
    }
    return (
           
        <View style={styles.main}>
            <View style={styles.contents}>
                <View style={styles.child}>
                <Text style={styles.heading}>Register</Text>
                </View>
            <View style={styles.child}>
            <Text style={styles.head}>Enter Your Name</Text>
            <TextInput style={styles.input} placeholder="Andrew Wilson"/>
            </View>
            <View style={styles.child}>
            <Text style={styles.head}>Enter Your Email</Text>
            <TextInput style={styles.input} placeholder="andrewwilson@gmail.com"/>
            </View>
            <View style={styles.child}>
            <TouchableOpacity style={styles.btn} onPress={callAPI}>
                <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>
            </View>
            </View>
            <View>
            <TouchableOpacity style={styles.balloon} 
        onPress={()=>{
            navigation.navigate("Balloon")
        }}>
            <Text style={{fontSize:19,color:'white'}}>Go Back</Text>
        </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    balloon:{
        paddingVertical:10,
        paddingHorizontal:70,
        backgroundColor:'blue',
        borderRadius:30,
        marginTop:35
    },
    heading:{
        fontSize:30,
        textAlign:'center',
        fontWeight:'bold',
    },
main:{
    marginTop:'auto',
    marginBottom:'auto',
    flexDirection:'column',
    marginLeft:'auto',
    marginRight:'auto',
    alignItems:'center',
    justifyContent:'center',
    gap:30,
},
child:{
    alignSelf:'stretch',
    padding:5,
    margin:5
},
head:{
    fontSize:18,
    textAlign:'center'
},
input:{
    paddingHorizontal:25,
    paddingVertical:10,
    marginTop:10,
    borderRadius:25,
    borderWidth:2,
    fontSize:15,
    fontWeight:'500'
},
btn:{
    paddingHorizontal:25,
    paddingVertical:10,
    marginTop:10,
    backgroundColor:'blue',
    borderRadius:30,
},
btnText:{
    fontSize:18,
    textAlign:'center',
    color:'white'
},
contents:{
    padding:20,
    paddingVertical:50,
    borderRadius:13,
    borderWidth:2,
    marginLeft:'auto',
    marginRight:'auto'
}
})
export default Form;