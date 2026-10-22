import { StyleSheet, View, ScrollView } from 'react-native';
import Header from '../components/Header';
import Buttons from '../components/Buttons';
import Produtos from '../components/Produtos';

export default function Buscar() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>

        {/* INPUT E FILTROS */}
        <Header />

        {/* Botões de Selecionar Categorias */}
        <Buttons />

        {/* PRODUTOS */}

        <Produtos />

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

});
