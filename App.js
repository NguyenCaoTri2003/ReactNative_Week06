import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Chat from './components/chat/chat'
import Icons from 'react-native-vector-icons/Ionicons'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Screen01"screenOptions={{
          headerStyle: {
            backgroundColor: '#1ba9ff',
            height: 42, 
          },
          headerTitleStyle: {
            fontSize: 17,
            color: '#fff',
          },
          headerTitleAlign: 'center',
          headerLeft: () => (
          <TouchableOpacity>
            <Icons name="arrow-back" size={25} color="#fff" style={{ marginLeft: 10 }} />
          </TouchableOpacity>
          ),

          // Thêm icon "cart" bên phải
          headerRight: () => (
            <TouchableOpacity>
              <Icons name="cart" size={25} color="#fff" style={{ marginRight: 10 }} />
            </TouchableOpacity>
          ),

        }}> 
        <Stack.Screen name="Screen01" component={Chat}  options={{title: 'Chat', headerShown: true }}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
