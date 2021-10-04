import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SelectFilter from "./Screens/SelectFilter";
import ShowUser from "./Screens/ShowUser";
import EditFilter from "./Screens/EditFilter";

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName={"SelectFilter"}
            >
                <Stack.Screen name="SelectFilter" component={SelectFilter} />
                <Stack.Screen name="ShowUser" component={ShowUser} />
                <Stack.Screen name="EditFilter" component={EditFilter} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
