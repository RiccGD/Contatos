import { View } from "react-native";
import { Cabecalho } from '../componentes/Cabecalho'


export function Sobre(){
    return(
        <>
          <Cabecalho titulo="Configurações" />
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