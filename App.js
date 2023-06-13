import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons"
import Login from './src/screens/Login/';
import CreateUser from './src/screens/CreateUser/';
import Cadastro from "./src/screens/Cadastro";
import CreateAnotacao from './src/screens/CreateAnotacao';
import Logout from './src/screens/Logout';
import EditAnotacao from "./src/screens/EditAnotacao";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: '#1c1c23' }, 
                    headerTintColor: '#edebe8', 
                    headerTitleAlign: 'center' 
                }}
            >
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="CreateUser" component={CreateUser} options={{ title: 'Cadastro de Usuário' }} />
                <Stack.Screen name="CreateAnotacao" component={CreateAnotacao} options={{ title: 'Minhas Anotações' }} />
                <Stack.Screen name="EditAnotacao" component={EditAnotacao} options={{ title: 'Editar Minhas Anotações' }} />
                <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function Tabs() {
    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if(route.name === "Minhas Anotações"){
                        iconName = "queue";
                    } else if(route.name === "Conta"){
                        iconName = "logout";
                    }
                    return <MaterialIcons name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: "#ffff", 
                tabBarInactiveTintColor: "#E7485C", 
                tabBarStyle: { backgroundColor: "#1c1c23" }, 
                tabBarLabelPosition: 'beside-icon',
                headerShown: true,
                headerTintColor: "#ffff", 
                headerTitleAlign: "center", 
                headerStyle: { backgroundColor: '#1c1c23' } 
            })}
        >
            <Tab.Screen name="Minhas Anotações" component={Cadastro} />
            <Tab.Screen name="Conta" component={Logout} />
        </Tab.Navigator>
    );
}
