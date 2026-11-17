
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Pressable,
} from 'react-native';

import { useState } from 'react';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const sugestoes = [
  {
    nome: 'Estados Unidos',
    icon: 'flag-outline',
  },
  {
    nome: 'China',
    icon: 'globe-outline',
  },
  {
    nome: 'Rússia e Ucrânia',
    icon: 'shield-outline',
  },
  {
    nome: 'BRICS',
    icon: 'people-outline',
  },
  {
    nome: 'Oriente Médio',
    icon: 'location-outline',
  },
  {
    nome: 'ONU',
    icon: 'business-outline',
  },
  {
    nome: 'Economia Mundial',
    icon: 'trending-up-outline',
  },
  {
    nome: 'Geopolítica do Brasil',
    icon: 'earth-outline',
  },
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
      {/* ÍCONE */}

      <View style={styles.topIcon}>
        <Ionicons
          name="earth-outline"
          size={29}
          color="#D1AD69"
        />
      </View>

      {/* APRESENTAÇÃO */}

      <Text style={styles.eyebrow}>
        CENTRAL DE PESQUISA
      </Text>

      <Text style={styles.title}>
        Explore o cenário mundial.
      </Text>

      <Text style={styles.subtitle}>
        Descubra países, relações internacionais,
        conflitos, organizações e acontecimentos
        que influenciam a política global.
      </Text>

      {/* PESQUISA */}

      <View style={styles.searchBox}>
        <Ionicons
          name="search-outline"
          size={22}
          color="#718492"
        />

        <TextInput
          style={styles.input}
          placeholder="Pesquise um país ou assunto..."
          placeholderTextColor="#929FA8"
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
              color="#718492"
            />
          </Pressable>
        )}
      </View>

      <Pressable
        style={styles.button}
        onPress={() => pesquisar()}
      >
        <Text style={styles.buttonText}>
          Pesquisar assunto
        </Text>

        <Ionicons
          name="arrow-forward"
          size={19}
          color="#FFFFFF"
        />
      </Pressable>

      {/* SUGESTÕES */}

      <View style={styles.sectionHeader}>
        <View>
          <Text style={styles.sectionTitle}>
            Assuntos em destaque
          </Text>

          <Text style={styles.sectionDescription}>
            Explore temas importantes da geopolítica.
          </Text>
        </View>

        <Ionicons
          name="globe-outline"
          size={22}
          color="#B08B4E"
        />
      </View>

      <View style={styles.suggestions}>
        {sugestoes.map((item, index) => (
          <Pressable
            key={item.nome}
            style={[
              styles.suggestion,
              index === sugestoes.length - 1 &&
                styles.lastSuggestion,
            ]}
            onPress={() => pesquisar(item.nome)}
          >
            <View style={styles.suggestionIcon}>
              <Ionicons
                name={item.icon}
                size={19}
                color="#315F78"
              />
            </View>

            <Text style={styles.suggestionText}>
              {item.nome}
            </Text>

            <Ionicons
              name="arrow-forward"
              size={17}
              color="#B08B4E"
            />
          </Pressable>
        ))}
      </View>

      {/* INFORMAÇÃO */}

      <View style={styles.tip}>
        <Ionicons
          name="information-circle-outline"
          size={23}
          color="#D1AD69"
        />

        <Text style={styles.tipText}>
          Pesquise para conhecer a história, os interesses
          políticos e as relações entre os países.
          Para acontecimentos recentes, consulte também
          fontes jornalísticas atualizadas.
        </Text>
      </View>

      {/* FRASE FINAL */}

      <View style={styles.footerCard}>
        <Ionicons
          name="earth"
          size={25}
          color="#D1AD69"
        />

        <Text style={styles.footerText}>
          Conhecimento é a chave para compreender
          as transformações do mundo.
        </Text>
      </View>

      <Text style={styles.footer}>
        GEOPOLÍTICA MUNDIAL • PESQUISA E CONHECIMENTO
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
    paddingTop: 65,
    paddingBottom: 45,
  },

  topIcon: {
    width: 57,
    height: 57,
    backgroundColor: '#193D50',
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 23,
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
    marginBottom: 27,
  },

  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D9E1E7',
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 58,
    gap: 10,
  },

  input: {
    flex: 1,
    fontSize: 13,
    color: '#193447',
  },

  button: {
    backgroundColor: '#193D50',
    height: 54,
    borderRadius: 13,
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
    marginBottom: 16,
  },

  sectionTitle: {
    color: '#193447',
    fontSize: 19,
    fontWeight: '900',
  },

  sectionDescription: {
    color: '#8796A1',
    fontSize: 11,
    marginTop: 5,
  },

  suggestions: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5EAEE',
    borderRadius: 16,
    paddingHorizontal: 14,
  },

  suggestion: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EDF0F2',
  },

  lastSuggestion: {
    borderBottomWidth: 0,
  },

  suggestionIcon: {
    width: 37,
    height: 37,
    borderRadius: 11,
    backgroundColor: '#E8EFF4',
    alignItems: 'center',
    justifyContent: 'center',
  },

  suggestionText: {
    flex: 1,
    color: '#193447',
    fontSize: 13,
    fontWeight: '600',
  },

  tip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
    backgroundColor: '#E8EFF4',
    borderRadius: 14,
    padding: 16,
    marginTop: 25,
  },

  tipText: {
    flex: 1,
    color: '#526978',
    fontSize: 11,
    lineHeight: 18,
  },

  footerCard: {
    backgroundColor: '#193D50',
    borderRadius: 17,
    padding: 20,
    alignItems: 'center',
    marginTop: 20,
    gap: 11,
  },

  footerText: {
    color: '#FFFFFF',
    fontSize: 13,
    lineHeight: 21,
    fontWeight: '600',
    textAlign: 'center',
  },

  footer: {
    color: '#8796A1',
    fontSize: 9,
    textAlign: 'center',
    marginTop: 28,
    letterSpacing: 1,
  },
});
