import { Text, View, StyleSheet, ScrollView } from 'react-native';

export default function Pagina1() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >

        {/* ESTRELAS */}
        <Text style={styles.star1}>✦</Text>
        <Text style={styles.star2}>✧</Text>
        <Text style={styles.star3}>⋆</Text>
        <Text style={styles.star4}>✦</Text>
        <Text style={styles.star5}>✧</Text>
        <Text style={styles.star6}>⋆</Text>

        {/* LUA */}
        <View style={styles.moon}>
          <Text style={styles.moonText}>☾</Text>
        </View>

        {/* CABEÇALHO */}
        <Text style={styles.welcome}>
          BEM-VINDO
        </Text>

        <Text style={styles.title}>
          O Pequeno
        </Text>

        <Text style={styles.titleGold}>
          Príncipe
        </Text>

        <Text style={styles.description}>
          Uma pequena viagem por um universo
          cheio de estrelas, planetas e histórias.
        </Text>

        {/* PLANETA B-612 */}
        <View style={styles.planetArea}>

          <View style={styles.planetGlow} />

          <View style={styles.planet}>
            <Text style={styles.planetText}>
              B-612
            </Text>

            <Text style={styles.planetRose}>
              🌹
            </Text>
          </View>

          {/* PEQUENO PRÍNCIPE */}
          <View style={styles.prince}>
            <Text style={styles.princeText}>
              👑
            </Text>
          </View>

          <Text style={styles.planetStar}>
            ⭐
          </Text>

        </View>

        {/* FRASE */}
        <View style={styles.quoteCard}>

          <Text style={styles.quoteMark}>
            “
          </Text>

          <Text style={styles.quote}>
            O essencial é invisível
            aos olhos.
          </Text>

          <View style={styles.quoteLine} />

          <Text style={styles.quoteAuthor}>
            — O Pequeno Príncipe
          </Text>

        </View>

        {/* EXPLORE */}
        <Text style={styles.exploreTitle}>
          Explore o universo
        </Text>

        <View style={styles.cardsRow}>

          {/* ROSA */}
          <View style={styles.smallCard}>
            <Text style={styles.smallIcon}>🌹</Text>

            <Text style={styles.smallTitle}>
              A Rosa
            </Text>

            <Text style={styles.smallText}>
              Amor
            </Text>
          </View>

          {/* RAPOSA */}
          <View style={styles.smallCard}>
            <Text style={styles.smallIcon}>🦊</Text>

            <Text style={styles.smallTitle}>
              A Raposa
            </Text>

            <Text style={styles.smallText}>
              Amizade
            </Text>
          </View>

          {/* ESTRELAS */}
          <View style={styles.smallCard}>
            <Text style={styles.smallIcon}>⭐</Text>

            <Text style={styles.smallTitle}>
              Estrelas
            </Text>

            <Text style={styles.smallText}>
              Sonhos
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
    backgroundColor: '#06152F',
  },

  content: {
    alignItems: 'center',
    paddingHorizontal: 22,
    paddingTop: 55,
    paddingBottom: 35,
  },

  /* ESTRELAS */

  star1: {
    position: 'absolute',
    top: 65,
    left: 30,
    color: '#E8C96A',
    fontSize: 25,
  },

  star2: {
    position: 'absolute',
    top: 120,
    left: 80,
    color: '#FFFFFF',
    fontSize: 15,
  },

  star3: {
    position: 'absolute',
    top: 210,
    right: 30,
    color: '#E8C96A',
    fontSize: 23,
  },

  star4: {
    position: 'absolute',
    top: 290,
    left: 25,
    color: '#FFFFFF',
    fontSize: 17,
  },

  star5: {
    position: 'absolute',
    top: 380,
    right: 40,
    color: '#E8C96A',
    fontSize: 20,
  },

  star6: {
    position: 'absolute',
    top: 470,
    left: 45,
    color: '#FFFFFF',
    fontSize: 15,
  },

  /* LUA */

  moon: {
    position: 'absolute',
    top: 45,
    right: 45,
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: '#E8C96A',
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#E8C96A',
    shadowOpacity: 0.5,
    shadowRadius: 15,

    elevation: 10,
  },

  moonText: {
    color: '#06152F',
    fontSize: 38,
    marginLeft: -5,
    marginTop: -3,
  },

  /* TÍTULO */

  welcome: {
    color: '#E8C96A',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 5,
    marginBottom: 7,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 38,
    fontWeight: '800',
    lineHeight: 42,
  },

  titleGold: {
    color: '#E8C96A',
    fontSize: 42,
    fontWeight: '800',
    lineHeight: 45,
  },

  description: {
    color: '#AFC2E5',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 14,
    maxWidth: 300,
  },

  /* PLANETA */

  planetArea: {
    width: 310,
    height: 270,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: 5,
  },

  planetGlow: {
    position: 'absolute',
    width: 205,
    height: 205,
    borderRadius: 110,
    backgroundColor: '#163B70',
    opacity: 0.55,
  },

  planet: {
    width: 175,
    height: 175,
    borderRadius: 90,
    backgroundColor: '#D8B85C',

    borderWidth: 5,
    borderColor: '#E8C96A',

    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#E8C96A',
    shadowOpacity: 0.4,
    shadowRadius: 20,

    elevation: 10,
  },

  planetText: {
    color: '#071A3D',
    fontSize: 25,
    fontWeight: '900',
    letterSpacing: 2,
  },

  planetRose: {
    fontSize: 38,
    marginTop: 8,
  },

  /* PEQUENO PRÍNCIPE */

  prince: {
    position: 'absolute',
    top: 20,
    left: 38,

    width: 65,
    height: 65,

    borderRadius: 35,

    backgroundColor: '#163B70',

    borderWidth: 2,
    borderColor: '#E8C96A',

    alignItems: 'center',
    justifyContent: 'center',
  },

  princeText: {
    fontSize: 35,
  },

  planetStar: {
    position: 'absolute',
    right: 20,
    bottom: 45,
    fontSize: 32,
  },

  /* FRASE */

  quoteCard: {
    width: '100%',

    backgroundColor: '#0D244A',

    borderRadius: 22,

    padding: 22,

    alignItems: 'center',

    borderWidth: 1,
    borderColor: '#294875',

    marginTop: 5,
  },

  quoteMark: {
    color: '#E8C96A',
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
    backgroundColor: '#E8C96A',
    marginVertical: 12,
  },

  quoteAuthor: {
    color: '#91A8CB',
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

    backgroundColor: '#102A57',

    borderRadius: 17,

    paddingVertical: 16,

    alignItems: 'center',

    borderWidth: 1,
    borderColor: '#294875',
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
    color: '#8FA8CE',
    fontSize: 10,
    marginTop: 3,
  },

});