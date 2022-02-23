import React from 'react'
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import IndexScreen from "./src/screens/indexScreen";
import { Provider } from './src/context/BlogContext';
import showScreen from './src/screens/showScreen';
import createScreen from './src/screens/createScreen';

const navigator = createStackNavigator({
    Index: IndexScreen,
    Show: showScreen,
    Create: createScreen
}, {
    initialRouteName: 'Index', 
    defaultNavigationOptions: {
        title: 'Blogs'
    }
});

const App = createAppContainer(navigator);

export default () => {
    return ( 
    <Provider>
        <App />
    </Provider>
    );
};