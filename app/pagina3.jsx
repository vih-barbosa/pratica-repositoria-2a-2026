import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Pagina3() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >

        {/* FÓRMULAS */}
        <Text style={styles.formula1}>E = mc²</Text>
        <Text style={styles.formula2}>⚛</Text>
        <Text style={styles.formula3}>π</Text>
        <Text style={styles.formula4}>∞</Text>

        {/* TÍTULO */}
        <Text style={styles.smallTitle}>
          MEU UNIVERSO
        </Text>

        <Text style={styles.title}>
          Perfil
        </Text>

        <Text style={styles.subtitle}>
          Conheça um pouco da vida e das ideias
          de Albert Einstein.
        </Text>

        {/* AVATAR */}
        <View style={styles.avatarContainer}>

          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              👨🏻‍🔬
            </Text>
          </View>

          <View style={styles.status}>
            <View style={styles.statusDot} />

            <Text style={styles.statusText}>
              Cientista e físico
            </Text>
          </View>

        </View>

        {/* CARD DO PERFIL */}
        <View style={styles.profileCard}>

          <Text style={styles.cardTitle}>
            Albert Einstein
          </Text>

          <Text style={styles.cardDescription}>
            Físico teórico alemão que desenvolveu
            importantes teorias e contribuiu para
            transformar a física moderna.
          </Text>

          {/* NASCIMENTO */}
          <View style={styles.infoLine}>

            <Text style={styles.icon}>
              🎂
            </Text>

            <View>
              <Text style={styles.label}>
                NASCIMENTO
              </Text>

              <Text style={styles.value}>
                14 de março de 1879
              </Text>
            </View>

          </View>

          {/* NACIONALIDADE */}
          <View style={styles.infoLine}>

            <Text style={styles.icon}>
              🌍
            </Text>

            <View>
              <Text style={styles.label}>
                ORIGEM
              </Text>

              <Text style={styles.value}>
                Alemanha
              </Text>
            </View>

          </View>

          {/* PROFISSÃO */}
          <View style={styles.infoLine}>

            <Text style={styles.icon}>
              🔬
            </Text>

            <View>
              <Text style={styles.label}>
                PROFISSÃO
              </Text>

              <Text style={styles.value}>
                Físico e professor
              </Text>
            </View>

          </View>

          {/* PRÊMIO */}
          <View style={styles.infoLine}>

            <Text style={styles.icon}>
              🏆
            </Text>

            <View>
              <Text style={styles.label}>
                RECONHECIMENTO
              </Text>

              <Text style={styles.value}>
                Prêmio Nobel de Física — 1921
              </Text>
            </View>

          </View>

          {/* FALECIMENTO */}
          <View style={styles.infoLine}>

            <Text style={styles.icon}>
              📚
            </Text>

            <View>
              <Text style={styles.label}>
                FALECIMENTO
              </Text>

              <Text style={styles.value}>
                18 de abril de 1955
              </Text>
            </View>

          </View>

        </View>

        {/* EQUAÇÃO */}
        <View style={styles.equationCard}>

          <Text style={styles.equation}>
            E = mc²
          </Text>

          <Text style={styles.equationDescription}>
            Uma das equações mais famosas associadas
            ao trabalho de Einstein.
          </Text>

        </View>

        {/* FRASE */}
        <View style={styles.quoteCard}>

          <Text style={styles.quote}>
            “A imaginação é mais importante
            que o conhecimento.”
          </Text>

          <View style={styles.line} />

          <Text style={styles.author}>
            — Albert Einstein
          </Text>

        </View>

        {/* RODAPÉ */}
        <Text style={styles.footer}>
          ⚛ Ciência • Imaginação • Conhecimento ⚛
        </Text>

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
    paddingBottom: 40,
  },

  /* FÓRMULAS */

  formula1: {
    position: 'absolute',
    top: 65,
    left: 25,
    color: '#F2C14E',
    fontSize: 18,
    fontWeight: '800',
    transform: [{ rotate: '-10deg' }],
  },

  formula2: {
    position: 'absolute',
    top: 145,
    right: 25,
    color: '#FFFFFF',
    fontSize: 24,
  },

  formula3: {
    position: 'absolute',
    top: 330,
    left: 25,
    color: '#F2C14E',
    fontSize: 24,
  },

  formula4: {
    position: 'absolute',
    top: 500,
    right: 30,
    color: '#FFFFFF',
    fontSize: 22,
  },

  /* TÍTULO */

  smallTitle: {
    color: '#F2C14E',
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
    color: '#AFC2D6',
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

    backgroundColor: '#172B3D',

    borderWidth: 3,
    borderColor: '#F2C14E',

    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#F2C14E',
    shadowOpacity: 0.4,
    shadowRadius: 15,

    elevation: 8,
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
    backgroundColor: '#F2C14E',
    marginRight: 7,
  },

  statusText: {
    color: '#91A5BA',
    fontSize: 12,
  },

  /* CARD */

  profileCard: {
    width: '100%',
    backgroundColor: '#172B3D',

    borderRadius: 22,

    padding: 22,

    borderWidth: 1,
    borderColor: '#38516A',
  },

  cardTitle: {
    color: '#F2C14E',
    fontSize: 23,
    fontWeight: '800',
    textAlign: 'center',
  },

  cardDescription: {
    color: '#AFC2D6',
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
    borderTopColor: '#294258',
  },

  icon: {
    fontSize: 26,
    width: 50,
  },

  label: {
    color: '#7890A8',
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

  /* EQUAÇÃO */

  equationCard: {
    width: '100%',

    backgroundColor: '#F2C14E',

    borderRadius: 20,

    padding: 20,

    marginTop: 18,

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

  equationDescription: {
    color: '#354657',
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
    marginTop: 8,
  },

  /* FRASE */

  quoteCard: {
    width: '100%',

    backgroundColor: '#172635',

    borderRadius: 20,

    padding: 22,

    marginTop: 18,

    alignItems: 'center',

    borderWidth: 1,
    borderColor: '#38516A',
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
    backgroundColor: '#F2C14E',
    marginVertical: 12,
  },

  author: {
    color: '#91A5BA',
    fontSize: 12,
  },

  /* RODAPÉ */

  footer: {
    color: '#7890A8',
    fontSize: 11,
    marginTop: 25,
  },

});
