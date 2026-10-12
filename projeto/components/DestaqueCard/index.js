import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


export default function ProductCard(props) {
    return (
        <View style={styles.cardProduto}>

            <Image
                source={props.image}
                style={styles.image}
            />

            <View>
                <Text style={styles.info}>
                    {props.marca}
                </Text>

                <Text style={styles.h2}>
                    {props.nome}
                </Text>


                <Text style={styles.preco}>
                    {props.preco}
                </Text>

            </View>

            <TouchableOpacity style={styles.button}>
                <FontAwesome6 name="plus" size={20} color="white" />
            </TouchableOpacity>

        </View>


    );
}

const styles = StyleSheet.create({
    cardProduto: {
        position: 'relative',
        marginHorizontal: 10,
        marginVertical: 10,
        width: 280,
        height: 140,
        borderRadius: 14,
        borderWidth: 2,
        borderColor: '#DDD4E2',
        paddingTop: 10,
    },
    info: {
        color: '#6B6B6B',
    },
    image: {
        margin: 10,
        width: 100,
        height: 100,
        borderRadius: 8,
    },

    h2: {
        fontWeight: '700',
    },

    preco: {
        fontSize: 18,
        fontWeight: '700',
        marginTop: 15
    },

    button: {
        position: 'absolute',
        right: 10,
        bottom: 10,
        height: 40,
        width: 40,
        borderRadius: 8,
        backgroundColor: '#5B2A7A',
        alignItems: 'center',
        justifyContent: 'center',
    },
});