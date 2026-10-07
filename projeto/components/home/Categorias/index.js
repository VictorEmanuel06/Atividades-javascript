import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Categorias() {
  return (

    <View style={styles.container}>
      <View style={styles.textoSuperior}>
        <Text style={styles.textoLadoEsquerdo}>Categorias</Text>
        <Text style={styles.textoLadoDireito}>Ver todas</Text>
      </View>

      {/* LISTA DE CATEGORIAS */}

      <View style={styles.listaCategorias}>

        <View style={styles.limpeza}>
          <TouchableOpacity style={styles.buttomLimpeza}><MaterialIcons name="cleaning-services" size={30} color="#7A3FA0" /></TouchableOpacity>
          <Text style={styles.textLimpeza}>Limpeza</Text>
        </View>

        <View style={styles.limpeza}>
          <TouchableOpacity style={styles.buttomLimpeza}><MaterialIcons name="cleaning-services" size={30} color="#7A3FA0" /></TouchableOpacity>
          <Text style={styles.textLimpeza}>Higiene</Text>
        </View>


        <View style={styles.limpeza}>
          <TouchableOpacity style={styles.buttomLimpeza}><MaterialIcons name="cleaning-services" size={30} color="#7A3FA0" /></TouchableOpacity>
          <Text style={styles.textLimpeza}>Saneantes</Text>
        </View>

        <View style={styles.limpeza}>
          <TouchableOpacity style={styles.buttomLimpeza}><MaterialIcons name="cleaning-services" size={30} color="#7A3FA0" /></TouchableOpacity>
          <Text style={styles.textLimpeza}>Sustentáveis</Text>
        </View>


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

  textoLadoEsquerdo: {
    fontWeight: '700',
    fontSize: 20
  },

  textoLadoDireito: {
    color: '#5B2A7A',
    fontWeight: '700'
  },

  listaCategorias: {
    flexDirection: 'row'
  },

  limpeza: {
    marginHorizontal: 10,
    marginTop: 10,
    textAlign: 'center'

  },

  buttomLimpeza: {
    height: 70,
    width: 70,
    backgroundColor: '#F4EEF7',
    borderColor: '#DDD4E2',
    borderRadius: 40,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  textLimpeza: {
    marginTop: 4,
    marginLeft: 8,
    fontWeight: '500'
  }


});