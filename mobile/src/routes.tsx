import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import OprphanagesMap from './pages/OrphanagesMap';
import OprphanageDatails from './pages/OrphanageDatails';

const {Navigator, Screen} = createStackNavigator();

export default function Routes(){
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown:false}}>
                <Screen name="OprphanagesMap" component={OprphanagesMap}/>
                <Screen name="OprphanageDatails" component={OprphanageDatails}/>
            </Navigator>
        </NavigationContainer>
    );
}