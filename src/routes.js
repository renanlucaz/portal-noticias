import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import CreateNews from './pages/CreateNews';
import EditNews from './pages/EditNews';
import News from './pages/News';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="CreateNews" component={CreateNews} />
                <Stack.Screen name="EditNews" component={EditNews} />
                <Stack.Screen name="News" component={News} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
