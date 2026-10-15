import { Text, View, StyleSheet, ScrollView } from 'react-native';
import DestaqueCard from '../../DestaqueCard';

export default function Destaque() {

    const produtos = [
        {
            id: 1,
            nome: 'Alvejante sem Cloro 1kg',
            marca: 'OxyPure',
            preco: 'R$ 28,40',
            image: require('../../../assets/alvejante.png')
        },
        {
            id: 2,
            nome: 'Panos de Microfibra Multiuso (Kit com 4)',
            marca: 'FibrasClean',
            preco: 'R$ 21,90',
            image: require('../../../assets/panos.png')
        },

    ];

    return (
        <View>
            <View style={styles.textoSuperior}>
                <Text style={styles.ladoEsquerdo}>Produtos em destaque</Text>
                <Text style={styles.ladoDireito}>Ver catálogo</Text>
            </View>

            <ScrollView horizontal={true}>
                <View style={styles.CardDestaque}>

                    {produtos.map((produto) => (
                        <DestaqueCard
                            key={produto.id}
                            nome={produto.nome}
                            marca={produto.marca}
                            preco={produto.preco}
                            image={produto.image}
                        />
                    ))}

                </View>
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    textoSuperior: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 14,
        marginHorizontal: 14
    },
    ladoEsquerdo: {
        fontSize: 20,
        fontWeight: '700',
    },
    ladoDireito: {
        color: '#5B2A7A',
        fontWeight: '700',
        fontSize: 15
    },
    CardDestaque: {
        flexDirection: 'row',
    },
})