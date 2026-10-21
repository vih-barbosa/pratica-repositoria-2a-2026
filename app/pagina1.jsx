import { Text, View, StyleSheet, ScrollView } from 'react-native';

export default function Pagina1() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >

        {/* ELEMENTOS DE FUNDO */}
        <Text style={styles.code1}>{'{ AI }'}</Text>
        <Text style={styles.code2}>{'</>'}</Text>
        <Text style={styles.code3}>01</Text>
        <Text style={styles.code4}>101</Text>

        <View style={styles.dot1} />
        <View style={styles.dot2} />
        <View style={styles.dot3} />

        {/* CÍRCULO TECNOLÓGICO */}
        <View style={styles.techCircle}>
          <Text style={styles.techCircleText}>AI</Text>
        </View>

        {/* CABEÇALHO */}
        <Text style={styles.welcome}>
          BEM-VINDO AO FUTURO
        </Text>

        <Text style={styles.title}>
          Inteligência
        </Text>

        <Text style={styles.titleBlue}>
          Artificial
        </Text>

        <Text style={styles.description}>
          Explore o universo da inteligência artificial,
          tecnologia, inovação e novas possibilidades.
        </Text>

        {/* CÉREBRO / IA */}
        <View style={styles.aiArea}>

          <View style={styles.aiGlow} />

          <View style={styles.aiCircle}>
            <Text style={styles.aiIcon}>🧠</Text>
            <Text style={styles.aiText}>AI</Text>
          </View>

          {/* NÓS DE CONEXÃO */}
          <View style={[styles.node, styles.node1]}>
            <Text style={styles.nodeText}>⚡</Text>
          </View>

          <View style={[styles.node, styles.node2]}>
            <Text style={styles.nodeText}>⚙</Text>
          </View>

          <View style={[styles.node, styles.node3]}>
            <Text style={styles.nodeText}>∞</Text>
          </View>

          <View style={[styles.node, styles.node4]}>
            <Text style={styles.nodeText}>✦</Text>
          </View>

          {/* LINHAS */}
          <View style={[styles.line, styles.line1]} />
          <View style={[styles.line, styles.line2]} />
          <View style={[styles.line, styles.line3]} />
          <View style={[styles.line, styles.line4]} />

        </View>

        {/* FRASE */}
        <View style={styles.quoteCard}>

          <Text style={styles.quoteMark}>
            AI
          </Text>

          <Text style={styles.quote}>
            A tecnologia transforma
            possibilidades em realidade.
          </Text>

          <View style={styles.quoteLine} />

          <Text style={styles.quoteAuthor}>
            — Inteligência Artificial
          </Text>

        </View>

        {/* EXPLORE */}
        <Text style={styles.exploreTitle}>
          Explore a Inteligência Artificial
        </Text>

        <View style={styles.cardsRow}>

          {/* MACHINE LEARNING */}
          <View style={styles.smallCard}>
            <Text style={styles.smallIcon}>🤖</Text>

            <Text style={styles.smallTitle}>
              Machine
            </Text>

            <Text style={styles.smallText}>
              Learning
            </Text>
          </View>

          {/* ROBÓTICA */}
          <View style={styles.smallCard}>
            <Text style={styles.smallIcon}>⚙️</Text>

            <Text style={styles.smallTitle}>
              Robótica
            </Text>

            <Text style={styles.smallText}>
              Automação
            </Text>
          </View>

          {/* DADOS */}
          <View style={styles.smallCard}>
            <Text style={styles.smallIcon}>📊</Text>

            <Text style={styles.smallTitle}>
              Dados
            </Text>

            <Text style={styles.smallText}>
              Informação
            </Text>
          </View>

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
    alignItems: 'center',
    paddingHorizontal: 22,
    paddingTop: 55,
    paddingBottom: 35,
  },

  /* ELEMENTOS DE FUNDO */

  code1: {
    position: 'absolute',
    top: 80,
    left: 18,
    color: '#00E5FF',
    opacity: 0.35,
    fontSize: 16,
    fontWeight: '800',
  },

  code2: {
    position: 'absolute',
    top: 170,
    right: 20,
    color: '#7C4DFF',
    opacity: 0.4,
    fontSize: 20,
    fontWeight: '900',
  },

  code3: {
    position: 'absolute',
    top: 350,
    left: 15,
    color: '#00E5FF',
    opacity: 0.25,
    fontSize: 18,
    fontWeight: '800',
  },

  code4: {
    position: 'absolute',
    top: 450,
    right: 25,
    color: '#7C4DFF',
    opacity: 0.3,
    fontSize: 15,
    fontWeight: '900',
  },

  dot1: {
    position: 'absolute',
    top: 130,
    left: 145,
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
    top: 270,
    right: 90,
    width: 6,
    height: 6,
    borderRadius: 5,
    backgroundColor: '#7C4DFF',
    shadowColor: '#7C4DFF',
    shadowOpacity: 1,
    shadowRadius: 10,
  },

  dot3: {
    position: 'absolute',
    top: 500,
    left: 100,
    width: 4,
    height: 4,
    borderRadius: 5,
    backgroundColor: '#00E5FF',
  },

  /* CÍRCULO TECNOLÓGICO */

  techCircle: {
    position: 'absolute',
    top: 40,
    right: 38,
    width: 58,
    height: 58,
    borderRadius: 30,
    backgroundColor: '#071B32',
    borderWidth: 2,
    borderColor: '#00E5FF',
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#00E5FF',
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 10,
  },

  techCircleText: {
    color: '#00E5FF',
    fontSize: 18,
    fontWeight: '900',
  },

  /* TÍTULO */

  welcome: {
    color: '#00E5FF',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 4,
    marginBottom: 8,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 37,
    fontWeight: '800',
    lineHeight: 42,
  },

  titleBlue: {
    color: '#00E5FF',
    fontSize: 42,
    fontWeight: '900',
    lineHeight: 45,

    textShadowColor: '#00E5FF',
    textShadowOpacity: 0.5,
    textShadowRadius: 15,
  },

  description: {
    color: '#91A7C5',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 14,
    maxWidth: 310,
  },

  /* ÁREA DA IA */

  aiArea: {
    width: 310,
    height: 280,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: 8,
  },

  aiGlow: {
    position: 'absolute',
    width: 210,
    height: 210,
    borderRadius: 110,
    backgroundColor: '#083B5C',
    opacity: 0.5,
  },

  aiCircle: {
    width: 175,
    height: 175,
    borderRadius: 90,

    backgroundColor: '#071B32',

    borderWidth: 3,
    borderColor: '#00E5FF',

    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#00E5FF',
    shadowOpacity: 0.7,
    shadowRadius: 25,

    elevation: 15,
  },

  aiIcon: {
    fontSize: 70,
  },

  aiText: {
    color: '#00E5FF',
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 3,
    marginTop: 5,
  },

  /* NÓS */

  node: {
    position: 'absolute',
    width: 55,
    height: 55,
    borderRadius: 30,

    backgroundColor: '#0A1930',

    borderWidth: 2,
    borderColor: '#7C4DFF',

    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#7C4DFF',
    shadowOpacity: 0.6,
    shadowRadius: 12,
  },

  nodeText: {
    color: '#FFFFFF',
    fontSize: 22,
  },

  node1: {
    top: 20,
    left: 25,
  },

  node2: {
    top: 15,
    right: 25,
  },

  node3: {
    bottom: 20,
    left: 30,
  },

  node4: {
    bottom: 15,
    right: 25,
  },

  /* LINHAS DE CONEXÃO */

  line: {
    position: 'absolute',
    height: 2,
    backgroundColor: '#00E5FF',
    opacity: 0.5,
  },

  line1: {
    width: 55,
    transform: [{ rotate: '25deg' }],
    top: 75,
    left: 75,
  },

  line2: {
    width: 55,
    transform: [{ rotate: '-25deg' }],
    top: 70,
    right: 75,
  },

  line3: {
    width: 60,
    transform: [{ rotate: '-25deg' }],
    bottom: 72,
    left: 75,
  },

  line4: {
    width: 60,
    transform: [{ rotate: '25deg' }],
    bottom: 68,
    right: 70,
  },

  /* CARD DA FRASE */

  quoteCard: {
    width: '100%',

    backgroundColor: '#08182D',

    borderRadius: 22,

    padding: 22,

    alignItems: 'center',

    borderWidth: 1,
    borderColor: '#123B5C',

    shadowColor: '#00E5FF',
    shadowOpacity: 0.15,
    shadowRadius: 15,

    marginTop: 5,
  },

  quoteMark: {
    color: '#00E5FF',
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 3,
  },

  quote: {
    color: '#FFFFFF',
    fontSize: 19,
    fontStyle: 'italic',
    textAlign: 'center',
    lineHeight: 27,
    marginTop: 8,
  },

  quoteLine: {
    width: 45,
    height: 2,
    backgroundColor: '#00E5FF',
    marginVertical: 12,
  },

  quoteAuthor: {
    color: '#7188AA',
    fontSize: 12,
  },

  /* EXPLORE */

  exploreTitle: {
    alignSelf: 'flex-start',
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
    marginTop: 28,
    marginBottom: 14,
  },

  cardsRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  smallCard: {
    width: '31%',

    backgroundColor: '#081A34',

    borderRadius: 17,

    paddingVertical: 16,

    alignItems: 'center',

    borderWidth: 1,
    borderColor: '#16456A',

    shadowColor: '#00E5FF',
    shadowOpacity: 0.08,
    shadowRadius: 10,
  },

  smallIcon: {
    fontSize: 28,
    marginBottom: 7,
  },

  smallTitle: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
    textAlign: 'center',
  },

  smallText: {
    color: '#6F9FC7',
    fontSize: 10,
    marginTop: 3,
  },

});

