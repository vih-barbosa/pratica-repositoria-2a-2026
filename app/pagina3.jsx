import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Pagina3() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >

        {/* ELEMENTOS DECORATIVOS */}
        <Text style={styles.decor1}>✦</Text>
        <Text style={styles.decor2}>🔴</Text>
        <Text style={styles.decor3}>☾</Text>
        <Text style={styles.decor4}>👁️</Text>

        {/* TÍTULO */}

        <Text style={styles.smallTitle}>
          HAWKINS
        </Text>

        <Text style={styles.title}>
          Perfil
        </Text>

        <Text style={styles.subtitle}>
          Conheça uma das personagens centrais
          do universo de Stranger Things.
        </Text>

        {/* AVATAR */}

        <View style={styles.avatarContainer}>

          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              🧇
            </Text>
          </View>

          <View style={styles.status}>

            <View style={styles.statusDot} />

            <Text style={styles.statusText}>
              Poderes Psíquicos
            </Text>

          </View>

        </View>

        {/* CARD DO PERFIL */}

        <View style={styles.profileCard}>

          <Text style={styles.cardTitle}>
            Eleven
          </Text>

          <Text style={styles.cardDescription}>
            Uma garota com habilidades psíquicas extraordinárias
            que escapa do laboratório de Hawkins e encontra
            novos amigos enquanto descobre a verdade sobre
            seu passado e o Mundo Invertido.
          </Text>

          {/* CIDADE */}

          <View style={styles.infoLine}>

            <Text style={styles.icon}>
              🏘️
            </Text>

            <View>
              <Text style={styles.label}>
                CIDADE
              </Text>

              <Text style={styles.value}>
                Hawkins
              </Text>
            </View>

          </View>

          {/* HABILIDADE */}

          <View style={styles.infoLine}>

            <Text style={styles.icon}>
              🧠
            </Text>

            <View>
              <Text style={styles.label}>
                HABILIDADE
              </Text>

              <Text style={styles.value}>
                Poderes Psíquicos
              </Text>
            </View>

          </View>

          {/* ORIGEM */}

          <View style={styles.infoLine}>

            <Text style={styles.icon}>
              🧪
            </Text>

            <View>
              <Text style={styles.label}>
                ORIGEM
              </Text>

              <Text style={styles.value}>
                Laboratório de Hawkins
              </Text>
            </View>

          </View>

          {/* MELHOR AMIGO */}

          <View style={styles.infoLine}>

            <Text style={styles.icon}>
              🤝
            </Text>

            <View>
              <Text style={styles.label}>
                MELHOR AMIGO
              </Text>

              <Text style={styles.value}>
                Mike Wheeler
              </Text>
            </View>

          </View>

          {/* PESSOAS IMPORTANTES */}

          <View style={styles.infoLine}>

            <Text style={styles.icon}>
              ❤️
            </Text>

            <View>
              <Text style={styles.label}>
                PESSOAS IMPORTANTES
              </Text>

              <Text style={styles.value}>
                Amigos e família
              </Text>
            </View>

          </View>

        </View>

        {/* CARD PODERES */}

        <View style={styles.powerCard}>

          <Text style={styles.powerIcon}>
            👁️
          </Text>

          <Text style={styles.powerTitle}>
            Os Poderes
          </Text>

          <Text style={styles.powerDescription}>
            Eleven possui habilidades psíquicas que permitem
            mover objetos, acessar pensamentos e estabelecer
            conexões com outras dimensões.
          </Text>

          <View style={styles.redLine} />

          <Text style={styles.powerSmall}>
            FORÇA • CORAGEM • AMIZADE
          </Text>

        </View>

        {/* FRASE */}

        <View style={styles.quoteCard}>

          <Text style={styles.quote}>
            “Amigos não mentem.”
          </Text>

          <View style={styles.line} />

          <Text style={styles.author}>
            — Eleven
          </Text>

        </View>

        {/* RODAPÉ */}

        <Text style={styles.footer}>
          🔴 Hawkins • Amizade • Mundo Invertido 🔴
        </Text>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  /* FUNDO */

  container: {
    flex: 1,
    backgroundColor: '#050307',
  },

  content: {
    alignItems: 'center',

    paddingHorizontal: 22,

    paddingTop: 55,

    paddingBottom: 40,
  },

  /* DECORAÇÕES */

  decor1: {
    position: 'absolute',

    top: 65,
    left: 25,

    color: '#E50914',

    fontSize: 25,

    textShadowColor: '#FF1725',
    textShadowRadius: 8,
  },

  decor2: {
    position: 'absolute',

    top: 45,
    right: 25,

    fontSize: 28,

    textShadowColor: '#FF1725',
    textShadowRadius: 12,
  },

  decor3: {
    position: 'absolute',

    top: 330,
    left: 25,

    color: '#E50914',

    fontSize: 23,
  },

  decor4: {
    position: 'absolute',

    top: 500,
    right: 25,

    fontSize: 28,

    opacity: 0.45,
  },

  /* TÍTULO */

  smallTitle: {
    color: '#E50914',

    fontSize: 11,

    fontWeight: '900',

    letterSpacing: 4,

    marginBottom: 8,

    textShadowColor: '#7A0010',
    textShadowRadius: 6,
  },

  title: {
    color: '#FFFFFF',

    fontSize: 38,

    fontWeight: '900',

    textShadowColor: '#7A0010',

    textShadowOffset: {
      width: 1,
      height: 1,
    },

    textShadowRadius: 8,
  },

  subtitle: {
    color: '#B9AEB2',

    fontSize: 14,

    textAlign: 'center',

    lineHeight: 21,

    marginTop: 12,

    maxWidth: 300,
  },

  /* AVATAR */

  avatarContainer: {
    alignItems: 'center',

    marginTop: 25,

    marginBottom: 20,
  },

  avatar: {
    width: 110,

    height: 110,

    borderRadius: 55,

    backgroundColor: '#12070A',

    borderWidth: 3,

    borderColor: '#E50914',

    alignItems: 'center',

    justifyContent: 'center',

    shadowColor: '#FF1725',

    shadowOpacity: 0.65,

    shadowRadius: 20,

    elevation: 10,
  },

  avatarText: {
    fontSize: 58,
  },

  status: {
    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 10,
  },

  statusDot: {
    width: 8,

    height: 8,

    borderRadius: 4,

    backgroundColor: '#E50914',

    marginRight: 7,

    shadowColor: '#FF1725',

    shadowOpacity: 0.9,

    shadowRadius: 6,
  },

  statusText: {
    color: '#967F84',

    fontSize: 12,
  },

  /* CARD DO PERFIL */

  profileCard: {
    width: '100%',

    backgroundColor: '#10070A',

    borderRadius: 22,

    padding: 22,

    borderWidth: 1,

    borderColor: '#4B1720',

    shadowColor: '#000000',

    shadowOpacity: 0.4,

    shadowRadius: 8,

    elevation: 4,
  },

  cardTitle: {
    color: '#E50914',

    fontSize: 23,

    fontWeight: '900',

    textAlign: 'center',

    textShadowColor: '#7A0010',

    textShadowRadius: 6,
  },

  cardDescription: {
    color: '#C5B7BB',

    fontSize: 13,

    lineHeight: 20,

    textAlign: 'center',

    marginTop: 8,

    marginBottom: 20,
  },

  infoLine: {
    flexDirection: 'row',

    alignItems: 'center',

    paddingVertical: 13,

    borderTopWidth: 1,

    borderTopColor: '#35151B',
  },

  icon: {
    fontSize: 26,

    width: 50,
  },

  label: {
    color: '#806D72',

    fontSize: 10,

    fontWeight: '900',

    letterSpacing: 1,
  },

  value: {
    color: '#FFFFFF',

    fontSize: 15,

    fontWeight: '600',

    marginTop: 3,
  },

  /* CARD PODERES */

  powerCard: {
    width: '100%',

    backgroundColor: '#18070D',

    borderRadius: 22,

    padding: 22,

    marginTop: 18,

    alignItems: 'center',

    borderWidth: 1,

    borderColor: '#7A1A28',

    shadowColor: '#E50914',

    shadowOpacity: 0.2,

    shadowRadius: 18,

    elevation: 6,
  },

  powerIcon: {
    fontSize: 48,

    marginBottom: 5,

    textShadowColor: '#FF1725',

    textShadowRadius: 10,
  },

  powerTitle: {
    color: '#FFFFFF',

    fontSize: 22,

    fontWeight: '900',

    textShadowColor: '#E50914',

    textShadowRadius: 7,
  },

  powerDescription: {
    color: '#C5AEB3',

    fontSize: 13,

    lineHeight: 20,

    textAlign: 'center',

    marginTop: 8,
  },

  redLine: {
    width: 45,

    height: 2,

    backgroundColor: '#E50914',

    marginVertical: 13,

    shadowColor: '#FF1725',

    shadowOpacity: 0.9,

    shadowRadius: 8,
  },

  powerSmall: {
    color: '#E50914',

    fontSize: 9,

    fontWeight: '900',

    letterSpacing: 1.3,
  },

  /* FRASE */

  quoteCard: {
    width: '100%',

    backgroundColor: '#12070A',

    borderRadius: 20,

    padding: 22,

    marginTop: 18,

    alignItems: 'center',

    borderWidth: 1,

    borderColor: '#4B1720',

    shadowColor: '#E50914',

    shadowOpacity: 0.12,

    shadowRadius: 12,

    elevation: 4,
  },

  quote: {
    color: '#FFFFFF',

    fontSize: 16,

    fontStyle: 'italic',

    lineHeight: 24,

    textAlign: 'center',
  },

  line: {
    width: 45,

    height: 2,

    backgroundColor: '#E50914',

    marginVertical: 12,
  },

  author: {
    color: '#806D72',

    fontSize: 12,
  },

  /* RODAPÉ */

  footer: {
    color: '#806D72',

    fontSize: 11,

    marginTop: 25,
  },

});
