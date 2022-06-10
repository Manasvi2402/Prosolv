import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () =>{
  return (
          <Tab.Navigator
            screenOptions={({route}) => ({
            tabBarIcon: ({focused,color,size}) => {
          let iconName;
          if (route.name === 'HomeScreen'){
            iconName = focused 
            ?'create'
            :'create-outline';
          }else if (route.name === 'ProfileScreen'){
            iconName = focused 
            ?'person'
            :'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color}/>;
          }, 
      })}
      tabBarOptions={{
        activeTintColor:'tomato',
        inactiveTintColor:'gray',
      }}>
        <Tab.Screen name="HomeScreen" component={HomeScreen}/>
        <Tab.Screen name="ProfileScreen" component={ProfileScreen}/>
      </Tab.Navigator>
    );
}
export default BottomTabNavigator