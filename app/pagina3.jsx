import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Pagina3() {
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

        {/* TÍTULO */}
        <Text style={styles.smallTitle}>
          MEU UNIVERSO
        </Text>

        <Text style={styles.title}>
          Perfil
        </Text>

        <Text style={styles.subtitle}>
          Conheça seu cantinho no universo
          do Pequeno Príncipe.
        </Text>

        {/* AVATAR */}
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>👑</Text>
          </View>

          <View style={styles.online}>
            <View style={styles.onlineDot} />
            <Text style={styles.onlineText}>No planeta B-612</Text>
          </View>
        </View>

        {/* CARD DO PERFIL */}
        <View style={styles.profileCard}>

          <Text style={styles.cardTitle}>
            Pequeno Príncipe
          </Text>

          <Text style={styles.cardDescription}>
            Viajante de planetas, admirador
            das estrelas e cuidador de sua rosa.
          </Text>

          <View style={styles.infoLine}>
            <Text style={styles.icon}>🪐</Text>

            <View>
              <Text style={styles.label}>
                PLANETA
              </Text>

              <Text style={styles.value}>
                B-612
              </Text>
            </View>
          </View>

          <View style={styles.infoLine}>
            <Text style={styles.icon}>🌹</Text>

            <View>
              <Text style={styles.label}>
                COMPANHEIRA
              </Text>

              <Text style={styles.value}>
                A Rosa
              </Text>
            </View>
          </View>

          <View style={styles.infoLine}>
            <Text style={styles.icon}>⭐</Text>

            <View>
              <Text style={styles.label}>
                UNIVERSO
              </Text>

              <Text style={styles.value}>
                Entre estrelas
              </Text>
            </View>
          </View>

        </View>

        {/* FRASE */}
        <View style={styles.quoteCard}>

          <Text style={styles.quote}>
            “Tu te tornas eternamente responsável
            por aquilo que cativas.”
          </Text>

          <View style={styles.line} />

          <Text style={styles.author}>
            — O Pequeno Príncipe
          </Text>

        </View>

        {/* RODAPÉ */}
        <Text style={styles.footer}>
          ✦ Feito com carinho entre as estrelas ✦
        </Text>

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
    paddingBottom: 40,
  },

  /* ESTRELAS */

  star1: {
    position: 'absolute',
    top: 70,
    left: 30,
    color: '#E8C96A',
    fontSize: 25,
  },

  star2: {
    position: 'absolute',
    top: 150,
    right: 35,
    color: '#FFFFFF',
    fontSize: 17,
  },

  star3: {
    position: 'absolute',
    top: 330,
    left: 30,
    color: '#E8C96A',
    fontSize: 22,
  },

  star4: {
    position: 'absolute',
    top: 500,
    right: 35,
    color: '#FFFFFF',
    fontSize: 16,
  },

  /* TÍTULO */

  smallTitle: {
    color: '#E8C96A',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 4,
    marginBottom: 8,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 38,
    fontWeight: '800',
  },

  subtitle: {
    color: '#AFC2E5',
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
    width: 105,
    height: 105,
    borderRadius: 55,

    backgroundColor: '#102A57',

    borderWidth: 3,
    borderColor: '#E8C96A',

    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#E8C96A',
    shadowOpacity: 0.4,
    shadowRadius: 15,

    elevation: 8,
  },

  avatarText: {
    fontSize: 55,
  },

  online: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  onlineDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E8C96A',
    marginRight: 7,
  },

  onlineText: {
    color: '#91A8CB',
    fontSize: 12,
  },

  /* CARD */

  profileCard: {
    width: '100%',
    backgroundColor: '#0D244A',

    borderRadius: 22,

    padding: 22,

    borderWidth: 1,
    borderColor: '#294875',
  },

  cardTitle: {
    color: '#E8C96A',
    fontSize: 23,
    fontWeight: '800',
    textAlign: 'center',
  },

  cardDescription: {
    color: '#AFC2E5',
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
    borderTopColor: '#1C3761',
  },

  icon: {
    fontSize: 27,
    width: 50,
  },

  label: {
    color: '#7890B8',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
  },

  value: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 3,
  },

  /* FRASE */

  quoteCard: {
    width: '100%',

    backgroundColor: '#102A57',

    borderRadius: 20,

    padding: 22,

    marginTop: 18,

    alignItems: 'center',

    borderWidth: 1,
    borderColor: '#294875',
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
    backgroundColor: '#E8C96A',
    marginVertical: 12,
  },

  author: {
    color: '#91A8CB',
    fontSize: 12,
  },

  footer: {
    color: '#7890B8',
    fontSize: 11,
    marginTop: 25,
  },

});