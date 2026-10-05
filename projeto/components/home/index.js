import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';

export default function Home() {
  return (
    <View style={styles.container}>

      <Text style={styles.textTop}>Olá, Ana Clara</Text>

      <View style={styles.location}>
        <View style={styles.endereco}>
          <EvilIcons name="location" size={24} color="#7A3FA0" />
          <Text style={styles.text}>Entregar em Rua das Flores, 120</Text>
          <Feather name="chevron-down" size={20} color="grey" />
        </View>

        <View style={styles.iconeSino}>
          <MaterialIcons name="notifications-none" size={24} color="black" />
        </View>

      </View>

      {/* INPUT */}

      <View style={styles.containerInput}>

        <Ionicons
          name="search-outline"
          size={24}
          color="grey"
        />

        <TextInput
          style={styles.input}
          placeholder='Buscar Produtos, marcas ou categorias.'
        >
        </TextInput>

        <MaterialCommunityIcons
          name="tune"
          size={24}
          color="grey"
        />

      </View>


      {/* Caixa COMPRA CONSCIENTE */}

      <View style={styles.caixa_consciente}>

        <View style={styles.conteudo_superior}>

          <View style={styles.icone_verificar}>
            <MaterialIcons name="verified" size={24} color="#5B2A7A" />
          </View>

          <View style={styles.bloco_textos}>
            <Text style={styles.h1}>
              COMPRA CONSCIENTE
            </Text>

            <Text style={styles.p}>
              Produtos com formulação transparente e
              segurança testada para sua casa e família.
            </Text>
          </View>

        </View>

        <View>
          <TouchableOpacity>
            <Text>Conhecer selos</Text>
          </TouchableOpacity>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  textTop: {
    fontSize: 30,
    marginLeft: 15,
  },
  text: {
    color: 'grey',
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
  },

  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 12,
    borderColor: '#DDD4E2',
    paddingHorizontal: 15,
    marginRight: 10,
    marginLeft: 10,
  },
  input: {
    flex: 1,
    height: 55,
    marginHorizontal: 10,
  },

  conteudo_superior: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    margin: 10,
  },

  icone_verificar: {
    backgroundColor: '#ffffff',
    width: 30,
    height: 30,
    borderRadius: 10,
    borderColor: '#DDD4E2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bloco_textos: {
    flex: 1,
    marginLeft: '20',
    textAlign: 'left'
  },

  h1: {
    color: '#5B2A7A',
    fontSize: 15,
    fontWeight: 'bold'
  },

  caixa_consciente: {
    height: 200,
    width: 380,

    margin: 20,

    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F4EEF7',
    backgroundColor: '#F4EEF7',

  },


});
