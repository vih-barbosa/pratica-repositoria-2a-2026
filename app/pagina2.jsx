import { Text, View, StyleSheet, ScrollView } from 'react-native';

export default function Pagina2() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >

      {/* ELEMENTOS DECORATIVOS */}
      <Text style={styles.decor1}>☾</Text>
      <Text style={styles.decor2}>✦</Text>
      <Text style={styles.decor3}>🐾</Text>

      {/* TÍTULO */}
      <Text style={styles.moon}>
        🌕
      </Text>

      <Text style={styles.title}>
        Sobre
      </Text>

      <Text style={styles.titleBlue}>
        Teen Wolf
      </Text>

      <Text style={styles.subtitle}>
        Conheça o universo sobrenatural de Beacon Hills,
        seus personagens e os mistérios que cercam a cidade.
      </Text>

      {/* CARD — A SÉRIE */}
      <View style={styles.card}>

        <Text style={styles.cardIcon}>
          🐺
        </Text>

        <View style={styles.cardContent}>

          <Text style={styles.cardTitle}>
            A Série
          </Text>

          <Text style={styles.cardText}>
            Teen Wolf acompanha Scott McCall, um adolescente
            que passa por uma transformação sobrenatural e
            precisa aprender a lidar com seus novos poderes
            enquanto protege seus amigos.
          </Text>

        </View>

      </View>

      {/* CARD — BEACON HILLS */}
      <View style={styles.card}>

        <Text style={styles.cardIcon}>
          🌲
        </Text>

        <View style={styles.cardContent}>

          <Text style={styles.cardTitle}>
            Beacon Hills
          </Text>

          <Text style={styles.cardText}>
            A cidade é o principal cenário da história.
            Por trás de sua aparência tranquila, existem
            criaturas sobrenaturais, antigos mistérios e
            conflitos entre diferentes grupos.
          </Text>

        </View>

      </View>

      {/* CARD — SCOTT */}
      <View style={styles.card}>

        <Text style={styles.cardIcon}>
          🔴
        </Text>

        <View style={styles.cardContent}>

          <Text style={styles.cardTitle}>
            Scott McCall
          </Text>

          <Text style={styles.cardText}>
            Scott é o protagonista da série. Depois de ser
            mordido por um lobisomem, ele começa a descobrir
            habilidades sobrenaturais e aprende que ser um
            verdadeiro líder também significa proteger os outros.
          </Text>

        </View>

      </View>

      {/* CARD ESPECIAL — SOBRENATURAL */}
      <View style={styles.supernaturalCard}>

        <Text style={styles.wolf}>
          🐺
        </Text>

        <Text style={styles.supernaturalTitle}>
          O Universo Sobrenatural
        </Text>

        <Text style={styles.supernaturalText}>
          Lobisomens, caçadores, banshees, kitsunes e outras
          criaturas fazem parte do universo de Teen Wolf.
        </Text>

        <View style={styles.lineBlue} />

        <Text style={styles.supernaturalSmall}>
          NADA É O QUE PARECE EM BEACON HILLS
        </Text>

      </View>

      {/* CARD — CAÇADORES */}
      <View style={styles.card}>

        <Text style={styles.cardIcon}>
          🏹
        </Text>

        <View style={styles.cardContent}>

          <Text style={styles.cardTitle}>
            Os Caçadores
          </Text>

          <Text style={styles.cardText}>
            Algumas famílias dedicam gerações a caçar
            criaturas sobrenaturais. A família Argent é
            uma das mais importantes nesse contexto.
          </Text>

        </View>

      </View>

      {/* CARD — AMIZADE */}
      <View style={styles.card}>

        <Text style={styles.cardIcon}>
          🐾
        </Text>

        <View style={styles.cardContent}>

          <Text style={styles.cardTitle}>
            A Alcateia
          </Text>

          <Text style={styles.cardText}>
            A amizade e a lealdade são fundamentais.
            Scott conta com seus amigos para enfrentar
            ameaças e proteger as pessoas que ama.
          </Text>

        </View>

      </View>

      {/* FRASE */}
      <View style={styles.quoteCard}>

        <Text style={styles.quoteMark}>
          “
        </Text>

        <Text style={styles.quote}>
          Você não precisa enfrentar
          o sobrenatural sozinho.
        </Text>

        <View style={styles.quoteLine} />

        <Text style={styles.quoteAuthor}>
          — Beacon Hills
        </Text>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  /* FUNDO */

  container: {
    flex: 1,
    backgroundColor: '#07090D',
  },

  content: {
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },

  /* DECORAÇÕES */

  decor1: {
    position: 'absolute',
    top: 40,
    right: 30,
    color: '#63D7FF',
    fontSize: 28,
  },

  decor2: {
    position: 'absolute',
    top: 170,
    right: 22,
    color: '#FFFFFF',
    fontSize: 22,
  },

  decor3: {
    position: 'absolute',
    bottom: 120,
    left: 25,
    color: '#63D7FF',
    fontSize: 25,
  },

  /* TÍTULO */

  moon: {
    fontSize: 40,
    marginBottom: 5,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: '900',
    lineHeight: 39,
  },

  titleBlue: {
    color: '#63D7FF',
    fontSize: 39,
    fontWeight: '900',
    lineHeight: 44,

    textShadowColor: '#168CB8',
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    textShadowRadius: 12,
  },

  subtitle: {
    color: '#A8B7C3',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 10,
    marginBottom: 28,
  },

  /* CARDS */

  card: {
    width: '100%',
    minHeight: 125,

    backgroundColor: '#0E151C',

    borderRadius: 20,

    padding: 17,
    marginBottom: 15,

    flexDirection: 'row',
    alignItems: 'center',

    borderWidth: 1,
    borderColor: '#263B4A',

    shadowColor: '#000000',
    shadowOpacity: 0.35,
    shadowRadius: 8,

    elevation: 4,
  },

  cardIcon: {
    fontSize: 35,
    width: 52,
    textAlign: 'center',
    marginRight: 12,
  },

  cardContent: {
    flex: 1,
  },

  cardTitle: {
    color: '#63D7FF',
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 6,
  },

  cardText: {
    color: '#D1DCE3',
    fontSize: 13,
    lineHeight: 19,
  },

  /* CARD SOBRENATURAL */

  supernaturalCard: {
    width: '100%',

    backgroundColor: '#0B202B',

    borderRadius: 22,

    padding: 22,

    marginBottom: 15,

    alignItems: 'center',

    borderWidth: 1,
    borderColor: '#28718D',

    shadowColor: '#4DD5FF',
    shadowOpacity: 0.18,
    shadowRadius: 15,

    elevation: 7,
  },

  wolf: {
    fontSize: 52,
    marginBottom: 8,
  },

  supernaturalTitle: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: '900',
    textAlign: 'center',
  },

  supernaturalText: {
    color: '#AFC3CE',
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'center',
    marginTop: 8,
  },

  lineBlue: {
    width: 50,
    height: 2,

    backgroundColor: '#63D7FF',

    marginVertical: 13,
  },

  supernaturalSmall: {
    color: '#63D7FF',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1.5,
    textAlign: 'center',
  },

  /* FRASE */

  quoteCard: {
    width: '100%',

    backgroundColor: '#101820',

    borderRadius: 20,

    padding: 22,

    alignItems: 'center',

    borderWidth: 1,
    borderColor: '#263B4A',

    marginTop: 5,
  },

  quoteMark: {
    color: '#63D7FF',
    fontSize: 40,
    height: 35,
    fontWeight: '900',
  },

  quote: {
    color: '#FFFFFF',
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    lineHeight: 27,
    marginTop: 5,
  },

  quoteLine: {
    width: 45,
    height: 2,
    backgroundColor: '#63D7FF',
    marginVertical: 12,
  },

  quoteAuthor: {
    color: '#718999',
    fontSize: 12,
  },

});
