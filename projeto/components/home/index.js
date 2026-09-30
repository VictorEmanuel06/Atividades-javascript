import { View, Text, StyleSheet, TextInput } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Home() {
  return (
    <View style={styles.container}>

      <Text style={styles.textTop}>Olá, Ana Clara</Text>

      <View style={styles.location}>
        <EvilIcons name="location" size={24} color="#7A3FA0" />
        <Text style={styles.text}>Entregar em Rua das Flores, 120</Text>
        <Feather name="chevron-down" size={20} color="grey" />
      </View>

      <View style={styles.iconeSino} >
        <MaterialIcons name="notifications-none" size={24} color="black" />
      </View>

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  textTop: {
    fontSize: 30,
    marginLeft: 10,
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  iconeSino: {
    marginRight: 40,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginLeft: 5,
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 12,
    borderColor: '#DDD4E2',
    paddingHorizontal: 15,
    margin: 10,
  },
  input: {
    flex: 1,
    height: 55,
    marginHorizontal: 10,
  }
});
