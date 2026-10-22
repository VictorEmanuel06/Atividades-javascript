import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Header() {
    return (
        <View style={styles.containerHeader}>

            <View style={styles.containerInput}>
                <Ionicons
                    name="search-outline"
                    size={24}
                    color="grey"
                />

                <TextInput
                    style={styles.input}
                    placeholder='Buscar Produtos'
                >
                </TextInput>
            </View>

            <View style={styles.btnFiltros}>

                <TouchableOpacity style={styles.button}>

                    <MaterialCommunityIcons
                        name="tune"
                        size={24}
                        color="purple"
                    />

                    <Text style={styles.textoFiltros}>Filtros</Text>
                </TouchableOpacity>

            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    containerHeader: {
        flexDirection: 'row',
        marginTop: 50
    },

    containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 12,
        backgroundColor: '#F4EEF7',
        borderColor: '#DDD4E2',
        paddingHorizontal: 15,
        marginRight: 10,
        marginLeft: 10,
        height: 50,
        width: 280,
    },

    input: {
        height: 50,
        marginHorizontal: 10,
    },

    btnFiltros: {
        flexDirection: 'row',
        width: 105,
        height: 50,
        borderWidth: 2,
        borderRadius: 12,
        borderColor: '#DDD4E2',
        alignSelf: 'center',
        justifyContent: 'center',
    },

    textoFiltros: {
        fontWeight: '700',
        margin: 5
    },

    button: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})