
import React from 'react';
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
import { WebView } from 'react-native-webview';

/**
 * Camadas e temas geográficos
 */
const categorias = [
  {
    nome: 'Multipolaridade Mundial',
    descricao: 'Explore a localização e a influência das grandes potências.',
    icon: 'globe-outline',
    cor: '#E5EDF7',
    artigo: 'Multipolaridade',
  },
  {
    nome: 'Fronteiras Internacionais',
    descricao: 'Conheça os limites territoriais entre os países.',
    icon: 'map-outline',
    cor: '#E9EEF8',
    artigo: 'Fronteiras internacionais',
  },
  {
    nome: 'Conflitos Territoriais',
    descricao: 'Entenda disputas territoriais e regiões estratégicas.',
    icon: 'shield-outline',
    cor: '#F5E9E4',
    artigo: 'Disputas territoriais',
  },
  {
    nome: 'Rotas Comerciais',
    descricao: 'Explore os corredores marítimos e comerciais do mundo.',
    icon: 'boat-outline',
    cor: '#F5EEDC',
    artigo: 'Rotas comerciais internacionais',
  },
  {
    nome: 'Recursos Naturais',
    descricao: 'Localização de regiões com recursos estratégicos.',
    icon: 'leaf-outline',
    cor: '#E4F1EB',
    artigo: 'Recursos naturais',
  },
  {
    nome: 'Organizações Internacionais',
    descricao: 'Conheça a distribuição geográfica das organizações.',
    icon: 'people-outline',
    cor: '#EDE8F5',
    artigo: 'Organizações internacionais',
  },
  {
    nome: 'Geopolítica do Brasil',
    descricao: 'Explore a posição brasileira na América do Sul.',
    icon: 'flag-outline',
    cor: '#E4F1E8',
    artigo: 'Política externa do Brasil',
  },
  {
    nome: 'Regiões Estratégicas',
    descricao: 'Conheça áreas importantes para a política mundial.',
    icon: 'location-outline',
    cor: '#F6E8E5',
    artigo: 'Regiões estratégicas mundiais',
  },
];

/**
 * MAPA OPENSTREETMAP + LEAFLET
 */
const mapaHTML = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">

<meta name="viewport"
content="width=device-width, initial-scale=1.0">

<link rel="stylesheet"
href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css">

<style>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: Arial;
}

#map {
  width: 100%;
  height: 100%;
}

.leaflet-popup-content-wrapper {
  border-radius: 12px;
}

.leaflet-popup-content {
  font-size: 13px;
  color: #193447;
}

.leaflet-control-layers {
  border-radius: 10px !important;
  font-size: 12px;
}
</style>
</head>

<body>

<div id="map"></div>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<script>

const map = L.map('map', {
  zoomControl: true,
  worldCopyJump: true
}).setView([10, 0], 2);

// CAMADA PADRÃO
const padrao = L.tileLayer(
  'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
  }
);

// CAMADA CICLÍSTICA
const ciclista = L.tileLayer(
  'https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png',
  {
    maxZoom: 20,
    attribution: '&copy; CyclOSM & OpenStreetMap contributors'
  }
);

// CAMADA HUMANITÁRIA
const humanitaria = L.tileLayer(
  'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
  {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors, HOT'
  }
);

// ADICIONAR MAPA
padrao.addTo(map);

// CONTROLE DE CAMADAS
L.control.layers({
  'Mapa padrão': padrao,
  'Mapa ciclístico': ciclista,
  'Mapa humanitário': humanitaria
}).addTo(map);

// MARCADORES GEOPOLÍTICOS
const paises = [
  {
    nome: 'Brasil',
    regiao: 'América do Sul',
    coords: [-14.235, -51.925]
  },
  {
    nome: 'Estados Unidos',
    regiao: 'América do Norte',
    coords: [37.0902, -95.7129]
  },
  {
    nome: 'China',
    regiao: 'Ásia',
    coords: [35.8617, 104.1954]
  },
  {
    nome: 'Rússia',
    regiao: 'Europa e Ásia',
    coords: [61.524, 105.3188]
  },
  {
    nome: 'Índia',
    regiao: 'Ásia',
    coords: [20.5937, 78.9629]
  },
  {
    nome: 'Alemanha',
    regiao: 'Europa',
    coords: [51.1657, 10.4515]
  },
  {
    nome: 'Japão',
    regiao: 'Ásia',
    coords: [36.2048, 138.2529]
  },
  {
    nome: 'África do Sul',
    regiao: 'África',
    coords: [-30.5595, 22.9375]
  }
];

paises.forEach(pais => {
  L.marker(pais.coords)
    .addTo(map)
    .bindPopup(
      '<b>' + pais.nome + '</b><br>' +
      pais.regiao
    );
});

// AJUSTE DO MAPA
setTimeout(() => {
  map.invalidateSize();
}, 300);

</script>

