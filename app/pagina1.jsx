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

      {/* LUA */}
      <View style={styles.fullMoon}>
        <Text style={styles.moonSymbol}>🌕</Text>
      </View>

      {/* SILHUETA DO LOBO */}
      <Text style={styles.wolfSilhouette}>
        🐺
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
        <Text style={styles.symbol3}>☽</Text>

        {/* CABEÇALHO */}

        <Text style={styles.welcome}>
          BEM-VINDO A BEACON HILLS
        </Text>

        <Text style={styles.title}>
          Teen
        </Text>

        <Text style={styles.titleBlue}>
          Wolf
        </Text>

        <Text style={styles.description}>
          Uma cidade aparentemente normal,
          escondendo lobisomens, caçadores,
          criaturas e muitos segredos.
        </Text>

        {/* ÁREA PRINCIPAL */}

        <View style={styles.wolfArea}>

          <View style={styles.glow} />

          <View style={styles.mainCircle}>

            <Text style={styles.wolfEmoji}>
              🐺
            </Text>

            <Text style={styles.beacon}>
              BEACON HILLS
            </Text>

          </View>

          {/* OLHO SOBRENATURAL */}

          <View style={styles.eyeBadge}>
            <Text style={styles.eye}>
              👁️
            </Text>
          </View>

          {/* LUA */}

          <Text style={styles.miniMoon}>
            🌕
          </Text>

        </View>

        {/* FRASE */}

        <View style={styles.quoteCard}>

          <Text style={styles.quoteMark}>
            “
          </Text>

          <Text style={styles.quote}>
            Algumas coisas não podem ser
            explicadas. Apenas sentidas.
          </Text>

          <View style={styles.quoteLine} />

          <Text style={styles.quoteAuthor}>
            — Teen Wolf
          </Text>

        </View>

        {/* PERSONAGENS / ELEMENTOS */}

        <Text style={styles.exploreTitle}>
          O universo sobrenatural
        </Text>

        <View style={styles.cardsRow}>

          <View style={styles.smallCard}>

            <Text style={styles.smallIcon}>
              🐺
            </Text>

            <Text style={styles.smallTitle}>
              Lobisomens
            </Text>

            <Text style={styles.smallText}>
              Instinto
            </Text>

          </View>

          <View style={styles.smallCard}>

            <Text style={styles.smallIcon}>
              🏹
            </Text>

            <Text style={styles.smallTitle}>
              Caçadores
            </Text>

            <Text style={styles.smallText}>
              Coragem
            </Text>

          </View>

          <View style={styles.smallCard}>

            <Text style={styles.smallIcon}>
              👁️
            </Text>

            <Text style={styles.smallTitle}>
              Sobrenatural
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
    backgroundColor: '#05070A',
  },

  backgroundImage: {
    opacity: 0.75,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,

    backgroundColor: '#030609',

    opacity: 0.62,
  },

  /* LUA GRANDE */

  fullMoon: {
    position: 'absolute',

    top: 65,
    right: 35,

    width: 100,
    height: 100,

    borderRadius: 50,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'rgba(210, 235, 255, 0.12)',

    shadowColor: '#9DDCFF',
    shadowOpacity: 0.8,
    shadowRadius: 35,

    elevation: 15,
  },

  moonSymbol: {
    fontSize: 72,
  },

  /* LOBO */

  wolfSilhouette: {
    position: 'absolute',

    top: 125,
    left: 10,

    fontSize: 95,

    opacity: 0.10,
  },

  /* NÉVOA */

  fog1: {
    position: 'absolute',

    width: 400,
    height: 100,

    left: -100,
    top: 390,

    backgroundColor: '#B8D7E8',

    opacity: 0.06,

    borderRadius: 100,
  },

  fog2: {
    position: 'absolute',

    width: 350,
    height: 80,

    right: -100,
    top: 520,

    backgroundColor: '#B8D7E8',

    opacity: 0.05,

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

    color: '#63D7FF',

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

    color: '#63D7FF',

    fontSize: 28,
  },

  /* TÍTULO */

  welcome: {
    color: '#63D7FF',

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
  },

  titleBlue: {
    color: '#63D7FF',

    fontSize: 47,

    fontWeight: '900',

    lineHeight: 50,

    textShadowColor: '#168CB8',

    textShadowOffset: {
      width: 0,
      height: 0,
    },

    textShadowRadius: 15,
  },

  description: {
    color: '#B8C7D2',

    textAlign: 'center',

    fontSize: 14,

    lineHeight: 21,

    marginTop: 14,

    maxWidth: 310,
  },

  /* LOBO CENTRAL */

  wolfArea: {
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

    backgroundColor: '#10415A',

    opacity: 0.65,

    shadowColor: '#4DD5FF',

    shadowOpacity: 0.5,

    shadowRadius: 40,
  },

  mainCircle: {
    width: 175,

    height: 175,

    borderRadius: 90,

    backgroundColor: 'rgba(220, 240, 255, 0.94)',

    borderWidth: 4,

    borderColor: '#63D7FF',

    alignItems: 'center',

    justifyContent: 'center',

    shadowColor: '#63D7FF',

    shadowOpacity: 0.6,

    shadowRadius: 25,

    elevation: 15,
  },

  wolfEmoji: {
    fontSize: 70,
  },

  beacon: {
    color: '#17232D',

    fontSize: 9,

    fontWeight: '900',

    letterSpacing: 2,

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

    backgroundColor: '#080D12',

    borderWidth: 2,

    borderColor: '#63D7FF',

    alignItems: 'center',

    justifyContent: 'center',

    shadowColor: '#63D7FF',

    shadowOpacity: 0.6,

    shadowRadius: 12,

    elevation: 8,
  },

  eye: {
    fontSize: 31,
  },

  miniMoon: {
    position: 'absolute',

    right: 15,

    bottom: 45,

    fontSize: 31,
  },

  /* FRASE */

  quoteCard: {
    width: '100%',

    backgroundColor: 'rgba(8, 15, 22, 0.92)',

    borderRadius: 22,

    padding: 22,

    alignItems: 'center',

    borderWidth: 1,

    borderColor: '#244252',

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

    backgroundColor: 'rgba(9, 18, 26, 0.92)',

    borderRadius: 17,

    paddingVertical: 16,

    alignItems: 'center',

    borderWidth: 1,

    borderColor: '#244252',
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
    color: '#7894A5',

    fontSize: 10,

    marginTop: 3,

    textAlign: 'center',
  },

});
