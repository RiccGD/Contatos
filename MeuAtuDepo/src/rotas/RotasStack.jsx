import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {Login} from '../telas/Login'
import {Inicial} from '../telas/Inicial'
import {Usuarios} from '../telas/Usuarios'

const {Navigator, Screen} = createNativeStackNavigator()

export function RotasStack(){
    return(
        <NavigationContainer>

            <Navigator screenOptions={{headerShown: false}}>

                <Screen
                name='login'
                component={Login}
                 />

                 <Screen
                name='usuario'
                component={Usuarios}
                 />

                 <Screen
                name='inicio1'
                component={Inicial}
                 />

            </Navigator>

        </NavigationContainer>
    )
}