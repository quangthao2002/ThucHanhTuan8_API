import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';

export default function App() {
  var stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator >
        <stack.Screen name="Screen1" component={Screen1} />
        <stack.Screen name="Shops Near Me" component={Screen2} />
        <stack.Screen name="Drinks" component={Screen3} />
      </stack.Navigator>
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
