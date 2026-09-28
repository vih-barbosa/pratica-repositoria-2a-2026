import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';

export default function Pagina1() {
  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=80',
      }}
      style={styles.background}
      imageStyle={styles.backgroundImage}
    >

      {/* CAMADA ESCURA */}
      <View style={styles.overlay} />

      {/* LUA / LUZ */}
      <View style={styles.fullMoon}>
        <Text style={styles.moonSymbol}>🔴</Text>
      </View>

      {/* SILHUETA SOBRENATURAL */}
      <Text style={styles.monsterSilhouette}>
        👾
      </Text>

      {/* NÉVOA */}
      <View style={styles.fog1} />
      <View style={styles.fog2} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >

        {/* ELEMENTOS SOBRENATURAIS */}

        <Text style={styles.symbol1}>✦</Text>
        <Text style={styles.symbol2}>✧</Text>
        <Text style={styles.symbol3}>☾</Text>

        {/* CABEÇALHO */}

        <Text style={styles.welcome}>
          BEM-VINDO A HAWKINS
        </Text>

        <Text style={styles.title}>
          Stranger
        </Text>

        <Text style={styles.titleRed}>
          Things
        </Text>

        <Text style={styles.description}>
          Uma pequena cidade escondendo
          experimentos secretos, criaturas
          e mistérios do Mundo Invertido.
        </Text>

        {/* ÁREA PRINCIPAL */}

        <View style={styles.strangerArea}>

          <View style={styles.glow} />

          <View style={styles.mainCircle}>

            <Text style={styles.strangerEmoji}>
              🔦
            </Text>

            <Text style={styles.hawkins}>
              HAWKINS
            </Text>

          </View>

          {/* ELEMENTO SOBRENATURAL */}

          <View style={styles.eyeBadge}>
            <Text style={styles.eye}>
              👁️
            </Text>
          </View>

          {/* LUZ */}

          <Text style={styles.miniLight}>
            💡
          </Text>

        </View>

        {/* FRASE */}

        <View style={styles.quoteCard}>

          <Text style={styles.quoteMark}>
            “
          </Text>

          <Text style={styles.quote}>
            Amigos não mentem. Algumas coisas,
            porém, vivem no outro lado.
          </Text>

          <View style={styles.quoteLine} />

          <Text style={styles.quoteAuthor}>
            — Stranger Things
          </Text>

        </View>

        {/* ELEMENTOS */}

        <Text style={styles.exploreTitle}>
          O universo de Hawkins
        </Text>

        <View style={styles.cardsRow}>

          <View style={styles.smallCard}>

            <Text style={styles.smallIcon}>
              🧪
            </Text>

            <Text style={styles.smallTitle}>
              Laboratório
            </Text>

            <Text style={styles.smallText}>
              Experimentos
            </Text>

          </View>

          <View style={styles.smallCard}>

            <Text style={styles.smallIcon}>
              👾
            </Text>

            <Text style={styles.smallTitle}>
              Criaturas
            </Text>

            <Text style={styles.smallText}>
              Mundo Invertido
            </Text>

          </View>

          <View style={styles.smallCard}>

            <Text style={styles.smallIcon}>
              🚲
            </Text>

            <Text style={styles.smallTitle}>
              Hawkins
            </Text>

            <Text style={styles.smallText}>
              Mistérios
            </Text>

          </View>

        </View>

      </ScrollView>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  /* FUNDO */

  background: {
    flex: 1,
    backgroundColor: '#050307',
  },

  backgroundImage: {
    opacity: 0.45,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,

    backgroundColor: '#080107',

    opacity: 0.78,
  },

  /* LUZ VERMELHA */

  fullMoon: {
    position: 'absolute',

    top: 65,
    right: 35,

    width: 100,
    height: 100,

    borderRadius: 50,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'rgba(150, 0, 20, 0.15)',

    shadowColor: '#FF1725',
    shadowOpacity: 0.9,
    shadowRadius: 35,

    elevation: 15,
  },

  moonSymbol: {
    fontSize: 55,
  },

  /* CRIATURA */

  monsterSilhouette: {
    position: 'absolute',

    top: 125,
    left: 10,

    fontSize: 95,

    opacity: 0.08,
  },

  /* NÉVOA */

  fog1: {
    position: 'absolute',

    width: 400,
    height: 100,

    left: -100,
    top: 390,

    backgroundColor: '#6B1020',

    opacity: 0.08,

    borderRadius: 100,
  },

  fog2: {
    position: 'absolute',

    width: 350,
    height: 80,

    right: -100,
    top: 520,

    backgroundColor: '#49105C',

    opacity: 0.08,

    borderRadius: 100,
  },

  /* CONTEÚDO */

  content: {
    alignItems: 'center',

    paddingHorizontal: 22,

    paddingTop: 55,

    paddingBottom: 40,
  },

  /* SÍMBOLOS */

  symbol1: {
    position: 'absolute',

    top: 250,
    left: 30,

    color: '#FF2538',

    fontSize: 25,
  },

  symbol2: {
    position: 'absolute',

    top: 340,
    right: 30,

    color: '#FFFFFF',

    fontSize: 20,
  },

  symbol3: {
    position: 'absolute',

    top: 510,
    left: 35,

    color: '#FF2538',

    fontSize: 28,
  },

  /* TÍTULO */

  welcome: {
    color: '#FF2638',

    fontSize: 11,

    fontWeight: '900',

    letterSpacing: 4,

    marginBottom: 7,
  },

  title: {
    color: '#FFFFFF',

    fontSize: 43,

    fontWeight: '900',

    lineHeight: 45,

    textShadowColor: '#7A0010',

    textShadowOffset: {
      width: 2,
      height: 2,
    },

    textShadowRadius: 8,
  },

  titleRed: {
    color: '#E50914',

    fontSize: 47,

    fontWeight: '900',

    lineHeight: 50,

    textShadowColor: '#FF1A2A',

    textShadowOffset: {
      width: 0,
      height: 0,
    },

    textShadowRadius: 15,
  },

  description: {
    color: '#B9AEB2',

    textAlign: 'center',

    fontSize: 14,

    lineHeight: 21,

    marginTop: 14,

    maxWidth: 310,
  },

  /* ÁREA CENTRAL */

  strangerArea: {
    width: 310,

    height: 280,

    alignItems: 'center',

    justifyContent: 'center',

    position: 'relative',

    marginTop: 5,
  },

  glow: {
    position: 'absolute',

    width: 220,

    height: 220,

    borderRadius: 120,

    backgroundColor: '#3D0710',

    opacity: 0.75,

    shadowColor: '#FF1A2A',

    shadowOpacity: 0.7,

    shadowRadius: 40,
  },

  mainCircle: {
    width: 175,

    height: 175,

    borderRadius: 90,

    backgroundColor: 'rgba(20, 7, 10, 0.96)',

    borderWidth: 4,

    borderColor: '#E50914',

    alignItems: 'center',

    justifyContent: 'center',

    shadowColor: '#FF1A2A',

    shadowOpacity: 0.8,

    shadowRadius: 25,

    elevation: 15,
  },

  strangerEmoji: {
    fontSize: 70,
  },

  hawkins: {
    color: '#FFFFFF',

    fontSize: 9,

    fontWeight: '900',

    letterSpacing: 3,

    marginTop: 6,
  },

  /* OLHO */

  eyeBadge: {
    position: 'absolute',

    top: 20,

    left: 30,

    width: 65,

    height: 65,

    borderRadius: 35,

    backgroundColor: '#090306',

    borderWidth: 2,

    borderColor: '#E50914',

    alignItems: 'center',

    justifyContent: 'center',

    shadowColor: '#FF1725',

    shadowOpacity: 0.7,

    shadowRadius: 12,

    elevation: 8,
  },

  eye: {
    fontSize: 31,
  },

  miniLight: {
    position: 'absolute',

    right: 15,

    bottom: 45,

    fontSize: 31,
  },

  /* FRASE */

  quoteCard: {
    width: '100%',

    backgroundColor: 'rgba(12, 5, 8, 0.94)',

    borderRadius: 22,

    padding: 22,

    alignItems: 'center',

    borderWidth: 1,

    borderColor: '#4B1720',

    marginTop: 5,
  },

  quoteMark: {
    color: '#E50914',

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

    backgroundColor: '#E50914',

    marginVertical: 12,
  },

  quoteAuthor: {
    color: '#806D72',

    fontSize: 12,
  },

  /* CARDS */

  exploreTitle: {
    alignSelf: 'flex-start',

    color: '#FFFFFF',

    fontSize: 20,

    fontWeight: '900',

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

    backgroundColor: 'rgba(15, 7, 10, 0.94)',

    borderRadius: 17,

    paddingVertical: 16,

    alignItems: 'center',

    borderWidth: 1,

    borderColor: '#4B1720',
  },

  smallIcon: {
    fontSize: 28,

    marginBottom: 7,
  },

  smallTitle: {
    color: '#FFFFFF',

    fontSize: 12,

    fontWeight: '900',

    textAlign: 'center',
  },

  smallText: {
    color: '#8F777D',

    fontSize: 10,

    marginTop: 3,

    textAlign: 'center',
  },

});

