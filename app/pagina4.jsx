
import {
  View, Text, StyleSheet, TextInput,
  ScrollView, Pressable
} from 'react-native';

import { useState } from 'react';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { theme } from './theme';

const sugestoes = [
  'Estados Unidos',
  'Brasil',
  'Japão',
  'França',
  'Egito Antigo',
  'Sistema Solar',
];

export default function Pagina4() {
  const [pesquisa, setPesquisa] = useState('');

  function pesquisar(termo = pesquisa) {
    if (!termo.trim()) return;

    router.push({
      pathname: '/pagina5',
      params: { pais: termo.trim() },
    });
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.topIcon}>
        <Ionicons name="search" size={28} color="#3366CC" />
      </View>

      <Text style={styles.eyebrow}>BIBLIOTECA DIGITAL</Text>

      <Text style={styles.title}>
        O que você deseja descobrir?
      </Text>

      <Text style={styles.subtitle}>
        Pesquise um país, uma personalidade,
        um acontecimento ou qualquer assunto.
      </Text>

      <View style={styles.searchBox}>
        <Ionicons
          name="search-outline"
          size={22}
          color="#72777D"
        />

        <TextInput
          style={styles.input}
          placeholder="Digite sua pesquisa..."
          placeholderTextColor="#92979C"
          value={pesquisa}
          onChangeText={setPesquisa}
          onSubmitEditing={() => pesquisar()}
          returnKeyType="search"
        />

        {!!pesquisa && (
          <Pressable onPress={() => setPesquisa('')}>
            <Ionicons
              name="close-circle"
              size={20}
              color="#72777D"
            />
          </Pressable>
        )}
      </View>

      <Pressable
        style={styles.button}
        onPress={() => pesquisar()}
      >
        <Text style={styles.buttonText}>Pesquisar na Wikipédia</Text>
        <Ionicons name="arrow-forward" size={19} color="#FFFFFF" />
      </Pressable>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          Pesquisas sugeridas
        </Text>
        <Ionicons name="sparkles-outline" size={19} color="#3366CC" />
      </View>

      <View style={styles.suggestions}>
        {sugestoes.map((item) => (
          <Pressable
            key={item}
            style={styles.suggestion}
            onPress={() => pesquisar(item)}
          >
            <Ionicons
              name="time-outline"
              size={17}
              color="#72777D"
            />

            <Text style={styles.suggestionText}>
              {item}
            </Text>

            <Ionicons
              name="arrow-up-outline"
              size={16}
              color="#3366CC"
            />
          </Pressable>
        ))}
      </View>

      <View style={styles.tip}>
        <Ionicons
          name="information-circle-outline"
          size={22}
          color="#3366CC"
        />

        <Text style={styles.tipText}>
          As informações serão carregadas diretamente
          da API da Wikipédia.
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
    paddingTop: 65,
    paddingBottom: 45,
  },

  topIcon: {
    width: 55,
    height: 55,
    backgroundColor: '#EEF3FC',
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 23,
  },

  eyebrow: {
    color: '#3366CC',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 2,
  },

  title: {
    color: '#202122',
    fontSize: 31,
    fontWeight: '900',
    lineHeight: 38,
    marginTop: 12,
  },

  subtitle: {
    color: '#54595D',
    fontSize: 14,
    lineHeight: 22,
    marginTop: 12,
    marginBottom: 26,
  },

  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#A2A9B1',
    borderRadius: 13,
    paddingHorizontal: 14,
    height: 57,
    gap: 10,
  },

  input: {
    flex: 1,
    fontSize: 14,
    color: '#202122',
  },

  button: {
    backgroundColor: '#3366CC',
    height: 53,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
    marginTop: 13,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 37,
    marginBottom: 14,
  },

  sectionTitle: {
    color: '#202122',
    fontSize: 18,
    fontWeight: '900',
  },

  suggestions: {
    borderWidth: 1,
    borderColor: '#EAECF0',
    borderRadius: 15,
    paddingHorizontal: 14,
  },

  suggestion: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EAECF0',
  },

  suggestionText: {
    flex: 1,
    color: '#202122',
    fontSize: 13,
  },

  tip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#F1F5FC',
    borderRadius: 14,
    padding: 16,
    marginTop: 25,
  },

  tipText: {
    flex: 1,
    color: '#54595D',
    fontSize: 11,
    lineHeight: 18,
  },
});
