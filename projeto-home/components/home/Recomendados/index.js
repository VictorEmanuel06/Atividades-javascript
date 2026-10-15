import { StyleSheet, Text, View } from 'react-native';
import ProductCard from '../../ProductCard';

export default function Recomendados() {

    const produtos = [
        {
            id: 1,
            marca: 'PureBlanc',
            nome: 'Lava-Roupas Coco Suave',
            selo: 'Hipoalergênico',
            nota: '4.8',
            quantidadeAvaliacoes: '(84)',
            preco: 'R$ 32,90',
            image: require('../../../assets/Lava-Roupas.jpg')
        },
        {
            id: 2,
            marca: 'BioClean',
            nome: 'Desengordurante Cítrico',
            selo: 'Sustentável',
            nota: '4.9',
            quantidadeAvaliacoes: '(120)',
            preco: 'R$ 19,50',
            image: require('../../../assets/Desengordurante.png')
        },
        {
            id: 3,
            marca: 'DermaCare',
            nome: 'Sabonete Neutro Líquido',
            selo: 'Sem fragrância',
            nota: '4.7',
            quantidadeAvaliacoes: '(84)',
            preco: 'R$ 24,00',
            image: require('../../../assets/Sabonete.png')
        },
        {
            id: 4,
            marca: 'SafeHome',
            nome: 'Desinfetante Hospitalar',
            selo: 'Saneante',
            nota: '4.9',
            quantidadeAvaliacoes: '(210)',
            preco: 'R$ 22,80',
            image: require('../../../assets/Desinfetante.png')
        },
    ];


    return (
        <View>
            <View style={styles.texto}>
                <Text style={styles.h1}>Recomendados para você</Text>
                <Text style={styles.p}>Com base nas suas preferências cadastradas</Text>
            </View>
            <View style={styles.containerCards}>

                {produtos.map((produto) => (
                    <ProductCard
                        key={produto.id}
                        marca={produto.marca}
                        nome={produto.nome}
                        selo={produto.selo}
                        nota={produto.nota}
                        quantidadeAvaliacoes={produto.quantidadeAvaliacoes}
                        preco={produto.preco}
                        image={produto.image}
                    />
                ))}

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
    containerCards: {
        flexDirection: "row",
        flexWrap: 'wrap',
        // justifyContent: "space-between"
    }
});