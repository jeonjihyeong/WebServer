import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        // initialRouteName : 맨처음 보여줄 화면이름
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'GAGURI' }} // 각 화면 타이틀(헤더에 렌더링됨)
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: 'PROJECT LIST' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;