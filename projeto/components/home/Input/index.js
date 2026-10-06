import { View, StyleSheet, TextInput } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Input() {
    return (
        <View style={styles.containerInput}>

            <Ionicons
                name="search-outline"
                size={24}
                color="grey"
            />

            <TextInput
                style={styles.input}
                placeholder='Buscar Produtos, marcas ou categorias.'
            >
            </TextInput>

            <MaterialCommunityIcons
                name="tune"
                size={24}
                color="grey"
            />

        </View>
    );
}

const styles = StyleSheet.create({
    containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 12,
        borderColor: '#DDD4E2',
        paddingHorizontal: 15,
        marginRight: 10,
        marginLeft: 10,
    },

    input: {
        flex: 1,
        height: 55,
        marginHorizontal: 10,
    },
})