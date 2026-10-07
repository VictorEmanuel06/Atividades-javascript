import { View, ScrollView } from 'react-native';

import Input from './Input';
import CompraConsciente from './CompraConsciente';
import Header from './Header';
import Categorias from './Categorias';
import Recomendados from './Recomendados';

export default function Home() {
  return (
    <ScrollView>
      <View>

        {/* HEADER */}

        <Header />

        {/* INPUT */}

        <Input />

        {/* CARD COMPRA CONSCIENTE */}

        <CompraConsciente />

        {/* CATEGORIAS */}

        <Categorias />

        {/* Recomendados */}

        <Recomendados />


      </View>
    </ScrollView>
  );
}

