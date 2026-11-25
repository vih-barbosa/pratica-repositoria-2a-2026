import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ActivityIndicator,
  Linking,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

/**
 * @typedef {Object} Valor
 * @property {React.ComponentProps<typeof Ionicons>['name']} icon
 * @property {string} titulo
 * @property {string} descricao
 */

/** @type {Valor[]} */
const valores = [
  {
    icon: 'globe-outline',
    titulo: 'Ordem mundial',
    descricao:
      'Compreender como os países se organizam e disputam influência no cenário internacional.',
  },
  {
    icon: 'handshake-outline',
    titulo: 'Relações internacionais',
    descricao:
      'Conhecer alianças, acordos diplomáticos e relações entre diferentes nações.',
  },
  {
    icon: 'shield-outline',
    titulo: 'Segurança global',
    descricao:
      'Entender conflitos, disputas territoriais e os desafios para a paz mundial.',
  },
  {
    icon: 'trending-up-outline',
    titulo: 'Economia e poder',
    descricao:
      'Analisar como o comércio, os recursos naturais e a tecnologia influenciam os países.',
  },
];


const mapaHTML = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >

  <link
    rel="stylesheet"
    href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
  />

  <style>
    html, body {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    #map {
      width: 100%;
      height: 100%;
    }

    .leaflet-popup-content-wrapper {
      border-radius: 10px;
    }
  </style>
</head>

<body>

  <div id="map"></div>

  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

  <script>
    // Inicializar mapa mundial
    const map = L.map('map', {
      zoomControl: true,
      worldCopyJump: true
    }).setView([0, 0], 2);

    // Camada padrão OpenStreetMap
    const padrao = L.tileLayer(
      'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors'
      }
    );

    // Camada ciclística
    const ciclista = L.tileLayer(
      'https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png',
      {
        maxZoom: 20,
        attribution: '&copy; CyclOSM & OpenStreetMap contributors'
      }
    );

    // Camada humanitária
    const humanitaria = L.tileLayer(
      'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
      {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors, HOT'
      }
    );

    // Adicionar camada padrão
    padrao.addTo(map);

    // Controle de camadas
    const camadas = {
      'Padrão': padrao,
      'Ciclístico': ciclista,
      'Humanitário': humanitaria
    };

    L.control.layers(camadas).addTo(map);

    // Marcador do Brasil
    L.marker([-14.235, -51.925])
      .addTo(map)
      .bindPopup('<b>Brasil</b><br>América do Sul');

    // Marcadores de países importantes
    const paises = [
      {
        nome: 'Estados Unidos',
        coordenadas: [37.0902, -95.7129]
      },
      {
        nome: 'China',
        coordenadas: [35.8617, 104.1954]
      },
      {
        nome: 'Rússia',
        coordenadas: [61.524, 105.3188]
      },
      {
        nome: 'Reino Unido',
        coordenadas: [55.3781, -3.436]
      },
      {
        nome: 'Índia',
        coordenadas: [20.5937, 78.9629]
      }
    ];

    paises.forEach(function(pais) {
      L.marker(pais.coordenadas)
        .addTo(map)
        .bindPopup('<b>' + pais.nome + '</b>');
    });

    // Ajustar mapa após carregar
    setTimeout(function() {
      map.invalidateSize();
    }, 300);

  </script>

