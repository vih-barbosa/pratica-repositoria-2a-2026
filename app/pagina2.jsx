
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';

import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const categorias = [
  {
    nome: 'Multipolaridade Mundial',
    descricao: 'A disputa de influência entre as grandes potências.',
    icon: 'globe-outline',
    cor: '#E5EDF7',
    artigo: 'Multipolaridade',
  },
  {
    nome: 'Estados Unidos e China',
    descricao: 'Rivalidade tecnológica, comercial e militar.',
    icon: 'business-outline',
    cor: '#E9EEF8',
    artigo: 'Relações entre China e Estados Unidos',
  },
  {
    nome: 'Guerra na Ucrânia',
    descricao: 'O conflito e seus impactos na segurança europeia.',
    icon: 'shield-outline',
    cor: '#F5E9E4',
    artigo: 'Guerra Russo-Ucraniana',
  },
  {
    nome: 'Oriente Médio',
    descricao: 'Conflitos, alianças e disputas regionais.',
    icon: 'location-outline',
    cor: '#F5EEDC',
    artigo: 'Conflito israelo-palestino',
  },
  {
    nome: 'Economia Global',
    descricao: 'Comércio internacional, tarifas e sanções.',
    icon: 'trending-up-outline',
    cor: '#E4F1EB',
    artigo: 'Economia internacional',
  },
  {
    nome: 'Sul Global e BRICS',
    descricao: 'O crescimento da influência dos países emergentes.',
    icon: 'people-outline',
    cor: '#EDE8F5',
    artigo: 'BRICS',
  },
  {
    nome: 'Geopolítica do Brasil',
    descricao: 'A posição brasileira no cenário internacional.',
    icon: 'flag-outline',
    cor: '#E4F1E8',
    artigo: 'Política externa do Brasil',
  },
  {
    nome: 'Crises Internacionais',
    descricao: 'Sudão, Mar Vermelho e disputas territoriais.',
    icon: 'warning-outline',
    cor: '#F6E8E5',
    artigo: 'Crise do Sudão',
  },
];

