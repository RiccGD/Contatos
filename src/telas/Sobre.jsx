import {StyleSheet, View} from 'react-native'
import {Cabecalho} from '../componentes/Cabecalho'

export function Sobre(){
    return(
            <View style={estilos.conteiner}>
                <ImageBackground
                style={estilos.fundo}
                source={require('../../assets/fundo.jpg')}
            >
                <Image 
                style={estilos.magePri}
                source={require('../../assets/logo.jpg')}
            />

                <p>Desenvolvedor: Matheus Ricci</p>
                <p>App desenvolvido para anotação de contatod de forma rápida e facil, desenvolvido em React Native</p>
                <p>Versão Smartphone 1.2</p>

                <div style={estilos.ordem}>

                <Image 
                style={estilos.images}
                source={require('../../assets/Rectim.png')} />
                <Image 
                style={estilos.images}
                source={require('../../assets/AndroindLogo.png')} />
                <Image 
                style={estilos.images}
                source={require('../../assets/JavaScript_logo.png')} />

                </div>

            </ImageBackground>
            </View>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#000',
    },
    fundo: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',

        width: '100%',
        height: '100%',
    },
    images: {
        width:20,
        borderRadius:20,
        margin:10,
    },
    magePri: {
        width: 100,
    },
    ordem: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
        height: 90,
    }
})