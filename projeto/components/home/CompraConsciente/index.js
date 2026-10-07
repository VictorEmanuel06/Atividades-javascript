import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function CompraConsciente() {
    return (

        <View style={styles.caixa_consciente}>

            <View style={styles.conteudo_superior}>

                <View style={styles.icone_verificar}>
                    <MaterialIcons name="verified" size={27} color="#5B2A7A" />
                </View>

                <View style={styles.bloco_textos}>
                    <Text style={styles.h1}>
                        COMPRA CONSCIENTE
                    </Text>

                    <Text style={styles.p}>
                        Produtos com formulação transparente e
                        segurança testada para sua casa e família.
                    </Text>
                </View>

            </View>

            <TouchableOpacity style={styles.button_selos}>
                <Text style={styles.texto_selos}>Conhecer selos</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({

    caixa_consciente: {
        height: 200,
        width: 390,
        marginTop: 20,
        marginLeft: 12,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#DDD4E2',
        backgroundColor: '#F4EEF7',
    },

    conteudo_superior: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        margin: 10,
    },

    icone_verificar: {
        backgroundColor: '#ffffff',
        width: 40,
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#DDD4E2',
        alignItems: 'center',
        justifyContent: 'center',
    },

    bloco_textos: {
        marginLeft: 20,
    },

    h1: {
        color: '#5B2A7A',
        fontSize: 15,
        fontWeight: 'bold',
    },

    p: {
        textAlign: 'left',
        fontWeight: '400',
        maxWidth: 120
    },



    // Botão Conhecer selos

    button_selos: {
        backgroundColor: '#ffffff',
        height: 30,
        width: 120,
        borderWidth: 1,
        borderColor: '#DDD4E2',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
        alignSelf: 'flex-end',
    },

    texto_selos: {
        color: '#5B2A7A',
        fontWeight: '600',
    }

})