import { Text, View, StyleSheet, ScrollView } from 'react-native';

export default function Pagina2() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >

      {/* ELEMENTOS DECORATIVOS */}
      <Text style={styles.formula1}>E = mc²</Text>
      <Text style={styles.formula2}>⚛</Text>
      <Text style={styles.formula3}>∞</Text>

      {/* TÍTULO */}
      <Text style={styles.atom}>⚛</Text>

      <Text style={styles.title}>
        Sobre Albert
      </Text>

      <Text style={styles.titleGold}>
        Einstein
      </Text>

      <Text style={styles.subtitle}>
        O cientista que revolucionou a maneira como
        entendemos o espaço, o tempo e a energia.
      </Text>

      {/* CARD BIOGRAFIA */}
      <View style={styles.card}>

        <Text style={styles.cardIcon}>
          👨🏻‍🔬
        </Text>

        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>
            Quem foi?
          </Text>

          <Text style={styles.cardText}>
            Albert Einstein nasceu em 14 de março de
            1879, em Ulm, no então Império Alemão.
            Foi um físico conhecido por suas contribuições
            fundamentais para a física moderna.
          </Text>
        </View>

      </View>

      {/* CARD FORMAÇÃO */}
      <View style={styles.card}>

        <Text style={styles.cardIcon}>
          🎓
        </Text>

        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>
            Formação
          </Text>

          <Text style={styles.cardText}>
            Einstein estudou no Instituto Politécnico
            Federal de Zurique, na Suíça, onde se
            formou em matemática e física em 1900.
          </Text>
        </View>

      </View>

      {/* CARD RELATIVIDADE */}
      <View style={styles.card}>

        <Text style={styles.cardIcon}>
          ⚛
        </Text>

        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>
            Teoria da Relatividade
          </Text>

          <Text style={styles.cardText}>
            Em 1905, apresentou a teoria da relatividade
            especial. Em 1915, desenvolveu a teoria da
            relatividade geral, transformando a compreensão
            da gravidade e do espaço-tempo.
          </Text>
        </View>

      </View>

      {/* CARD E = MC² */}
      <View style={styles.equationCard}>

        <Text style={styles.equation}>
          E = mc²
        </Text>

        <Text style={styles.equationTitle}>
          A famosa equação
        </Text>

        <Text style={styles.equationText}>
          A equação mostra a relação entre massa e
          energia e se tornou uma das fórmulas mais
          conhecidas da ciência.
        </Text>

      </View>

      {/* CARD NOBEL */}
      <View style={styles.card}>

        <Text style={styles.cardIcon}>
          🏆
        </Text>

        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>
            Prêmio Nobel
          </Text>

          <Text style={styles.cardText}>
            Em 1921, Einstein recebeu o Prêmio Nobel
            de Física, principalmente por sua explicação
            do efeito fotoelétrico.
          </Text>
        </View>

      </View>

      {/* CARD CURIOSIDADE */}
      <View style={styles.card}>

        <Text style={styles.cardIcon}>
          💡
        </Text>

        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>
            Curiosidade
          </Text>

          <Text style={styles.cardText}>
            Einstein também era conhecido por seu
            interesse por filosofia, música e questões
            relacionadas à paz e à sociedade.
          </Text>
        </View>

      </View>

      {/* FRASE */}
      <View style={styles.quoteCard}>

        <Text style={styles.quoteMark}>
          “
        </Text>

        <Text style={styles.quote}>
          A imaginação é mais importante
          que o conhecimento.
        </Text>

        <View style={styles.quoteLine} />

        <Text style={styles.quoteAuthor}>
          — Albert Einstein
        </Text>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#101820',
  },

  content: {
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },

  /* ELEMENTOS DECORATIVOS */

  formula1: {
    position: 'absolute',
    top: 35,
    right: 30,
    color: '#F2C14E',
    fontSize: 18,
    fontWeight: '800',
    transform: [{ rotate: '-8deg' }],
  },

  formula2: {
    position: 'absolute',
    top: 155,
    right: 20,
    color: '#FFFFFF',
    fontSize: 24,
  },

  formula3: {
    position: 'absolute',
    bottom: 120,
    left: 25,
    color: '#F2C14E',
    fontSize: 25,
  },

  /* TÍTULO */

  atom: {
    color: '#F2C14E',
    fontSize: 40,
    marginBottom: 5,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '800',
    lineHeight: 38,
  },

  titleGold: {
    color: '#F2C14E',
    fontSize: 36,
    fontWeight: '900',
    lineHeight: 42,
  },

  subtitle: {
    color: '#AFC2D6',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 10,
    marginBottom: 28,
  },

  /* CARDS */

  card: {
    width: '100%',
    minHeight: 120,

    backgroundColor: '#172B3D',

    borderRadius: 20,

    padding: 17,
    marginBottom: 15,

    flexDirection: 'row',
    alignItems: 'center',

    borderWidth: 1,
    borderColor: '#38516A',
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
    color: '#F2C14E',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 6,
  },

  cardText: {
    color: '#D2DCE8',
    fontSize: 13,
    lineHeight: 19,
  },

  /* EQUAÇÃO */

  equationCard: {
    width: '100%',

    backgroundColor: '#F2C14E',

    borderRadius: 20,

    padding: 20,

    marginBottom: 15,

    alignItems: 'center',

    shadowColor: '#F2C14E',
    shadowOpacity: 0.25,
    shadowRadius: 10,

    elevation: 6,
  },

  equation: {
    color: '#101820',
    fontSize: 32,
    fontWeight: '900',
    letterSpacing: 2,
  },

  equationTitle: {
    color: '#263746',
    fontSize: 16,
    fontWeight: '800',
    marginTop: 5,
  },

  equationText: {
    color: '#354657',
    fontSize: 13,
    lineHeight: 19,
    textAlign: 'center',
    marginTop: 8,
  },

  /* FRASE */

  quoteCard: {
    width: '100%',

    backgroundColor: '#172635',

    borderRadius: 20,

    padding: 22,

    alignItems: 'center',

    borderWidth: 1,
    borderColor: '#38516A',

    marginTop: 5,
  },

  quoteMark: {
    color: '#F2C14E',
    fontSize: 40,
    height: 35,
    fontWeight: '800',
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
    backgroundColor: '#F2C14E',
    marginVertical: 12,
  },

  quoteAuthor: {
    color: '#91A5BA',
    fontSize: 12,
  },

});
