import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffe1d6",
    flex: 1,
    alignItems: "center",
    padding: "20px 0",
  },
  boxDescricao: {
    alignItems: "center",
  },

  titulo: {
    color: "#e3916e",
    fontSize: 40,
    marginBottom: 10,
    fontWeight: "700",
    textAlign: "center",
  },

  textos: {
    color: "#000",
    fontSize: 15,
    marginBottom: 10,
    textAlign: "center",
    padding: 20,
  },

  imagem: {
    width: 800,
    height: 200,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },

  progr: {
    width: 400,
    height: 200,
    marginBottom: 40,
    marginLeft: 10,
    marginRight: 10,
  },

  web: {
    width: 400,
    height: 300,
    marginBottom: 60,
    marginLeft: 10,
    marginRight: 10,
  },

  contato: {
    width: 400,
    height: 300,
    marginBottom: 60,
    marginLeft: 10,
    marginRight: 10,
  },

  photo: {
    marginTop: 10,
    marginBottom: 10,
    width: 150,
    height: 150,
    borderRadius: 50,
  },
  texto: {
    color: "white",
    fontSize: 15,
    marginBottom: 10,
    textAlign: "center",
  },

  boxBotoes: {
    borderRadius: "50px",
    backgroundColor: "black",
    padding: "20px",
  },

  boxButton: {
    flexDirection: "row",
    gridGap: "10px",
  },
});

export default styles;
