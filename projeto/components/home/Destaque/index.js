import { Text, View, StyleSheet } from 'react-native';
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
    ];

    return (
        <View>
            <View style={styles.textoSuperior}>
                <Text style={styles.ladoEsquerdo}>Produtos em destaque</Text>
                <Text style={styles.ladoDireito}>Ver catálogo</Text>
            </View>

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
    }
})