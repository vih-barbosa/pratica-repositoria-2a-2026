
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Pagina3() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* SÍMBOLOS DE FUNDO */}
        <Text style={styles.bg1}>桜</Text>
        <Text style={styles.bg2}>日本</Text>
        <Text style={styles.bg3}>和</Text>
        <Text style={styles.bg4}>旅</Text>
        <Text style={styles.bg5}>波</Text>
        <Text style={styles.bg6}>✿</Text>

        {/* PÉTALAS DECORATIVAS */}
        <View style={styles.petal1} />
        <View style={styles.petal2} />
        <View style={styles.petal3} />
        <View style={styles.petal4} />

        {/* SELO */}
        <View style={styles.seal}>
          <Text style={styles.sealText}>旅</Text>
          <Text style={styles.sealSmall}>TABI</Text>
        </View>

        {/* CABEÇALHO */}
        <Text style={styles.smallTitle}>
          ✦ 私のプロフィール ✦
        </Text>

        <Text style={styles.title}>
          Meu Perfil
        </Text>

        <View style={styles.titleDivider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerSymbol}>🌸</Text>
          <View style={styles.dividerLine} />
        </View>

        <Text style={styles.subtitle}>
          Explore seus interesses e descubra
          tudo o que faz do Japão um lugar especial.
        </Text>

        {/* AVATAR */}
        <View style={styles.avatarContainer}>
          <View style={styles.avatarGlow} />

          <View style={styles.avatar}>
            <Text style={styles.avatarText}>👘</Text>
          </View>

          <View style={styles.online}>
            <View style={styles.onlineDot} />
            <Text style={styles.onlineText}>
              Explorador do Japão
            </Text>
          </View>
        </View>

        {/* CARTÃO DO PERFIL */}
        <View style={styles.profileCard}>
          <View style={styles.profileHeading}>
            <View>
              <Text style={styles.cardKicker}>
                日本 • NIHON
              </Text>

              <Text style={styles.cardTitle}>
                Viajante Japonês
              </Text>
            </View>

            <View style={styles.miniSeal}>
              <Text style={styles.miniSealText}>和</Text>
            </View>
          </View>

          <Text style={styles.cardDescription}>
            Um apaixonado pela cultura japonesa,
            suas paisagens, tradições, gastronomia
            e experiências inesquecíveis.
          </Text>

          {/* INFORMAÇÕES */}
          <View style={styles.infoLine}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>⛩️</Text>
            </View>

            <View style={styles.infoContent}>
              <Text style={styles.label}>INTERESSE</Text>
              <Text style={styles.value}>
                Cultura e tradição
              </Text>
            </View>

            <Text style={styles.infoKanji}>文化</Text>
          </View>

          <View style={styles.infoLine}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>🗻</Text>
            </View>

            <View style={styles.infoContent}>
              <Text style={styles.label}>DESTINO FAVORITO</Text>
              <Text style={styles.value}>
                Monte Fuji
              </Text>
            </View>

            <Text style={styles.infoKanji}>富士山</Text>
          </View>

          <View style={styles.infoLine}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>🍜</Text>
            </View>

            <View style={styles.infoContent}>
              <Text style={styles.label}>GASTRONOMIA</Text>
              <Text style={styles.value}>
                Sabores japoneses
              </Text>
            </View>

            <Text style={styles.infoKanji}>料理</Text>
          </View>

          <View style={styles.infoLine}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>🌸</Text>
            </View>

            <View style={styles.infoContent}>
              <Text style={styles.label}>ESTAÇÃO FAVORITA</Text>
              <Text style={styles.value}>
                Primavera
              </Text>
            </View>

            <Text style={styles.infoKanji}>春</Text>
          </View>
        </View>

        {/* INTERESSES */}
        <View style={styles.capabilitiesCard}>
          <Text style={styles.sectionKicker}>
            好きなこと • SUKI
          </Text>

          <Text style={styles.capabilitiesTitle}>
            Meus interesses
          </Text>

          <View style={styles.tagsRow}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>
                🌸 Sakura
              </Text>
            </View>

            <View style={styles.tag}>
              <Text style={styles.tagText}>
                ⛩️ Templos
              </Text>
            </View>

            <View style={styles.tag}>
              <Text style={styles.tagText}>
                🍣 Sushi
              </Text>
            </View>

            <View style={styles.tag}>
              <Text style={styles.tagText}>
                🏮 Festivais
              </Text>
            </View>

            <View style={styles.tag}>
              <Text style={styles.tagText}>
                🏯 Castelos
              </Text>
            </View>

            <View style={styles.tag}>
              <Text style={styles.tagText}>
                🎎 Tradições
              </Text>
            </View>
          </View>
        </View>

        {/* FRASE JAPONESA */}
        <View style={styles.quoteCard}>
          <Text style={styles.quoteKanji}>
            七転び八起き
          </Text>

          <Text style={styles.quoteTranslation}>
            NANAKOROBI YAOKI
          </Text>

          <View style={styles.quoteLine} />

          <Text style={styles.quote}>
            “Caia sete vezes, levante-se oito.
            A verdadeira força está em continuar.”
          </Text>

          <Text style={styles.author}>
            — Provérbio japonês
          </Text>

          <Text style={styles.quoteFlower}>🌸</Text>
        </View>

        {/* RODAPÉ */}
        <View style={styles.footer}>
          <Text style={styles.footerJapanese}>
            日本の旅
          </Text>

          <Text style={styles.footerText}>
            Sua jornada pelo Japão começa aqui.
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

  // FUNDO

  bg1: {
    position: 'absolute',
    top: 130,
    left: 8,
    color: '#E85D68',
    opacity: 0.15,
    fontSize: 48,
    fontWeight: '900',
  },

  bg2: {
    position: 'absolute',
    top: 350,
    right: 10,
    color: '#D8B16A',
    opacity: 0.15,
    fontSize: 24,
    letterSpacing: 4,
  },

  bg3: {
    position: 'absolute',
    top: 650,
    left: 12,
    color: '#E85D68',
    opacity: 0.14,
    fontSize: 43,
  },

  bg4: {
    position: 'absolute',
    top: 950,
    right: 15,
    color: '#D8B16A',
    opacity: 0.16,
    fontSize: 38,
  },

  bg5: {
    position: 'absolute',
    top: 510,
    right: 8,
    color: '#B85B64',
    opacity: 0.18,
    fontSize: 38,
  },

  bg6: {
    position: 'absolute',
    bottom: 120,
    left: 20,
    color: '#D8B16A',
    opacity: 0.15,
    fontSize: 30,
  },

  petal1: {
    position: 'absolute',
    top: 180,
    left: 100,
    width: 7,
    height: 10,
    borderRadius: 8,
    backgroundColor: '#E98591',
    transform: [{ rotate: '35deg' }],
  },

  petal2: {
    position: 'absolute',
    top: 400,
    right: 55,
    width: 6,
    height: 9,
    borderRadius: 8,
    backgroundColor: '#D8B16A',
    transform: [{ rotate: '-25deg' }],
  },

  petal3: {
    position: 'absolute',
    top: 750,
    left: 45,
    width: 7,
    height: 10,
    borderRadius: 8,
    backgroundColor: '#E98591',
    transform: [{ rotate: '50deg' }],
  },

  petal4: {
    position: 'absolute',
    bottom: 280,
    right: 65,
    width: 6,
    height: 9,
    borderRadius: 8,
    backgroundColor: '#D8B16A',
  },

  // SELO JAPONÊS

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
    elevation: 5,
  },

  sealText: {
    color: '#FFF0D5',
    fontSize: 27,
    fontWeight: '900',
  },

  sealSmall: {
    color: '#F3D7A0',
    fontSize: 8,
    letterSpacing: 2,
  },

  // CABEÇALHO

  smallTitle: {
    color: '#D8B16A',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 10,
  },

  title: {
    color: '#F7EDE0',
    fontSize: 35,
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
    width: 42,
    height: 1,
    backgroundColor: '#9B5B46',
  },

  dividerSymbol: {
    fontSize: 20,
  },

  subtitle: {
    color: '#C5B7AC',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 22,
    marginTop: 15,
    maxWidth: 310,
  },

  // AVATAR

  avatarContainer: {
    alignItems: 'center',
    marginTop: 27,
    marginBottom: 25,
    position: 'relative',
  },

  avatarGlow: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 80,
    backgroundColor: '#7D2933',
    opacity: 0.32,
  },

  avatar: {
    width: 115,
    height: 115,
    borderRadius: 60,
    backgroundColor: '#291719',
    borderWidth: 3,
    borderColor: '#C94B55',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#E85D68',
    shadowOpacity: 0.35,
    shadowRadius: 20,
    elevation: 10,
  },

  avatarText: {
    fontSize: 59,
  },

  online: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 13,
    backgroundColor: '#211719',
    borderWidth: 1,
    borderColor: '#56342F',
    paddingHorizontal: 13,
    paddingVertical: 7,
    borderRadius: 20,
  },

  onlineDot: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: '#D8B16A',
    marginRight: 7,
  },

  onlineText: {
    color: '#D8BFA9',
    fontSize: 11,
  },

  // PERFIL

  profileCard: {
    width: '100%',
    backgroundColor: '#211719',
    borderRadius: 20,
    padding: 19,
    borderWidth: 1,
    borderColor: '#56342F',
    elevation: 3,
  },

  profileHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  cardKicker: {
    color: '#D8B16A',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 7,
  },

  cardTitle: {
    color: '#F7EDE0',
    fontSize: 21,
    fontWeight: '900',
  },

  miniSeal: {
    width: 43,
    height: 43,
    backgroundColor: '#8F202D',
    borderWidth: 1,
    borderColor: '#C94B55',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },

  miniSealText: {
    color: '#FFF0D5',
    fontSize: 23,
    fontWeight: '900',
  },

  cardDescription: {
    color: '#C5B7AC',
    fontSize: 12.5,
    lineHeight: 20,
    marginTop: 14,
    marginBottom: 17,
  },

  infoLine: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
    borderTopWidth: 1,
    borderTopColor: '#49302C',
  },

  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#382022',
    borderWidth: 1,
    borderColor: '#855048',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  icon: {
    fontSize: 22,
  },

  infoContent: {
    flex: 1,
  },

  label: {
    color: '#C09872',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1,
  },

  value: {
    color: '#F7EDE0',
    fontSize: 13,
    fontWeight: '600',
    marginTop: 4,
  },

  infoKanji: {
    color: '#D8B16A',
    fontSize: 12,
    marginLeft: 5,
  },

  // INTERESSES

  capabilitiesCard: {
    width: '100%',
    backgroundColor: '#211719',
    borderRadius: 19,
    padding: 19,
    marginTop: 18,
    borderWidth: 1,
    borderColor: '#56342F',
  },

  sectionKicker: {
    color: '#D8B16A',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 7,
  },

  capabilitiesTitle: {
    color: '#F7EDE0',
    fontSize: 19,
    fontWeight: '900',
    marginBottom: 15,
  },

  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 9,
  },

  tag: {
    backgroundColor: '#382022',
    borderWidth: 1,
    borderColor: '#855048',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 9,
  },

  tagText: {
    color: '#F0D7C4',
    fontSize: 11,
    fontWeight: '700',
  },

  // FRASE

  quoteCard: {
    width: '100%',
    backgroundColor: '#1D1416',
    borderRadius: 19,
    padding: 22,
    marginTop: 18,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#674037',
    overflow: 'hidden',
  },

  quoteKanji: {
    color: '#E85D68',
    fontSize: 27,
    fontWeight: '900',
    letterSpacing: 2,
    textAlign: 'center',
  },

  quoteTranslation: {
    color: '#D8B16A',
    fontSize: 9,
    letterSpacing: 2,
    marginTop: 8,
  },

  quoteLine: {
    width: 45,
    height: 2,
    backgroundColor: '#C94B55',
    marginVertical: 15,
  },

  quote: {
    color: '#F5E9DE',
    fontSize: 14,
    fontStyle: 'italic',
    lineHeight: 23,
    textAlign: 'center',
  },

  author: {
    color: '#AE978A',
    fontSize: 11,
    marginTop: 13,
  },

  quoteFlower: {
    fontSize: 22,
    marginTop: 13,
  },

  // RODAPÉ

  footer: {
    alignItems: 'center',
    marginTop: 28,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#50312D',
  },

  footerJapanese: {
    color: '#E85D68',
    fontSize: 24,
    fontWeight: '900',
    letterSpacing: 3,
  },

  footerText: {
    color: '#C5B7AC',
    fontSize: 12,
    marginTop: 8,
    textAlign: 'center',
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