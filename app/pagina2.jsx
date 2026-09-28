import { Text, View, StyleSheet, ScrollView } from 'react-native';

export default function Pagina2() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >

      {/* ELEMENTOS DECORATIVOS */}
      <Text style={styles.decor1}>☾</Text>
      <Text style={styles.decor2}>✦</Text>
      <Text style={styles.decor3}>🔴</Text>

      {/* TÍTULO */}

      <Text style={styles.light}>
        💡
      </Text>

      <Text style={styles.title}>
        Sobre
      </Text>

      <Text style={styles.titleRed}>
        Stranger Things
      </Text>

      <Text style={styles.subtitle}>
        Conheça o universo de Hawkins, seus personagens,
        o Mundo Invertido e os mistérios que transformaram
        uma pequena cidade em palco de acontecimentos sobrenaturais.
      </Text>

      {/* CARD — A SÉRIE */}

      <View style={styles.card}>

        <Text style={styles.cardIcon}>
          📺
        </Text>

        <View style={styles.cardContent}>

          <Text style={styles.cardTitle}>
            A Série
          </Text>

          <Text style={styles.cardText}>
            Stranger Things acompanha um grupo de amigos
            que começa a investigar acontecimentos estranhos
            após o desaparecimento de Will Byers. A busca
            revela experimentos secretos, poderes sobrenaturais
            e uma dimensão assustadora.
          </Text>

        </View>

      </View>

      {/* CARD — HAWKINS */}

      <View style={styles.card}>

        <Text style={styles.cardIcon}>
          🏘️
        </Text>

        <View style={styles.cardContent}>

          <Text style={styles.cardTitle}>
            Hawkins
          </Text>

          <Text style={styles.cardText}>
            Hawkins é uma pequena cidade aparentemente comum.
            Porém, por trás de sua tranquilidade existem
            experimentos secretos, acontecimentos sobrenaturais
            e uma conexão misteriosa com outra dimensão.
          </Text>

        </View>

      </View>

      {/* CARD — ELEVEN */}

      <View style={styles.card}>

        <Text style={styles.cardIcon}>
          🧇
        </Text>

        <View style={styles.cardContent}>

          <Text style={styles.cardTitle}>
            Eleven
          </Text>

          <Text style={styles.cardText}>
            Eleven é uma garota com habilidades psíquicas
            extraordinárias. Depois de escapar do laboratório,
            ela encontra novos amigos e passa a descobrir
            mais sobre seu passado e seus poderes.
          </Text>

        </View>

      </View>

      {/* CARD ESPECIAL — MUNDO INVERTIDO */}

      <View style={styles.supernaturalCard}>

        <Text style={styles.upsideDown}>
          👁️
        </Text>

        <Text style={styles.supernaturalTitle}>
          O Mundo Invertido
        </Text>

        <Text style={styles.supernaturalText}>
          Uma dimensão sombria e perigosa conectada a Hawkins.
          O Mundo Invertido é habitado por criaturas e possui
          uma versão distorcida da cidade.
        </Text>

        <View style={styles.lineRed} />

        <Text style={styles.supernaturalSmall}>
          O OUTRO LADO ESTÁ MAIS PERTO DO QUE PARECE
        </Text>

      </View>

      {/* CARD — LABORATÓRIO */}

      <View style={styles.card}>

        <Text style={styles.cardIcon}>
          🧪
        </Text>

        <View style={styles.cardContent}>

          <Text style={styles.cardTitle}>
            Laboratório de Hawkins
          </Text>

          <Text style={styles.cardText}>
            O laboratório é um dos principais pontos ligados
            aos mistérios da cidade. Experimentos realizados
            no local estão relacionados aos poderes de Eleven
            e à abertura de uma passagem para outra dimensão.
          </Text>

        </View>

      </View>

      {/* CARD — O GRUPO */}

      <View style={styles.card}>

        <Text style={styles.cardIcon}>
          🚲
        </Text>

        <View style={styles.cardContent}>

          <Text style={styles.cardTitle}>
            O Grupo
          </Text>

          <Text style={styles.cardText}>
            Mike, Dustin, Lucas, Will, Eleven e seus amigos
            enfrentam juntos os perigos que surgem em Hawkins.
            A amizade e a união são essenciais para enfrentar
            as ameaças do Mundo Invertido.
          </Text>

        </View>

      </View>

      {/* FRASE */}

      <View style={styles.quoteCard}>

        <Text style={styles.quoteMark}>
          “
        </Text>

        <Text style={styles.quote}>
          Em Hawkins, o estranho
          nunca está muito longe.
        </Text>

        <View style={styles.quoteLine} />

        <Text style={styles.quoteAuthor}>
          — Hawkins, Indiana
        </Text>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  /* FUNDO */

  container: {
    flex: 1,
    backgroundColor: '#050307',
  },

  content: {
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },

  /* DECORAÇÕES */

  decor1: {
    position: 'absolute',
    top: 40,
    right: 30,

    color: '#E50914',

    fontSize: 28,

    textShadowColor: '#FF1A2A',
    textShadowRadius: 10,
  },

  decor2: {
    position: 'absolute',
    top: 170,
    right: 22,

    color: '#FFFFFF',

    fontSize: 22,
  },

  decor3: {
    position: 'absolute',
    bottom: 120,
    left: 25,

    fontSize: 25,

    opacity: 0.8,
  },

  /* TÍTULO */

  light: {
    fontSize: 40,

    marginBottom: 5,

    textShadowColor: '#FF1A2A',
    textShadowRadius: 15,
  },

  title: {
    color: '#FFFFFF',

    fontSize: 34,

    fontWeight: '900',

    lineHeight: 39,

    textShadowColor: '#7A0010',
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 7,
  },

  titleRed: {
    color: '#E50914',

    fontSize: 39,

    fontWeight: '900',

    lineHeight: 44,

    textShadowColor: '#FF1725',

    textShadowOffset: {
      width: 0,
      height: 0,
    },

    textShadowRadius: 12,
  },

  subtitle: {
    color: '#B9AEB2',

    fontSize: 15,

    lineHeight: 22,

    marginTop: 10,

    marginBottom: 28,
  },

  /* CARDS */

  card: {
    width: '100%',

    minHeight: 125,

    backgroundColor: '#10070A',

    borderRadius: 20,

    padding: 17,

    marginBottom: 15,

    flexDirection: 'row',

    alignItems: 'center',

    borderWidth: 1,

    borderColor: '#4B1720',

    shadowColor: '#000000',

    shadowOpacity: 0.45,

    shadowRadius: 8,

    elevation: 4,
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
    color: '#E50914',

    fontSize: 18,

    fontWeight: '900',

    marginBottom: 6,

    textShadowColor: '#7A0010',

    textShadowRadius: 5,
  },

  cardText: {
    color: '#D8CCCF',

    fontSize: 13,

    lineHeight: 19,
  },

  /* CARD MUNDO INVERTIDO */

  supernaturalCard: {
    width: '100%',

    backgroundColor: '#18070D',

    borderRadius: 22,

    padding: 22,

    marginBottom: 15,

    alignItems: 'center',

    borderWidth: 1,

    borderColor: '#7A1A28',

    shadowColor: '#E50914',

    shadowOpacity: 0.22,

    shadowRadius: 18,

    elevation: 7,
  },

  upsideDown: {
    fontSize: 52,

    marginBottom: 8,

    textShadowColor: '#FF1725',

    textShadowRadius: 12,
  },

  supernaturalTitle: {
    color: '#FFFFFF',

    fontSize: 21,

    fontWeight: '900',

    textAlign: 'center',

    textShadowColor: '#E50914',

    textShadowRadius: 8,
  },

  supernaturalText: {
    color: '#C5AEB3',

    fontSize: 13,

    lineHeight: 20,

    textAlign: 'center',

    marginTop: 8,
  },

  lineRed: {
    width: 50,

    height: 2,

    backgroundColor: '#E50914',

    marginVertical: 13,

    shadowColor: '#FF1725',

    shadowRadius: 8,

    shadowOpacity: 0.8,
  },

  supernaturalSmall: {
    color: '#E50914',

    fontSize: 9,

    fontWeight: '900',

    letterSpacing: 1.5,

    textAlign: 'center',
  },

  /* FRASE */

  quoteCard: {
    width: '100%',

    backgroundColor: '#12070A',

    borderRadius: 20,

    padding: 22,

    alignItems: 'center',

    borderWidth: 1,

    borderColor: '#4B1720',

    marginTop: 5,

    shadowColor: '#E50914',

    shadowOpacity: 0.12,

    shadowRadius: 12,

    elevation: 4,
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

});
