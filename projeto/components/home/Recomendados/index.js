import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Recomendados() {
    return (
        <View style={styles.container}>
            <View style={styles.texto}>
                <Text style={styles.h1}>Recomendados para você</Text>
                <Text style={styles.p}>Com base nas suas preferências cadastradas</Text>
            </View>
            <View>
                <View style={styles.cardProduto}>
                    <View style={styles.caixaAlert}>
                        <Text style={styles.alert}>Hipoalergênico</Text>
                    </View>
                    <Image
                        source={require('../../../assets/Lava-Roupas.jpg')}
                        style={styles.image}
                    />
                    <View>
                        <Text style={styles.info}>PureBlanc</Text>
                        <Text style={styles.h2}>Lava-Roupas Coco Suave</Text>
                        <Text style={styles.avaliacao}>
                            <AntDesign name="star" size={14} color="#7A3FA0" /> 4.8 (84)
                        </Text>
                        <Text style={styles.preco}>R$ 32,90</Text>
                    </View>
                    <TouchableOpacity style={styles.buttom}>
                        <FontAwesome6 name="plus" size={20} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    texto: {
        marginHorizontal: 12,
        marginTop: 20,
    },
    h1: {
        fontWeight: '700',
        fontSize: 19
    },
    p: {
        color: '#6B6B6B',
        marginTop: 2,
        fontWeight: '400'
    },

    cardProduto: {
        position: 'relative',
        marginHorizontal: 10,
        marginVertical: 10,
        width: 180,
        height: 320,
        borderRadius: 14,
        borderWidth: 2,
        borderColor: '#DDD4E2',
        paddingTop: 10,
        alignItems: 'center'
    },
    caixaAlert: {
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

    alert: {
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
    info: {
        color: '#6B6B6B',
    },
    h2: {
        fontWeight: '700',
    },
    avaliacao: {
        marginTop: 5
    },

    preco: {
        marginTop: 13,
        fontSize: 18,
        fontWeight: '700'
    },

    buttom: {
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