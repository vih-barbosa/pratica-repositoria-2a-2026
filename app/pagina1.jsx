
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  TextInput,
} from 'react-native';

import { router } from 'expo-router';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { theme } from './theme';

export default function Pagina1() {
  const [pesquisa, setPesquisa] = useState('');

  function pesquisar() {
    if (!pesquisa.trim()) return;

    router.push({
      pathname: '/pagina5',
      params: { pais: pesquisa.trim() },
    });
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* CABEÇALHO */}

      <View style={styles.header}>
        <View style={styles.logo}>
          <Ionicons name="globe-outline" size={27} color={theme.colors.primary} />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.brand}>ENCICLOPÉDIA</Text>
          <Text style={styles.brandSubtitle}>CONHECIMENTO LIVRE</Text>
        </View>

        <Ionicons name="menu-outline" size={27} color={theme.colors.text} />
      </View>

      {/* APRESENTAÇÃO */}

      <View style={styles.intro}>
        <Text style={styles.eyebrow}>DESCUBRA • APRENDA • EXPLORE</Text>

        <Text style={styles.title}>
          O conhecimento
          {'\n'}
          transforma o mundo.
        </Text>

        <Text style={styles.description}>
          Explore informações, descubra novas culturas
          e conheça histórias de diferentes partes do planeta.
        </Text>
      </View>

      {/* PESQUISA */}

      <Pressable
        style={styles.searchBox}
        onPress={() => router.push('/pagina4')}
      >
        <Ionicons name="search-outline" size={21} color="#72777D" />

        <Text style={styles.searchPlaceholder}>
          O que deseja descobrir?
        </Text>

        <Ionicons name="arrow-forward" size={20} color="#3366CC" />
      </Pressable>

      {/* DESTAQUE */}

      <Text style={styles.sectionLabel}>DESTAQUE</Text>

      <Pressable
        style={styles.heroCard}
        onPress={() =>
          router.push({
            pathname: '/pagina5',
            params: { pais: 'Estados Unidos' },
          })
        }
      >
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1000',
          }}
          style={styles.heroImage}
        />

        <View style={styles.heroOverlay}>
          <Text style={styles.heroTag}>GEOGRAFIA • PAÍSES</Text>

          <Text style={styles.heroTitle}>
            Conheça o mundo
          </Text>

          <Text style={styles.heroDescription}>
            Uma jornada pelo conhecimento e pela diversidade mundial.
          </Text>

          <View style={styles.heroButton}>
            <Text style={styles.heroButtonText}>Explorar agora</Text>
            <Ionicons name="arrow-forward" size={17} color="#FFFFFF" />
          </View>
        </View>
      </Pressable>

      {/* CATEGORIAS */}

      <View style={styles.sectionHeader}>
        <View>
          <Text style={styles.sectionTitle}>Explore conteúdos</Text>
          <Text style={styles.sectionDescription}>
            Conhecimento em diferentes áreas.
          </Text>
        </View>
      </View>

      <View style={styles.categories}>
        {[
          { icon: 'earth-outline', name: 'Geografia', color: '#E8F0FC' },
          { icon: 'book-outline', name: 'História', color: '#F5EEE5' },
          { icon: 'flask-outline', name: 'Ciência', color: '#E8F4EF' },
          { icon: 'color-palette-outline', name: 'Cultura', color: '#F3EAF5' },
        ].map((item) => (
          <Pressable
            key={item.name}
            style={styles.categoryCard}
            onPress={() => router.push('/pagina2')}
          >
            <View style={[styles.categoryIcon, { backgroundColor: item.color }]}>
              <Ionicons
                name={item.icon}
                size={25}
                color={theme.colors.primary}
              />
            </View>

            <Text style={styles.categoryName}>{item.name}</Text>
          </Pressable>
        ))}
      </View>

      {/* INFORMAÇÃO */}

      <View style={styles.infoCard}>
        <Ionicons name="book-outline" size={25} color="#3366CC" />

        <View style={{ flex: 1 }}>
          <Text style={styles.infoTitle}>
            Conhecimento para todos
          </Text>

          <Text style={styles.infoText}>
            Consulte artigos e descubra informações
            disponíveis na Wikipédia.
          </Text>
        </View>
      </View>

      <Text style={styles.footer}>
        ENCICLOPÉDIA • CONHECIMENTO SEM LIMITES
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
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
    width: 45,
    height: 45,
    backgroundColor: '#EEF3FC',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  brand: {
    fontSize: 15,
    fontWeight: '900',
    color: theme.colors.text,
    letterSpacing: 1.3,
  },

  brandSubtitle: {
    color: theme.colors.muted,
    fontSize: 9,
    letterSpacing: 2,
    marginTop: 3,
  },

  intro: {
    marginBottom: 23,
  },

  eyebrow: {
    color: theme.colors.primary,
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1.8,
    marginBottom: 13,
  },

  title: {
    color: theme.colors.text,
    fontSize: 34,
    fontWeight: '900',
    lineHeight: 41,
  },

  description: {
    color: theme.colors.secondary,
    fontSize: 14,
    lineHeight: 23,
    marginTop: 14,
  },

  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D5D9DE',
    borderRadius: 13,
    padding: 16,
    gap: 11,
    marginBottom: 30,
  },

  searchPlaceholder: {
    flex: 1,
    color: theme.colors.muted,
    fontSize: 13,
  },

  sectionLabel: {
    color: theme.colors.muted,
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 13,
  },

  heroCard: {
    height: 260,
    borderRadius: 21,
    overflow: 'hidden',
    marginBottom: 31,
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
    backgroundColor: 'rgba(0,0,0,0.46)',
  },

  heroTag: {
    color: '#FFFFFF',
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
    color: '#F1F1F1',
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
    color: theme.colors.text,
    fontSize: 21,
    fontWeight: '900',
  },

  sectionDescription: {
    color: theme.colors.muted,
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
    borderColor: '#EAECF0',
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
    color: theme.colors.text,
    fontWeight: 'bold',
    fontSize: 13,
  },

  infoCard: {
    backgroundColor: '#F1F5FC',
    borderRadius: 17,
    padding: 18,
    flexDirection: 'row',
    gap: 13,
    marginTop: 26,
    alignItems: 'center',
  },

  infoTitle: {
    color: theme.colors.text,
    fontWeight: 'bold',
    fontSize: 14,
  },

  infoText: {
    color: theme.colors.secondary,
    fontSize: 11,
    lineHeight: 17,
    marginTop: 5,
  },

  footer: {
    color: theme.colors.muted,
    fontSize: 9,
    textAlign: 'center',
    marginTop: 30,
    letterSpacing: 1,
  },
});
