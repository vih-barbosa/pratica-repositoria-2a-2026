
import {
  View, Text, StyleSheet, ScrollView,
  Pressable, Image
} from 'react-native';

import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { theme } from './theme';

const categorias = [
  {
    nome: 'Geografia',
    descricao: 'Países, continentes e natureza.',
    icon: 'earth-outline',
    cor: '#EAF1FC',
    exemplos: 'Brasil',
  },
  {
    nome: 'História',
    descricao: 'Civilizações e acontecimentos.',
    icon: 'time-outline',
    cor: '#F5EFE6',
    exemplos: 'Egito Antigo',
  },
  {
    nome: 'Ciência',
    descricao: 'Descobertas e conhecimentos.',
    icon: 'flask-outline',
    cor: '#E9F4EF',
    exemplos: 'Sistema Solar',
  },
  {
    nome: 'Cultura',
    descricao: 'Arte, tradições e sociedades.',
    icon: 'color-palette-outline',
    cor: '#F4ECF7',
    exemplos: 'Arte',
  },
  {
    nome: 'Tecnologia',
    descricao: 'Invenções e inovação.',
    icon: 'hardware-chip-outline',
    cor: '#EAF2F4',
    exemplos: 'Inteligência Artificial',
  },
  {
    nome: 'Natureza',
    descricao: 'Animais, plantas e ecossistemas.',
    icon: 'leaf-outline',
    cor: '#EDF4E8',
    exemplos: 'Floresta Amazônica',
  },
];

export default function Pagina2() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.eyebrow}>DESCUBRA NOVOS ASSUNTOS</Text>

      <Text style={styles.title}>Explore</Text>

      <Text style={styles.subtitle}>
        Navegue por diferentes áreas do conhecimento
        e encontre algo novo para aprender.
      </Text>

      <View style={styles.banner}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000',
          }}
          style={styles.bannerImage}
        />

        <View style={styles.bannerOverlay}>
          <Text style={styles.bannerSmall}>UM UNIVERSO DE POSSIBILIDADES</Text>
          <Text style={styles.bannerTitle}>
            Aprender é descobrir.
          </Text>
        </View>
      </View>

      <View style={styles.heading}>
        <Text style={styles.sectionTitle}>Categorias</Text>
        <Text style={styles.count}>06 ÁREAS</Text>
      </View>

      {categorias.map((item) => (
        <Pressable
          key={item.nome}
          style={styles.card}
          onPress={() =>
            router.push({
              pathname: '/pagina5',
              params: { pais: item.exemplos },
            })
          }
        >
          <View style={[styles.iconBox, { backgroundColor: item.cor }]}>
            <Ionicons
              name={item.icon}
              size={25}
              color={theme.colors.primary}
            />
          </View>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{item.nome}</Text>
            <Text style={styles.cardDescription}>
              {item.descricao}
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={20}
            color={theme.colors.muted}
          />
        </Pressable>
      ))}

      <View style={styles.note}>
        <Ionicons name="information-circle-outline" size={22} color="#3366CC" />

        <Text style={styles.noteText}>
          Selecione uma categoria para consultar um artigo
          relacionado na Wikipédia.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  content: {
    padding: 23,
    paddingTop: 62,
    paddingBottom: 40,
  },

  eyebrow: {
    color: '#3366CC',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 2,
  },

  title: {
    color: '#202122',
    fontSize: 36,
    fontWeight: '900',
    marginTop: 9,
  },

  subtitle: {
    color: '#54595D',
    fontSize: 14,
    lineHeight: 22,
    marginTop: 9,
    marginBottom: 22,
  },

  banner: {
    height: 175,
    borderRadius: 19,
    overflow: 'hidden',
    marginBottom: 29,
  },

  bannerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  bannerOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 18,
    backgroundColor: 'rgba(0,0,0,0.43)',
  },

  bannerSmall: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },

  bannerTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '900',
    marginTop: 7,
  },

  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  sectionTitle: {
    color: '#202122',
    fontSize: 21,
    fontWeight: '900',
  },

  count: {
    color: '#72777D',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EAECF0',
    borderRadius: 16,
    padding: 14,
    marginBottom: 11,
    gap: 13,
  },

  iconBox: {
    width: 49,
    height: 49,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardContent: {
    flex: 1,
  },

  cardTitle: {
    color: '#202122',
    fontSize: 15,
    fontWeight: 'bold',
  },

  cardDescription: {
    color: '#72777D',
    fontSize: 11,
    marginTop: 5,
  },

  note: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#F1F5FC',
    borderRadius: 13,
    padding: 15,
    marginTop: 14,
  },

  noteText: {
    flex: 1,
    color: '#54595D',
    fontSize: 11,
    lineHeight: 17,
  },
});
