import { View } from "react-native";
import { Cabecalho } from '../componentes/Cabecalho'
import uuid from 'react-native-uuid'
import { useNavigation } from "@react-navigation/native";


/**
 * Nome
 * Email
 * Senha
 */

export function Login(){

const [listaContatos, setListaContatos] = useState([])


const navegacao = useNavigation()
/*dentro da functio: navegacao.navigate('inicial') */


    return(
        <>
          <Cabecalho titulo="Login" />
          <View style={estilos.conteiner}>

          </View>
        </>
    )}

const estilos = StyleSheet.create({
    conteiner: {
        flex: 1
    }
})