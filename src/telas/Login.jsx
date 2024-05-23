import { View } from "react-native";
import { Cabecalho } from '../componentes/Cabecalho'
import { useNavigation } from "@react-navigation/native";


/**
 * Nome
 * Email
 * Senha
 */

export function Login(){

function novoUsuario(){
    navegacao.navigate('inicial')
}/*chamar função no botao de cadastro que ainda não fiz*/

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
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#000'
    }
})