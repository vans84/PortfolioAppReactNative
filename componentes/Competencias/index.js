import React from "react";
import { Text, View, Image } from "react-native";
import styles from "../styles";

import web from "../../assets/web.jpg";

export default function Competencias() {
  return (
    <View style={styles.container}>
      <View style={styles.boxDescricao}>
        <Text style={styles.titulo}>Competências:</Text>
        <Text style={styles.textos}>
          Gestora de Redes Sociais, com conhecimento em Marketing Digital,
          Design Gráfico e Ilustração de Identidade Visual e um historial de
          trabalho na indústria financeira e em comércio, com fortes
          competências nos programas da Adobe e Photoshop, Facebook Ads,
          Instagram Ads e Google Analytics. As competências de Web Developer que
          adquiri no curso do IEFP foram as seguintes: Javascript, Typescript,
          React,React Native, Node Js, Html, Css, MongoDb, Material Ui e
          Postman!
        </Text>
        <Image source={web} style={styles.web} />
      </View>
    </View>
  );
}
