
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';

import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { theme } from './theme';

export default function Pagina1() {
  const continentes = [
    { icon: 'earth-outline', name: 'América', color: '#E0F0E9' },
    { icon: 'business-outline', name: 'Europa', color: '#E5ECFA' },
    { icon: 'sunny-outline', name: 'África', color: '#F8EBD8' },
    { icon: 'flower-outline', name: 'Ásia', color: '#F5E5E8' },
    { icon: 'leaf-outline', name: 'Oceania', color: '#E2F1F3' },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* CABEÇALHO */}

      <View style={styles.header}>
        <View style={styles.logo}>
          <Ionicons name="earth" size={28} color="#FFFFFF" />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.brand}>MUNDO EM FOCO</Text>
          <Text style={styles.brandSubtitle}>PAÍSES E CULTURAS</Text>
        </View>

        <Ionicons name="compass-outline" size={28} color="#245B50" />
      </View>

      {/* APRESENTAÇÃO */}

      <View style={styles.intro}>
        <Text style={styles.eyebrow}>
          EXPLORE • DESCUBRA • CONHEÇA
        </Text>

        <Text style={styles.title}>
          Os Países
          {'\n'}
          do Mundo.
        </Text>

        <Text style={styles.description}>
          O mundo é formado por diversos países, cada um com
          sua própria cultura, história, idioma, costumes e
          tradições. Descubra a diversidade e as riquezas
          que tornam cada lugar especial.
        </Text>
      </View>

      {/* DESTAQUE */}

      <Text style={styles.sectionLabel}>DESTINO EM DESTAQUE</Text>

      <Pressable
        style={styles.heroCard}
        onPress={() =>
          router.push({
            pathname: '/pagina5',
            params: { pais: 'Brasil' },
          })
        }
      >
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1000',
          }}
          style={styles.heroImage}
        />

        <View style={styles.heroOverlay}>
          <Text style={styles.heroTag}>AMÉRICA DO SUL • BRASIL</Text>

          <Text style={styles.heroTitle}>
            Descubra o Brasil
          </Text>

          <Text style={styles.heroDescription}>
            Conheça nossas paisagens, culturas, tradições
            e a incrível diversidade brasileira.
          </Text>

          <View style={styles.heroButton}>
            <Text style={styles.heroButtonText}>
              Explorar país
            </Text>
            <Ionicons name="arrow-forward" size={17} color="#FFFFFF" />
          </View>
        </View>
      </Pressable>

      {/* CONTINENTES */}

      <View style={styles.sectionHeader}>
        <View>
          <Text style={styles.sectionTitle}>
            Explore os continentes
          </Text>

          <Text style={styles.sectionDescription}>
            Cinco regiões para conhecer e descobrir.
          </Text>
        </View>
      </View>

      <View style={styles.categories}>
        {continentes.map((item) => (
          <Pressable
            key={item.name}
            style={styles.categoryCard}
            onPress={() => router.push('/pagina2')}
          >
            <View
              style={[
                styles.categoryIcon,
                { backgroundColor: item.color },
              ]}
            >
              <Ionicons
                name={item.icon}
                size={25}
                color="#245B50"
              />
            </View>

            <Text style={styles.categoryName}>
              {item.name}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* CURIOSIDADES */}

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          A diversidade do mundo
        </Text>
      </View>

      <View style={styles.infoCard}>
        <Ionicons
          name="globe-outline"
          size={30}
          color="#245B50"
        />

        <View style={{ flex: 1 }}>
          <Text style={styles.infoTitle}>
            Um planeta, muitas culturas
          </Text>

          <Text style={styles.infoText}>
            Brasil, Japão, França, Egito e muitos outros
            países possuem histórias, idiomas e tradições
            que tornam nosso planeta único.
          </Text>
        </View>
      </View>

      {/* TEXTO INFORMATIVO */}

      <View style={styles.textCard}>
        <Text style={styles.textCardTitle}>
          Por que conhecer os países?
        </Text>

        <Text style={styles.textCardDescription}>
          Conhecer os países é uma forma de aprender sobre
          outras culturas, respeitar as diferenças e
          compreender melhor o planeta em que vivemos.
          {'\n\n'}
          Apesar das fronteiras e das diferenças culturais,
          todos fazemos parte de um mesmo mundo e
          compartilhamos a responsabilidade de cuidar dele.
        </Text>
      </View>

      {/* FRASE FINAL */}

      <View style={styles.quoteCard}>
        <Ionicons
          name="earth"
          size={28}
          color="#FFFFFF"
        />

        <Text style={styles.quote}>
          "Conhecer o mundo é descobrir que a diversidade
          é uma das maiores riquezas da humanidade!"
        </Text>
      </View>

      <Text style={styles.footer}>
        MUNDO EM FOCO • CONHECENDO NOSSO PLANETA
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7F2',
  },

  content: {
    paddingHorizontal: 23,
    paddingTop: 58,
    paddingBottom: 40,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 38,
  },

  logo: {
    width: 46,
    height: 46,
    backgroundColor: '#245B50',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  brand: {
    fontSize: 15,
    fontWeight: '900',
    color: '#203D35',
    letterSpacing: 1.3,
  },

  brandSubtitle: {
    color: '#82948B',
    fontSize: 9,
    letterSpacing: 2,
    marginTop: 3,
  },

  intro: {
    marginBottom: 25,
  },

  eyebrow: {
    color: '#43816B',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1.8,
    marginBottom: 13,
  },

  title: {
    color: '#203D35',
    fontSize: 36,
    fontWeight: '900',
    lineHeight: 43,
  },

  description: {
    color: '#66766E',
    fontSize: 14,
    lineHeight: 24,
    marginTop: 14,
  },

  sectionLabel: {
    color: '#82948B',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 13,
  },

  heroCard: {
    height: 270,
    borderRadius: 21,
    overflow: 'hidden',
    marginBottom: 32,
  },

  heroImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  heroOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
    backgroundColor: 'rgba(13, 43, 34, 0.53)',
  },

  heroTag: {
    color: '#D7EBDD',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 9,
  },

  heroTitle: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: '900',
  },

  heroDescription: {
    color: '#F1F5F1',
    fontSize: 12,
    lineHeight: 19,
    marginTop: 7,
  },

  heroButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    marginTop: 15,
  },

  heroButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },

  sectionHeader: {
    marginBottom: 17,
  },

  sectionTitle: {
    color: '#203D35',
    fontSize: 21,
    fontWeight: '900',
  },

  sectionDescription: {
    color: '#82948B',
    fontSize: 12,
    marginTop: 5,
  },

  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },

  categoryCard: {
    width: '47%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E6EBE5',
    borderRadius: 16,
    padding: 15,
    marginBottom: 2,
  },

  categoryIcon: {
    width: 46,
    height: 46,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  categoryName: {
    color: '#203D35',
    fontWeight: 'bold',
    fontSize: 13,
  },

  infoCard: {
    backgroundColor: '#E6F0E9',
    borderRadius: 17,
    padding: 18,
    flexDirection: 'row',
    gap: 13,
    marginTop: 15,
    alignItems: 'center',
  },

  infoTitle: {
    color: '#203D35',
    fontWeight: 'bold',
    fontSize: 14,
  },

  infoText: {
    color: '#66766E',
    fontSize: 11,
    lineHeight: 18,
    marginTop: 5,
  },

  textCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    padding: 19,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#E6EBE5',
  },

  textCardTitle: {
    color: '#203D35',
    fontWeight: '900',
    fontSize: 16,
    marginBottom: 10,
  },

  textCardDescription: {
    color: '#66766E',
    fontSize: 12,
    lineHeight: 21,
  },

  quoteCard: {
    backgroundColor: '#245B50',
    borderRadius: 18,
    padding: 21,
    marginTop: 20,
    alignItems: 'center',
    gap: 12,
  },

  quote: {
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 23,
    fontWeight: '600',
    textAlign: 'center',
  },

  footer: {
    color: '#82948B',
    fontSize: 9,
    textAlign: 'center',
    marginTop: 30,
    letterSpacing: 1,
  },
});
