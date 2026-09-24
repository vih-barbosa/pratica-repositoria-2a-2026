
import { Text, View, StyleSheet } from 'react-native';

export default function Pagina2() {
  return (
    <View style={styles.container}>

      {/* Estrelas */}
      <Text style={styles.star1}>✦</Text>
      <Text style={styles.star2}>✧</Text>
      <Text style={styles.star3}>⋆</Text>

      {/* Título */}
      <Text style={styles.rose}>🌹</Text>

      <Text style={styles.title}>
        Meus Favoritos
      </Text>

      <Text style={styles.subtitle}>
        Pequenas coisas que se tornaram especiais
      </Text>

      {/* Card 1 */}
      <View style={styles.card}>
        <Text style={styles.cardIcon}>🌹</Text>

        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>
            Minha Rosa
          </Text>

          <Text style={styles.cardText}>
            Única entre tantas estrelas,
            especial por causa do vínculo criado.
          </Text>
        </View>

        <Text style={styles.heart}>♥</Text>
      </View>

      {/* Card 2 */}
      <View style={styles.card}>
        <Text style={styles.cardIcon}>🦊</Text>

        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>
            A Raposa
          </Text>

          <Text style={styles.cardText}>
            Uma amizade que ensina sobre
            criar laços e enxergar além.
          </Text>
        </View>

        <Text style={styles.heart}>♥</Text>
      </View>

      {/* Card 3 */}
      <View style={styles.card}>
        <Text style={styles.cardIcon}>⭐</Text>

        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>
            As Estrelas
          </Text>

          <Text style={styles.cardText}>
            Cada estrela pode guardar uma
            lembrança diferente.
          </Text>
        </View>

        <Text style={styles.heart}>♥</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#071A3D',
    paddingHorizontal: 24,
    paddingTop: 65,
  },

  rose: {
    fontSize: 42,
    marginBottom: 5,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '800',
  },

  subtitle: {
    color: '#AFC2E5',
    fontSize: 15,
    marginTop: 8,
    marginBottom: 28,
  },

  card: {
    width: '100%',
    minHeight: 105,
    backgroundColor: '#102A57',
    borderRadius: 20,
    padding: 17,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#294875',
  },

  cardIcon: {
    fontSize: 35,
    width: 50,
    textAlign: 'center',
    marginRight: 12,
  },

  cardContent: {
    flex: 1,
  },

  cardTitle: {
    color: '#E8C96A',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 5,
  },

  cardText: {
    color: '#D2DDF0',
    fontSize: 13,
    lineHeight: 19,
  },

  heart: {
    color: '#E85D75',
    fontSize: 25,
    marginLeft: 8,
  },

  star1: {
    position: 'absolute',
    top: 45,
    right: 35,
    color: '#E8C96A',
    fontSize: 28,
  },

  star2: {
    position: 'absolute',
    top: 140,
    right: 20,
    color: '#FFFFFF',
    fontSize: 20,
  },

  star3: {
    position: 'absolute',
    bottom: 130,
    left: 30,
    color: '#E8C96A',
    fontSize: 24,
  },
});

