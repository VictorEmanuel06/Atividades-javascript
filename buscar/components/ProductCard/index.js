import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


export default function ProductCard(props) {
    return (
        <View style={styles.cardProduto}>

            <View style={styles.caixaSelo}>
                <Text style={styles.selo}>
                    {props.selo}
                </Text>
            </View>

            <Image
                source={props.image}
                style={styles.image}
            />

            <View>
                <Text style={styles.info}>
                    {props.marca}
                </Text>

                <View style={styles.infomacoes}>
                    <Text style={styles.h2} numberOfLines={2}>
                        {props.nome}
                    </Text>

                    <Text style={styles.avaliacao}>
                        <AntDesign name="star" size={14} color="#7A3FA0" />
                        {' '}
                        {props.nota}
                        {' '}
                        {props.quantidadeAvaliacoes}
                    </Text>

                    <Text style={styles.preco}>
                        {props.preco}
                    </Text>
                </View>

            </View>

            <TouchableOpacity style={styles.button}>
                <FontAwesome6 name="plus" size={20} color="white" />
            </TouchableOpacity>

        </View>


    );
}

const styles = StyleSheet.create({
    infomacoes: {
        width: 157
    },

    info: {
        color: '#6B6B6B',
    },
    cardProduto: {
        position: 'relative',
        marginHorizontal: 10,
        marginVertical: 10,
        width: 180,
        height: 290,
        borderRadius: 14,
        borderWidth: 2,
        borderColor: '#DDD4E2',
        paddingTop: 10,
        alignItems: 'center'
    },
    caixaSelo: {
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 1,
        backgroundColor: '#F4EEF7',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#DDD4E2',
        paddingVertical: 2,
        paddingHorizontal: 5,
    },

    selo: {
        color: '#5B2A7A',
        fontWeight: '500',
        fontSize: 12,
        textAlign: 'center',
    },

    image: {
        width: 157,
        height: 157,
        borderRadius: 8,
    },

    h2: {
        fontWeight: '700',
        height: 36
    },
    avaliacao: {
        
    },

    preco: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 10 
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