</body>
</html>
`;

/**
 * Página principal
   */
export default function Pagina3() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Buscar dados da API GDELT
  useEffect(() => {
    async function fetchGdeltNews() {
      try {
        // Consultando artigos recentes sobre geopolítica em formato JSON
        const response = await fetch(
          'https://api.gdeltproject.org/api/v2/doc/doc?query=geopolitics&mode=artlist&maxrecords=5&format=json'
        );
        const data = await response.json();
        if (data && data.articles) {
          setNews(data.articles);
        }
      } catch (error) {
        console.error('Erro ao buscar dados do GDELT:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchGdeltNews();
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* APRESENTAÇÃO */}
      <Text style={styles.eyebrow}>SOBRE A GEOPOLÍTICA</Text>

      <Text style={styles.title}>
        Entender o mundo é compreender suas relações de poder.
      </Text>

      <Text style={styles.subtitle}>
        Conheça os interesses, as alianças e os conflitos que influenciam as
        decisões dos países e transformam o cenário internacional.
      </Text>

      {/* IMAGEM DE DESTAQUE */}
      <View style={styles.imageCard}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=1000',
          }}
          style={styles.image}
          resizeMode="cover"
        />

        <View style={styles.imageOverlay}>
          <Text style={styles.imageLabel}>CENÁRIO INTERNACIONAL</Text>

          <Text style={styles.imageTitle}>
            Um mundo conectado por interesses e desafios.
          </Text>
        </View>
      </View>

      {/* SOBRE O TEMA */}
      <Text style={styles.sectionTitle}>O que é Geopolítica?</Text>

      <Text style={styles.paragraph}>
        A geopolítica é a área de estudo que analisa como a localização
        geográfica, os recursos naturais, a economia, a política e o poder
        influenciam as relações entre os países.
      </Text>

      <Text style={styles.paragraph}>
        Ela ajuda a compreender as disputas territoriais, os conflitos
        internacionais, as alianças entre governos e as estratégias utilizadas
        pelas grandes potências para ampliar sua influência.
      </Text>

      <Text style={styles.paragraph}>
        Atualmente, países como Estados Unidos, China e Rússia possuem grande
        influência nas decisões internacionais. Ao mesmo tempo, organizações e
        grupos de países, como a ONU e os BRICS, também participam das
        transformações mundiais.
      </Text>

      {/* NOTÍCIAS AO VIVO DO GDELT */}
      <Text style={styles.sectionTitle}>Radar Global (GDELT)</Text>
      <Text style={styles.paragraph}>
        Acompanhe em tempo real as últimas menções e notícias globais sobre
        geopolítica extraídas da API do GDELT.
      </Text>

      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#D1AD69" />
          <Text style={styles.loaderText}>Carregando dados globais...</Text>
        </View>
      ) : (
        news.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.newsCard}
            onPress={() => item.url && Linking.openURL(item.url)}
          >
            <View style={styles.newsHeader}>
              <Ionicons name="newspaper-outline" size={18} color="#D1AD69" />
              <Text style={styles.newsDomain}>{item.domain || 'Notícia Global'}</Text>
            </View>
            <Text style={styles.newsTitle}>{item.title}</Text>
            <Text style={styles.newsDate}>{item.seendate ? `${item.seendate.substring(6,8)}/${item.seendate.substring(4,6)}/${item.seendate.substring(0,4)}` : ''}</Text>
          </TouchableOpacity>
        ))
      )}

      {/* PRINCIPAIS ELEMENTOS */}
      <Text style={styles.sectionTitle}>Principais elementos da geopolítica</Text>

      {valores.map((item) => (
        <View style={styles.valueCard} key={item.titulo}>
          <View style={styles.valueIcon}>
            <Ionicons name={item.icon} size={24} color="#D1AD69" />
          </View>

          <View style={styles.valueContent}>
            <Text style={styles.valueTitle}>{item.titulo}</Text>

            <Text style={styles.valueDescription}>{item.descricao}</Text>
          </View>
        </View>
      ))}

      {/* BRASIL */}
      <View style={styles.brazilCard}>
        <View style={styles.brazilHeader}>
          <Ionicons name="flag-outline" size={25} color="#D1AD69" />

          <Text style={styles.brazilLabel}>DESTAQUE INTERNACIONAL</Text>
        </View>

        <Text style={styles.brazilTitle}>O Brasil no cenário mundial</Text>

        <Text style={styles.brazilDescription}>
          O Brasil possui importância estratégica na América Latina e no mundo.
          Sua economia, seus recursos naturais, sua participação nos BRICS e sua
          atuação diplomática contribuem para sua presença internacional.
        </Text>
      </View>

      {/* FRASE FINAL */}
      <View style={styles.quoteCard}>
        <Ionicons name="earth-outline" size={32} color="#D1AD69" />

        <Text style={styles.quote}>
          "Compreender a geopolítica é entender que as decisões de um país
          podem transformar a realidade de todo o planeta."
        </Text>
      </View>

      {/* RODAPÉ */}
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
    paddingBottom: 45,
  },

  eyebrow: {
    color: '#B08B4E',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 2,
  },

  title: {
    color: '#193447',
    fontSize: 31,
    fontWeight: '900',
    lineHeight: 39,
    marginTop: 12,
  },

  subtitle: {
    color: '#61727F',
    fontSize: 14,
    lineHeight: 23,
    marginTop: 12,
  },

  imageCard: {
    height: 225,
    borderRadius: 20,
    overflow: 'hidden',
    marginVertical: 27,
    backgroundColor: '#193D50',
  },

  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  imageOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
    backgroundColor: 'rgba(12, 35, 53, 0.64)',
  },

  imageLabel: {
    color: '#E3C58C',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1.8,
  },

  imageTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
    lineHeight: 29,
    marginTop: 9,
  },

  sectionTitle: {
    color: '#193447',
    fontSize: 21,
    fontWeight: '900',
    marginBottom: 13,
    marginTop: 13,
  },

  paragraph: {
    color: '#61727F',
    fontSize: 13,
    lineHeight: 23,
    textAlign: 'justify',
    marginBottom: 13,
  },

  loaderContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  loaderText: {
    color: '#61727F',
    fontSize: 12,
    marginTop: 8,
  },

  newsCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5EAEE',
    marginBottom: 11,
  },

  newsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },

  newsDomain: {
    color: '#B08B4E',
    fontSize: 11,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  newsTitle: {
    color: '#193447',
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 18,
  },

  newsDate: {
    color: '#8796A1',
    fontSize: 10,
    marginTop: 6,
    textAlign: 'right',
  },

  valueCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
    padding: 15,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5EAEE',
    marginBottom: 11,
  },

  valueIcon: {
    width: 47,
    height: 47,
    backgroundColor: '#193D50',
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },

  valueContent: {
    flex: 1,
  },

  valueTitle: {
    color: '#193447',
    fontSize: 14,
    fontWeight: 'bold',
  },

  valueDescription: {
    color: '#7A8993',
    fontSize: 11,
    lineHeight: 18,
    marginTop: 5,
  },

  brazilCard: {
    backgroundColor: '#193D50',
    padding: 20,
    borderRadius: 18,
    marginTop: 20,
  },

  brazilHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  brazilLabel: {
    color: '#D1AD69',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1.5,
  },

  brazilTitle: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: '900',
    marginTop: 13,
  },

  brazilDescription: {
    color: '#D5E1E8',
    fontSize: 12,
    lineHeight: 21,
    marginTop: 9,
  },

  quoteCard: {
    backgroundColor: '#E7EDF1',
    padding: 23,
    borderRadius: 18,
    marginTop: 20,
    alignItems: 'center',
  },

  quote: {
    color: '#193447',
    fontSize: 15,
    lineHeight: 24,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 13,
    fontWeight: '600',
  },

  footer: {
    color: '#8796A1',
    fontSize: 9,
    textAlign: 'center',
    marginTop: 27,
    letterSpacing: 1,
  },
});