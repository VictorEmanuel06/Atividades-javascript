import { TouchableOpacity, View, Text, StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';

export default function Buttons() {

    const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos')

    return (

        <View style={styles.container}>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.containerBtn}>

                    <TouchableOpacity
                        style={[
                            styles.btn,
                            categoriaSelecionada === 'Todos' && styles.btnSelecionado
                        ]}
                        onPress={() => setCategoriaSelecionada('Todos')}
                    >
                        <Text
                            style={[categoriaSelecionada === 'Todos' && styles.textSelecionado]}>Todos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.btn,
                            categoriaSelecionada === 'Multiuso' && styles.btnSelecionado
                        ]}
                        onPress={() => setCategoriaSelecionada('Multiuso')}
                    >
                        <Text
                            style={[categoriaSelecionada === 'Multiuso' && styles.textSelecionado]}>Multiuso</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.btn,
                            categoriaSelecionada === 'Cozinha' && styles.btnSelecionado
                        ]}
                        onPress={() => setCategoriaSelecionada('Cozinha')}
                    >
                        <Text
                            style={[categoriaSelecionada === 'Cozinha' && styles.textSelecionado]}>Cozinha</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.btn,
                            categoriaSelecionada === 'Banheiro' && styles.btnSelecionado
                        ]}
                        onPress={() => setCategoriaSelecionada('Banheiro')}
                    >
                        <Text
                            style={[categoriaSelecionada === 'Banheiro' && styles.textSelecionado]}>Banheiro</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.btn,
                            categoriaSelecionada === 'Lavanderia' && styles.btnSelecionado
                        ]}
                        onPress={() => setCategoriaSelecionada('Lavanderia')}
                    >
                        <Text
                            style={[categoriaSelecionada === 'Lavanderia' && styles.textSelecionado]}>Lavanderia</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>

            <View style={styles.linha}>

            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    },

    containerBtn: {
        flexDirection: 'row',
    },

    btn: {
        backgroundColor: '#F4EEF7',
        height: 40,
        width: 80,
        margin: 3,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#DDD4E2',
        justifyContent: 'center',
        alignItems: 'center'
    },

    btnSelecionado: {
        backgroundColor: '#5B2A7A',
        borderColor: '#5B2A7A',
    },

    textSelecionado: {
        color: '#ffffff'
    },

    linha: {
        marginTop: 10,
        height: 1,
        width: '100%',
        backgroundColor: '#DDD4E2',
    },



});