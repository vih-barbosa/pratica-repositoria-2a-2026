
import { StyleSheet, View, Text, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView
      style={styles.background}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* DETALHES DECORATIVOS */}
      <Text style={styles.decorTop}>✦</Text>
      <Text style={styles.decorSide}>❧</Text>

      {/* CABEÇALHO */}
      <View style={styles.header}>
        <Text style={styles.headerIcon}>W</Text>

        <View>
          <Text style={styles.headerTitle}>WIKIPÉDIA</Text>
          <Text style={styles.headerSubtitle}>
            A ENCICLOPÉDIA LIVRE
          </Text>
        </View>
      </View>

      <View style={styles.separator} />

      {/* CONTEÚDO PRINCIPAL */}
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>
          CONHECIMENTO SEM LIMITES
        </Text>

        <Text style={styles.title}>
          Explore o{'\n'}
          <Text style={styles.titleBlue}>
            universo do saber.
          </Text>
        </Text>

        <View style={styles.goldLine} />

        <Text style={styles.description}>
          Descubra histórias, lugares, culturas e
          curiosidades. Um universo de informações
          esperando para ser explorado.
        </Text>
      </View>

      {/* CARTÃO DE DESTAQUE */}
      <View style={styles.featureCard}>
        <View style={styles.cardIcon}>
          <Text style={styles.bookIcon}>▤</Text>
        </View>

        <View style={styles.cardContent}>
          <Text style={styles.cardLabel}>
            SUA JORNADA COMEÇA AQUI
          </Text>

          <Text style={styles.cardTitle}>
            O conhecimento está ao seu alcance.
          </Text>

          <Text style={styles.cardDescription}>
            Pesquise assuntos, explore artigos e
            encontre novas perspectivas.
          </Text>
        </View>

        <Text style={styles.cardStar}>✧</Text>
      </View>

      {/* CATEGORIAS */}
      <Text style={styles.sectionTitle}>
        UM MUNDO DE DESCOBERTAS
      </Text>

      <View style={styles.categories}>
        <View style={styles.category}>
          <Text style={styles.categoryIcon}>🌎</Text>
          <Text style={styles.categoryTitle}>Geografia</Text>
          <Text style={styles.categoryText}>
            Lugares e culturas
          </Text>
        </View>

        <View style={styles.category}>
          <Text style={styles.categoryIcon}>🏛️</Text>
          <Text style={styles.categoryTitle}>História</Text>
          <Text style={styles.categoryText}>
            O passado em foco
          </Text>
        </View>

        <View style={styles.category}>
          <Text style={styles.categoryIcon}>🔬</Text>
          <Text style={styles.categoryTitle}>Ciência</Text>
          <Text style={styles.categoryText}>
            Ideias e descobertas
          </Text>
        </View>

        <View style={styles.category}>
          <Text style={styles.categoryIcon}>🎨</Text>
          <Text style={styles.categoryTitle}>Cultura</Text>
          <Text style={styles.categoryText}>
            Arte e conhecimento
          </Text>
        </View>
      </View>

      {/* FRASE FINAL */}
      <View style={styles.quote}>
        <Text style={styles.quoteMark}>“</Text>
        <Text style={styles.quoteText}>
          Imagine um mundo em que cada pessoa
          tenha livre acesso à soma de todo o conhecimento.
        </Text>
      </View>

      {/* RODAPÉ */}
      <View style={styles.footer}>
        <View style={styles.footerLine} />
        <Text style={styles.footerText}>
          WIKIPÉDIA • CONHECIMENTO LIVRE
        </Text>
        <Text style={styles.footerSymbol}>✦</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#F5F3ED',
  },

  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingTop: 55,
    paddingBottom: 45,
  },

  decorTop: {
    position: 'absolute',
    top: 28,
    right: 35,
    color: '#B69A61',
    fontSize: 27,
  },

  decorSide: {
    position: 'absolute',
    top: 300,
    left: -5,
    color: '#D8D0BE',
    fontSize: 65,
    opacity: 0.5,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 25,
  },

  headerIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#A99670',
    color: '#263F5B',
    fontSize: 29,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginRight: 12,
    fontFamily: 'serif',
  },

  headerTitle: {
    color: '#263F5B',
    fontSize: 17,
    fontWeight: '900',
    letterSpacing: 3,
  },

  headerSubtitle: {
    color: '#96886F',
    fontSize: 8,
    letterSpacing: 2,
    marginTop: 4,
  },

  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#DCD5C7',
    marginBottom: 55,
  },

  hero: {
    alignItems: 'center',
    marginBottom: 40,
  },

  eyebrow: {
    color: '#A18B60',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 3,
    marginBottom: 18,
  },

  title: {
    color: '#252F3D',
    fontSize: 39,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 47,
    fontFamily: 'serif',
  },

  titleBlue: {
    color: '#315B82',
  },

  goldLine: {
    width: 55,
    height: 2,
    backgroundColor: '#B69A61',
    marginVertical: 23,
  },

  description: {
    color: '#74736E',
    fontSize: 14,
    lineHeight: 24,
    textAlign: 'center',
    maxWidth: 320,
  },

  featureCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E8E2D6',
    padding: 23,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 38,
    elevation: 3,
    shadowColor: '#77705F',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 5 },
  },

  cardIcon: {
    width: 45,
    height: 45,
    backgroundColor: '#EDF1F5',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  bookIcon: {
    color: '#315B82',
    fontSize: 29,
  },

  cardContent: {
    flex: 1,
  },

  cardLabel: {
    color: '#A18B60',
    fontSize: 8,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    marginBottom: 9,
  },

  cardTitle: {
    color: '#293B50',
    fontSize: 17,
    fontWeight: 'bold',
    lineHeight: 23,
    fontFamily: 'serif',
  },

  cardDescription: {
    color: '#85827A',
    fontSize: 12,
    lineHeight: 19,
    marginTop: 8,
  },

  cardStar: {
    color: '#B69A61',
    fontSize: 22,
    marginLeft: 5,
  },

  sectionTitle: {
    alignSelf: 'flex-start',
    color: '#34485C',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 17,
  },

  categories: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  category: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E9E3D8',
    borderRadius: 13,
    padding: 17,
    marginBottom: 12,
  },

  categoryIcon: {
    fontSize: 25,
    marginBottom: 12,
  },

  categoryTitle: {
    color: '#34485C',
    fontSize: 15,
    fontWeight: 'bold',
  },

  categoryText: {
    color: '#99948A',
    fontSize: 10,
    marginTop: 5,
  },

  quote: {
    width: '100%',
    backgroundColor: '#EBE8DF',
    padding: 22,
    borderRadius: 12,
    marginTop: 22,
    alignItems: 'center',
  },

  quoteMark: {
    color: '#B69A61',
    fontSize: 43,
    fontFamily: 'serif',
    lineHeight: 43,
  },

  quoteText: {
    color: '#5C5C56',
    fontSize: 12,
    lineHeight: 21,
    fontStyle: 'italic',
    textAlign: 'center',
  },

  footer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 40,
  },

  footerLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#DCD5C7',
    marginBottom: 18,
  },

  footerText: {
    color: '#A39A89',
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 2,
  },

  footerSymbol: {
    color: '#B69A61',
    fontSize: 18,
    marginTop: 12,
  },
});
