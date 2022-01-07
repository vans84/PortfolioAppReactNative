import React from "react";
import { Text, View, Image } from "react-native";
import styles from "../styles";

import progr from "../../assets/progr.png";

export default function Sobre() {
  return (
    <View style={styles.container}>
      <View style={styles.boxDescricao}>
        <Text style={styles.titulo}>Sobre</Text>
        <Text style={styles.textos}>
          <p>
            O meu nome é Vanessa Caetano, tenho 37 anos e sou formada em Web
            Designer e Marketing Digital. Á parte do meu trabalho de consultora
            de IT (tecnologias de informação), faço trabalhos como freelancer
            nas seguintes áreas:
          </p>
          <p>
            - Design: Currículos personalizados, Flyers promocionais, cartazes,
            cartões de visita e logótipos;
          </p>
          <p> - Desenvolvimento de Websites: Websites, Blogs e Lojas Online;</p>
          <p>- Desenvolvimento App Mobile.</p>
        </Text>
        <Image source={progr} style={styles.progr} />
      </View>
    </View>
  );
}
