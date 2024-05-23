import { View } from "react-native";
import { Cabecalho } from '../componentes/Cabecalho'
import uuid from 'react-native-uuid'
import { useNavigation } from "@react-navigation/native";


/**
 * Nome
 * Email
 * Senha
 */

export function Usuarios(){

    const navegacao = useNavigation()
    function novoUsuario(){
        navegacao.navigate('login')
    }/*chamar função no botao de cadastro que ainda não fiz*/


    const [listaContatos, setListaContatos] = useState([])

    function adicionarContato(nome,email, senha){

        let novoContato = {
            codigo: uuid.v4(),
            nome: nome,
            senha: senha,
            email: email
        } 

        setListaContatos([...listaContatos, novoContato])
    }


    return(
        <>
          <Cabecalho titulo="Usuarios" />
          <View style={estilos.conteiner}>
          <Formulario 
                  adicionar={adicionarContato}
              />
          </View>
        </>
)}

const estilos = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#000'
    }
})