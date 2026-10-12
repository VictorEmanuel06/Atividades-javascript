// import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
// import { Host, Icon } from '@expo/ui/jetpack-compose';
// import CleaningServices from '@expo/material-symbols/cleaning_services.xml';
// import soap from '@expo/material-symbols/soap.xml';
// import sanitizer from '@expo/material-symbols/sanitizer.xml';
// import eco from '@expo/material-symbols/eco.xml';
// import spa from '@expo/material-symbols/spa.xml';

// export default function Categorias() {
//   return (

//     <View style={styles.container}>
//       <View style={styles.textoSuperior}>
//         <Text style={styles.textoLadoEsquerdo}>Categorias</Text>
//         <Text style={styles.textoLadoDireito}>Ver todas</Text>
//       </View>

//       {/* LISTA DE CATEGORIAS */}

//       <View style={styles.listaCategorias}>

//         {/* LIMPEZA */}

//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           <View style={styles.containerButton}>
//             <TouchableOpacity style={styles.buttom}>
//               <Host matchContents>
//                 <Icon
//                   source={CleaningServices}
//                   size={30}
//                   tint="#7A3FA0"
//                 />
//               </Host>
//             </TouchableOpacity>
//             <Text style={styles.text}>Limpeza</Text>
//           </View>

//           {/* HIGIENE */}

//           <View style={styles.containerButton}>
//             <TouchableOpacity style={styles.buttom}>
//               <Host matchContents>
//                 <Icon
//                   source={soap}
//                   size={30}
//                   tint="#7A3FA0"
//                 />
//               </Host>
//             </TouchableOpacity>
//             <Text style={styles.text}>Higiene</Text>
//           </View>

//           {/* SANEANTES */}

//           <View style={styles.containerButton}>
//             <TouchableOpacity style={styles.buttom}>
//               <Host matchContents>
//                 <Icon
//                   source={sanitizer}
//                   size={30}
//                   tint="#7A3FA0"
//                 />
//               </Host>
//             </TouchableOpacity>
//             <Text style={styles.text}>Saneantes</Text>
//           </View>

//           {/* SUSTENTAVEIS */}

//           <View style={styles.containerButton}>
//             <TouchableOpacity style={styles.buttom}>
//               <Host matchContents>
//                 <Icon
//                   source={eco}
//                   size={30}
//                   tint="#7A3FA0"
//                 />
//               </Host>
//             </TouchableOpacity>
//             <Text style={styles.text}>Sustentáveis</Text>
//           </View>

//           {/* HIPOALERGENICO */}

//           <View style={styles.containerButton}>
//             <TouchableOpacity style={styles.buttom}>
//               <Host matchContents>
//                 <Icon
//                   source={spa}
//                   size={30}
//                   tint="#7A3FA0"
//                 />
//               </Host>
//             </TouchableOpacity>
//             <Text style={styles.text}>Sustentáveis</Text>
//           </View>
//         </ScrollView>

//       </View>

//     </View>
//   );
// }



// RODAR NO IPHONE ABAIXO



import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Categorias() {

  return (
    <View style={styles.container}>

      <View style={styles.textoSuperior}>
        <Text style={styles.textoLadoEsquerdo}>Categorias</Text>
        <Text style={styles.textoLadoDireito}>Ver todas</Text>
      </View>

      <View style={styles.listaCategorias}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >

          {/* LIMPEZA */}
          <View style={styles.containerButton}>
            <TouchableOpacity style={styles.buttom}>
              <MaterialCommunityIcons
                name="broom"
                size={30}
                color="#7A3FA0"
              />
            </TouchableOpacity>
            <Text style={styles.text}>Limpeza</Text>
          </View>

          {/* HIGIENE */}
          <View style={styles.containerButton}>
            <TouchableOpacity style={styles.buttom}>
              <MaterialCommunityIcons
                name="hand-wash"
                size={30}
                color="#7A3FA0"
              />
            </TouchableOpacity>
            <Text style={styles.text}>Higiene</Text>
          </View>

          {/* SANEANTES */}
          <View style={styles.containerButton}>
            <TouchableOpacity style={styles.buttom}>
              <MaterialCommunityIcons
                name="spray-bottle"
                size={30}
                color="#7A3FA0"
              />
            </TouchableOpacity>
            <Text style={styles.text}>Saneantes</Text>
          </View>

          {/* SUSTENTÁVEIS */}
          <View style={styles.containerButton}>
            <TouchableOpacity style={styles.buttom}>
              <MaterialCommunityIcons
                name="leaf"
                size={30}
                color="#7A3FA0"
              />
            </TouchableOpacity>
            <Text style={styles.text}>Sustentáveis</Text>
          </View>

          {/* HIPOALERGÊNICOS */}
          <View style={styles.containerButton}>
            <TouchableOpacity style={styles.buttom}>
              <MaterialCommunityIcons
                name="flower"
                size={30}
                color="#7A3FA0"
              />
            </TouchableOpacity>
            <Text style={styles.text}>Hipoalergênicos</Text>
          </View>

        </ScrollView>
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

  containerButton: {
    marginHorizontal: 10,
    marginTop: 10,
    alignItems: 'center'

  },

  buttom: {
    height: 70,
    width: 70,
    backgroundColor: '#F4EEF7',
    borderColor: '#DDD4E2',
    borderRadius: 40,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
    marginTop: 4,
    fontWeight: '500'
  }


});