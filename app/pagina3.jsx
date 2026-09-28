import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Pagina3() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >

        {/* ELEMENTOS DECORATIVOS */}
        <Text style={styles.decor1}>🐾</Text>
        <Text style={styles.decor2}>🌕</Text>
        <Text style={styles.decor3}>✦</Text>
        <Text style={styles.decor4}>🐺</Text>

        {/* TÍTULO */}
        <Text style={styles.smallTitle}>
          BEACON HILLS
        </Text>

        <Text style={styles.title}>
          Perfil
        </Text>

        <Text style={styles.subtitle}>
          Conheça um dos personagens centrais
          do universo de Teen Wolf.
        </Text>

        {/* AVATAR */}
        <View style={styles.avatarContainer}>

          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              🐺
            </Text>
          </View>

          <View style={styles.status}>

            <View style={styles.statusDot} />

            <Text style={styles.statusText}>
              Lobisomem Alfa
            </Text>

          </View>

        </View>

        {/* CARD DO PERFIL */}
        <View style={styles.profileCard}>

          <Text style={styles.cardTitle}>
            Scott McCall
          </Text>

          <Text style={styles.cardDescription}>
            Adolescente de Beacon Hills que se torna
            um lobisomem e passa a enfrentar diversos
            desafios sobrenaturais ao lado de seus amigos.
          </Text>

          {/* CIDADE */}
          <View style={styles.infoLine}>

            <Text style={styles.icon}>
              🌲
            </Text>

            <View>
              <Text style={styles.label}>
                CIDADE
              </Text>

              <Text style={styles.value}>
                Beacon Hills
              </Text>
            </View>

          </View>

          {/* ESPÉCIE */}
          <View style={styles.infoLine}>

            <Text style={styles.icon}>
              🐺
            </Text>

            <View>
              <Text style={styles.label}>
                ESPÉCIE
              </Text>

              <Text style={styles.value}>
                Lobisomem
              </Text>
            </View>

          </View>

          {/* POSIÇÃO */}
          <View style={styles.infoLine}>

            <Text style={styles.icon}>
              👑
            </Text>

            <View>
              <Text style={styles.label}>
                POSIÇÃO
              </Text>

              <Text style={styles.value}>
                Alfa
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
                Stiles Stilinski
              </Text>
            </View>

          </View>

          {/* FAMÍLIA */}
          <View style={styles.infoLine}>

            <Text style={styles.icon}>
              ❤️
            </Text>

            <View>
              <Text style={styles.label}>
                PESSOAS IMPORTANTES
              </Text>

              <Text style={styles.value}>
                Amigos e sua alcateia
              </Text>
            </View>

          </View>

        </View>

        {/* CARD ALFA */}
        <View style={styles.wolfCard}>

          <Text style={styles.wolfIcon}>
            🐺
          </Text>

          <Text style={styles.wolfTitle}>
            O Alfa
          </Text>

          <Text style={styles.wolfDescription}>
            Scott se destaca por tentar proteger seus
            amigos e fazer escolhas que preservem
            aqueles que considera parte de sua alcateia.
          </Text>

          <View style={styles.blueLine} />

          <Text style={styles.wolfSmall}>
            FORÇA • LEALDADE • PROTEÇÃO
          </Text>

        </View>

        {/* FRASE */}
        <View style={styles.quoteCard}>

          <Text style={styles.quote}>
            “A força de um alfa também está
            em proteger sua alcateia.”
          </Text>

          <View style={styles.line} />

          <Text style={styles.author}>
            — Scott McCall
          </Text>

        </View>

        {/* RODAPÉ */}
        <Text style={styles.footer}>
          🐺 Alcateia • Lealdade • Beacon Hills 🐺
        </Text>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  /* FUNDO */

  container: {
    flex: 1,
    backgroundColor: '#07090D',
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
    color: '#63D7FF',
    fontSize: 25,
  },

  decor2: {
    position: 'absolute',
    top: 45,
    right: 25,
    fontSize: 28,
  },

  decor3: {
    position: 'absolute',
    top: 330,
    left: 25,
    color: '#63D7FF',
    fontSize: 23,
  },

  decor4: {
    position: 'absolute',
    top: 500,
    right: 25,
    fontSize: 28,
    opacity: 0.5,
  },

  /* TÍTULO */

  smallTitle: {
    color: '#63D7FF',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 4,
    marginBottom: 8,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 38,
    fontWeight: '900',
  },

  subtitle: {
    color: '#A8B7C3',
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

    backgroundColor: '#0E151C',

    borderWidth: 3,
    borderColor: '#63D7FF',

    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#63D7FF',
    shadowOpacity: 0.55,
    shadowRadius: 18,

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

    backgroundColor: '#63D7FF',

    marginRight: 7,

    shadowColor: '#63D7FF',
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },

  statusText: {
    color: '#8198A7',
    fontSize: 12,
  },

  /* CARD DO PERFIL */

  profileCard: {
    width: '100%',

    backgroundColor: '#0E151C',

    borderRadius: 22,

    padding: 22,

    borderWidth: 1,
    borderColor: '#263B4A',
  },

  cardTitle: {
    color: '#63D7FF',
    fontSize: 23,
    fontWeight: '900',
    textAlign: 'center',
  },

  cardDescription: {
    color: '#AFC1CC',
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
    borderTopColor: '#20313D',
  },

  icon: {
    fontSize: 26,
    width: 50,
  },

  label: {
    color: '#637D8C',
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

  /* CARD ALFA */

  wolfCard: {
    width: '100%',

    backgroundColor: '#0B202B',

    borderRadius: 22,

    padding: 22,

    marginTop: 18,

    alignItems: 'center',

    borderWidth: 1,
    borderColor: '#28718D',

    shadowColor: '#63D7FF',
    shadowOpacity: 0.15,
    shadowRadius: 15,

    elevation: 6,
  },

  wolfIcon: {
    fontSize: 48,
    marginBottom: 5,
  },

  wolfTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
  },

  wolfDescription: {
    color: '#AFC3CE',
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'center',
    marginTop: 8,
  },

  blueLine: {
    width: 45,
    height: 2,
    backgroundColor: '#63D7FF',
    marginVertical: 13,
  },

  wolfSmall: {
    color: '#63D7FF',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1.3,
  },

  /* FRASE */

  quoteCard: {
    width: '100%',

    backgroundColor: '#101820',

    borderRadius: 20,

    padding: 22,

    marginTop: 18,

    alignItems: 'center',

    borderWidth: 1,
    borderColor: '#263B4A',
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
    backgroundColor: '#63D7FF',
    marginVertical: 12,
  },

  author: {
    color: '#718999',
    fontSize: 12,
  },

  /* RODAPÉ */

  footer: {
    color: '#637D8C',
    fontSize: 11,
    marginTop: 25,
  },

});
