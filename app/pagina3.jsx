
import {
  View, Text, StyleSheet, ScrollView,
  Image
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { theme } from './theme';

const valores = [
  {
    icon: 'people-outline',
    titulo: 'Colaboração',
    descricao: 'Pessoas de diferentes lugares contribuem para construir conhecimento.',
  },
  {
    icon: 'book-outline',
    titulo: 'Conhecimento livre',
    descricao: 'Informações organizadas para consulta e aprendizado.',
  },
  {
    icon: 'globe-outline',
    titulo: 'Alcance mundial',
    descricao: 'Uma enciclopédia disponível em diversos idiomas.',
  },
  {
    icon: 'create-outline',
    titulo: 'Participação',
    descricao: 'Os artigos podem ser editados e aprimorados pela comunidade.',
  },
];

export default function Pagina3() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.eyebrow}>SOBRE O PROJETO</Text>

      <Text style={styles.title}>
        O conhecimento pertence a todos.
      </Text>

      <Text style={styles.subtitle}>
        Uma enciclopédia colaborativa que conecta
        pessoas à informação.
      </Text>

      <View style={styles.logoCard}>
        <Image
          source={{
           uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/240px-Wikipedia-logo-v2.svg.png',
          }}
          style={styles.logoImage}
        />

        <Text style={styles.logoTitle}>Wikipédia</Text>

        <Text style={styles.logoDescription}>
          A enciclopédia livre.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>
        O que é a Wikipédia?
      </Text>

      <Text style={styles.paragraph}>
        A Wikipédia é uma enciclopédia online, gratuita
        e colaborativa. Seu conteúdo é produzido e
        atualizado por voluntários de diferentes partes
        do mundo.
      </Text>

      <Text style={styles.paragraph}>
        Seu objetivo é disponibilizar conhecimento
        de forma acessível, reunindo artigos sobre
        história, ciência, geografia, cultura e muitos
        outros assuntos.
      </Text>

      <Text style={styles.sectionTitle}>
        Seus principais princípios
      </Text>

      {valores.map((item) => (
        <View style={styles.valueCard} key={item.titulo}>
          <View style={styles.valueIcon}>
            <Ionicons
              name={item.icon}
              size={23}
              color="#3366CC"
            />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.valueTitle}>
              {item.titulo}
            </Text>

            <Text style={styles.valueDescription}>
              {item.descricao}
            </Text>
          </View>
        </View>
      ))}

      <View style={styles.quoteCard}>
        <Ionicons name="book-outline" size={30} color="#3366CC" />

        <Text style={styles.quote}>
          Conhecimento compartilhado é conhecimento
          que pode alcançar o mundo inteiro.
        </Text>
      </View>

      <Text style={styles.footer}>
        Fonte: Wikipédia e Wikimedia Foundation.
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
    paddingTop: 62,
    paddingBottom: 45,
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
    marginTop: 12,
  },

  subtitle: {
    color: '#54595D',
    fontSize: 14,
    lineHeight: 22,
    marginTop: 12,
  },

  logoCard: {
    backgroundColor: '#F8F9FA',
    borderWidth: 1,
    borderColor: '#EAECF0',
    borderRadius: 21,
    padding: 25,
    alignItems: 'center',
    marginVertical: 28,
  },

  logoImage: {
    width: 105,
    height: 105,
  },

  logoTitle: {
    color: '#202122',
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 10,
  },

  logoDescription: {
    color: '#72777D',
    fontSize: 13,
    marginTop: 4,
  },

  sectionTitle: {
    color: '#202122',
    fontSize: 21,
    fontWeight: '900',
    marginBottom: 12,
    marginTop: 9,
  },

  paragraph: {
    color: '#54595D',
    fontSize: 14,
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 13,
  },

  valueCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
    padding: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#EAECF0',
    marginBottom: 11,
  },

  valueIcon: {
    width: 45,
    height: 45,
    backgroundColor: '#EEF3FC',
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },

  valueTitle: {
    color: '#202122',
    fontSize: 14,
    fontWeight: 'bold',
  },

  valueDescription: {
    color: '#72777D',
    fontSize: 11,
    lineHeight: 17,
    marginTop: 5,
  },

  quoteCard: {
    backgroundColor: '#F1F5FC',
    padding: 22,
    borderRadius: 18,
    marginTop: 19,
    alignItems: 'center',
  },

  quote: {
    color: '#202122',
    fontSize: 16,
    lineHeight: 24,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 13,
  },

  footer: {
    color: '#72777D',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 27,
  },
});
