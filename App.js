import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TelaInicial from "./componentes/TelaInicial/";
import Sobre from "./componentes/Sobre/";
import Competencias from "./componentes/Competencias";
import Contatos from "./componentes/Contatos";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tela Inicial" component={TelaInicial} />
        <Stack.Screen name="Sobre" component={Sobre} />
        <Stack.Screen name="Competencias" component={Competencias} />
        <Stack.Screen name="Contatos" component={Contatos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
