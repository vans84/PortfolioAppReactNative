import React from "react";
import { Text, View, Image } from "react-native";
import styles from "../styles";

import contacto from "../../assets/Contacto.png";

export default function Contatos() {
  return (
    <View style={styles.container}>
      <View style={styles.boxDescricao}>
        <Text style={styles.titulo}>Contatos:</Text>
        <Text style={styles.textos}>
          <p>Email: vanessa1984cm@gmail.com</p>
          <p>
            {" "}
            Linkedin: https://www.linkedin.com/in/vanessa-caetano-184265104/
          </p>
          <p>Github: https://github.com/vans84</p>
        </Text>
        <Image source={contacto} style={styles.contato} />
      </View>
    </View>
  );
}