export default function Pagina2() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* APRESENTAÇÃO */}

      <Text style={styles.eyebrow}>
        RELAÇÕES INTERNACIONAIS
      </Text>

      <Text style={styles.title}>
        Geopolítica
        {'\n'}
        Mundial.
      </Text>

      <Text style={styles.subtitle}>
        Entenda as disputas de poder, os conflitos,
        as alianças e as transformações que estão
        moldando o cenário internacional.
      </Text>

      {/* BANNER */}

      <View style={styles.banner}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=1000',
          }}
          style={styles.bannerImage}
        />

        <View style={styles.bannerOverlay}>
          <Text style={styles.bannerSmall}>
            O TABULEIRO GLOBAL
          </Text>

          <Text style={styles.bannerTitle}>
            Um mundo em transformação.
          </Text>

          <Text style={styles.bannerDescription}>
            Poder, diplomacia, economia e conflitos
            internacionais.
          </Text>
        </View>
      </View>

      {/* CATEGORIAS */}

      <View style={styles.heading}>
        <View>
          <Text style={styles.sectionTitle}>
            Temas em destaque
          </Text>

          <Text style={styles.sectionDescription}>
            Conheça as principais dinâmicas mundiais.
          </Text>
        </View>

        <Text style={styles.count}>08 TEMAS</Text>
      </View>

      {categorias.map((item) => (
        <Pressable
          key={item.nome}
          style={styles.card}
          onPress={() =>
            router.push({
              pathname: '/pagina5',
              params: { pais: item.artigo },
            })
          }
        >
          <View
            style={[
              styles.iconBox,
              { backgroundColor: item.cor },
            ]}
          >
            <Ionicons
              name={item.icon}
              size={24}
              color="#244B61"
            />
          </View>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>
              {item.nome}
            </Text>

            <Text style={styles.cardDescription}>
              {item.descricao}
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={20}
            color="#8796A1"
          />
        </Pressable>
      ))}

      {/* CONTEXTO GLOBAL */}

      <View style={styles.infoCard}>
        <Ionicons
          name="earth-outline"
          size={27}
          color="#D4AD62"
        />

        <View style={{ flex: 1 }}>
          <Text style={styles.infoTitle}>
            Um cenário multipolar
          </Text>

          <Text style={styles.infoText}>
            O poder mundial está cada vez mais distribuído
            entre diferentes países e blocos econômicos.
            Estados Unidos, China, Rússia e outras potências
            influenciam as decisões internacionais.
          </Text>
        </View>
      </View>

      {/* BRASIL */}

      <View style={styles.brazilCard}>
        <Text style={styles.brazilLabel}>
          DESTAQUE ESPECIAL
        </Text>

        <Text style={styles.brazilTitle}>
          O Brasil no mundo
        </Text>

        <Text style={styles.brazilDescription}>
          O Brasil busca ampliar sua participação nas
          relações internacionais, fortalecer parcerias
          comerciais e manter autonomia diplomática
          diante das disputas entre as grandes potências.
        </Text>

        <Pressable
          style={styles.brazilButton}
          onPress={() =>
            router.push({
              pathname: '/pagina5',
              params: { pais: 'Política externa do Brasil' },
            })
          }
        >
          <Text style={styles.brazilButtonText}>
            Conhecer mais
          </Text>

          <Ionicons
            name="arrow-forward"
            size={17}
            color="#FFFFFF"
          />
        </Pressable>
      </View>

      {/* AVISO */}

      <View style={styles.note}>
        <Ionicons
          name="information-circle-outline"
          size={22}
          color="#315F78"
        />

        <Text style={styles.noteText}>
          A geopolítica está em constante transformação.
          Consulte fontes atualizadas para acompanhar
          acontecimentos, negociações e conflitos.
        </Text>
      </View>

      <Text style={styles.footer}>
        GEOPOLÍTICA MUNDIAL • RELAÇÕES INTERNACIONAIS
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F6F8',
  },

  content: {
    padding: 23,
    paddingTop: 62,
    paddingBottom: 40,
  },

  eyebrow: {
    color: '#B08B4E',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 2,
  },

  title: {
    color: '#193447',
    fontSize: 36,
    fontWeight: '900',
    marginTop: 9,
    lineHeight: 43,
  },

  subtitle: {
    color: '#61727F',
    fontSize: 14,
    lineHeight: 23,
    marginTop: 10,
    marginBottom: 23,
  },

  banner: {
    height: 195,
    borderRadius: 19,
    overflow: 'hidden',
    marginBottom: 30,
  },

  bannerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  bannerOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 19,
    backgroundColor: 'rgba(12, 35, 53, 0.66)',
  },

  bannerSmall: {
    color: '#E3C58C',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1.7,
  },

  bannerTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '900',
    marginTop: 8,
  },

  bannerDescription: {
    color: '#E5EDF2',
    fontSize: 11,
    marginTop: 6,
  },

  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },

  sectionTitle: {
    color: '#193447',
    fontSize: 21,
    fontWeight: '900',
  },

  sectionDescription: {
    color: '#8796A1',
    fontSize: 11,
    marginTop: 5,
  },

  count: {
    color: '#B08B4E',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5EAEE',
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
    color: '#193447',
    fontSize: 14,
    fontWeight: 'bold',
  },

  cardDescription: {
    color: '#7A8993',
    fontSize: 10,
    lineHeight: 16,
    marginTop: 5,
  },

  infoCard: {
    backgroundColor: '#193D50',
    borderRadius: 17,
    padding: 18,
    flexDirection: 'row',
    gap: 13,
    marginTop: 18,
    alignItems: 'flex-start',
  },

  infoTitle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },

  infoText: {
    color: '#D5E1E8',
    fontSize: 11,
    lineHeight: 18,
    marginTop: 6,
  },

  brazilCard: {
    backgroundColor: '#E4EFE8',
    borderRadius: 18,
    padding: 20,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#D4E4D9',
  },

  brazilLabel: {
    color: '#498064',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1.8,
  },

  brazilTitle: {
    color: '#193D32',
    fontSize: 22,
    fontWeight: '900',
    marginTop: 9,
  },

  brazilDescription: {
    color: '#5C7567',
    fontSize: 12,
    lineHeight: 20,
    marginTop: 9,
  },

  brazilButton: {
    backgroundColor: '#245B50',
    borderRadius: 11,
    paddingVertical: 12,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    gap: 9,
    marginTop: 16,
  },

  brazilButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
  },

  note: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#E8EFF4',
    borderRadius: 13,
    padding: 15,
    marginTop: 20,
  },

  noteText: {
    flex: 1,
    color: '#526978',
    fontSize: 11,
    lineHeight: 18,
  },

  footer: {
    color: '#8796A1',
    fontSize: 9,
    textAlign: 'center',
    marginTop: 30,
    letterSpacing: 1,
  },
});
