import Form from './src/components/Form';
import Balloon from './src/components/Balloon';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Balloon'>
        <Stack.Screen name='Balloon' component={Balloon}/>
        <Stack.Screen name='Form' component={Form}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
