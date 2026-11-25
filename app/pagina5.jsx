import React, { useEffect, useState } from 'react';
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

/**
 * @typedef {Object} ResultadoBusca
 * @property {{title: string, key: string}[]} [pages]
 */

export default function Pagina5() {
  const { pais } = useLocalSearchParams();

  const termo = Array.isArray(pais)
    ? pais[0]
    : pais || 'Geopolítica Mundial';

  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');
  const [tentativa, setTentativa] = useState(0);

  useEffect(() => {
    let ativo = true;

    async function buscarInformacoes() {
      try {
        setCarregando(true);
        setErro('');
        setDados(null);

        const buscaUrl =
          `https://pt.wikipedia.org/w/rest.php/v1/search/page?q=${encodeURIComponent(termo)}&limit=1`;

        const respostaBusca = await fetch(buscaUrl);

        if (!respostaBusca.ok) {
          throw new Error(
            'Não foi possível pesquisar o assunto. Verifique sua conexão.'
          );
        }

        /** @type {ResultadoBusca} */
        const resultadoBusca = await respostaBusca.json();
        const pagina = resultadoBusca.pages?.[0];

        if (!pagina) {
          throw new Error(
            'Não encontramos um artigo sobre esse assunto. Tente outro tema.'
          );
        }

        const titulo = pagina.title.replace(/ /g, '_');
        const resumoUrl =
          `https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(titulo)}`;

        const respostaResumo = await fetch(resumoUrl);

        if (!respostaResumo.ok) {
          throw new Error(
            'Encontramos o assunto, mas não foi possível carregar o artigo.'
          );
        }

        const resultado = await respostaResumo.json();

        if (!resultado.title) {
          throw new Error('O artigo não possui informações disponíveis.');
        }

        if (ativo) {
          setDados(resultado);
        }
      } catch (error) {
        if (ativo) {
          setErro(
            error instanceof Error
              ? error.message
              : 'Ocorreu um erro inesperado. Tente novamente.'
          );
        }
      } finally {
        if (ativo) {
          setCarregando(false);
        }
      }
    }

    if (termo.trim()) {
      buscarInformacoes();
    } else {
      setErro('Nenhum assunto foi informado.');
      setCarregando(false);
    }

    return () => {
      ativo = false;
    };
  }, [termo, tentativa]);

  // CARREGAMENTO

  if (carregando) {
    return (
      <View style={styles.center}>
        <View style={styles.loadingIcon}>
          <Ionicons
            name="earth-outline"
            size={36}
            color="#D1AD69"
          />
        </View>

        <ActivityIndicator
          size="large"
          color="#D1AD69"
        />

        <Text style={styles.loadingTitle}>
          Analisando informações
        </Text>

        <Text style={styles.loadingText}>
          Pesquisando artigos sobre {termo}...
        </Text>
      </View>
    );
  }

  // ERRO

  if (erro || !dados) {
    return (
      <View style={styles.center}>
        <View style={styles.errorIcon}>
          <Ionicons
            name="document-text-outline"
            size={42}
            color="#B08B4E"
          />
        </View>

        <Text style={styles.errorTitle}>
          Artigo indisponível
        </Text>

        <Text style={styles.errorText}>
          {erro || 'Não encontramos informações sobre esse assunto.'}
        </Text>

        <Pressable
          style={styles.button}
          onPress={() => setTentativa((valor) => valor + 1)}
        >
          <Text style={styles.buttonText}>
            Tentar novamente
          </Text>

          <Ionicons
            name="refresh-outline"
            size={18}
            color="#FFFFFF"
          />
        </Pressable>

        <Pressable
          style={[styles.button, styles.backErrorButton]}
          onPress={() => router.back()}
        >
          <Text style={styles.buttonText}>
            Voltar
          </Text>

          <Ionicons
            name="arrow-back"
            size={18}
            color="#FFFFFF"
          />
        </Pressable>
      </View>
    );
  }

  // DADOS DO ARTIGO

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
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons
            name="arrow-back"
            size={21}
            color="#FFFFFF"
          />
        </Pressable>

        <View style={{ flex: 1 }}>
          <Text style={styles.brand}>
            GEOPOLÍTICA MUNDIAL
          </Text>

          <Text style={styles.brandSubtitle}>
            ANÁLISES E RELAÇÕES INTERNACIONAIS
          </Text>
        </View>

        <Ionicons
          name="globe-outline"
          size={26}
          color="#D1AD69"
        />
      </View>

      {/* IDENTIFICAÇÃO */}

      <Text style={styles.eyebrow}>
        ARTIGO • CENÁRIO INTERNACIONAL
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

          <View style={styles.imageCaptionBox}>
            <Ionicons
              name="camera-outline"
              size={14}
              color="#D1AD69"
            />

            <Text style={styles.imageCaption}>
              Imagem ilustrativa do assunto
            </Text>
          </View>
        </View>
      ) : null}

      {/* CONTEÚDO */}

      <View style={styles.articleCard}>
        <View style={styles.articleHeading}>
          <View style={styles.articleIcon}>
            <Ionicons
              name="newspaper-outline"
              size={21}
              color="#D1AD69"
            />
          </View>

          <View>
            <Text style={styles.articleTitle}>
              Panorama geral
            </Text>

            <Text style={styles.articleSubtitle}>
              Conheça o assunto
            </Text>
          </View>
        </View>

        <Text style={styles.extract}>
          {dados.extract ||
            'Não há um resumo disponível para este artigo.'}
        </Text>
      </View>

      {/* CONTEXTO */}

      <View style={styles.contextCard}>
        <Ionicons
          name="earth-outline"
          size={25}
          color="#D1AD69"
        />

        <View style={{ flex: 1 }}>
          <Text style={styles.contextTitle}>
            Contexto internacional
          </Text>

          <Text style={styles.contextText}>
            Compreender os acontecimentos mundiais
            permite analisar as relações entre os países,
            seus interesses políticos e econômicos
            e os impactos na sociedade.
          </Text>
        </View>
      </View>

      {/* INFORMAÇÕES */}

      <View style={styles.detailsCard}>
        <Text style={styles.detailsTitle}>
          Informações do artigo
        </Text>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>
            Título
          </Text>

          <Text style={styles.detailValue}>
            {dados.title}
          </Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>
            Idioma
          </Text>

          <Text style={styles.detailValue}>
            Português
          </Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>
            Fonte
          </Text>

          <Text style={styles.detailValue}>
            Wikipédia
          </Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>
            Categoria
          </Text>

          <Text style={styles.detailValue}>
            Geopolítica
          </Text>
        </View>
      </View>

      {/* ARTIGO COMPLETO */}

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

      {/* RODAPÉ */}

      <Text style={styles.footer}>
        GEOPOLÍTICA MUNDIAL • CONHECIMENTO E INFORMAÇÃO
      </Text>

      <Text style={styles.source}>
        Conteúdo obtido através da API da Wikipédia.
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
    paddingTop: 55,
    paddingBottom: 45,
  },

  center: {
    flex: 1,
    backgroundColor: '#F3F6F8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },

  loadingIcon: {
    width: 78,
    height: 78,
    borderRadius: 23,
    backgroundColor: '#193D50',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22,
  },

  loadingTitle: {
    color: '#193447',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 19,
  },

  loadingText: {
    color: '#71818D',
    fontSize: 12,
    marginTop: 8,
    textAlign: 'center',
  },

  errorIcon: {
    width: 75,
    height: 75,
    borderRadius: 22,
    backgroundColor: '#E8EFF4',
    alignItems: 'center',
    justifyContent: 'center',
  },

  errorTitle: {
    color: '#193447',
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 18,
  },

  errorText: {
    color: '#71818D',
    fontSize: 13,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 10,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
    marginBottom: 31,
  },

  backButton: {
    width: 43,
    height: 43,
    borderRadius: 13,
    backgroundColor: '#193D50',
    alignItems: 'center',
    justifyContent: 'center',
  },

  brand: {
    color: '#193447',
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 1,
  },

  brandSubtitle: {
    color: '#8796A1',
    fontSize: 8,
    letterSpacing: 1,
    marginTop: 4,
  },

  eyebrow: {
    color: '#B08B4E',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1.6,
  },

  title: {
    color: '#193447',
    fontSize: 31,
    fontWeight: '900',
    lineHeight: 39,
    marginTop: 11,
  },

  description: {
    color: '#61727F',
    fontSize: 14,
    lineHeight: 23,
    marginTop: 10,
  },

  imageCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5EAEE',
    borderRadius: 17,
    padding: 12,
    marginTop: 23,
  },

  image: {
    width: '100%',
    height: 205,
  },

  imageCaptionBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
    marginTop: 10,
  },

  imageCaption: {
    color: '#8796A1',
    fontSize: 10,
  },

  articleCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5EAEE',
    borderRadius: 17,
    padding: 19,
    marginTop: 22,
  },

  articleHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },

  articleIcon: {
    width: 43,
    height: 43,
    backgroundColor: '#193D50',
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },

  articleTitle: {
    color: '#193447',
    fontSize: 17,
    fontWeight: '900',
  },

  articleSubtitle: {
    color: '#8796A1',
    fontSize: 10,
    marginTop: 3,
  },

  extract: {
    color: '#526572',
    fontSize: 14,
    lineHeight: 25,
    textAlign: 'justify',
  },

  contextCard: {
    backgroundColor: '#193D50',
    borderRadius: 17,
    padding: 18,
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 13,
  },

  contextTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },

  contextText: {
    color: '#D5E1E8',
    fontSize: 11,
    lineHeight: 19,
    marginTop: 6,
  },

  detailsCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5EAEE',
    borderRadius: 16,
    padding: 18,
    marginTop: 18,
  },

  detailsTitle: {
    color: '#193447',
    fontSize: 16,
    fontWeight: '900',
    marginBottom: 12,
  },

  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#EDF0F2',
  },

  detailLabel: {
    color: '#8796A1',
    fontSize: 12,
  },

  detailValue: {
    color: '#193447',
    fontSize: 12,
    fontWeight: 'bold',
    flexShrink: 1,
    textAlign: 'right',
  },

  button: {
    flexDirection: 'row',
    backgroundColor: '#193D50',
    padding: 17,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: 22,
  },

  backErrorButton: {
    backgroundColor: '#526978',
    marginTop: 12,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
  },

  footer: {
    color: '#71818D',
    fontSize: 9,
    textAlign: 'center',
    marginTop: 27,
    letterSpacing: 1,
  },

  source: {
    color: '#A0AAB1',
    fontSize: 9,
    textAlign: 'center',
    marginTop: 8,
  },
});
