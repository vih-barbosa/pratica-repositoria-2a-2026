import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      {/* ELEMENTOS DECORATIVOS */}

      <Text style={styles.decor1}>✦</Text>
      <Text style={styles.decor2}>🔴</Text>
      <Text style={styles.decor3}>👁️</Text>

      {/* CONTEÚDO */}

      <Text style={styles.smallTitle}>
        HAWKINS
      </Text>

      <Text style={styles.title}>
        Stranger
      </Text>

      <Text style={styles.titleRed}>
        Things
      </Text>

      <View style={styles.line} />

      <Text style={styles.subtitle}>
        Bem-vindo ao outro lado.
      </Text>

      <Text style={styles.description}>
        Explore Hawkins, conheça seus personagens
        e descubra os mistérios do Mundo Invertido.
      </Text>

      {/* INDICADOR */}

      <View style={styles.status}>
        <View style={styles.statusDot} />

        <Text style={styles.statusText}>
          CONEXÃO COM HAWKINS ESTABELECIDA
        </Text>
      </View>

      {/* RODAPÉ */}

      <Text style={styles.footer}>
        🔴 THE UPSIDE DOWN 🔴
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  /* FUNDO */

  container: {
    flex: 1,

    backgroundColor: '#050307',

    alignItems: 'center',

    justifyContent: 'center',

    paddingHorizontal: 30,

    position: 'relative',
  },

  /* DECORAÇÕES */

  decor1: {
    position: 'absolute',

    top: 90,

    left: 30,

    color: '#E50914',

    fontSize: 28,

    textShadowColor: '#FF1725',

    textShadowRadius: 12,
  },

  decor2: {
    position: 'absolute',

    top: 75,

    right: 30,

    fontSize: 30,

    textShadowColor: '#FF1725',

    textShadowRadius: 15,
  },

  decor3: {
    position: 'absolute',

    bottom: 120,

    right: 35,

    fontSize: 28,

    opacity: 0.4,
  },

  /* TÍTULO */

  smallTitle: {
    color: '#E50914',

    fontSize: 12,

    fontWeight: '900',

    letterSpacing: 5,

    marginBottom: 8,

    textShadowColor: '#7A0010',

    textShadowRadius: 8,
  },

  title: {
    color: '#FFFFFF',

    fontSize: 48,

    fontWeight: '900',

    lineHeight: 50,

    textAlign: 'center',

    textShadowColor: '#7A0010',

    textShadowOffset: {
      width: 2,
      height: 2,
    },

    textShadowRadius: 10,
  },

  titleRed: {
    color: '#E50914',

    fontSize: 52,

    fontWeight: '900',

    lineHeight: 55,

    textAlign: 'center',

    textShadowColor: '#FF1725',

    textShadowOffset: {
      width: 0,
      height: 0,
    },

    textShadowRadius: 18,
  },

  /* LINHA */

  line: {
    width: 55,

    height: 2,

    backgroundColor: '#E50914',

    marginVertical: 20,

    shadowColor: '#FF1725',

    shadowOpacity: 0.8,

    shadowRadius: 10,
  },

  /* TEXTOS */

  subtitle: {
    color: '#FFFFFF',

    fontSize: 19,

    fontWeight: '700',

    textAlign: 'center',

    marginBottom: 10,
  },

  description: {
    color: '#A9979C',

    fontSize: 14,

    lineHeight: 21,

    textAlign: 'center',

    maxWidth: 310,
  },

  /* STATUS */

  status: {
    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 30,

    paddingHorizontal: 16,

    paddingVertical: 10,

    borderRadius: 20,

    backgroundColor: '#10070A',

    borderWidth: 1,

    borderColor: '#4B1720',
  },

  statusDot: {
    width: 8,

    height: 8,

    borderRadius: 4,

    backgroundColor: '#E50914',

    marginRight: 8,

    shadowColor: '#FF1725',

    shadowOpacity: 1,

    shadowRadius: 7,
  },

  statusText: {
    color: '#806D72',

    fontSize: 9,

    fontWeight: '900',

    letterSpacing: 1,
  },

  /* RODAPÉ */

  footer: {
    position: 'absolute',

    bottom: 45,

    color: '#5E4A4F',

    fontSize: 10,

    fontWeight: '900',

    letterSpacing: 2,
  },

});
