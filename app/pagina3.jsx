
import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Linking,
} from 'react-native';

export default function Pagina3() {

  const abrirONU = () => {
    Linking.openURL(
      'https://pt.wikipedia.org/wiki/Organiza%C3%A7%C3%A3o_das_Na%C3%A7%C3%B5es_Unidas'
    );
  };

  return (
    <View style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >

        {/* FUNDO */}
        <Text style={styles.bg1}>🌐</Text>
        <Text style={styles.bg2}>WORLD</Text>
        <Text style={styles.bg3}>POLITICS</Text>
        <Text style={styles.bg4}>🌍</Text>
        <Text style={styles.bg5}>ONU</Text>

        {/* CABEÇALHO */}
        <View style={styles.header}>

          <Text style={styles.kicker}>
            🌐 RELAÇÕES INTERNACIONAIS
          </Text>

          <Text style={styles.title}>
            Meu Perfil
          </Text>

          <View style={styles.divider}>
            <View style={styles.line} />
            <Text style={styles.dividerIcon}>◆</Text>
            <View style={styles.line} />
          </View>

          <Text style={styles.subtitle}>
            Conheça os principais temas, organizações
            e acontecimentos que moldam a política
            e o cenário internacional.
          </Text>

        </View>

        {/* AVATAR */}
        <View style={styles.avatarContainer}>

          <View style={styles.avatar}>
            <Text style={styles.avatarIcon}>🌍</Text>
          </View>

          <Text style={styles.avatarTitle}>
            ANALISTA GLOBAL
          </Text>

          <Text style={styles.avatarSubtitle}>
            Explorador da geopolítica mundial
          </Text>

        </View>

        {/* PERFIL */}
        <View style={styles.profileCard}>

          <Text style={styles.cardKicker}>
            PERFIL INTERNACIONAL
          </Text>

          <Text style={styles.profileTitle}>
            Geopolítica Mundial
          </Text>

          <Text style={styles.description}>
            A geopolítica estuda as relações entre
            países, o poder internacional, os
            territórios e os interesses estratégicos
            que influenciam o mundo.
          </Text>

          <View style={styles.infoLine}>
            <Text style={styles.infoIcon}>🌎</Text>
            <View style={styles.infoContent}>
              <Text style={styles.label}>ÁREA DE ESTUDO</Text>
              <Text style={styles.value}>
                Política internacional
              </Text>
            </View>
          </View>

          <View style={styles.infoLine}>
            <Text style={styles.infoIcon}>🤝</Text>
            <View style={styles.infoContent}>
              <Text style={styles.label}>RELAÇÕES</Text>
              <Text style={styles.value}>
                Diplomacia entre países
              </Text>
            </View>
          </View>

          <View style={styles.infoLine}>
            <Text style={styles.infoIcon}>⚖️</Text>
            <View style={styles.infoContent}>
              <Text style={styles.label}>TEMA CENTRAL</Text>
              <Text style={styles.value}>
                Poder e equilíbrio mundial
              </Text>
            </View>
          </View>

          <View style={styles.infoLine}>
            <Text style={styles.infoIcon}>🕊️</Text>
            <View style={styles.infoContent}>
              <Text style={styles.label}>OBJETIVO</Text>
              <Text style={styles.value}>
                Compreender o cenário global
              </Text>
            </View>
          </View>

        </View>

        {/* INTERESSES */}
        <View style={styles.section}>

          <Text style={styles.sectionKicker}>
            CONHECIMENTO GLOBAL
          </Text>

          <Text style={styles.sectionTitle}>
            Áreas da Geopolítica
          </Text>

          <View style={styles.tags}>

            <View style={styles.tag}>
              <Text style={styles.tagText}>🌐 Globalização</Text>
            </View>

            <View style={styles.tag}>
              <Text style={styles.tagText}>⚔️ Conflitos</Text>
            </View>

            <View style={styles.tag}>
              <Text style={styles.tagText}>🤝 Diplomacia</Text>
            </View>

            <View style={styles.tag}>
              <Text style={styles.tagText}>💰 Economia</Text>
            </View>

            <View style={styles.tag}>
              <Text style={styles.tagText}>🗺️ Territórios</Text>
            </View>

            <View style={styles.tag}>
              <Text style={styles.tagText}>🏛️ Organizações</Text>
            </View>

          </View>
        </View>

        {/* ORGANIZAÇÃO DAS NAÇÕES UNIDAS */}
        <View style={styles.unCard}>

          <Text style={styles.unKicker}>
            ORGANIZAÇÃO INTERNACIONAL
          </Text>

          <Text style={styles.unTitle}>
            Organização das Nações Unidas
          </Text>

          <Text style={styles.unAbbreviation}>
            ONU • UNITED NATIONS
          </Text>

          {/* IMAGEM DA API */}
          <Image
            source={{
              uri: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_the_United_Nations.svg/langpt-330px-Flag_of_the_United_Nations.svg.png?utm_source=pt.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
            }}
            style={styles.unImage}
            resizeMode="contain"
          />

          <View style={styles.unBadge}>
            <Text style={styles.unBadgeText}>
              ORGANIZAÇÃO INTERGOVERNAMENTAL
            </Text>
          </View>

          <Text style={styles.unDescription}>
            A Organização das Nações Unidas (ONU)
            é uma organização internacional criada
            para promover a cooperação entre países,
            preservar a paz e a segurança mundial
            e defender os direitos humanos.
          </Text>

          {/* DADOS DA API */}
          <View style={styles.dataBox}>

            <View style={styles.dataItem}>
              <Text style={styles.dataLabel}>FUNDAÇÃO</Text>
              <Text style={styles.dataValue}>
                24 de outubro de 1945
              </Text>
            </View>

            <View style={styles.dataItem}>
              <Text style={styles.dataLabel}>ESTADOS-MEMBROS</Text>
              <Text style={styles.dataValue}>
                193 países
              </Text>
            </View>

            <View style={styles.dataItem}>
              <Text style={styles.dataLabel}>SEDE PRINCIPAL</Text>
              <Text style={styles.dataValue}>
                Nova Iorque, EUA
              </Text>
            </View>

            <View style={styles.dataItem}>
              <Text style={styles.dataLabel}>CRIAÇÃO</Text>
              <Text style={styles.dataValue}>
                Após a Segunda Guerra Mundial
              </Text>
            </View>

          </View>

          {/* OBJETIVOS */}
          <Text style={styles.objectivesTitle}>
            Principais objetivos
          </Text>

          <View style={styles.objective}>
            <Text style={styles.objectiveIcon}>🕊️</Text>
            <Text style={styles.objectiveText}>
              Manter a paz e a segurança internacional.
            </Text>
          </View>

          <View style={styles.objective}>
            <Text style={styles.objectiveIcon}>⚖️</Text>
            <Text style={styles.objectiveText}>
              Promover os direitos humanos.
            </Text>
          </View>

          <View style={styles.objective}>
            <Text style={styles.objectiveIcon}>🌱</Text>
            <Text style={styles.objectiveText}>
              Incentivar o desenvolvimento sustentável.
            </Text>
          </View>

          <View style={styles.objective}>
            <Text style={styles.objectiveIcon}>🤝</Text>
            <Text style={styles.objectiveText}>
              Fortalecer a cooperação internacional.
            </Text>
          </View>

          <View style={styles.objective}>
            <Text style={styles.objectiveIcon}>🚑</Text>
            <Text style={styles.objectiveText}>
              Oferecer ajuda humanitária em crises.
            </Text>
          </View>

          {/* LINK DA WIKIPÉDIA */}
          <Text
            style={styles.button}
            onPress={abrirONU}
          >
            CONSULTAR NA WIKIPÉDIA →
          </Text>

          <Text style={styles.source}>
            Fonte: Wikipédia • Organização das Nações Unidas
          </Text>

        </View>

        {/* FRASE FINAL */}
        <View style={styles.quoteCard}>

          <Text style={styles.quoteIcon}>🌐</Text>

          <Text style={styles.quoteTitle}>
            UM MUNDO CONECTADO
          </Text>

          <View style={styles.quoteLine} />

          <Text style={styles.quoteText}>
            "Compreender o mundo é compreender
            as relações entre os povos,
            as nações e suas histórias."
          </Text>

          <Text style={styles.quoteAuthor}>
            — Reflexão geopolítica
          </Text>

        </View>

        {/* RODAPÉ */}
        <View style={styles.footer}>

          <Text style={styles.footerIcon}>
            🌍
          </Text>

          <Text style={styles.footerTitle}>
            GEOPOLÍTICA MUNDIAL
          </Text>

          <Text style={styles.footerSubtitle}>
            Conhecimento • Política • Relações Internacionais
          </Text>

          <View style={styles.footerLine} />

          <Text style={styles.footerSmall}>
            UM OLHAR SOBRE O MUNDO
          </Text>

        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#091522',
  },

  content: {
    alignItems: 'center',
    paddingHorizontal: 22,
    paddingTop: 65,
    paddingBottom: 40,
    overflow: 'hidden',
  },

  // FUNDO
  bg1: {
    position: 'absolute',
    top: 120,
    left: 8,
    fontSize: 48,
    opacity: 0.12,
  },

  bg2: {
    position: 'absolute',
    top: 350,
    right: 10,
    color: '#48A9C5',
    fontSize: 24,
    opacity: 0.12,
    fontWeight: '900',
  },

  bg3: {
    position: 'absolute',
    top: 700,
    left: 12,
    color: '#48A9C5',
    fontSize: 25,
    opacity: 0.12,
  },

  bg4: {
    position: 'absolute',
    top: 950,
    right: 15,
    fontSize: 38,
    opacity: 0.12,
  },

  bg5: {
    position: 'absolute',
    top: 550,
    right: 12,
    color: '#D4B46A',
    fontSize: 35,
    opacity: 0.12,
  },

  // CABEÇALHO
  header: {
    width: '100%',
    alignItems: 'center',
  },

  kicker: {
    color: '#D4B46A',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 12,
  },

  title: {
    color: '#F2F6FA',
    fontSize: 35,
    fontWeight: '900',
  },

  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 15,
  },

  line: {
    width: 45,
    height: 1,
    backgroundColor: '#398BA8',
  },

  dividerIcon: {
    color: '#D4B46A',
    fontSize: 16,
  },

  subtitle: {
    color: '#AABAC9',
    fontSize: 13,
    lineHeight: 22,
    textAlign: 'center',
    marginTop: 16,
    maxWidth: 310,
  },

  // AVATAR
  avatarContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 28,
  },

  avatar: {
    width: 115,
    height: 115,
    borderRadius: 60,
    backgroundColor: '#142C42',
    borderWidth: 2,
    borderColor: '#398BA8',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },

  avatarIcon: {
    fontSize: 58,
  },

  avatarTitle: {
    color: '#D4B46A',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 2,
    marginTop: 15,
  },

  avatarSubtitle: {
    color: '#AABAC9',
    fontSize: 11,
    marginTop: 6,
  },

  // CARTÃO DO PERFIL
  profileCard: {
    width: '100%',
    backgroundColor: '#122437',
    borderRadius: 18,
    padding: 19,
    borderWidth: 1,
    borderColor: '#294B64',
  },

  cardKicker: {
    color: '#D4B46A',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 2,
  },

  profileTitle: {
    color: '#F2F6FA',
    fontSize: 22,
    fontWeight: '900',
    marginTop: 8,
  },

  description: {
    color: '#AABAC9',
    fontSize: 12,
    lineHeight: 20,
    marginTop: 13,
    marginBottom: 15,
  },

  infoLine: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
    borderTopWidth: 1,
    borderTopColor: '#294357',
  },

  infoIcon: {
    fontSize: 25,
    marginRight: 13,
  },

  infoContent: {
    flex: 1,
  },

  label: {
    color: '#D4B46A',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1,
  },

  value: {
    color: '#F2F6FA',
    fontSize: 13,
    marginTop: 4,
  },

  // INTERESSES
  section: {
    width: '100%',
    backgroundColor: '#122437',
    padding: 19,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#294B64',
    marginTop: 18,
  },

  sectionKicker: {
    color: '#D4B46A',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 2,
  },

  sectionTitle: {
    color: '#F2F6FA',
    fontSize: 19,
    fontWeight: '900',
    marginTop: 8,
    marginBottom: 15,
  },

  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 9,
  },

  tag: {
    backgroundColor: '#1B3A52',
    borderWidth: 1,
    borderColor: '#39718D',
    paddingHorizontal: 11,
    paddingVertical: 9,
    borderRadius: 20,
  },

  tagText: {
    color: '#DCEAF3',
    fontSize: 11,
    fontWeight: '700',
  },

  // ONU
  unCard: {
    width: '100%',
    backgroundColor: '#122437',
    borderRadius: 20,
    padding: 18,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#39718D',
  },

  unKicker: {
    color: '#D4B46A',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1.5,
  },

  unTitle: {
    color: '#F2F6FA',
    fontSize: 21,
    fontWeight: '900',
    marginTop: 10,
  },

  unAbbreviation: {
    color: '#65B7D0',
    fontSize: 10,
    fontWeight: '800',
    marginTop: 7,
    letterSpacing: 1,
  },

  unImage: {
    width: '100%',
    height: 155,
    backgroundColor: '#EAF1F5',
    borderRadius: 12,
    marginTop: 17,
  },

  unBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#1B3A52',
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 6,
    marginTop: 14,
  },

  unBadgeText: {
    color: '#65B7D0',
    fontSize: 8,
    fontWeight: '900',
  },

  unDescription: {
    color: '#C0CDD7',
    fontSize: 12,
    lineHeight: 21,
    marginTop: 15,
  },

  dataBox: {
    backgroundColor: '#0D1D2C',
    borderRadius: 12,
    padding: 13,
    marginTop: 17,
  },

  dataItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#263C4D',
  },

  dataLabel: {
    color: '#D4B46A',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1,
  },

  dataValue: {
    color: '#F2F6FA',
    fontSize: 13,
    fontWeight: '700',
    marginTop: 5,
  },

  objectivesTitle: {
    color: '#F2F6FA',
    fontSize: 16,
    fontWeight: '900',
    marginTop: 20,
    marginBottom: 10,
  },

  objective: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 9,
  },

  objectiveIcon: {
    fontSize: 20,
    marginRight: 11,
  },

  objectiveText: {
    color: '#C0CDD7',
    fontSize: 12,
    flex: 1,
    lineHeight: 18,
  },

  button: {
    backgroundColor: '#245C78',
    color: '#FFFFFF',
    textAlign: 'center',
    padding: 14,
    borderRadius: 9,
    overflow: 'hidden',
    fontWeight: '900',
    fontSize: 11,
    marginTop: 20,
    letterSpacing: 1,
  },

  source: {
    color: '#8195A6',
    fontSize: 9,
    marginTop: 12,
    textAlign: 'center',
  },

  // FRASE FINAL
  quoteCard: {
    width: '100%',
    backgroundColor: '#122437',
    borderRadius: 18,
    padding: 22,
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#294B64',
  },

  quoteIcon: {
    fontSize: 35,
  },

  quoteTitle: {
    color: '#D4B46A',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 2,
    marginTop: 10,
  },

  quoteLine: {
    width: 45,
    height: 2,
    backgroundColor: '#398BA8',
    marginVertical: 17,
  },

  quoteText: {
    color: '#F2F6FA',
    fontSize: 14,
    lineHeight: 24,
    textAlign: 'center',
    fontStyle: 'italic',
  },

  quoteAuthor: {
    color: '#8FA9BA',
    fontSize: 10,
    marginTop: 15,
  },

  // RODAPÉ
  footer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 32,
    paddingTop: 23,
    borderTopWidth: 1,
    borderTopColor: '#294357',
  },

  footerIcon: {
    fontSize: 30,
  },

  footerTitle: {
    color: '#F2F6FA',
    fontSize: 15,
    fontWeight: '900',
    letterSpacing: 2,
    marginTop: 10,
  },

  footerSubtitle: {
    color: '#8FA9BA',
    fontSize: 9,
    textAlign: 'center',
    marginTop: 8,
  },

  footerLine: {
    width: 35,
    height: 2,
    backgroundColor: '#D4B46A',
    marginVertical: 17,
  },

  footerSmall: {
    color: '#71899B',
    fontSize: 9,
    letterSpacing: 2,
  },

});
