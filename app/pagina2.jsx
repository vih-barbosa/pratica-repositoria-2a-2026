
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';

const assuntos = [
  {
    icon: '🌐',
    categoria: 'RELAÇÕES INTERNACIONAIS',
    titulo: 'Diplomacia Mundial',
    descricao:
      'Entenda como os países negociam acordos, estabelecem alianças e resolvem divergências.',
    cor: '#287CB8',
  },
  {
    icon: '🏛️',
    categoria: 'ORGANIZAÇÕES INTERNACIONAIS',
    titulo: 'ONU e OTAN',
    descricao:
      'Conheça o papel das organizações internacionais na segurança, cooperação e política mundial.',
    cor: '#4775C7',
  },
  {
    icon: '⚔️',
    categoria: 'CONFLITOS INTERNACIONAIS',
    titulo: 'Guerras e Tensões',
    descricao:
      'Compreenda as causas históricas, territoriais e políticas dos conflitos entre países.',
    cor: '#C95757',
  },
  {
    icon: '💰',
    categoria: 'ECONOMIA GLOBAL',
    titulo: 'Poder Econômico',
    descricao:
      'Descubra como comércio, energia, recursos naturais e investimentos influenciam o poder mundial.',
    cor: '#C49A42',
  },
  {
    icon: '🗺️',
    categoria: 'GEOGRAFIA POLÍTICA',
    titulo: 'Fronteiras e Territórios',
    descricao:
      'Explore disputas territoriais, fronteiras, soberania e mudanças no mapa político mundial.',
    cor: '#369A83',
  },
  {
    icon: '🤝',
    categoria: 'ALIANÇAS E BLOCOS',
    titulo: 'Blocos Econômicos',
    descricao:
      'Conheça grupos como BRICS, União Europeia e Mercosul e sua influência internacional.',
    cor: '#8B69BD',
  },
];

