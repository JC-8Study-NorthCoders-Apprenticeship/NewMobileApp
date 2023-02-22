import * as React from 'react';
import { ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { List } from 'react-native-paper';

import { stageRoutes } from './_components/stage-routes';

const menu = [
  {
    title: 'Chapter 1: Orientation',
    icon: 'numeric-1-box',
    screen: 'Orientation',
  },
  {
    title: 'Chapter 2: Crew are you?',
    icon: 'numeric-2-box',
    screen: 'CrewManifest',
  },
  {
    title: 'Chapter 3: A well-stocked station',
    icon: 'numeric-3-box',
    screen: 'Inventory',
  },
  {
    title: 'Chapter 4: Bridge to security',
    icon: 'numeric-4-box',
    screen: 'KeepOut',
  },
  {
    title: 'Chapter 5: Incoming distress call, sir!',
    icon: 'numeric-5-box',
    screen: 'DistressCalls',
  },
  {
    title: 'Chapter 6: Run a level five diagnostic',
    icon: 'numeric-6-box',
    screen: 'Diagnostics',
  },
  {
    title: 'Chapter 7: Budget cuts!',
    icon: 'numeric-7-box',
    screen: 'Canteen',
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
