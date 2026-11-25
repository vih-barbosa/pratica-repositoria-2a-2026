import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela Inicial</Text>

      <Link href="/pagina1" asChild>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Ir para Página 1</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/pagina2" asChild>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Ir para Página 2</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/pagina3" asChild>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Ir para Página 3</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    padding: 20,
    gap: 15,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});