export default function Pagina2() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >

        {/* ELEMENTOS DECORATIVOS */}
        <Text style={styles.bg1}>🌍</Text>
        <Text style={styles.bg2}>⚖</Text>
        <Text style={styles.bg3}>🌐</Text>
        <Text style={styles.bg4}>✦</Text>
        <Text style={styles.bg5}>🗺</Text>
        <Text style={styles.bg6}>🏛</Text>

        {/* CABEÇALHO */}
        <View style={styles.header}>
          <View>
            <Text style={styles.logo}>WORLD EXPLORER</Text>
            <Text style={styles.logoSub}>
              GEOPOLÍTICA GLOBAL
            </Text>
          </View>

          <View style={styles.headerIcon}>
            <Text style={styles.headerEmoji}>🌐</Text>
          </View>
        </View>

        {/* ÍCONE PRINCIPAL */}
        <View style={styles.iconCircle}>
          <Text style={styles.mainIcon}>🌍</Text>
        </View>

        {/* TÍTULO */}
        <Text style={styles.kicker}>
          ✦ POLÍTICA • PODER • TERRITÓRIO ✦
        </Text>

        <Text style={styles.title}>
          Geopolítica
        </Text>

        <View style={styles.titleDivider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerSymbol}>🌐</Text>
          <View style={styles.dividerLine} />
        </View>

        <Text style={styles.subtitle}>
          Entenda as relações de poder entre os países,
          os conflitos internacionais e os acontecimentos
          que transformam o cenário mundial.
        </Text>

        {/* DESTAQUE */}
        <View style={styles.highlight}>
          <Text style={styles.highlightIcon}>🌎</Text>

          <Text style={styles.highlightKicker}>
            ENTENDA O MUNDO
          </Text>

          <Text style={styles.highlightTitle}>
            O poder vai muito além das fronteiras.
          </Text>

          <Text style={styles.highlightText}>
            A geopolítica estuda como território,
            economia, recursos naturais e decisões
            políticas influenciam as relações entre
            as nações.
          </Text>
        </View>

        {/* INDICADORES */}
        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>195</Text>
            <Text style={styles.statLabel}>Países</Text>
          </View>

          <View style={styles.statDivider} />

          <View style={styles.statItem}>
            <Text style={styles.statNumber}>7</Text>
            <Text style={styles.statLabel}>Continentes</Text>
          </View>

          <View style={styles.statDivider} />

          <View style={styles.statItem}>
            <Text style={styles.statNumber}>ONU</Text>
            <Text style={styles.statLabel}>Cooperação</Text>
          </View>
        </View>

        {/* ASSUNTOS */}
        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionKicker}>
              CONHECIMENTO GLOBAL
            </Text>

            <Text style={styles.sectionTitle}>
              Temas importantes
            </Text>
          </View>

          <Text style={styles.sectionIcon}>📚</Text>
        </View>

        {assuntos.map((item, index) => (
          <View style={styles.card} key={index}>
            <View
              style={[
                styles.cardIconBox,
                { borderColor: item.cor },
              ]}
            >
              <Text style={styles.cardIcon}>
                {item.icon}
              </Text>
            </View>

            <View style={styles.cardContent}>
              <Text
                style={[
                  styles.cardKicker,
                  { color: item.cor },
                ]}
              >
                {item.categoria}
              </Text>

              <Text style={styles.cardTitle}>
                {item.titulo}
              </Text>

              <Text style={styles.cardText}>
                {item.descricao}
              </Text>
            </View>
          </View>
        ))}

        {/* PAÍSES INFLUENTES */}
        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionKicker}>
              CENÁRIO INTERNACIONAL
            </Text>

            <Text style={styles.sectionTitle}>
              Atores globais
            </Text>
          </View>

          <Text style={styles.sectionIcon}>🏳️</Text>
        </View>

        <View style={styles.countryGrid}>
          <View style={styles.countryCard}>
            <Text style={styles.flag}>🇺🇸</Text>
            <Text style={styles.countryName}>Estados Unidos</Text>
            <Text style={styles.countryInfo}>América do Norte</Text>
          </View>

          <View style={styles.countryCard}>
            <Text style={styles.flag}>🇨🇳</Text>
            <Text style={styles.countryName}>China</Text>
            <Text style={styles.countryInfo}>Ásia</Text>
          </View>

          <View style={styles.countryCard}>
            <Text style={styles.flag}>🇷🇺</Text>
            <Text style={styles.countryName}>Rússia</Text>
            <Text style={styles.countryInfo}>Europa e Ásia</Text>
          </View>

          <View style={styles.countryCard}>
            <Text style={styles.flag}>🇧🇷</Text>
            <Text style={styles.countryName}>Brasil</Text>
            <Text style={styles.countryInfo}>América do Sul</Text>
          </View>

          <View style={styles.countryCard}>
            <Text style={styles.flag}>🇮🇳</Text>
            <Text style={styles.countryName}>Índia</Text>
            <Text style={styles.countryInfo}>Ásia</Text>
          </View>

          <View style={styles.countryCard}>
            <Text style={styles.flag}>🇩🇪</Text>
            <Text style={styles.countryName}>Alemanha</Text>
            <Text style={styles.countryInfo}>Europa</Text>
          </View>
        </View>

        {/* FRASE FINAL */}
        <View style={styles.quoteCard}>
          <Text style={styles.quoteIcon}>⚖️</Text>

          <Text style={styles.quoteTitle}>
            O mundo está conectado.
          </Text>

          <View style={styles.quoteLine} />

          <Text style={styles.quoteText}>
            Compreender a geopolítica é compreender
            como as decisões de hoje influenciam
            o futuro das nações.
          </Text>

          <Text style={styles.quoteAuthor}>
            CONHECIMENTO • POLÍTICA • MUNDO
          </Text>
        </View>

        {/* RODAPÉ */}
        <View style={styles.footer}>
          <Text style={styles.footerIcon}>🌐</Text>

          <Text style={styles.footerTitle}>
            WORLD EXPLORER
          </Text>

          <Text style={styles.footerText}>
            Conheça o mundo além das fronteiras.
          </Text>

          <View style={styles.footerLine} />

          <Text style={styles.footerSmall}>
            GEOPOLÍTICA • ECONOMIA • RELAÇÕES GLOBAIS
          </Text>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1421',
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 55,
    paddingBottom: 40,
    overflow: 'hidden',
  },

  // FUNDO

  bg1: {
    position: 'absolute',
    top: 140,
    left: -5,
    fontSize: 48,
    opacity: 0.08,
  },

  bg2: {
    position: 'absolute',
    top: 370,
    right: 10,
    fontSize: 38,
    color: '#D8B16A',
    opacity: 0.12,
  },

  bg3: {
    position: 'absolute',
    top: 700,
    left: 5,
    fontSize: 42,
    opacity: 0.08,
  },

  bg4: {
    position: 'absolute',
    top: 950,
    right: 20,
    fontSize: 30,
    color: '#42B8E8',
    opacity: 0.15,
  },

  bg5: {
    position: 'absolute',
    top: 1200,
    left: 10,
    fontSize: 38,
    opacity: 0.08,
  },

  bg6: {
    position: 'absolute',
    bottom: 100,
    right: 10,
    fontSize: 35,
    opacity: 0.08,
  },

  // CABEÇALHO

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 35,
  },

  logo: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 2,
  },

  logoSub: {
    color: '#42B8E8',
    fontSize: 9,
    letterSpacing: 2,
    marginTop: 5,
    fontWeight: '800',
  },

  headerIcon: {
    width: 45,
    height: 45,
    borderRadius: 14,
    backgroundColor: '#1B3045',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerEmoji: {
    fontSize: 25,
  },

  // ÍCONE

  iconCircle: {
    width: 85,
    height: 85,
    borderRadius: 45,
    backgroundColor: '#17334A',
    borderWidth: 2,
    borderColor: '#42B8E8',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
    alignSelf: 'center',
  },

  mainIcon: {
    fontSize: 43,
  },

  // TÍTULO

  kicker: {
    color: '#42B8E8',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 2,
    textAlign: 'center',
    marginBottom: 10,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '900',
    textAlign: 'center',
  },

  titleDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    marginTop: 13,
  },

  dividerLine: {
    width: 48,
    height: 1,
    backgroundColor: '#4775C7',
  },

  dividerSymbol: {
    fontSize: 19,
  },

  subtitle: {
    color: '#A8B7C7',
    fontSize: 13,
    lineHeight: 22,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 25,
  },

  // DESTAQUE

  highlight: {
    backgroundColor: '#17334A',
    borderRadius: 19,
    padding: 21,
    borderWidth: 1,
    borderColor: '#2B5C78',
    marginBottom: 22,
  },

  highlightIcon: {
    fontSize: 32,
  },

  highlightKicker: {
    color: '#42B8E8',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 2,
    marginTop: 12,
  },

  highlightTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '900',
    lineHeight: 27,
    marginTop: 8,
  },

  highlightText: {
    color: '#B8C9D8',
    fontSize: 12,
    lineHeight: 21,
    marginTop: 10,
  },

  // ESTATÍSTICAS

  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#142438',
    borderRadius: 16,
    paddingVertical: 20,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: '#263C52',
  },

  statItem: {
    alignItems: 'center',
  },

  statNumber: {
    color: '#42B8E8',
    fontSize: 22,
    fontWeight: '900',
  },

  statLabel: {
    color: '#9EB0C2',
    fontSize: 10,
    marginTop: 5,
  },

  statDivider: {
    width: 1,
    height: 35,
    backgroundColor: '#34485C',
  },

  // SEÇÕES

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 17,
    marginTop: 8,
  },

  sectionKicker: {
    color: '#42B8E8',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 6,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: '900',
  },

  sectionIcon: {
    fontSize: 27,
  },

  // CARDS

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#142438',
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#263C52',
  },

  cardIconBox: {
    width: 55,
    height: 58,
    borderRadius: 13,
    backgroundColor: '#20374D',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13,
  },

  cardIcon: {
    fontSize: 27,
  },

  cardContent: {
    flex: 1,
  },

  cardKicker: {
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 1,
    marginBottom: 5,
  },

  cardTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
    marginBottom: 5,
  },

  cardText: {
    color: '#A8B7C7',
    fontSize: 11,
    lineHeight: 17,
  },

  // PAÍSES

  countryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  countryCard: {
    width: '48%',
    backgroundColor: '#142438',
    borderRadius: 15,
    padding: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#263C52',
  },

  flag: {
    fontSize: 30,
    marginBottom: 9,
  },

  countryName: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '900',
  },

  countryInfo: {
    color: '#42B8E8',
    fontSize: 10,
    marginTop: 5,
  },

  // FRASE

  quoteCard: {
    backgroundColor: '#17334A',
    borderRadius: 18,
    padding: 23,
    alignItems: 'center',
    marginTop: 22,
    borderWidth: 1,
    borderColor: '#2B5C78',
  },

  quoteIcon: {
    fontSize: 32,
  },

  quoteTitle: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '900',
    textAlign: 'center',
    marginTop: 12,
  },

  quoteLine: {
    width: 42,
    height: 2,
    backgroundColor: '#42B8E8',
    marginVertical: 15,
  },

  quoteText: {
    color: '#C4D2DE',
    fontSize: 13,
    lineHeight: 22,
    textAlign: 'center',
  },

  quoteAuthor: {
    color: '#42B8E8',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 1.5,
    marginTop: 17,
    textAlign: 'center',
  },

  // RODAPÉ

  footer: {
    alignItems: 'center',
    marginTop: 35,
    paddingTop: 23,
    borderTopWidth: 1,
    borderTopColor: '#293D51',
  },

  footerIcon: {
    fontSize: 34,
  },

  footerTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 3,
    marginTop: 10,
  },

  footerText: {
    color: '#8FA7BD',
    fontSize: 10,
    marginTop: 8,
  },

  footerLine: {
    width: 40,
    height: 2,
    backgroundColor: '#42B8E8',
    marginVertical: 16,
  },

  footerSmall: {
    color: '#62798F',
    fontSize: 8,
    letterSpacing: 1.5,
    textAlign: 'center',
  },
});
