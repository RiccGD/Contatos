import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {Login} from '../telas/Login'
import {Inicial} from '../telas/Inicial'

const {Navigator, Screen} = createNativeStackNavigator()

export function RotasStack(){
    return(
        <NavigationContainer>

            <Navigator>

                <Screen
                name="login"
                component={Login}
                 />

                 <Screen
                name="login"
                component={Inicial}
                 />

            </Navigator>

        </NavigationContainer>
    )
}