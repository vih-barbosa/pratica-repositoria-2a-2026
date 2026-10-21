import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Pagina3() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >

    
        <Text style={styles.code1}>{'{ AI }'}</Text>
        <Text style={styles.code2}>01</Text>
        <Text style={styles.code3}>{'</>'}</Text>
        <Text style={styles.code4}>101</Text>

        <View style={styles.dot1} />
        <View style={styles.dot2} />
        <View style={styles.dot3} />

        
        <Text style={styles.smallTitle}>
          MEU SISTEMA
        </Text>

        <Text style={styles.title}>
          Perfil da IA
        </Text>

        <Text style={styles.subtitle}>
          Conheça as características e capacidades
          do seu assistente inteligente.
        </Text>

        <View style={styles.avatarContainer}>

          <View style={styles.avatarGlow} />

          <View style={styles.avatar}>
            <Text style={styles.avatarText}>🤖</Text>
          </View>

          <View style={styles.online}>
            <View style={styles.onlineDot} />

            <Text style={styles.onlineText}>
              Sistema online
            </Text>
          </View>

        </View>

  
        <View style={styles.profileCard}>

          <Text style={styles.cardTitle}>
            Assistente IA
          </Text>

          <Text style={styles.cardDescription}>
            Um sistema inteligente desenvolvido para
            processar informações, aprender padrões
            e auxiliar em diferentes tarefas.
          </Text>

          <View style={styles.infoLine}>

            <View style={styles.iconBox}>
              <Text style={styles.icon}>🧠</Text>
            </View>

            <View>
              <Text style={styles.label}>
                MODELO
              </Text>

              <Text style={styles.value}>
                Inteligência Artificial
              </Text>
            </View>

          </View>

        
          <View style={styles.infoLine}>

            <View style={styles.iconBox}>
              <Text style={styles.icon}>⚡</Text>
            </View>

            <View>
              <Text style={styles.label}>
                PROCESSAMENTO
              </Text>

              <Text style={styles.value}>
                Alta performance
              </Text>
            </View>

          </View>

       
          <View style={styles.infoLine}>

            <View style={styles.iconBox}>
              <Text style={styles.icon}>📚</Text>
            </View>

            <View>
              <Text style={styles.label}>
                APRENDIZADO
              </Text>

              <Text style={styles.value}>
                Machine Learning
              </Text>
            </View>

          </View>

     
          <View style={styles.infoLine}>

            <View style={styles.iconBox}>
              <Text style={styles.icon}>🌐</Text>
            </View>

            <View>
              <Text style={styles.label}>
                CONEXÃO
              </Text>

              <Text style={styles.value}>
                Rede neural
              </Text>
            </View>

          </View>

        </View>

        <View style={styles.capabilitiesCard}>

          <Text style={styles.capabilitiesTitle}>
            Capacidades
          </Text>

          <View style={styles.tagsRow}>

            <View style={styles.tag}>
              <Text style={styles.tagText}>
                💬 Conversação
              </Text>
            </View>

            <View style={styles.tag}>
              <Text style={styles.tagText}>
                💡 Criatividade
              </Text>
            </View>

            <View style={styles.tag}>
              <Text style={styles.tagText}>
                📊 Análise
              </Text>
            </View>

            <View style={styles.tag}>
              <Text style={styles.tagText}>
                💻 Código
              </Text>
            </View>

          </View>

        </View>

        <View style={styles.quoteCard}>

          <Text style={styles.quote}>
            “O futuro pertence àqueles que
            transformam ideias em possibilidades.”
          </Text>

          <View style={styles.line} />

          <Text style={styles.author}>
            — Inteligência Artificial
          </Text>

        </View>

   
        <Text style={styles.footer}>
          ✦ Sistema conectado ao futuro ✦
        </Text>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#030712',
  },

  content: {
    alignItems: 'center',
    paddingHorizontal: 22,
    paddingTop: 55,
    paddingBottom: 40,
  },


  code1: {
    position: 'absolute',
    top: 65,
    left: 20,
    color: '#00E5FF',
    opacity: 0.35,
    fontSize: 15,
    fontWeight: '900',
  },

  code2: {
    position: 'absolute',
    top: 155,
    right: 25,
    color: '#7C4DFF',
    opacity: 0.35,
    fontSize: 18,
    fontWeight: '900',
  },

  code3: {
    position: 'absolute',
    top: 390,
    left: 15,
    color: '#00E5FF',
    opacity: 0.3,
    fontSize: 20,
    fontWeight: '900',
  },

  code4: {
    position: 'absolute',
    bottom: 130,
    right: 25,
    color: '#7C4DFF',
    opacity: 0.3,
    fontSize: 16,
    fontWeight: '900',
  },

  dot1: {
    position: 'absolute',
    top: 125,
    right: 75,
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#00E5FF',

    shadowColor: '#00E5FF',
    shadowOpacity: 1,
    shadowRadius: 8,
  },

  dot2: {
    position: 'absolute',
    top: 330,
    right: 25,
    width: 6,
    height: 6,
    borderRadius: 5,
    backgroundColor: '#7C4DFF',

    shadowColor: '#7C4DFF',
    shadowOpacity: 1,
    shadowRadius: 10,
  },

  dot3: {
    position: 'absolute',
    bottom: 260,
    left: 35,
    width: 4,
    height: 4,
    borderRadius: 5,
    backgroundColor: '#00E5FF',
  },



  smallTitle: {
    color: '#00E5FF',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 4,
    marginBottom: 8,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 37,
    fontWeight: '900',
  },

  subtitle: {
    color: '#8EA6C8',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 21,
    marginTop: 12,
    maxWidth: 310,
  },



  avatarContainer: {
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 20,
    position: 'relative',
  },

  avatarGlow: {
    position: 'absolute',

    width: 145,
    height: 145,

    borderRadius: 75,

    backgroundColor: '#063B55',
    opacity: 0.5,
  },

  avatar: {
    width: 110,
    height: 110,

    borderRadius: 60,

    backgroundColor: '#071B32',

    borderWidth: 3,
    borderColor: '#00E5FF',

    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#00E5FF',
    shadowOpacity: 0.7,
    shadowRadius: 20,

    elevation: 12,
  },

  avatarText: {
    fontSize: 58,
  },

  online: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  onlineDot: {
    width: 8,
    height: 8,
    borderRadius: 5,

    backgroundColor: '#00FF9D',

    marginRight: 7,

    shadowColor: '#00FF9D',
    shadowOpacity: 0.9,
    shadowRadius: 7,
  },

  onlineText: {
    color: '#7899BB',
    fontSize: 12,
  },

  /* CARD PRINCIPAL */

  profileCard: {
    width: '100%',

    backgroundColor: '#08182D',

    borderRadius: 22,

    padding: 22,

    borderWidth: 1,
    borderColor: '#16456A',

    shadowColor: '#00E5FF',
    shadowOpacity: 0.08,
    shadowRadius: 15,
  },

  cardTitle: {
    color: '#00E5FF',
    fontSize: 23,
    fontWeight: '900',
    textAlign: 'center',
  },

  cardDescription: {
    color: '#8FA7C7',
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 20,
  },



  infoLine: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingVertical: 13,

    borderTopWidth: 1,
    borderTopColor: '#123452',
  },

  iconBox: {
    width: 45,
    height: 45,

    borderRadius: 13,

    backgroundColor: '#0A2545',

    borderWidth: 1,
    borderColor: '#175477',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 12,
  },

  icon: {
    fontSize: 23,
  },

  label: {
    color: '#6685A9',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1,
  },

  value: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 3,
  },


  capabilitiesCard: {
    width: '100%',

    backgroundColor: '#08182D',

    borderRadius: 20,

    padding: 20,

    marginTop: 18,

    borderWidth: 1,
    borderColor: '#16456A',
  },

  capabilitiesTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 14,
  },

  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 9,
  },

  tag: {
    backgroundColor: '#0B2544',

    borderWidth: 1,
    borderColor: '#1B5C7D',

    borderRadius: 20,

    paddingHorizontal: 12,
    paddingVertical: 8,
  },

  tagText: {
    color: '#8FDCEC',
    fontSize: 11,
    fontWeight: '700',
  },


  quoteCard: {
    width: '100%',

    backgroundColor: '#0A1D36',

    borderRadius: 20,

    padding: 22,

    marginTop: 18,

    alignItems: 'center',

    borderWidth: 1,
    borderColor: '#263F68',
  },

  quote: {
    color: '#FFFFFF',
    fontSize: 16,
    fontStyle: 'italic',
    lineHeight: 24,
    textAlign: 'center',
  },

  line: {
    width: 45,
    height: 2,

    backgroundColor: '#00E5FF',

    marginVertical: 12,
  },

  author: {
    color: '#718AAA',
    fontSize: 12,
  },


  footer: {
    color: '#5F789C',
    fontSize: 11,
    marginTop: 25,
  },

});