</body>
</html>
`;

export default function Pagina2() {

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >

      {/* APRESENTAÇÃO */}

      <Text style={styles.eyebrow}>
        GEOGRAFIA E RELAÇÕES INTERNACIONAIS
      </Text>

      <Text style={styles.title}>
        Atlas{' \n'}
        Geopolítico.
      </Text>

      <Text style={styles.subtitle}>
        Explore o mundo por meio de mapas interativos,
        informações geográficas e elementos que ajudam
        a compreender as relações de poder entre os países.
      </Text>

      {/* BANNER */}

      <View style={styles.banner}>

        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=1000',
          }}
          style={styles.bannerImage}
          resizeMode="cover"
        />

        <View style={styles.bannerOverlay}>

          <Text style={styles.bannerSmall}>
            OPENSTREETMAP
          </Text>

          <Text style={styles.bannerTitle}>
            O mundo em um só mapa.
          </Text>

          <Text style={styles.bannerDescription}>
            Explore territórios, países e regiões estratégicas.
          </Text>

        </View>
      </View>

      {/* MAPA INTERATIVO */}

      <View style={styles.heading}>

        <View>
          <Text style={styles.sectionTitle}>
            Mapa Mundial
          </Text>

          <Text style={styles.sectionDescription}>
            Explore o planeta de forma interativa.
          </Text>
        </View>

        <Ionicons
          name="earth-outline"
          size={25}
          color="#B08B4E"
        />

      </View>

      <View style={styles.mapCard}>

        <WebView
          originWhitelist={['*']}
          source={{ html: mapaHTML }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          scrollEnabled={false}
          style={styles.map}
          onError={(event) => {
            console.error('Erro no mapa:', event.nativeEvent);
          }}
        />

      </View>

      <Text style={styles.mapCaption}>
        Dados cartográficos © OpenStreetMap contributors.
      </Text>

      {/* CAMADAS */}

      <View style={styles.layerInfo}>

        <Ionicons
          name="layers-outline"
          size={24}
          color="#D4AD62"
        />

        <View style={styles.layerContent}>

          <Text style={styles.layerTitle}>
            Diferentes camadas geográficas
          </Text>

          <Text style={styles.layerDescription}>
            Utilize o controle no canto superior do mapa
            para alternar entre as visualizações disponíveis:
            padrão, ciclística e humanitária.
          </Text>

        </View>

      </View>

      {/* CATEGORIAS */}

      <View style={styles.heading}>

        <View>
          <Text style={styles.sectionTitle}>
            Temas geográficos
          </Text>

          <Text style={styles.sectionDescription}>
            Conheça os principais elementos do cenário mundial.
          </Text>
        </View>

        <Text style={styles.count}>
          08 TEMAS
        </Text>

      </View>

      {categorias.map((item) => (

        <Pressable
          key={item.nome}
          style={({ pressed }) => [
            styles.card,
            pressed && styles.cardPressed,
          ]}
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

        <View style={styles.infoContent}>

          <Text style={styles.infoTitle}>
            O mundo e suas conexões
          </Text>

          <Text style={styles.infoText}>
            A geografia permite compreender como a localização,
            as fronteiras, os recursos naturais e as rotas
            comerciais influenciam as relações internacionais.
          </Text>

        </View>

      </View>

      {/* BRASIL */}

      <View style={styles.brazilCard}>

        <Text style={styles.brazilLabel}>
          DESTAQUE ESPECIAL
        </Text>

        <Text style={styles.brazilTitle}>
          O Brasil no mapa mundial
        </Text>

        <Text style={styles.brazilDescription}>
          Localizado na América do Sul, o Brasil possui
          dimensões continentais, importantes recursos naturais
          e uma posição estratégica nas relações internacionais.
        </Text>

        <Pressable
          style={({ pressed }) => [
            styles.brazilButton,
            pressed && styles.buttonPressed,
          ]}
          onPress={() =>
            router.push({
              pathname: '/pagina5',
              params: {
                pais: 'Política externa do Brasil',
              },
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

      {/* FONTE DOS DADOS */}

      <View style={styles.note}>

        <Ionicons
          name="information-circle-outline"
          size={22}
          color="#315F78"
        />

        <Text style={styles.noteText}>
          Este mapa utiliza dados cartográficos colaborativos
          do OpenStreetMap. Os marcadores apresentados são
          referências geográficas ilustrativas.
        </Text>

      </View>

      {/* RODAPÉ */}

      <Text style={styles.footer}>
        ATLAS GEOPOLÍTICO • OPENSTREETMAP
      </Text>

    </ScrollView>
  );
}

/**
 * ESTILIZAÇÃO
 */

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
    backgroundColor: '#193D50',
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

  mapCard: {
    height: 390,
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5EAEE',
    marginBottom: 9,
  },

  map: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  mapCaption: {
    color: '#8796A1',
    fontSize: 10,
    marginBottom: 20,
  },

  layerInfo: {
    backgroundColor: '#193D50',
    borderRadius: 17,
    padding: 18,
    flexDirection: 'row',
    gap: 13,
    marginBottom: 28,
    alignItems: 'flex-start',
  },

  layerContent: {
    flex: 1,
  },

  layerTitle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },

  layerDescription: {
    color: '#D5E1E8',
    fontSize: 11,
    lineHeight: 18,
    marginTop: 6,
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

  cardPressed: {
    opacity: 0.75,
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

  infoContent: {
    flex: 1,
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

  buttonPressed: {
    opacity: 0.8,
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
