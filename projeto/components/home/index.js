import { View } from 'react-native';

import Input from './Input';
import CompraConsciente from './CompraConsciente';
import Header from './Header';
import Categorias from './Categorias';

export default function Home() {
  return (
      <View>

        {/* HEADER */}

        <Header />

        {/* INPUT */}

        <Input />

        {/* CARD COMPRA CONSCIENTE */}

        <CompraConsciente />

        {/* CATEGORIAS */}

        <Categorias />

      </View>
  );
}

