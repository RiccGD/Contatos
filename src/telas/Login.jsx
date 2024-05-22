import { View } from "react-native";
import { Cabecalho } from '../componentes/Cabecalho'


/**
 * Nome
 * Email
 * Senha
 */


export function Login(){
    return(
        <>
          <Cabecalho titulo="Login" />
          <View style={estilos.conteiner}>
            
          </View>
        </>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flex: 1
    }
})