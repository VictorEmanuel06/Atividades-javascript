import { View, Text, StyleSheet, } from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Header() {
    return (
        <View style={styles.container}>

            <View style={styles.location}>
                <View style={styles.blocoEsquerdo}>
                    <Text style={styles.textTop}>Olá, Ana Clara</Text>
                    <View style={styles.endereco}>
                        <EvilIcons name="location" size={24} color="#7A3FA0" />
                        <Text style={styles.text}>Entregar em Rua das Flores, 120</Text>
                        <Feather name="chevron-down" size={20} color="grey" />
                    </View>
                </View>

                <View style={styles.iconeSino}>
                    <MaterialIcons name="notifications-none" size={24} color="black" />
                </View>

            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
    },

    blocoEsquerdo: {
    },

    textTop: {
        fontSize: 30,
        fontWeight: 600,
        marginBottom: 5,
    },

    text: {
        color: 'grey',
        marginLeft: 3,
    },

    iconeSino: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#F4EEF7',
        marginRight: 10,
        marginBottom: 10,

        alignItems: 'center',
        justifyContent: 'center',
    },

    location: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 5,
        marginLeft: 10,
    },

    endereco: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
});
