import * as React from 'react';
import { ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { List } from 'react-native-paper';

import { stageRoutes } from './_components/stage-routes';

const menu = [
  {
    title: 'Chapter 1: Exercise1',
    icon: 'numeric-1-box',
    screen: 'Exercise1',
  },
  {
    title: 'Chapter 2: Exercise2',
    icon: 'numeric-2-box',
    screen: 'Exercise2',
  },
  {
    title: 'Chapter 3: Exercise3',
    icon: 'numeric-3-box',
    screen: 'Exercise3',
  },
  {
    title: 'Chapter 6: Exercise6',
    icon: 'numeric-6-box',
    screen: 'Exercise6',
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    // prettier-ignore
    <ScrollView>
      <List.Section>
        {menu.map((section) => (
          <List.Item 
            key={section.title} 
            title={section.title} 
            onPress={() => navigation.navigate(section.screen)} 
            left={(props) => <List.Icon {...props} icon={section.icon} />}
        />
        ))}
      </List.Section>
    </ScrollView>
  );
};

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Northcoders - Intro to Mobile' }}
        />
        {stageRoutes()}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
