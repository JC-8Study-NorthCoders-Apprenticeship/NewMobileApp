import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Exercise1 } from './Exercise1';
import { Exercise2 } from './Exercise2';
import Exercise3 from './Exercise3';

const Stack = createNativeStackNavigator();

export const stageRoutes = () => (
  <>
    <Stack.Screen name="Exercise1" component={Exercise1} />
    <Stack.Screen name="Exercise2" component={Exercise2} />
    <Stack.Screen name="Exercise3" component={Exercise3} />
  </>
);
