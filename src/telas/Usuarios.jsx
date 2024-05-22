import { View } from "react-native";
import { Cabecalho } from '../componentes/Cabecalho'


/**
 * Nome
 * Email
 * Senha
 */

export function Usuarios(){

    




    return(
        <>
          <Cabecalho titulo="Usuarios" />
          <View style={estilos.conteiner}>
            
          <Formulario 
                  adicionar={}
              />  

          </View>
        </>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flex: 1
    }
})