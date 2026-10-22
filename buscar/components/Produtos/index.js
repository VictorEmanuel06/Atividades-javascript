import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import ProductCard from '../ProductCard';

export default function Produtos() {

    const produtos = [
        {
            id: 1,
            marca: 'EcoPure',
            nome: 'Limpador Multiuso Neutro 500ml',
            selo: 'Sustentável',
            nota: '4.8',
            quantidadeAvaliacoes: '(94)',
            preco: 'R$ 18,90',
            image: require('../../assets/Multiuso-Neutro.png')
        },
        {
            id: 2,
            marca: 'BioClim',
            nome: 'Desengordurante Cítrico 1L',
            selo: 'Hipoalergênico',
            nota: '4.9',
            quantidadeAvaliacoes: '(128)',
            preco: 'R$ 24,50',
            image: require('../../assets/DesengorduranteCitrico.png')
        },
        {
            id: 3,
            marca: 'DermaCare',
            nome: 'Sabonete Neutro Líquido',
            selo: 'Sem fragrância',
            nota: '4.7',
            quantidadeAvaliacoes: '(84)',
            preco: 'R$ 24,00',
            image: require('../../assets/Sabonete.png')
        },
        {
            id: 4,
            marca: 'SafeHome',
            nome: 'Desinfetante Hospitalar',
            selo: 'Saneante',
            nota: '4.9',
            quantidadeAvaliacoes: '(210)',
            preco: 'R$ 22,80',
            image: require('../../assets/Desinfetante.png')
        },
        {
            id: 5,
            marca: 'SafeHome',
            nome: 'Desinfetante Hospitalar',
            selo: 'Saneante',
            nota: '4.9',
            quantidadeAvaliacoes: '(210)',
            preco: 'R$ 22,80',
            image: require('../../assets/Desinfetante.png')
        },
        {
            id: 6,
            marca: 'SafeHome',
            nome: 'Desinfetante Hospitalar',
            selo: 'Saneante',
            nota: '4.9',
            quantidadeAvaliacoes: '(210)',
            preco: 'R$ 22,80',
            image: require('../../assets/Desinfetante.png')
        },
    ];


    return (
        <View>
            <View style={styles.containerTexto}>
                <View style={styles.texto}>
                    <Text style={styles.h1}>48</Text>
                    <Text style={styles.p}>Produtos encontrados</Text>
                </View>

                <View style={styles.caixaRelevantes}>
                    <TouchableOpacity style={styles.btnRelevantes}>
                        <Text style={styles.textoRelevante}>Mais relevantes</Text>
                        <Feather name="chevron-down" size={20} color="purple" style={{marginRight: 5}} />
                    </TouchableOpacity>
                </View>
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
    containerTexto: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    texto: {
        marginHorizontal: 12,
        flexDirection: 'row'
    },
    h1: {
        fontWeight: '700',
        fontSize: 17,
        marginHorizontal: 5
    },
    p: {
        color: '#6B6B6B',
        marginTop: 2,
        fontWeight: '600'
    },

    caixaRelevantes: {
        height: 40,
        width: 150,
        borderRadius: 5,
        borderWidth: 1,
        marginRight: 20,
        borderColor: '#DDD4E2'
    },

    btnRelevantes: {
        height: 40,
        width: 150,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    textoRelevante: {
        marginLeft: 10 
    },

    containerCards: {
        flexDirection: "row",
        flexWrap: 'wrap',
    }
});