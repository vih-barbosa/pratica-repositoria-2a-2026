import { StyleSheet, View, Text, Pressable } from 'react-native';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import { useRouter } from 'expo-router';

export default function App() {
  const router = useRouter();

  return (
    <GluestackUIProvider mode="dark">
      <View style={styles.container}>

        {/* DECORAÇÕES */}

        <Text style={styles.decor1}>✦</Text>
        <Text style={styles.decor2}>🔴</Text>
        <Text style={styles.decor3}>👁️</Text>

        {/* TÍTULO */}

        <Text style={styles.smallTitle}>
          HAWKINS
        </Text>

        <Text style={styles.title}>
          Stranger
        </Text>

        <Text style={styles.titleRed}>
          Things
        </Text>

        <View style={styles.line} />

        <Text style={styles.subtitle}>
          Bem-vindo ao outro lado.
        </Text>

        <Text style={styles.description}>
          Explore Hawkins, conheça os personagens
          e descubra os mistérios do Mundo Invertido.
        </Text>

        {/* BOTÕES */}

        <View style={styles.buttons}>

          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
            onPress={() => router.push('/pagina1')}
          >
            <Text style={styles.buttonIcon}>
              🏠
            </Text>

            <Text style={styles.buttonText}>
              Explorar Hawkins
            </Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
            onPress={() => router.push('/pagina2')}
          >
            <Text style={styles.buttonIcon}>
              👁️
            </Text>

            <Text style={styles.buttonText}>
              Conhecer o Universo
            </Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
            onPress={() => router.push('/pagina3')}
          >
            <Text style={styles.buttonIcon}>
              🧇
            </Text>

            <Text style={styles.buttonText}>
              Ver Perfil da Eleven
            </Text>
          </Pressable>

        </View>

        {/* STATUS */}

        <View style={styles.status}>

          <View style={styles.statusDot} />

          <Text style={styles.statusText}>
            CONEXÃO COM HAWKINS ESTABELECIDA
          </Text>

        </View>

        {/* RODAPÉ */}

        <Text style={styles.footer}>
          🔴 THE UPSIDE DOWN 🔴
        </Text>

      </View>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({

  /* FUNDO */

  container: {
    flex: 1,

    backgroundColor: '#050307',

    alignItems: 'center',

    justifyContent: 'center',

    paddingHorizontal: 28,

    position: 'relative',
  },

  /* DECORAÇÕES */

  decor1: {
    position: 'absolute',

    top: 80,

    left: 28,

    color: '#E50914',

    fontSize: 28,

    textShadowColor: '#FF1725',

    textShadowRadius: 12,
  },

  decor2: {
    position: 'absolute',

    top: 65,

    right: 28,

    fontSize: 30,

    textShadowColor: '#FF1725',

    textShadowRadius: 15,
  },

  decor3: {
    position: 'absolute',

    bottom: 130,

    right: 30,

    fontSize: 28,

    opacity: 0.35,
  },

  /* TÍTULO */

  smallTitle: {
    color: '#E50914',

    fontSize: 11,

    fontWeight: '900',

    letterSpacing: 5,

    marginBottom: 8,

    textShadowColor: '#7A0010',

    textShadowRadius: 8,
  },

  title: {
    color: '#FFFFFF',

    fontSize: 46,

    fontWeight: '900',

    lineHeight: 49,

    textAlign: 'center',

    textShadowColor: '#7A0010',

    textShadowOffset: {
      width: 2,
      height: 2,
    },

    textShadowRadius: 10,
  },

  titleRed: {
    color: '#E50914',

    fontSize: 50,

    fontWeight: '900',

    lineHeight: 54,

    textAlign: 'center',

    textShadowColor: '#FF1725',

    textShadowOffset: {
      width: 0,
      height: 0,
    },

    textShadowRadius: 18,
  },

  /* LINHA */

  line: {
    width: 55,

    height: 2,

    backgroundColor: '#E50914',

    marginVertical: 17,

    shadowColor: '#FF1725',

    shadowOpacity: 0.8,

    shadowRadius: 10,
  },

  /* TEXTOS */

  subtitle: {
    color: '#FFFFFF',

    fontSize: 19,

    fontWeight: '700',

    textAlign: 'center',

    marginBottom: 8,
  },

  description: {
    color: '#A9979C',

    fontSize: 14,

    lineHeight: 21,

    textAlign: 'center',

    maxWidth: 310,

    marginBottom: 22,
  },

  /* BOTÕES */

  buttons: {
    width: '100%',

    gap: 11,
  },

  button: {
    width: '100%',

    minHeight: 55,

    backgroundColor: '#12070A',

    borderRadius: 15,

    borderWidth: 1,

    borderColor: '#4B1720',

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',

    shadowColor: '#E50914',

    shadowOpacity: 0.12,

    shadowRadius: 10,

    elevation: 4,
  },

  buttonPressed: {
    backgroundColor: '#300A10',

    borderColor: '#E50914',

    transform: [
      {
        scale: 0.97,
      },
    ],

    shadowColor: '#FF1725',

    shadowOpacity: 0.45,

    shadowRadius: 15,

    elevation: 8,
  },

  buttonIcon: {
    fontSize: 20,

    marginRight: 10,
  },

  buttonText: {
    color: '#FFFFFF',

    fontSize: 14,

    fontWeight: '800',

    letterSpacing: 0.3,
  },

  /* STATUS */

  status: {
    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 20,

    paddingHorizontal: 14,

    paddingVertical: 9,

    borderRadius: 20,

    backgroundColor: '#10070A',

    borderWidth: 1,

    borderColor: '#35151B',
  },

  statusDot: {
    width: 7,

    height: 7,

    borderRadius: 4,

    backgroundColor: '#E50914',

    marginRight: 7,

    shadowColor: '#FF1725',

    shadowOpacity: 1,

    shadowRadius: 7,
  },

  statusText: {
    color: '#806D72',

    fontSize: 8,

    fontWeight: '900',

    letterSpacing: 0.8,
  },

  /* RODAPÉ */

  footer: {
    position: 'absolute',

    bottom: 35,

    color: '#5E4A4F',

    fontSize: 10,

    fontWeight: '900',

    letterSpacing: 2,
  },

});

