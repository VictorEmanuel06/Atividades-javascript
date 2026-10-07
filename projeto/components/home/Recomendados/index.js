import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Recomendados() {
    return (
        <View style={styles.container}>
            <View style={styles.texto}>
                <Text style={styles.h1}>Recomendados para você</Text>
                <Text style={styles.p}>Com base nas suas preferências cadastradas</Text>
            </View>
            <View>
                <View style={styles.cardProduto}>
                    <View style={styles.containerImage}>
                        <Image
                            source={require('../../../assets/Lava-Roupas.jpg')}
                            style={styles.image}
                        />
                    </View>
                    <View>
                        <Text>PureBlanc</Text>
                        <Text>Lava-Roupas Coco Suave</Text>
                        <Text>4.8</Text>
                        <Text>R$ 32,90</Text>
                        <TouchableOpacity style={styles.buttom}>

                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    texto: {
        marginHorizontal: 10,
    },
    h1: {
        fontWeight: '700',
    },
    p: {
        color: '#6B6B6B',
        marginTop: 2,
        fontWeight: '400'
    },

    cardProduto: {
        marginHorizontal: 10,
        marginVertical: 10,
        width: 180,
        height: 270,
        borderRadius: 14,
        borderWidth: 2,
        borderColor: '#DDD4E2',
        paddingTop: 10,
        alignItems: 'center'
    },
    containerImage: {

    },

    image: {
        width: 157,
        height: 157,
        borderRadius: 8,
    }
});