
import { Text, View, StyleSheet, ScrollView } from 'react-native';

export default function Pagina2() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* SÍMBOLOS JAPONESES DE FUNDO */}
        <Text style={styles.bg1}>桜</Text>
        <Text style={styles.bg2}>日本</Text>
        <Text style={styles.bg3}>和</Text>
        <Text style={styles.bg4}>波</Text>
        <Text style={styles.bg5}>✿</Text>
        <Text style={styles.bg6}>旅</Text>
        <Text style={styles.bg7}>富士山</Text>

        {/* PÉTALAS */}
        <View style={styles.petal1} />
        <View style={styles.petal2} />
        <View style={styles.petal3} />
        <View style={styles.petal4} />

        {/* SELO JAPONÊS */}
        <View style={styles.seal}>
          <Text style={styles.sealText}>和</Text>
          <Text style={styles.sealSmall}>WA</Text>
        </View>

        {/* ÍCONE PRINCIPAL */}
        <View style={styles.iconCircle}>
          <Text style={styles.aiIcon}>🌸</Text>
        </View>

        {/* TÍTULO */}
        <Text style={styles.kicker}>
          ✦ あなたのお気に入り ✦
        </Text>

        <Text style={styles.title}>
          Meus Favoritos
        </Text>

        <View style={styles.titleDivider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerSymbol}>✿</Text>
          <View style={styles.dividerLine} />
        </View>

        <Text style={styles.subtitle}>
          Descubra os encantos do Japão, suas tradições,
          paisagens e lugares inesquecíveis.
        </Text>

        {/* CARD 1 */}
        <View style={styles.card}>
          <View style={styles.cardIconBox}>
            <Text style={styles.cardIcon}>⛩️</Text>
          </View>

          <View style={styles.cardContent}>
            <Text style={styles.cardKicker}>伝統 • TRADIÇÃO</Text>
            <Text style={styles.cardTitle}>Templos Japoneses</Text>
            <Text style={styles.cardText}>
              Santuários históricos, portais torii e
              lugares de paz e espiritualidade.
            </Text>
          </View>

          <View style={styles.favoriteSeal}>
            <Text style={styles.favorite}>♥</Text>
          </View>
        </View>

        {/* CARD 2 */}
        <View style={styles.card}>
          <View style={styles.cardIconBox}>
            <Text style={styles.cardIcon}>🌸</Text>
          </View>

          <View style={styles.cardContent}>
            <Text style={styles.cardKicker}>花見 • HANAMI</Text>
            <Text style={styles.cardTitle}>Flores de Sakura</Text>
            <Text style={styles.cardText}>
              A beleza das cerejeiras em flor e
              a chegada da primavera japonesa.
            </Text>
          </View>

          <View style={styles.favoriteSeal}>
            <Text style={styles.favorite}>♥</Text>
          </View>
        </View>

        {/* CARD 3 */}
        <View style={styles.card}>
          <View style={styles.cardIconBox}>
            <Text style={styles.cardIcon}>🏮</Text>
          </View>

          <View style={styles.cardContent}>
            <Text style={styles.cardKicker}>文化 • CULTURA</Text>
            <Text style={styles.cardTitle}>Cultura Japonesa</Text>
            <Text style={styles.cardText}>
              Festivais, lanternas, cerimônias
              tradicionais e costumes milenares.
            </Text>
          </View>

          <View style={styles.favoriteSeal}>
            <Text style={styles.favorite}>♥</Text>
          </View>
        </View>

        {/* CARD 4 */}
        <View style={styles.card}>
          <View style={styles.cardIconBox}>
            <Text style={styles.cardIcon}>🗻</Text>
          </View>

          <View style={styles.cardContent}>
            <Text style={styles.cardKicker}>自然 • NATUREZA</Text>
            <Text style={styles.cardTitle}>Monte Fuji</Text>
            <Text style={styles.cardText}>
              Uma paisagem icônica cercada por
              lagos, montanhas e cenários naturais.
            </Text>
          </View>

          <View style={styles.favoriteSeal}>
            <Text style={styles.favorite}>♥</Text>
          </View>
        </View>

        {/* CARD 5 */}
        <View style={styles.card}>
          <View style={styles.cardIconBox}>
            <Text style={styles.cardIcon}>🍜</Text>
          </View>

          <View style={styles.cardContent}>
            <Text style={styles.cardKicker}>料理 • GASTRONOMIA</Text>
            <Text style={styles.cardTitle}>Sabores do Japão</Text>
            <Text style={styles.cardText}>
              Ramen, sushi, doces tradicionais
              e experiências gastronômicas únicas.
            </Text>
          </View>

          <View style={styles.favoriteSeal}>
            <Text style={styles.favorite}>♥</Text>
          </View>
        </View>

        {/* FRASE FINAL */}
        <View style={styles.quoteCard}>
          <Text style={styles.quoteKanji}>一期一会</Text>

          <Text style={styles.quoteTranslation}>
            ICHIGO ICHIE
          </Text>

          <View style={styles.quoteLine} />

          <Text style={styles.quoteText}>
            Cada momento é único.
            Guarde aquilo que faz seu coração florescer.
          </Text>

          <Text style={styles.quoteFlower}>🌸</Text>
        </View>

        {/* RODAPÉ */}
        <View style={styles.footer}>
          <Text style={styles.footerJapanese}>
            日本の美
          </Text>

          <Text style={styles.footerText}>
            A beleza do Japão
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
    paddingHorizontal: 22,
    paddingTop: 65,
    paddingBottom: 40,
    overflow: 'hidden',
  },

  // FUNDO DECORATIVO

  bg1: {
    position: 'absolute',
    top: 125,
    left: 8,
    color: '#E85D68',
    opacity: 0.16,
    fontSize: 48,
    fontWeight: '900',
  },

  bg2: {
    position: 'absolute',
    top: 350,
    right: 10,
    color: '#D8B16A',
    opacity: 0.16,
    fontSize: 24,
    letterSpacing: 4,
  },

  bg3: {
    position: 'absolute',
    top: 610,
    left: 12,
    color: '#E85D68',
    opacity: 0.15,
    fontSize: 44,
  },

  bg4: {
    position: 'absolute',
    top: 900,
    right: 12,
    color: '#D8B16A',
    opacity: 0.15,
    fontSize: 38,
  },

  bg5: {
    position: 'absolute',
    top: 240,
    right: 40,
    color: '#E98591',
    opacity: 0.35,
    fontSize: 26,
  },

  bg6: {
    position: 'absolute',
    top: 1120,
    left: 12,
    color: '#D8B16A',
    opacity: 0.14,
    fontSize: 40,
  },

  bg7: {
    position: 'absolute',
    bottom: 80,
    right: 12,
    color: '#E85D68',
    opacity: 0.12,
    fontSize: 18,
  },

  petal1: {
    position: 'absolute',
    top: 170,
    left: 110,
    width: 7,
    height: 10,
    borderRadius: 8,
    backgroundColor: '#E98591',
    transform: [{ rotate: '35deg' }],
  },

  petal2: {
    position: 'absolute',
    top: 430,
    right: 60,
    width: 6,
    height: 9,
    borderRadius: 8,
    backgroundColor: '#D8B16A',
    transform: [{ rotate: '-25deg' }],
  },

  petal3: {
    position: 'absolute',
    top: 760,
    left: 45,
    width: 7,
    height: 10,
    borderRadius: 8,
    backgroundColor: '#E98591',
    transform: [{ rotate: '50deg' }],
  },

  petal4: {
    position: 'absolute',
    top: 1050,
    right: 75,
    width: 6,
    height: 9,
    borderRadius: 8,
    backgroundColor: '#D8B16A',
  },

  // SELO

  seal: {
    position: 'absolute',
    top: 28,
    right: 27,
    width: 52,
    height: 64,
    borderWidth: 2,
    borderColor: '#C94B55',
    backgroundColor: '#8F202D',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    transform: [{ rotate: '5deg' }],
  },

  sealText: {
    color: '#FFF0D5',
    fontSize: 26,
    fontWeight: '900',
  },

  sealSmall: {
    color: '#F3D7A0',
    fontSize: 8,
    letterSpacing: 2,
  },

  // ÍCONE PRINCIPAL

  iconCircle: {
    width: 78,
    height: 78,
    borderRadius: 40,
    backgroundColor: '#291719',
    borderWidth: 2,
    borderColor: '#A64A4F',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 17,
    shadowColor: '#E85D68',
    shadowOpacity: 0.25,
    shadowRadius: 18,
    elevation: 8,
  },

  aiIcon: {
    fontSize: 39,
  },

  // TÍTULO

  kicker: {
    color: '#D8B16A',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 10,
  },

  title: {
    color: '#F7EDE0',
    fontSize: 31,
    fontWeight: '900',
  },

  titleDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    marginTop: 13,
  },

  dividerLine: {
    width: 45,
    height: 1,
    backgroundColor: '#9B5B46',
  },

  dividerSymbol: {
    color: '#E85D68',
    fontSize: 21,
  },

  subtitle: {
    color: '#C5B7AC',
    fontSize: 14,
    lineHeight: 22,
    marginTop: 15,
    marginBottom: 27,
    maxWidth: 330,
  },

  // CARDS

  card: {
    width: '100%',
    minHeight: 125,
    backgroundColor: '#211719',
    borderRadius: 17,
    padding: 14,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#56342F',
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 3,
  },

  cardIconBox: {
    width: 55,
    height: 60,
    borderRadius: 13,
    backgroundColor: '#382022',
    borderWidth: 1,
    borderColor: '#855048',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  cardIcon: {
    fontSize: 28,
  },

  cardContent: {
    flex: 1,
  },

  cardKicker: {
    color: '#D8B16A',
    fontSize: 8,
    fontWeight: '800',
    letterSpacing: 1.2,
    marginBottom: 5,
  },

  cardTitle: {
    color: '#F7EDE0',
    fontSize: 15,
    fontWeight: '800',
    marginBottom: 6,
  },

  cardText: {
    color: '#C5B7AC',
    fontSize: 11.5,
    lineHeight: 17,
  },

  favoriteSeal: {
    width: 27,
    height: 32,
    backgroundColor: '#64252E',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#A64A4F',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 7,
  },

  favorite: {
    color: '#F2C5A5',
    fontSize: 15,
  },

  // FRASE FINAL

  quoteCard: {
    width: '100%',
    marginTop: 14,
    padding: 22,
    alignItems: 'center',
    backgroundColor: '#1D1416',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#674037',
    overflow: 'hidden',
  },

  quoteKanji: {
    color: '#E85D68',
    fontSize: 32,
    fontWeight: '900',
    letterSpacing: 5,
  },

  quoteTranslation: {
    color: '#D8B16A',
    fontSize: 10,
    letterSpacing: 3,
    marginTop: 7,
  },

  quoteLine: {
    width: 45,
    height: 2,
    backgroundColor: '#C94B55',
    marginVertical: 15,
  },

  quoteText: {
    color: '#F5E9DE',
    fontSize: 15,
    fontStyle: 'italic',
    textAlign: 'center',
    lineHeight: 24,
  },

  quoteFlower: {
    fontSize: 24,
    marginTop: 13,
  },

  // RODAPÉ

  footer: {
    alignItems: 'center',
    marginTop: 30,
    paddingTop: 22,
    borderTopWidth: 1,
    borderTopColor: '#50312D',
  },

  footerJapanese: {
    color: '#E85D68',
    fontSize: 25,
    fontWeight: '900',
    letterSpacing: 4,
  },

  footerText: {
    color: '#C5B7AC',
    fontSize: 12,
    marginTop: 7,
  },

  footerLine: {
    width: 35,
    height: 2,
    backgroundColor: '#D8B16A',
    marginVertical: 15,
  },

  footerSmall: {
    color: '#8F7469',
    fontSize: 9,
    letterSpacing: 2,
  },
});