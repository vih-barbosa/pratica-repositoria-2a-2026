
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  StatusBar,
} from 'react-native';

const paises = [
  {
    nome: 'Brasil',
    capital: 'Brasília',
    continente: 'América do Sul',
    bandeira: '🇧🇷',
    cor: '#2E8B57',
  },
  {
    nome: 'Japão',
    capital: 'Tóquio',
    continente: 'Ásia',
    bandeira: '🇯🇵',
    cor: '#D94B55',
  },
  {
    nome: 'França',
    capital: 'Paris',
    continente: 'Europa',
    bandeira: '🇫🇷',
    cor: '#4775C7',
  },
  {
    nome: 'Egito',
    capital: 'Cairo',
    continente: 'África',
    bandeira: '🇪🇬',
    cor: '#D5A33C',
  },
  {
    nome: 'Canadá',
    capital: 'Ottawa',
    continente: 'América do Norte',
    bandeira: '🇨🇦',
    cor: '#D94B55',
  },
  {
    nome: 'Austrália',
    capital: 'Camberra',
    continente: 'Oceania',
    bandeira: '🇦🇺',
    cor: '#4775C7',
  },
];

export default function Pagina1() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >

        {/* CABEÇALHO */}
        <View style={styles.header}>
          <View>
            <Text style={styles.logo}>WORLD EXPLORER 🌎</Text>
            <Text style={styles.subtitle}>
              Descubra o nosso planeta
            </Text>
          </View>

          <View style={styles.profile}>
            <Text style={styles.profileIcon}>✈️</Text>
          </View>
        </View>

        {/* TÍTULO PRINCIPAL */}
        <View style={styles.intro}>
          <Text style={styles.introSmall}>
            EXPLORE • CONHEÇA • DESCUBRA
          </Text>

          <Text style={styles.title}>
            O mundo{'\n'}
            <Text style={styles.titleBlue}>espera por você.</Text>
          </Text>

          <Text style={styles.description}>
            Uma viagem pelos países, culturas e
            paisagens mais incríveis do planeta.
          </Text>
        </View>

        {/* IMAGEM DO PLANETA */}
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://img.nsctotal.com.br/wp-content/uploads/2023/10/Globo-terrestre_Banco-de-Imagens.jpg',
            }}
            style={styles.globeImage}
            resizeMode="cover"
          />

          <View style={styles.imageOverlay}>
            <Text style={styles.imageTag}>
              🌍 NOSSO PLANETA
            </Text>

            <Text style={styles.imageTitle}>
              Um mundo de possibilidades
            </Text>

            <Text style={styles.imageSubtitle}>
              Conheça cada canto da Terra.
            </Text>
          </View>
        </View>

        {/* ESTATÍSTICAS */}
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
            <Text style={styles.statNumber}>8 bi+</Text>
            <Text style={styles.statLabel}>Habitantes</Text>
          </View>
        </View>

        {/* CONTINENTES */}
        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionSmall}>
              EXPLORE O PLANETA
            </Text>
            <Text style={styles.sectionTitle}>
              Continentes
            </Text>
          </View>
          <Text style={styles.sectionIcon}>🗺️</Text>
        </View>

        <View style={styles.continentGrid}>
          <View style={[styles.continentCard, {backgroundColor: '#173E62'}]}>
            <Text style={styles.continentEmoji}>🌎</Text>
            <Text style={styles.continentName}>América</Text>
            <Text style={styles.continentInfo}>Norte, Central e Sul</Text>
          </View>

          <View style={[styles.continentCard, {backgroundColor: '#254B3C'}]}>
            <Text style={styles.continentEmoji}>🌍</Text>
            <Text style={styles.continentName}>África</Text>
            <Text style={styles.continentInfo}>Diversidade cultural</Text>
          </View>

          <View style={[styles.continentCard, {backgroundColor: '#493B65'}]}>
            <Text style={styles.continentEmoji}>🌏</Text>
            <Text style={styles.continentName}>Ásia</Text>
            <Text style={styles.continentInfo}>Tradição e tecnologia</Text>
          </View>

          <View style={[styles.continentCard, {backgroundColor: '#654333'}]}>
            <Text style={styles.continentEmoji}>🏰</Text>
            <Text style={styles.continentName}>Europa</Text>
            <Text style={styles.continentInfo}>História e arquitetura</Text>
          </View>

          <View style={[styles.continentCard, {backgroundColor: '#24536B'}]}>
            <Text style={styles.continentEmoji}>🏝️</Text>
            <Text style={styles.continentName}>Oceania</Text>
            <Text style={styles.continentInfo}>Ilhas e natureza</Text>
          </View>

          <View style={[styles.continentCard, {backgroundColor: '#43515A'}]}>
            <Text style={styles.continentEmoji}>❄️</Text>
            <Text style={styles.continentName}>Antártida</Text>
            <Text style={styles.continentInfo}>Gelo e pesquisa</Text>
          </View>
        </View>

        {/* PAÍSES */}
        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionSmall}>
              DESTINOS PELO MUNDO
            </Text>
            <Text style={styles.sectionTitle}>
              Países em destaque
            </Text>
          </View>
          <Text style={styles.sectionIcon}>✈️</Text>
        </View>

        {paises.map((pais, index) => (
          <View
            key={index}
            style={styles.countryCard}
          >
            <View
              style={[
                styles.countryAccent,
                {backgroundColor: pais.cor},
              ]}
            />

            <View style={styles.flagBox}>
              <Text style={styles.flag}>
                {pais.bandeira}
              </Text>
            </View>

            <View style={styles.countryInfo}>
              <Text style={styles.countryName}>
                {pais.nome}
              </Text>

              <Text style={styles.countryCapital}>
                Capital: {pais.capital}
              </Text>

              <Text style={styles.countryContinent}>
                📍 {pais.continente}
              </Text>
            </View>

            <Text style={styles.countryArrow}>›</Text>
          </View>
        ))}

        {/* CURIOSIDADE */}
        <View style={styles.curiosity}>
          <Text style={styles.curiosityIcon}>💡</Text>

          <Text style={styles.curiosityLabel}>
            VOCÊ SABIA?
          </Text>

          <Text style={styles.curiosityTitle}>
            O mundo é cheio de descobertas!
          </Text>

          <Text style={styles.curiosityText}>
            Existem milhares de idiomas, tradições,
            comidas e paisagens diferentes espalhados
            pelo nosso planeta.
          </Text>
        </View>

        {/* RODAPÉ */}
        <View style={styles.footer}>
          <Text style={styles.footerGlobe}>🌍</Text>

          <Text style={styles.footerTitle}>
            WORLD EXPLORER
          </Text>

          <Text style={styles.footerText}>
            Um planeta. Muitas culturas. Infinitas histórias.
          </Text>

          <View style={styles.footerLine} />

          <Text style={styles.footerSmall}>
            EXPLORE THE WORLD • 2026
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
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 38,
  },

  logo: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 2,
  },

  subtitle: {
    color: '#8FA7BD',
    fontSize: 11,
    marginTop: 5,
  },

  profile: {
    width: 43,
    height: 43,
    backgroundColor: '#1B3045',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileIcon: {
    fontSize: 22,
  },

  intro: {
    marginBottom: 25,
  },

  introSmall: {
    color: '#42B8E8',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 3,
    marginBottom: 13,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: '900',
    lineHeight: 44,
  },

  titleBlue: {
    color: '#42B8E8',
  },

  description: {
    color: '#A8B7C7',
    fontSize: 13,
    lineHeight: 22,
    marginTop: 13,
    maxWidth: 310,
  },

  imageContainer: {
    height: 235,
    borderRadius: 22,
    overflow: 'hidden',
    backgroundColor: '#20364B',
    marginBottom: 22,
  },

  globeImage: {
    width: '100%',
    height: '100%',
  },

  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 18,
    backgroundColor: 'rgba(5,15,27,0.72)',
  },

  imageTag: {
    color: '#55C7F0',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 2,
  },

  imageTitle: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '900',
    marginTop: 7,
  },

  imageSubtitle: {
    color: '#C3D1DF',
    fontSize: 11,
    marginTop: 5,
  },

  stats: {
    flexDirection: 'row',
    backgroundColor: '#142438',
    borderRadius: 17,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 34,
    borderWidth: 1,
    borderColor: '#263C52',
  },

  statItem: {
    alignItems: 'center',
  },

  statNumber: {
    color: '#47C2ED',
    fontSize: 22,
    fontWeight: '900',
  },

  statLabel: {
    color: '#9EB0C2',
    fontSize: 10,
    marginTop: 5,
  },

  statDivider: {
    height: 35,
    width: 1,
    backgroundColor: '#34485C',
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 17,
    marginTop: 10,
  },

  sectionSmall: {
    color: '#42B8E8',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 6,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
  },

  sectionIcon: {
    fontSize: 28,
  },

  continentGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },

  continentCard: {
    width: '48%',
    minHeight: 125,
    borderRadius: 16,
    padding: 15,
    marginBottom: 12,
    justifyContent: 'center',
  },

  continentEmoji: {
    fontSize: 27,
    marginBottom: 8,
  },

  continentName: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900',
  },

  continentInfo: {
    color: '#D0DCE5',
    fontSize: 10,
    marginTop: 5,
  },

  countryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#142438',
    borderRadius: 15,
    marginBottom: 12,
    padding: 13,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#263C52',
  },

  countryAccent: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 4,
  },

  flagBox: {
    width: 55,
    height: 55,
    backgroundColor: '#20374D',
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },

  flag: {
    fontSize: 29,
  },

  countryInfo: {
    flex: 1,
    marginLeft: 13,
  },

  countryName: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900',
  },

  countryCapital: {
    color: '#A9B9C9',
    fontSize: 11,
    marginTop: 4,
  },

  countryContinent: {
    color: '#49BDE7',
    fontSize: 10,
    marginTop: 5,
  },

  countryArrow: {
    color: '#55C7F0',
    fontSize: 29,
    marginRight: 5,
  },

  curiosity: {
    backgroundColor: '#17334A',
    borderRadius: 19,
    padding: 22,
    marginTop: 22,
    borderWidth: 1,
    borderColor: '#2B5C78',
  },

  curiosityIcon: {
    fontSize: 27,
  },

  curiosityLabel: {
    color: '#48C4ED',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 2,
    marginTop: 12,
  },

  curiosityTitle: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '900',
    marginTop: 8,
  },

  curiosityText: {
    color: '#B8C9D8',
    fontSize: 12,
    lineHeight: 21,
    marginTop: 9,
  },

  footer: {
    alignItems: 'center',
    marginTop: 38,
    paddingTop: 25,
    borderTopWidth: 1,
    borderTopColor: '#293D51',
  },

  footerGlobe: {
    fontSize: 35,
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
    textAlign: 'center',
    marginTop: 8,
  },

  footerLine: {
    width: 40,
    height: 2,
    backgroundColor: '#42B8E8',
    marginVertical: 17,
  },

  footerSmall: {
    color: '#62798F',
    fontSize: 9,
    letterSpacing: 2,
  },
});
