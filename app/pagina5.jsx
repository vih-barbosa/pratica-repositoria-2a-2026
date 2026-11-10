
import { useEffect, useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  ActivityIndicator,
  Linking,
} from 'react-native';

import { useLocalSearchParams, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { theme } from './theme';

export default function Pagina5() {
  const { pais } = useLocalSearchParams();

  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');

  const termo = Array.isArray(pais)
    ? pais[0]
    : pais || 'Estados Unidos';

  useEffect(() => {
    let ativo = true;

    async function buscarInformacoes() {
      try {
        setCarregando(true);
        setErro('');
        setDados(null);

        const nome = encodeURIComponent(
          termo.trim().replace(/ /g, '_')
        );

        const url =
          `https://pt.wikipedia.org/api/rest_v1/page/summary/${nome}`;

        const resposta = await fetch(url, {
          headers: {
            Accept: 'application/json',
          },
        });

        if (!resposta.ok) {
          throw new Error(
            resposta.status === 404
              ? 'Não encontramos esse artigo. Tente outro termo.'
              : 'Não foi possível acessar a Wikipédia. Tente novamente.'
          );
        }

        const resultado = await resposta.json();

        if (ativo) {
          setDados(resultado);
        }

      } catch (error) {
        if (ativo) {
          setErro(error.message || 'Ocorreu um erro na pesquisa.');
        }
      } finally {
        if (ativo) {
          setCarregando(false);
        }
      }
    }

    if (termo.trim()) {
      buscarInformacoes();
    }

    return () => {
      ativo = false;
    };
  }, [termo]);

  if (carregando) {
    return (
      <View style={styles.center}>
        <View style={styles.loadingIcon}>
          <Ionicons
            name="globe-outline"
            size={35}
            color="#3366CC"
          />
        </View>

        <ActivityIndicator
          size="large"
          color="#3366CC"
        />

        <Text style={styles.loadingTitle}>
          Consultando a enciclopédia
        </Text>

        <Text style={styles.loadingText}>
          Buscando informações sobre {termo}...
        </Text>
      </View>
    );
  }

  if (erro || !dados) {
    return (
      <View style={styles.center}>
        <Ionicons
          name="document-text-outline"
          size={55}
          color="#A2A9B1"
        />

        <Text style={styles.errorTitle}>
          Artigo indisponível
        </Text>

        <Text style={styles.errorText}>
          {erro || 'Não encontramos informações.'}
        </Text>

        <Pressable
          style={styles.button}
          onPress={() => router.replace('/pagina4')}
        >
          <Text style={styles.buttonText}>
            Voltar para pesquisa
          </Text>
        </Pressable>
      </View>
    );
  }

  const imagem =
    dados.originalimage?.source ||
    dados.thumbnail?.source;

  const artigo =
    dados.content_urls?.desktop?.page;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* CABEÇALHO */}

      <View style={styles.header}>
        <Pressable
          onPress={() => router.replace('/pagina4')}
          style={styles.backButton}
        >
          <Ionicons
            name="arrow-back"
            size={21}
            color="#202122"
          />
        </Pressable>

        <View>
          <Text style={styles.brand}>ENCICLOPÉDIA</Text>
          <Text style={styles.brandSubtitle}>
            ARTIGOS E CONHECIMENTO
          </Text>
        </View>
      </View>

      <Text style={styles.eyebrow}>
        ARTIGO • WIKIPÉDIA
      </Text>

      <Text style={styles.title}>
        {dados.title}
      </Text>

      {dados.description ? (
        <Text style={styles.description}>
          {dados.description}
        </Text>
      ) : null}

      {/* IMAGEM */}

      {imagem ? (
        <View style={styles.imageCard}>
          <Image
            source={{ uri: imagem }}
            style={styles.image}
            resizeMode="contain"
          />

          <Text style={styles.imageCaption}>
            Imagem ilustrativa do artigo
          </Text>
        </View>
      ) : null}

      {/* CONTEÚDO */}

      <View style={styles.articleCard}>
        <View style={styles.articleHeading}>
          <Ionicons
            name="book-outline"
            size={22}
            color="#3366CC"
          />

          <Text style={styles.articleTitle}>
            Sobre o assunto
          </Text>
        </View>

        <Text style={styles.extract}>
          {dados.extract || 'Não há um resumo disponível para este artigo.'}
        </Text>
      </View>

      {/* INFORMAÇÕES */}

      <View style={styles.detailsCard}>
        <Text style={styles.detailsTitle}>
          Informações do artigo
        </Text>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Título</Text>
          <Text style={styles.detailValue}>
            {dados.title}
          </Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Idioma</Text>
          <Text style={styles.detailValue}>
            Português
          </Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Fonte</Text>
          <Text style={styles.detailValue}>
            Wikipédia
          </Text>
        </View>
      </View>

      {/* BOTÃO DO ARTIGO */}

      {artigo ? (
        <Pressable
          style={styles.button}
          onPress={() => Linking.openURL(artigo)}
        >
          <Text style={styles.buttonText}>
            Ler artigo completo
          </Text>

          <Ionicons
            name="open-outline"
            size={18}
            color="#FFFFFF"
          />
        </Pressable>
      ) : null}

      <Text style={styles.footer}>
        Conteúdo obtido através da API da Wikipédia.
      </Text>

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
    paddingTop: 55,
    paddingBottom: 45,
  },

  center: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },

  loadingIcon: {
    width: 75,
    height: 75,
    borderRadius: 23,
    backgroundColor: '#EEF3FC',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  loadingTitle: {
    color: '#202122',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 19,
  },

  loadingText: {
    color: '#72777D',
    fontSize: 12,
    marginTop: 8,
    textAlign: 'center',
  },

  errorTitle: {
    color: '#202122',
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 18,
  },

  errorText: {
    color: '#72777D',
    fontSize: 13,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 10,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
    marginBottom: 30,
  },

  backButton: {
    width: 43,
    height: 43,
    borderRadius: 13,
    backgroundColor: '#F1F3F5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  brand: {
    color: '#202122',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 1,
  },

  brandSubtitle: {
    color: '#72777D',
    fontSize: 8,
    letterSpacing: 1.3,
    marginTop: 4,
  },

  eyebrow: {
    color: '#3366CC',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 2,
  },

  title: {
    color: '#202122',
    fontSize: 32,
    fontWeight: '900',
    lineHeight: 39,
    marginTop: 10,
  },

  description: {
    color: '#54595D',
    fontSize: 15,
    lineHeight: 23,
    marginTop: 10,
  },

  imageCard: {
    backgroundColor: '#F8F9FA',
    borderWidth: 1,
    borderColor: '#EAECF0',
    borderRadius: 17,
    padding: 12,
    marginTop: 23,
  },

  image: {
    width: '100%',
    height: 205,
  },

  imageCaption: {
    color: '#72777D',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 8,
  },

  articleCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EAECF0',
    borderRadius: 17,
    padding: 19,
    marginTop: 22,
  },

  articleHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 14,
  },

  articleTitle: {
    color: '#202122',
    fontSize: 18,
    fontWeight: '900',
  },

  extract: {
    color: '#3D4145',
    fontSize: 14,
    lineHeight: 25,
    textAlign: 'justify',
  },

  detailsCard: {
    backgroundColor: '#F8F9FA',
    borderRadius: 16,
    padding: 18,
    marginTop: 17,
  },

  detailsTitle: {
    color: '#202122',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    paddingVertical: 11,
    borderTopWidth: 1,
    borderTopColor: '#EAECF0',
  },

  detailLabel: {
    color: '#72777D',
    fontSize: 12,
  },

  detailValue: {
    color: '#202122',
    fontSize: 12,
    fontWeight: 'bold',
    flexShrink: 1,
    textAlign: 'right',
  },

  button: {
    flexDirection: 'row',
    backgroundColor: '#3366CC',
    padding: 17,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: 22,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
  },

  footer: {
    color: '#72777D',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 25,
  },
});
