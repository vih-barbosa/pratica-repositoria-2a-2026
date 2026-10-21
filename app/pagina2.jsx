import { Text, View, StyleSheet, ScrollView } from 'react-native';

export default function Pagina2() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >

        {/* ELEMENTOS TECNOLÓGICOS DE FUNDO */}
        <Text style={styles.code1}>{'{ AI }'}</Text>
        <Text style={styles.code2}>101</Text>
        <Text style={styles.code3}>{'</>'}</Text>
        <Text style={styles.code4}>01</Text>

        <View style={styles.dot1} />
        <View style={styles.dot2} />
        <View style={styles.dot3} />

        {/* ÍCONE */}
        <View style={styles.iconCircle}>
          <Text style={styles.aiIcon}>🧠</Text>
        </View>

        {/* TÍTULO */}
        <Text style={styles.title}>
          Meus Favoritos
        </Text>

        <Text style={styles.subtitle}>
          Tecnologias que tornam a inteligência artificial possível
        </Text>

        {/* CARD 1 */}
        <View style={styles.card}>

          <View style={styles.cardIconBox}>
            <Text style={styles.cardIcon}>🤖</Text>
          </View>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>
              Inteligência Artificial
            </Text>

            <Text style={styles.cardText}>
              Sistemas capazes de aprender, analisar
              informações e realizar tarefas inteligentes.
            </Text>
          </View>

          <Text style={styles.favorite}>✦</Text>
        </View>

        {/* CARD 2 */}
        <View style={styles.card}>

          <View style={styles.cardIconBox}>
            <Text style={styles.cardIcon}>🧠</Text>
          </View>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>
              Machine Learning
            </Text>

            <Text style={styles.cardText}>
              Algoritmos que aprendem com dados
              para encontrar padrões e fazer previsões.
            </Text>
          </View>

          <Text style={styles.favorite}>✦</Text>
        </View>

        {/* CARD 3 */}
        <View style={styles.card}>

          <View style={styles.cardIconBox}>
            <Text style={styles.cardIcon}>⚙️</Text>
          </View>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>
              Automação
            </Text>

            <Text style={styles.cardText}>
              Tecnologia utilizada para executar tarefas
              de forma rápida, inteligente e eficiente.
            </Text>
          </View>

          <Text style={styles.favorite}>✦</Text>
        </View>

        {/* CARD 4 */}
        <View style={styles.card}>

          <View style={styles.cardIconBox}>
            <Text style={styles.cardIcon}>📊</Text>
          </View>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>
              Análise de Dados
            </Text>

            <Text style={styles.cardText}>
              Transformação de grandes quantidades
              de dados em informações úteis.
            </Text>
          </View>

          <Text style={styles.favorite}>✦</Text>
        </View>

        {/* CARD 5 */}
        <View style={styles.card}>

          <View style={styles.cardIconBox}>
            <Text style={styles.cardIcon}>💬</Text>
          </View>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>
              IA Generativa
            </Text>

            <Text style={styles.cardText}>
              Criação de textos, imagens, códigos
              e outros conteúdos a partir de comandos.
            </Text>
          </View>

          <Text style={styles.favorite}>✦</Text>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#030712',
  },

  content: {
    paddingHorizontal: 22,
    paddingTop: 65,
    paddingBottom: 35,
  },

  /* ELEMENTOS DO FUNDO */

  code1: {
    position: 'absolute',
    top: 45,
    right: 25,
    color: '#00E5FF',
    opacity: 0.35,
    fontSize: 16,
    fontWeight: '900',
  },

  code2: {
    position: 'absolute',
    top: 170,
    right: 15,
    color: '#7C4DFF',
    opacity: 0.3,
    fontSize: 18,
    fontWeight: '900',
  },

  code3: {
    position: 'absolute',
    bottom: 170,
    left: 15,
    color: '#00E5FF',
    opacity: 0.3,
    fontSize: 20,
    fontWeight: '900',
  },

  code4: {
    position: 'absolute',
    bottom: 70,
    right: 25,
    color: '#7C4DFF',
    opacity: 0.3,
    fontSize: 16,
    fontWeight: '900',
  },

  dot1: {
    position: 'absolute',
    top: 120,
    left: 25,
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#00E5FF',

    shadowColor: '#00E5FF',
    shadowOpacity: 1,
    shadowRadius: 8,
  },

  dot2: {
    position: 'absolute',
    top: 330,
    right: 20,
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: '#7C4DFF',

    shadowColor: '#7C4DFF',
    shadowOpacity: 1,
    shadowRadius: 10,
  },

  dot3: {
    position: 'absolute',
    bottom: 250,
    left: 40,
    width: 4,
    height: 4,
    borderRadius: 5,
    backgroundColor: '#00E5FF',
  },

  /* ÍCONE PRINCIPAL */

  iconCircle: {
    width: 75,
    height: 75,
    borderRadius: 40,

    backgroundColor: '#071B32',

    borderWidth: 2,
    borderColor: '#00E5FF',

    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 15,

    shadowColor: '#00E5FF',
    shadowOpacity: 0.6,
    shadowRadius: 18,

    elevation: 10,
  },

  aiIcon: {
    fontSize: 40,
  },

  /* TÍTULO */

  title: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '900',
  },

  subtitle: {
    color: '#8EA6C8',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 8,
    marginBottom: 28,
    maxWidth: 330,
  },

  /* CARDS */

  card: {
    width: '100%',
    minHeight: 115,

    backgroundColor: '#08182D',

    borderRadius: 20,

    padding: 15,
    marginBottom: 15,

    flexDirection: 'row',
    alignItems: 'center',

    borderWidth: 1,
    borderColor: '#16456A',

    shadowColor: '#00E5FF',
    shadowOpacity: 0.08,
    shadowRadius: 12,
  },

  cardIconBox: {
    width: 55,
    height: 55,
    borderRadius: 15,

    backgroundColor: '#0A2545',

    borderWidth: 1,
    borderColor: '#1B6288',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 13,
  },

  cardIcon: {
    fontSize: 28,
  },

  cardContent: {
    flex: 1,
  },

  cardTitle: {
    color: '#00E5FF',
    fontSize: 17,
    fontWeight: '800',
    marginBottom: 5,
  },

  cardText: {
    color: '#C1D0E5',
    fontSize: 12.5,
    lineHeight: 18,
  },

  favorite: {
    color: '#7C4DFF',
    fontSize: 25,
    marginLeft: 8,

    textShadowColor: '#7C4DFF',
    textShadowOpacity: 0.8,
    textShadowRadius: 8,
  },

});
