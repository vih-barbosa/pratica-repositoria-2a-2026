import { Text, View, StyleSheet, ScrollView } from 'react-native';

export default function Pagina1() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >

        {/* ELEMENTOS DECORATIVOS */}
        <Text style={styles.formula1}>E = mc²</Text>
        <Text style={styles.formula2}>π</Text>
        <Text style={styles.formula3}>∑</Text>
        <Text style={styles.formula4}>∞</Text>
        <Text style={styles.formula5}>λ</Text>
        <Text style={styles.formula6}>Δt</Text>

        {/* ÁTOMO */}
        <View style={styles.atom}>
          <Text style={styles.atomText}>⚛</Text>
        </View>

        {/* CABEÇALHO */}
        <Text style={styles.welcome}>
          BEM-VINDO
        </Text>

        <Text style={styles.title}>
          Albert
        </Text>

        <Text style={styles.titleGold}>
          Einstein
        </Text>

        <Text style={styles.description}>
          Uma viagem pelo universo da ciência,
          da física e das grandes ideias que
          transformaram o mundo.
        </Text>

        {/* ÁREA PRINCIPAL */}
        <View style={styles.physicsArea}>

          <View style={styles.physicsGlow} />

          <View style={styles.equationCircle}>
            <Text style={styles.equation}>
              E = mc²
            </Text>

            <Text style={styles.equationSmall}>
              RELATIVIDADE
            </Text>
          </View>

          {/* FOTO / REPRESENTAÇÃO */}
          <View style={styles.einsteinBadge}>
            <Text style={styles.einsteinIcon}>
              👨🏻‍🔬
            </Text>
          </View>

          <Text style={styles.star}>
            ⚛
          </Text>

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

        {/* EXPLORE */}
        <Text style={styles.exploreTitle}>
          Explore suas ideias
        </Text>

        <View style={styles.cardsRow}>

          {/* RELATIVIDADE */}
          <View style={styles.smallCard}>
            <Text style={styles.smallIcon}>⚛</Text>

            <Text style={styles.smallTitle}>
              Relatividade
            </Text>

            <Text style={styles.smallText}>
              Espaço e tempo
            </Text>
          </View>

          {/* LUZ */}
          <View style={styles.smallCard}>
            <Text style={styles.smallIcon}>💡</Text>

            <Text style={styles.smallTitle}>
              Luz
            </Text>

            <Text style={styles.smallText}>
              Ciência
            </Text>
          </View>

          {/* IMAGINAÇÃO */}
          <View style={styles.smallCard}>
            <Text style={styles.smallIcon}>🧠</Text>

            <Text style={styles.smallTitle}>
              Imaginação
            </Text>

            <Text style={styles.smallText}>
              Grandes ideias
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
    backgroundColor: '#101820',
  },

  content: {
    alignItems: 'center',
    paddingHorizontal: 22,
    paddingTop: 55,
    paddingBottom: 35,
  },

  /* FÓRMULAS */

  formula1: {
    position: 'absolute',
    top: 65,
    left: 25,
    color: '#F2C14E',
    fontSize: 18,
    fontWeight: '800',
    transform: [{ rotate: '-12deg' }],
  },

  formula2: {
    position: 'absolute',
    top: 125,
    left: 80,
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '700',
  },

  formula3: {
    position: 'absolute',
    top: 210,
    right: 30,
    color: '#F2C14E',
    fontSize: 25,
    fontWeight: '700',
  },

  formula4: {
    position: 'absolute',
    top: 290,
    left: 25,
    color: '#FFFFFF',
    fontSize: 22,
  },

  formula5: {
    position: 'absolute',
    top: 380,
    right: 40,
    color: '#F2C14E',
    fontSize: 25,
  },

  formula6: {
    position: 'absolute',
    top: 470,
    left: 45,
    color: '#FFFFFF',
    fontSize: 17,
  },

  /* ÁTOMO */

  atom: {
    position: 'absolute',
    top: 45,
    right: 38,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F2C14E',
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#F2C14E',
    shadowOpacity: 0.45,
    shadowRadius: 15,

    elevation: 10,
  },

  atomText: {
    color: '#101820',
    fontSize: 38,
  },

  /* TÍTULO */

  welcome: {
    color: '#F2C14E',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 5,
    marginBottom: 7,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: '800',
    lineHeight: 43,
  },

  titleGold: {
    color: '#F2C14E',
    fontSize: 42,
    fontWeight: '900',
    lineHeight: 45,
  },

  description: {
    color: '#B8C5D6',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 14,
    maxWidth: 310,
  },

  /* FÍSICA */

  physicsArea: {
    width: 310,
    height: 270,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: 5,
  },

  physicsGlow: {
    position: 'absolute',
    width: 210,
    height: 210,
    borderRadius: 110,
    backgroundColor: '#193B5A',
    opacity: 0.7,
  },

  equationCircle: {
    width: 175,
    height: 175,
    borderRadius: 90,

    backgroundColor: '#F2C14E',

    borderWidth: 5,
    borderColor: '#FFE08A',

    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#F2C14E',
    shadowOpacity: 0.4,
    shadowRadius: 20,

    elevation: 10,
  },

  equation: {
    color: '#101820',
    fontSize: 27,
    fontWeight: '900',
    letterSpacing: 1,
  },

  equationSmall: {
    color: '#263746',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 2,
    marginTop: 8,
  },

  /* EINSTEIN */

  einsteinBadge: {
    position: 'absolute',
    top: 20,
    left: 35,

    width: 65,
    height: 65,

    borderRadius: 35,

    backgroundColor: '#193B5A',

    borderWidth: 2,
    borderColor: '#F2C14E',

    alignItems: 'center',
    justifyContent: 'center',
  },

  einsteinIcon: {
    fontSize: 34,
  },

  star: {
    position: 'absolute',
    right: 20,
    bottom: 45,
    fontSize: 32,
    color: '#F2C14E',
  },

  /* FRASE */

  quoteCard: {
    width: '100%',

    backgroundColor: '#172635',

    borderRadius: 22,

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
    fontSize: 19,
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
    color: '#9EB0C4',
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

    backgroundColor: '#172B3D',

    borderRadius: 17,

    paddingVertical: 16,

    alignItems: 'center',

    borderWidth: 1,
    borderColor: '#38516A',
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
    color: '#94A8BE',
    fontSize: 10,
    marginTop: 3,
  },

});
