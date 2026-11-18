
import { Text, View, StyleSheet, ScrollView } from 'react-native';

export default function Pagina1() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* SÍMBOLOS DECORATIVOS DE FUNDO */}
        <Text style={styles.bgSymbol1}>桜</Text>
        <Text style={styles.bgSymbol2}>日本</Text>
        <Text style={styles.bgSymbol3}>和</Text>
        <Text style={styles.bgSymbol4}>富士山</Text>
        <Text style={styles.bgSymbol5}>✿</Text>
        <Text style={styles.bgSymbol6}>波</Text>
        <Text style={styles.bgSymbol7}>☯</Text>

        {/* PARTÍCULAS DECORATIVAS */}
        <View style={styles.petal1} />
        <View style={styles.petal2} />
        <View style={styles.petal3} />
        <View style={styles.petal4} />
        <View style={styles.petal5} />

        {/* SELO JAPONÊS */}
        <View style={styles.seal}>
          <Text style={styles.sealText}>日本</Text>
          <Text style={styles.sealSmall}>NIPPON</Text>
        </View>

        {/* CABEÇALHO */}
        <View style={styles.header}>
          <Text style={styles.welcome}>
            ✦ 伝統 • 美 • 文化 ✦
          </Text>

          <Text style={styles.title}>
            Explore o
          </Text>

          <Text style={styles.titleRed}>
            Japão
          </Text>

          <View style={styles.titleDivider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerSymbol}>桜</Text>
            <View style={styles.dividerLine} />
          </View>

          <Text style={styles.description}>
            Descubra a beleza da terra do sol nascente,
            onde tradições milenares encontram um
            futuro extraordinário.
          </Text>
        </View>

        {/* ILUSTRAÇÃO CENTRAL */}
        <View style={styles.japanScene}>
          <View style={styles.sceneGlow} />

          {/* SOL NASCENTE */}
          <View style={styles.sun}>
            <View style={styles.sunInner} />
          </View>

          {/* NUVENS */}
          <Text style={styles.cloudLeft}>☁</Text>
          <Text style={styles.cloudRight}>☁</Text>

          {/* MONTE FUJI */}
          <View style={styles.fujiMountain}>
            <Text style={styles.fujiEmoji}>🗻</Text>
          </View>

          {/* ÁGUA */}
          <View style={styles.water}>
            <Text style={styles.waveText}>〰 〜 〰 〜 〰</Text>
            <Text style={styles.waveText2}>〜 〰 〜 〰</Text>
          </View>

          {/* TORII */}
          <View style={styles.torii}>
            <Text style={styles.toriiEmoji}>⛩️</Text>
          </View>

          {/* SAKURA */}
          <Text style={styles.sakuraLeft}>🌸</Text>
          <Text style={styles.sakuraRight}>🌸</Text>

          <View style={styles.sceneLabel}>
            <Text style={styles.sceneLabelText}>
              日本 • JAPAN
            </Text>
          </View>
        </View>

        {/* FRASE JAPONESA */}
        <View style={styles.quoteCard}>
          <Text style={styles.quoteKanji}>一期一会</Text>

          <Text style={styles.quoteTranslation}>
            Ichigo Ichie
          </Text>

          <View style={styles.quoteLine} />

          <Text style={styles.quote}>
            Cada encontro é único.
            Cada momento é uma nova história.
          </Text>

          <Text style={styles.quoteAuthor}>
            — Sabedoria japonesa
          </Text>

          <Text style={styles.quoteDecoration}>❀</Text>
        </View>

        {/* DESTINOS */}
        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionKicker}>
              旅 • TABI
            </Text>

            <Text style={styles.exploreTitle}>
              Lugares incríveis
            </Text>
          </View>

          <Text style={styles.sectionKanji}>旅</Text>
        </View>

        <View style={styles.cardsRow}>
          {/* KYOTO */}
          <View style={styles.smallCard}>
            <View style={styles.cardIconWrap}>
              <Text style={styles.smallIcon}>⛩️</Text>
            </View>

            <Text style={styles.smallTitle}>Kyoto</Text>

            <Text style={styles.smallText}>
              Tradição
            </Text>

            <Text style={styles.cardKanji}>京都</Text>
          </View>

          {/* TOKYO */}
          <View style={styles.smallCard}>
            <View style={styles.cardIconWrap}>
              <Text style={styles.smallIcon}>🏮</Text>
            </View>

            <Text style={styles.smallTitle}>Tokyo</Text>

            <Text style={styles.smallText}>
              Modernidade
            </Text>

            <Text style={styles.cardKanji}>東京</Text>
          </View>

          {/* FUJI */}
          <View style={styles.smallCard}>
            <View style={styles.cardIconWrap}>
              <Text style={styles.smallIcon}>🗻</Text>
            </View>

            <Text style={styles.smallTitle}>Fuji</Text>

            <Text style={styles.smallText}>
              Natureza
            </Text>

            <Text style={styles.cardKanji}>富士山</Text>
          </View>
        </View>

        {/* RODAPÉ */}
        <View style={styles.footer}>
          <Text style={styles.footerSymbol}>日の出</Text>

          <Text style={styles.footerText}>
            日本へようこそ
          </Text>

          <Text style={styles.footerTranslation}>
            Bem-vindo ao Japão
          </Text>

          <View style={styles.footerLine} />

          <Text style={styles.footerSmall}>
            JAPAN • CULTURA • HARMONIA
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#100C0D',
  },

  content: {
    alignItems: 'center',
    paddingHorizontal: 22,
    paddingTop: 65,
    paddingBottom: 40,
    overflow: 'hidden',
  },

  // FUNDO JAPONÊS

  bgSymbol1: {
    position: 'absolute',
    top: 110,
    left: 12,
    color: '#E85D68',
    opacity: 0.18,
    fontSize: 48,
    fontWeight: '900',
  },

  bgSymbol2: {
    position: 'absolute',
    top: 330,
    right: 10,
    color: '#D8B16A',
    opacity: 0.17,
    fontSize: 23,
    fontWeight: '900',
    letterSpacing: 4,
  },

  bgSymbol3: {
    position: 'absolute',
    top: 620,
    left: 20,
    color: '#E85D68',
    opacity: 0.16,
    fontSize: 45,
  },

  bgSymbol4: {
    position: 'absolute',
    top: 820,
    right: 5,
    color: '#D8B16A',
    opacity: 0.13,
    fontSize: 17,
  },

  bgSymbol5: {
    position: 'absolute',
    top: 210,
    right: 45,
    color: '#F3B8B9',
    opacity: 0.4,
    fontSize: 25,
  },

  bgSymbol6: {
    position: 'absolute',
    top: 510,
    left: 8,
    color: '#B85B64',
    opacity: 0.2,
    fontSize: 38,
  },

  bgSymbol7: {
    position: 'absolute',
    top: 1030,
    right: 22,
    color: '#D8B16A',
    opacity: 0.16,
    fontSize: 34,
  },

  petal1: {
    position: 'absolute',
    top: 150,
    left: 110,
    width: 6,
    height: 9,
    borderRadius: 8,
    backgroundColor: '#E98591',
    transform: [{ rotate: '35deg' }],
    opacity: 0.8,
  },

  petal2: {
    position: 'absolute',
    top: 280,
    right: 65,
    width: 7,
    height: 10,
    borderRadius: 8,
    backgroundColor: '#D8B16A',
    transform: [{ rotate: '-30deg' }],
  },

  petal3: {
    position: 'absolute',
    top: 470,
    left: 45,
    width: 6,
    height: 9,
    borderRadius: 8,
    backgroundColor: '#E98591',
    transform: [{ rotate: '55deg' }],
  },

  petal4: {
    position: 'absolute',
    top: 700,
    right: 70,
    width: 7,
    height: 10,
    borderRadius: 8,
    backgroundColor: '#E98591',
    transform: [{ rotate: '20deg' }],
  },

  petal5: {
    position: 'absolute',
    top: 960,
    left: 90,
    width: 6,
    height: 9,
    borderRadius: 8,
    backgroundColor: '#D8B16A',
  },

  // SELO

  seal: {
    position: 'absolute',
    top: 35,
    right: 28,
    width: 57,
    height: 68,
    borderWidth: 2,
    borderColor: '#C94B55',
    backgroundColor: '#8F202D',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    transform: [{ rotate: '5deg' }],
    elevation: 8,
    shadowColor: '#E85D68',
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },

  sealText: {
    color: '#FFF0D5',
    fontSize: 21,
    fontWeight: '900',
    lineHeight: 27,
  },

  sealSmall: {
    color: '#F3D7A0',
    fontSize: 7,
    letterSpacing: 1.5,
    marginTop: 2,
  },

  // CABEÇALHO

  header: {
    alignItems: 'center',
    width: '100%',
  },

  welcome: {
    color: '#D8B16A',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 3,
    marginBottom: 17,
  },

  title: {
    color: '#F7EDE0',
    fontSize: 36,
    fontWeight: '300',
    lineHeight: 43,
  },

  titleRed: {
    color: '#E85D68',
    fontSize: 55,
    fontWeight: '900',
    lineHeight: 63,
    letterSpacing: 1,
    textShadowColor: '#9E2736',
    textShadowOpacity: 0.45,
    textShadowRadius: 18,
  },

  titleDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    marginTop: 13,
  },

  dividerLine: {
    width: 50,
    height: 1,
    backgroundColor: '#9E6B47',
  },

  dividerSymbol: {
    color: '#D8B16A',
    fontSize: 22,
  },

  description: {
    color: '#C5B7AC',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 23,
    marginTop: 17,
    maxWidth: 310,
  },

  // CENA CENTRAL

  japanScene: {
    width: '100%',
    height: 330,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: 18,
    overflow: 'hidden',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#55302C',
    backgroundColor: '#25171A',
  },

  sceneGlow: {
    position: 'absolute',
    top: 20,
    width: 230,
    height: 230,
    borderRadius: 120,
    backgroundColor: '#68262F',
    opacity: 0.4,
  },

  sun: {
    position: 'absolute',
    top: 33,
    width: 125,
    height: 125,
    borderRadius: 65,
    backgroundColor: '#D84B53',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#F35F63',
    shadowOpacity: 0.5,
    shadowRadius: 28,
  },

  sunInner: {
    width: 102,
    height: 102,
    borderRadius: 55,
    borderWidth: 1,
    borderColor: '#F6B77D',
    opacity: 0.65,
  },

  cloudLeft: {
    position: 'absolute',
    top: 92,
    left: 18,
    fontSize: 31,
    color: '#C8A3A0',
    opacity: 0.5,
  },

  cloudRight: {
    position: 'absolute',
    top: 112,
    right: 18,
    fontSize: 29,
    color: '#C8A3A0',
    opacity: 0.45,
  },

  fujiMountain: {
    position: 'absolute',
    top: 93,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  fujiEmoji: {
    fontSize: 118,
    textAlign: 'center',
    textShadowColor: '#100C0D',
    textShadowRadius: 12,
  },

  water: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 86,
    backgroundColor: '#172B35',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderColor: '#B77B66',
  },

  waveText: {
    color: '#D8B16A',
    fontSize: 20,
    letterSpacing: 2,
    opacity: 0.85,
  },

  waveText2: {
    color: '#E9A6A0',
    fontSize: 18,
    letterSpacing: 3,
    marginTop: 5,
  },

  torii: {
    position: 'absolute',
    bottom: 45,
    right: 24,
    zIndex: 2,
  },

  toriiEmoji: {
    fontSize: 52,
  },

  sakuraLeft: {
    position: 'absolute',
    bottom: 76,
    left: 14,
    fontSize: 37,
  },

  sakuraRight: {
    position: 'absolute',
    top: 18,
    right: 15,
    fontSize: 28,
  },

  sceneLabel: {
    position: 'absolute',
    bottom: 12,
    left: 15,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 5,
    backgroundColor: '#100C0D',
    borderWidth: 1,
    borderColor: '#9B4A4E',
  },

  sceneLabelText: {
    color: '#F0D6A0',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 2,
  },

  // FRASE

  quoteCard: {
    width: '100%',
    marginTop: 22,
    padding: 23,
    alignItems: 'center',
    backgroundColor: '#1D1416',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#674037',
    position: 'relative',
    overflow: 'hidden',
  },

  quoteKanji: {
    color: '#E85D68',
    fontSize: 36,
    fontWeight: '900',
    letterSpacing: 5,
  },

  quoteTranslation: {
    color: '#D8B16A',
    fontSize: 11,
    letterSpacing: 3,
    marginTop: 5,
  },

  quoteLine: {
    width: 48,
    height: 2,
    backgroundColor: '#C94B55',
    marginVertical: 17,
  },

  quote: {
    color: '#F5E9DE',
    fontSize: 17,
    fontStyle: 'italic',
    textAlign: 'center',
    lineHeight: 26,
  },

  quoteAuthor: {
    color: '#AE978A',
    fontSize: 11,
    marginTop: 13,
  },

  quoteDecoration: {
    position: 'absolute',
    right: 10,
    bottom: 3,
    fontSize: 35,
    color: '#E85D68',
    opacity: 0.18,
  },

  // DESTINOS

  sectionHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 32,
    marginBottom: 16,
  },

  sectionKicker: {
    color: '#D8B16A',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 3,
    marginBottom: 5,
  },

  exploreTitle: {
    color: '#F7EDE0',
    fontSize: 22,
    fontWeight: '800',
  },

  sectionKanji: {
    color: '#E85D68',
    fontSize: 38,
    fontWeight: '900',
  },

  cardsRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  smallCard: {
    width: '31.5%',
    minHeight: 160,
    backgroundColor: '#211719',
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 4,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#56342F',
  },

  cardIconWrap: {
    width: 53,
    height: 53,
    borderRadius: 28,
    backgroundColor: '#382022',
    borderWidth: 1,
    borderColor: '#855048',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

  smallIcon: {
    fontSize: 26,
  },

  smallTitle: {
    color: '#F7EDE0',
    fontSize: 13,
    fontWeight: '800',
  },

  smallText: {
    color: '#C3A28B',
    fontSize: 10,
    marginTop: 5,
    textAlign: 'center',
  },

  cardKanji: {
    color: '#D8B16A',
    fontSize: 13,
    marginTop: 9,
    fontWeight: '700',
  },

  // RODAPÉ

  footer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 36,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#50312D',
  },

  footerSymbol: {
    color: '#E85D68',
    fontSize: 25,
    fontWeight: '900',
    letterSpacing: 5,
  },

  footerText: {
    color: '#F7EDE0',
    fontSize: 17,
    fontWeight: '700',
    marginTop: 10,
  },

  footerTranslation: {
    color: '#C3A28B',
    fontSize: 12,
    marginTop: 5,
  },

  footerLine: {
    width: 35,
    height: 2,
    backgroundColor: '#D8B16A',
    marginVertical: 16,
  },

  footerSmall: {
    color: '#8F7469',
    fontSize: 9,
    letterSpacing: 3,
  },
});