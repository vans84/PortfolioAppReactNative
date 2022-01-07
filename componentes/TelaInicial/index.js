import React from "react";
import { View, Pressable, Image, Text } from "react-native";
import capa from "../../assets/capa.jpg";
import styles from "../styles";
import photo from "../../assets/photo.jpg";

export default function TelaInicial(props) {
  return (
    <View style={styles.container}>
      <Image source={capa} style={styles.imagem} />
      <Image source={photo} style={styles.photo} />

      <Text style={styles.textos}>FullStack Developer</Text>
      <View style={styles.boxButton}>
        <Pressable
          style={styles.boxBotoes}
          onPress={() => props.navigation.navigate("Sobre")}
        >
          <Text style={styles.texto}>Sobre</Text>
        </Pressable>
        <Pressable
          style={styles.boxBotoes}
          onPress={() => props.navigation.navigate("Competencias")}
        >
          <Text style={styles.texto}>Competências</Text>
        </Pressable>
        <Pressable
          style={styles.boxBotoes}
          onPress={() => props.navigation.navigate("Contatos")}
        >
          <Text style={styles.texto}>Contato</Text>
        </Pressable>
      </View>
    </View>
  );
}
